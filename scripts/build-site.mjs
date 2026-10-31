#!/usr/bin/env node
/**
 * Awesome AI 站点构建脚本（零依赖，Node.js >= 18）
 *
 * 数据源为 README.md 与 docs/*.md：README 包含项目介绍、学习路线与总目录，docs/ 下每个文件对应一个板块。
 * 脚本解析其中的板块（<!-- part: -->）、分类（##）、子类（###）与资源表格（最后一列为「链接」），
 * 合并生成单页的 GitHub Pages 静态站点，并提供格式校验与目录生成。
 *
 *   node scripts/build-site.mjs           构建站点到 _site/
 *   node scripts/build-site.mjs --check   校验所有清单文件的格式（CI 使用，有错误时退出码为 1）
 *   node scripts/build-site.mjs --toc     重新生成 README 总目录、各板块文件目录与统计数据
 *
 * 设置 GITHUB_TOKEN 环境变量后，会通过 GraphQL 批量获取 GitHub 项目的 Star 数与头像。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const README_PATH = path.resolve(ROOT, process.env.README_PATH || 'README.md');
// 清单文件的根目录（README 所在目录），docs/ 中的板块文件相对于它定位
const LIST_DIR = path.dirname(README_PATH);
const DOCS_DIR = path.join(LIST_DIR, 'docs');
const SITE_DIR = path.join(ROOT, 'site');
const OUT_DIR = path.resolve(ROOT, process.env.SITE_OUT || '_site');
const REPO = process.env.GITHUB_REPOSITORY || 'YSGStudyHards/Awesome-AI';
const [REPO_OWNER, REPO_NAME] = REPO.split('/');
const SITE_URL = process.env.SITE_URL || `https://${REPO_OWNER.toLowerCase()}.github.io/${REPO_NAME}/`;
const REPO_URL = `https://github.com/${REPO}`;

const LINK_HEADER = '链接';
const DESC_HEADER_RE = /描述|简介|说明|特点|贡献|亮点|介绍|用途/;
const URL_CELL_RE = /^https?:\/\/[A-Za-z0-9.-]+(?::\d+)?(?:[/?#][^\s<>|]*)?$/;
const ANY_URL_RE = /https?:\/\/[^\s<>|)\]，。；：、！？（）「」『』《》]+/g;
const GH_RESERVED = new Set(['orgs', 'topics', 'collections', 'features', 'marketplace', 'sponsors', 'settings', 'apps', 'about', 'pricing', 'enterprise', 'login', 'join', 'explore', 'trending', 'search', 'site', 'security', 'customer-stories', 'readme', 'events', 'resources', 'solutions', 'team', 'mobile', 'copilot', 'education', 'premium-support']);

// ---------------------------------------------------------------------------
// GitHub 兼容的锚点生成（与 github-slugger 算法一致）
// ---------------------------------------------------------------------------
const SLUG_STRIP_RE = /[\p{No}\p{Pd}\p{Ps}\p{Pe}\p{Pi}\p{Pf}\p{Po}\p{S}\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Z}]/gu;
function githubSlug(text) {
  return text
    .toLowerCase()
    .replace(SLUG_STRIP_RE, (ch) => (ch === ' ' || ch === '-' || /\p{Alphabetic}/u.test(ch) ? ch : ''))
    .replace(/ /g, '-');
}
class Slugger {
  constructor() { this.seen = Object.create(null); }
  slug(text) {
    const base = githubSlug(text);
    let result = base;
    while (result in this.seen) {
      this.seen[base] += 1;
      result = `${base}-${this.seen[base]}`;
    }
    this.seen[result] = 0;
    return result;
  }
}

// ---------------------------------------------------------------------------
// Markdown 解析
// ---------------------------------------------------------------------------
const stripInline = (s) => s
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  .replace(/\*\*([^*]+)\*\*/g, '$1')
  .replace(/`([^`]+)`/g, '$1')
  .replace(/<[^>]+>/g, '')
  .trim();

function splitRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|') && !s.endsWith('\\|')) s = s.slice(0, -1);
  const cells = [];
  let cur = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && s[i + 1] === '|') { cur += '|'; i++; continue; }
    if (s[i] === '|') { cells.push(cur.trim()); cur = ''; continue; }
    cur += s[i];
  }
  cells.push(cur.trim());
  return cells;
}
const isSepRow = (line) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line || '');
const EMOJI_HEAD_RE = /^((?:\p{Extended_Pictographic}|\p{Regional_Indicator})(?:[\u{FE0F}\u{200D}\u{20E3}\p{Emoji_Modifier}]|\p{Extended_Pictographic})*)\s*(.*)$/u;

function parseFile(md, file) {
  const lines = md.split(/\r?\n/);
  const slugger = new Slugger();
  const doc = { file, md, parts: [], lines, ids: new Set() };
  let part = null;
  let sec = null;
  let sub = null;
  let fence = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const ln = i + 1;
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; continue; }
    if (fence) continue;
    let m = line.match(/^<!--\s*part:\s*(.+?)\s*-->\s*$/);
    if (m) {
      const pm = m[1].match(EMOJI_HEAD_RE);
      part = { label: m[1], emoji: pm ? pm[1] : '', title: pm ? pm[2] : m[1], sections: [], line: ln, file };
      doc.parts.push(part);
      sec = sub = null;
      continue;
    }
    if (/^<!--\s*parts?:end\s*-->\s*$/.test(line)) { part = sec = sub = null; continue; }
    m = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (m) {
      const level = m[1].length;
      const text = stripInline(m[2]);
      // id 为 GitHub 在该文件中生成的锚点；合并为单页站点后会被替换为全站唯一的 id（localId 保留原值）
      const id = slugger.slug(text);
      doc.ids.add(id);
      if (level <= 2) sec = sub = null;
      if (level === 2 && part) {
        const hm = text.match(EMOJI_HEAD_RE);
        sec = { id, localId: id, heading: text, emoji: hm ? hm[1] : '', title: hm ? hm[2] : text, intro: [], notes: [], subs: [], line: ln, file };
        part.sections.push(sec);
      } else if (level === 3 && sec) {
        sub = { id, localId: id, title: text, notes: [], tables: [], line: ln };
        sec.subs.push(sub);
      }
      continue;
    }
    if (!sec) continue;
    if (/^\s*>/.test(line)) {
      (sub ? sub.notes : sec.intro).push(line.replace(/^\s*>\s?/, ''));
      continue;
    }
    if (/^\s*\|/.test(line) && isSepRow(lines[i + 1])) {
      const table = { header: splitRow(line), rows: [], line: ln };
      let j = i + 2;
      for (; j < lines.length && /^\s*\|/.test(lines[j]); j++) table.rows.push({ cells: splitRow(lines[j]), line: j + 1 });
      if (!sub) {
        sub = { id: null, localId: null, title: '', notes: [], tables: [], line: ln };
        sec.subs.push(sub);
      }
      sub.tables.push(table);
      i = j - 1;
      continue;
    }
    const t = line.trim();
    if (t && !/^(-{3,}|\*{3,}|_{3,})$/.test(t) && !/^<!--.*-->$/.test(t)) (sub ? sub.notes : sec.notes).push(t);
  }
  for (const p of doc.parts) for (const s of p.sections) for (const sb of s.subs) sb.tables = sb.tables.map((t) => classifyTable(t, file));
  return doc;
}

function classifyTable(table, file) {
  const header = table.header.map(stripInline);
  const linkIdx = header.length - 1;
  if (header[linkIdx] !== LINK_HEADER) return { kind: 'plain', header, rows: table.rows, line: table.line, file };
  let descIdx = header.findIndex((h, k) => k > 0 && k < linkIdx && DESC_HEADER_RE.test(h));
  if (descIdx < 0 && linkIdx >= 2) descIdx = linkIdx - 1;
  const items = table.rows.map((r) => {
    const c = r.cells;
    const tags = [];
    header.forEach((h, k) => {
      if (k === 0 || k === linkIdx || k === descIdx) return;
      const v = (c[k] || '').trim();
      if (v && v !== '-' && v !== '—') tags.push({ k: h, v });
    });
    return { name: (c[0] || '').trim(), desc: descIdx >= 0 ? (c[descIdx] || '').trim() : '', url: (c[linkIdx] || '').trim(), tags, line: r.line, cells: c, file };
  });
  return { kind: 'resources', header, linkIdx, descIdx, items, rows: table.rows, line: table.line, file };
}

/** 读取 README.md 与 docs/*.md（按文件名排序） */
function loadSources() {
  const rels = [path.basename(README_PATH)];
  if (fs.existsSync(DOCS_DIR)) {
    rels.push(...fs.readdirSync(DOCS_DIR).filter((f) => f.endsWith('.md')).sort().map((f) => `docs/${f}`));
  }
  return rels.map((rel) => parseFile(fs.readFileSync(path.join(LIST_DIR, rel), 'utf8'), rel));
}

/** 合并各文件的板块（相邻同名板块合并），并为单页站点分配全站唯一的锚点 */
function mergeDocs(files) {
  const parts = [];
  for (const f of files) {
    for (const p of f.parts) {
      const last = parts[parts.length - 1];
      if (last && last.label === p.label) last.sections.push(...p.sections);
      else parts.push({ label: p.label, emoji: p.emoji, title: p.title, line: p.line, file: p.file, sections: [...p.sections] });
    }
  }
  const slugger = new Slugger();
  const idMap = new Map();
  const fileAnchor = new Map([[files[0].file, 'top']]);
  parts.forEach((p, pi) => {
    for (const s of p.sections) {
      if (!fileAnchor.has(s.file)) fileAnchor.set(s.file, `part-${pi + 1}`);
      s.id = slugger.slug(s.heading);
      idMap.set(`${s.file}#${s.localId}`, s.id);
      for (const sb of s.subs) {
        if (!sb.localId) continue;
        sb.id = slugger.slug(sb.title);
        idMap.set(`${s.file}#${sb.localId}`, sb.id);
      }
    }
  });
  return { files, parts, idMap, fileAnchor, fileSet: new Set(files.map((f) => f.file)) };
}

/** 拆分相对链接：返回目标文件（相对清单根目录）与锚点 */
function splitHref(href, fromFile) {
  const k = href.indexOf('#');
  const p = k >= 0 ? href.slice(0, k) : href;
  const raw = k >= 0 ? href.slice(k + 1) : '';
  const dec = (s) => { try { return decodeURIComponent(s); } catch { return s; } };
  const target = p ? path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), dec(p))) : fromFile;
  return { target, raw, id: dec(raw) };
}
const isAbsHref = (href) => /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//');

// ---------------------------------------------------------------------------
// 工具函数
// ---------------------------------------------------------------------------
function normUrl(u) {
  try {
    const x = new URL(u);
    const host = x.hostname.toLowerCase().replace(/^www\./, '');
    let p = x.pathname.replace(/\/+$/, '');
    if (host === 'github.com') p = p.toLowerCase().replace(/\.git$/, '');
    return host + p + x.search + x.hash;
  } catch {
    return u;
  }
}
function ghRepo(url) {
  const m = url.match(/^https?:\/\/github\.com\/([A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)\/([A-Za-z0-9._-]+?)(?:\.git)?\/?$/);
  if (!m || GH_RESERVED.has(m[1].toLowerCase())) return null;
  return `${m[1]}/${m[2]}`;
}
function ghOwner(url) {
  const m = url.match(/^https?:\/\/github\.com\/([A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)(?:[/?#]|$)/);
  if (!m || GH_RESERVED.has(m[1].toLowerCase())) return null;
  return m[1];
}
function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; }
}
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function hashHue(s) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  return h % 360;
}
function fmtNum(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, '')}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(n >= 1e5 ? 0 : 1).replace(/\.0$/, '')}k`;
  return String(n);
}
const thousands = (n) => n.toLocaleString('en-US');
/** 统计数字取整（减少每次增删条目带来的变动）：<10 精确，<1000 取整到 10，其余取整到 100 */
const approx = (n) => (n < 10 ? String(n) : `${thousands(n < 1000 ? Math.floor(n / 10) * 10 : Math.floor(n / 100) * 100)}+`);

/** 构建站点时由 mergeDocs 的结果赋值，用于把清单文件之间的相对链接改写为站内锚点 */
let LINKS = null;
function resolveHref(href, file) {
  if (!LINKS || !file || isAbsHref(href)) return href;
  const { target, raw, id } = splitHref(href, file);
  if (LINKS.fileSet.has(target)) {
    if (!raw) return `#${LINKS.fileAnchor.get(target) || 'top'}`;
    return `#${LINKS.idMap.get(`${target}#${id}`) || id}`;
  }
  return `${REPO_URL}/blob/main/${target}${raw ? `#${raw}` : ''}`;
}

/** 行内 Markdown → HTML：转义后支持 `code`、**粗体**、[文本](链接) 与裸链接；file 为来源文件，用于解析相对链接 */
function inline(s, file) {
  const holes = [];
  const keep = (html) => `\u0000${holes.push(html) - 1}\u0000`;
  let out = s.replace(/`([^`]+)`/g, (_, c) => keep(`<code>${esc(c)}</code>`));
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, href) => {
    const h = resolveHref(href, file);
    const ext = /^https?:/.test(h);
    return keep(`<a href="${esc(h)}"${ext ? ' target="_blank" rel="noopener"' : ''}>${esc(t)}</a>`);
  });
  out = out.replace(ANY_URL_RE, (u) => {
    const url = u.replace(/[.,;:!?]+$/, '');
    return keep(`<a href="${esc(url)}" target="_blank" rel="noopener">${esc(url)}</a>`) + u.slice(url.length);
  });
  out = esc(out).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return out.replace(/\u0000(\d+)\u0000/g, (_, k) => holes[Number(k)]);
}

function collectStats(doc) {
  let sections = 0;
  let subs = 0;
  let items = 0;
  const github = new Set();
  for (const p of doc.parts) {
    for (const s of p.sections) {
      sections++;
      for (const sb of s.subs) {
        if (sb.title) subs++;
        for (const t of sb.tables) {
          if (t.kind !== 'resources') continue;
          for (const it of t.items) {
            items++;
            const r = ghRepo(it.url);
            if (r) github.add(r.toLowerCase());
          }
        }
      }
    }
  }
  return { parts: doc.parts.length, sections, subs, items, github: github.size };
}

// ---------------------------------------------------------------------------
// 目录与统计（--toc）
// ---------------------------------------------------------------------------
function relHref(from, to, id) {
  const p = from === to ? '' : path.posix.relative(path.posix.dirname(from), to);
  return id ? `${p}#${id}` : p;
}
/** README 总目录：每个板块一行，链接到板块文件及其中的各分类 */
function genToc(doc, from) {
  const rows = doc.parts.map((p) => {
    const home = p.sections.map((s) => s.file).find((f) => f !== from);
    const label = home ? `[${p.label}](${relHref(from, home)})` : p.label;
    return `| **${label}** | ${p.sections.map((s) => `[${s.heading}](${relHref(from, s.file, s.localId)})`).join(' · ')} |`;
  });
  return ['| 板块 | 分类导航 |', '|:--|:--|', ...rows].join('\n');
}
/** 板块文件目录：每个分类一行，列出其下的子类 */
function genFileToc(f) {
  const rows = f.parts.flatMap((p) => p.sections.map((s) => {
    const subs = s.subs.filter((x) => x.title && x.localId);
    return `| [${s.heading}](#${s.localId}) | ${subs.map((x) => `[${x.title}](#${x.localId})`).join(' · ') || '—'} |`;
  }));
  return ['| 分类 | 子类导航 |', '|:--|:--|', ...rows].join('\n');
}
function genStats(doc) {
  const st = collectStats(doc);
  return `**${st.sections}** 大分类 · **${approx(st.subs)}** 子类 · **${approx(st.items)}** 条精选资源 · **${approx(st.github)}** 个 GitHub 开源项目`;
}
function genFileStats(f) {
  const st = collectStats(f);
  return `本板块收录 **${st.sections}** 个分类 · **${approx(st.subs)}** 个子类 · **${approx(st.items)}** 条资源 · **${approx(st.github)}** 个 GitHub 开源项目`;
}
function blockRe(name) {
  return new RegExp(`(<!--\\s*${name}:start\\s*-->)([\\s\\S]*?)(<!--\\s*${name}:end\\s*-->)`);
}
function replaceBlock(md, name, content) {
  return md.replace(blockRe(name), (_, a, __, b) => `${a}\n${content}\n${b}`);
}
function readBlock(md, name) {
  const m = md.match(blockRe(name));
  return m ? m[2].trim() : null;
}

// ---------------------------------------------------------------------------
// 校验（--check）
// ---------------------------------------------------------------------------
function check(doc) {
  const { files } = doc;
  const errors = [];
  const warns = [];
  const byFile = new Map(files.map((f) => [f.file, f]));

  for (const f of files) {
    const err = (line, msg) => errors.push({ file: f.file, line, msg });
    const warn = (line, msg) => warns.push({ file: f.file, line, msg });
    f.lines.forEach((l, i) => { if (l.includes('🔗')) err(i + 1, '请勿使用 🔗 作为链接，链接列请直接填写完整 URL'); });
    // GitHub 只渲染 Markdown 文件的前 500 KiB，超出部分会被截断
    const kib = Buffer.byteLength(f.md, 'utf8') / 1024;
    if (kib > 500) err(1, `文件大小为 ${kib.toFixed(0)} KiB，超过 GitHub 500 KiB 的渲染上限，超出部分将被截断，请精简内容或拆分到新的板块文件`);
    else if (kib > 470) warn(1, `文件大小为 ${kib.toFixed(0)} KiB，已接近 GitHub 500 KiB 的渲染上限`);
    // 相对链接与锚点：目标文件必须存在；指向清单文件时锚点必须对应其中的标题
    f.lines.forEach((l, i) => {
      for (const m of l.matchAll(/\]\(([^)\s]+)\)|href="([^"]+)"/g)) {
        const href = m[1] || m[2];
        if (isAbsHref(href)) continue;
        const { target, raw, id } = splitHref(href, f.file);
        const tf = byFile.get(target);
        if (!tf) {
          if (!fs.existsSync(path.join(LIST_DIR, target))) err(i + 1, `链接的文件不存在：${href}`);
        } else if (raw && id !== 'top' && !tf.ids.has(id)) {
          err(i + 1, `锚点不存在：${href}（请检查标题文字是否一致）`);
        }
      }
    });
    for (const p of f.parts) if (!p.sections.length) warn(p.line, `板块「${p.label}」下没有任何分类`);
  }
  if (!doc.parts.length) errors.push({ file: files[0].file, line: 1, msg: '未找到任何 <!-- part: ... --> 板块标记' });

  const seen = new Map();
  for (const p of doc.parts) {
    for (const s of p.sections) {
      const err = (line, msg, file = s.file) => errors.push({ file, line, msg });
      const warn = (line, msg, file = s.file) => warns.push({ file, line, msg });
      if (!s.emoji) warn(s.line, `分类标题建议以 Emoji 开头：${s.heading}`);
      if (/\u{FE0F}/u.test(s.heading)) warn(s.line, `分类标题中的 Emoji 含有 U+FE0F，会导致锚点异常：${s.heading}`);
      if (!s.intro.length) warn(s.line, `分类「${s.heading}」缺少 > 导语`);
      for (const sb of s.subs) {
        for (const t of sb.tables) {
          if (t.kind === 'plain') {
            for (const r of t.rows) if (r.cells.some((c) => /https?:\/\//.test(c))) err(r.line, `含有链接的表格最后一列表头必须为「${LINK_HEADER}」`);
            continue;
          }
          if (t.descIdx < 0) err(t.line, '资源表格需要包含描述列（如「描述」）');
          for (const it of t.items) {
            const L = it.line;
            if (it.cells.length !== t.header.length) err(L, `列数为 ${it.cells.length}，与表头的 ${t.header.length} 列不一致（单元格内不能使用 | 字符）`);
            if (!it.name) err(L, '名称不能为空');
            if (t.descIdx >= 0 && !it.desc) err(L, `「${it.name}」缺少描述`);
            if (!URL_CELL_RE.test(it.url)) {
              err(L, `「${it.name}」的链接列必须是一个完整的裸 URL（如 https://github.com/owner/repo），当前为：${it.url || '空'}`);
            } else {
              if (/[.,:;!?*_~'"]$/.test(it.url)) err(L, `链接以标点结尾，GitHub 自动链接会丢失该字符：${it.url}`);
              if ((it.url.match(/\)/g) || []).length > (it.url.match(/\(/g) || []).length) err(L, `链接中的括号不匹配：${it.url}`);
              const key = normUrl(it.url);
              if (seen.has(key)) err(L, `重复链接（${seen.get(key)} 已收录）：${it.url}`);
              else seen.set(key, `${it.file}:${L}`);
            }
            it.cells.forEach((c, k) => {
              if (k !== t.linkIdx && /https?:\/\//.test(c)) err(L, `链接只能放在「${LINK_HEADER}」列：${it.name}`);
            });
            if (it.desc.length > 100) warn(L, `「${it.name}」的描述较长（${it.desc.length} 字），建议精简到 60 字以内`);
            if (/[。.]$/.test(it.desc)) warn(L, `「${it.name}」的描述末尾无需句号`);
          }
        }
      }
    }
  }

  files.forEach((f, k) => {
    const toc = readBlock(f.md, 'toc');
    if (toc !== null && toc !== (k === 0 ? genToc(doc, f.file) : genFileToc(f))) {
      errors.push({ file: f.file, line: 1, msg: '目录与分类标题不一致，请运行 node scripts/build-site.mjs --toc 更新' });
    }
    const stats = readBlock(f.md, 'stats');
    if (stats !== null && stats !== (k === 0 ? genStats(doc) : genFileStats(f))) {
      warns.push({ file: f.file, line: 1, msg: '统计数据已变化，可运行 node scripts/build-site.mjs --toc 更新' });
    }
  });
  return { errors, warns };
}

// ---------------------------------------------------------------------------
// GitHub 元数据（Star 数、头像、归档状态）
// ---------------------------------------------------------------------------
async function fetchGithubMeta(repos, token) {
  const meta = new Map();
  if (!token || !repos.length) return meta;
  const BATCH = 50;
  const queue = [];
  for (let i = 0; i < repos.length; i += BATCH) queue.push(repos.slice(i, i + BATCH));
  const field = 'nameWithOwner stargazerCount isArchived pushedAt owner{avatarUrl(size:80)}';
  const run = async (chunk) => {
    const query = `query{${chunk.map((r, k) => {
      const [o, n] = r.split('/');
      return `r${k}:repository(owner:${JSON.stringify(o)},name:${JSON.stringify(n)}){${field}}`;
    }).join(' ')}}`;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'awesome-ai-site-builder' },
          body: JSON.stringify({ query }),
        });
        const json = await res.json();
        if (!json.data) throw new Error(json.message || JSON.stringify(json.errors || json).slice(0, 200));
        chunk.forEach((r, k) => { if (json.data[`r${k}`]) meta.set(r.toLowerCase(), json.data[`r${k}`]); });
        return;
      } catch (e) {
        if (attempt === 2) console.warn(`  ! GitHub GraphQL 请求失败：${e.message}`);
        else await new Promise((ok) => setTimeout(ok, 1500 * (attempt + 1)));
      }
    }
  };
  await Promise.all(Array.from({ length: 4 }, async () => { while (queue.length) await run(queue.shift()); }));
  return meta;
}

// ---------------------------------------------------------------------------
// HTML 渲染
// ---------------------------------------------------------------------------
// 图标以 CSS mask 方式定义在 style.css 中，避免每张卡片重复内联 SVG
function renderAvatar(it) {
  const owner = ghOwner(it.url);
  const host = hostOf(it.url);
  const letter = (stripInline(it.name).match(/[\p{L}\p{N}]/u) || ['?'])[0].toUpperCase();
  const hue = hashHue(owner || host || it.name);
  let img = '';
  if (owner) {
    const src = it.meta?.owner?.avatarUrl || `https://avatars.githubusercontent.com/${owner}?s=80`;
    img = `<img src="${esc(src)}" alt="" loading="lazy">`;
  } else if (host) {
    img = `<img class="fav" src="https://${esc(host)}/favicon.ico" alt="" loading="lazy" referrerpolicy="no-referrer">`;
  }
  return `<span class="av" style="--h:${hue}" data-l="${esc(letter)}">${img}</span>`;
}

function renderTag(tag) {
  const v = stripInline(tag.v);
  if (tag.k === '开源') {
    if (/✅|是|开源/.test(v)) return '<span class="chip chip-ok" title="开源">开源</span>';
    if (/❌|否|闭源/.test(v)) return '<span class="chip chip-muted" title="闭源">闭源</span>';
  }
  return `<span class="chip" title="${esc(tag.k)}">${esc(v)}</span>`;
}

function renderCard(it, i) {
  const name = stripInline(it.name);
  const stars = it.meta?.stargazerCount ?? -1;
  const archived = it.meta?.isArchived && !/已归档/.test(it.desc);
  const tags = it.tags.map(renderTag).join('') + (archived ? '<span class="chip chip-warn">已归档</span>' : '');
  const kind = ghRepo(it.url) ? 'gh' : 'web';
  const url = esc(it.url);
  return `<article class="card" data-i="${i}" data-k="${kind}" data-stars="${stars}">
<div class="card-top">${renderAvatar(it)}<div class="card-title"><a class="card-name" href="${url}" target="_blank">${esc(name)}</a>${tags ? `<div class="chips">${tags}</div>` : ''}</div>${stars >= 0 ? `<span class="stars" title="${thousands(stars)} Stars">${fmtNum(stars)}</span>` : ''}</div>
${it.desc ? `<p class="desc">${inline(it.desc, it.file)}</p>` : ''}
<div class="card-foot"><a class="url" href="${url}" target="_blank" tabindex="-1">${url}</a><button class="copy" type="button" title="复制链接" aria-label="复制链接"></button></div>
</article>`;
}

function renderPlainTable(t) {
  const steps = t.rows.map((r, k) => {
    const c = r.cells;
    const fields = t.header.slice(1).map((h, j) => (c[j + 1] ? `<div class="step-field"><span class="step-k">${esc(h)}</span><span class="step-v">${inline(c[j + 1], t.file)}</span></div>` : '')).join('');
    // 首列以 Emoji 开头时（如角色路线）用 Emoji 作为徽标，否则显示序号
    const em = stripInline(c[0] || '').match(EMOJI_HEAD_RE);
    const badge = em ? `<span class="step-no step-emoji">${esc(em[1])}</span>` : `<span class="step-no">${k + 1}</span>`;
    const title = em ? esc(em[2]) : inline(c[0] || '', t.file);
    return `<li class="step">${badge}<div class="step-body"><h4>${title}</h4>${fields}</div></li>`;
  }).join('');
  return `<ol class="steps">${steps}</ol>`;
}

function renderContent(doc) {
  const out = [];
  let i = 0;
  doc.parts.forEach((p, pi) => {
    const pCount = p.sections.reduce((a, s) => a + s.count, 0);
    out.push(`<div class="part-banner" id="part-${pi + 1}"><span class="part-emoji">${esc(p.emoji)}</span><span class="part-title">${esc(p.title)}</span><span class="part-meta">${p.sections.length} 个分类 · ${thousands(pCount)} 条资源</span></div>`);
    for (const s of p.sections) {
      const subsHtml = s.subs.map((sb) => {
        const body = sb.tables.map((t) => {
          if (t.kind === 'plain') return renderPlainTable(t);
          return `<div class="grid">${t.items.map((it) => renderCard(it, i++)).join('')}</div>`;
        }).join('');
        const notes = sb.notes.length ? `<p class="note">${inline(sb.notes.join(' '), s.file)}</p>` : '';
        const head = sb.title ? `<h3><span class="sub-title">${esc(sb.title)}</span>${sb.count ? `<span class="count">${sb.count}</span>` : ''}</h3>` : '';
        return `<div class="sub"${sb.id ? ` id="${esc(sb.id)}"` : ''}>${head}${notes}${body}</div>`;
      }).join('');
      const intro = s.intro.length ? `<p class="section-intro">${inline(s.intro.join(' '), s.file)}</p>` : '';
      const notes = s.notes.map((n) => `<p class="note">${inline(n, s.file)}</p>`).join('');
      const src = `<a class="section-src" href="${esc(`${REPO_URL}/blob/main/${s.file}#${s.localId}`)}" target="_blank" title="在 GitHub 上查看与编辑本分类的 Markdown 源文件">✏️ 参与完善</a>`;
      const meta = `<div class="section-meta">${s.count ? `<span>${s.count} 条资源</span><span>${s.subs.filter((x) => x.title).length} 个子类</span>` : ''}${src}</div>`;
      // 供 CSS 估算未渲染区块高度（content-visibility），使锚点跳转与滚动条更准确
      const blocks = s.subs.reduce((a, sb) => a + sb.tables.reduce((b, t) => b + (t.kind === 'plain' ? t.rows.length : t.items.length), 0), 0);
      out.push(`<section class="section" id="${esc(s.id)}" data-title="${esc(s.title)}" style="--n:${blocks};--s:${s.subs.length}"><header class="section-head"><div class="section-emoji">${esc(s.emoji)}</div><div class="section-heading"><h2>${esc(s.title)}</h2>${intro}</div>${meta}</header>${notes}${subsHtml}</section>`);
    }
  });
  return out.join('\n');
}

function renderNav(doc) {
  return doc.parts.map((p) => `<div class="nav-part"><div class="nav-part-title">${esc(p.emoji)} ${esc(p.title)}</div>${p.sections.map((s) => {
    const subs = s.subs.filter((x) => x.title && x.id);
    return `<div class="nav-sec" data-id="${esc(s.id)}"><a class="nav-link" href="#${esc(s.id)}"><span class="nav-emoji">${esc(s.emoji)}</span><span class="nav-text">${esc(s.title)}</span>${s.count ? `<span class="nav-count" data-total="${s.count}">${s.count}</span>` : ''}</a>${subs.length ? `<div class="nav-subs">${subs.map((x) => `<a href="#${esc(x.id)}">${esc(x.title)}</a>`).join('')}</div>` : ''}</div>`;
  }).join('')}</div>`).join('');
}

function renderOverview(doc) {
  return doc.parts.map((p) => `<div class="ov-part"><div class="ov-part-title"><span>${esc(p.emoji)}</span>${esc(p.title)}</div><div class="ov-grid">${p.sections.map((s) => `<a class="ov-tile" href="#${esc(s.id)}"><span class="ov-emoji">${esc(s.emoji)}</span><span class="ov-name">${esc(s.title)}</span><span class="ov-count">${s.count || '路线'}</span></a>`).join('')}</div></div>`).join('');
}

const today = () => new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);
const assetHash = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 10);

async function build(doc) {
  LINKS = doc;
  const repos = new Set();
  for (const p of doc.parts) {
    for (const s of p.sections) {
      s.count = 0;
      for (const sb of s.subs) {
        sb.count = 0;
        for (const t of sb.tables) {
          if (t.kind !== 'resources') continue;
          sb.count += t.items.length;
          for (const it of t.items) { const r = ghRepo(it.url); if (r) repos.add(r); }
        }
        s.count += sb.count;
      }
    }
  }
  const st = collectStats(doc);
  console.log(`解析完成：${st.parts} 个板块，${st.sections} 个分类，${st.subs} 个子类，${st.items} 条资源（${st.github} 个 GitHub 仓库）`);

  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  let meta = new Map();
  if (token && !process.env.NO_STARS) {
    console.log('正在获取 GitHub Star 数据…');
    meta = await fetchGithubMeta([...repos, REPO], token);
    console.log(`  已获取 ${meta.size} 个仓库的元数据`);
  } else {
    console.log('未设置 GITHUB_TOKEN，跳过 Star 数据获取');
  }
  let totalStars = 0;
  for (const p of doc.parts) for (const s of p.sections) for (const sb of s.subs) for (const t of sb.tables) {
    if (t.kind !== 'resources') continue;
    for (const it of t.items) {
      const r = ghRepo(it.url);
      it.meta = r ? meta.get(r.toLowerCase()) : undefined;
      if (it.meta) totalStars += it.meta.stargazerCount;
    }
  }
  const repoStars = meta.get(REPO.toLowerCase())?.stargazerCount;

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.cpSync(path.join(SITE_DIR, 'assets'), path.join(OUT_DIR, 'assets'), { recursive: true });

  const date = today();
  const totalRound = approx(st.items);
  const description = `最全面、最权威的中文人工智能资源全景图：系统整理 ${totalRound} 条 AI 书籍、课程、论文、工具与开源项目，覆盖机器学习、深度学习、大语言模型、AIGC、智能体（Agents）、Agent Skills、MCP、RAG 与 AI 编程等方向。`;
  const statsHtml = [
    [thousands(st.sections), '大分类'],
    [thousands(st.subs), '子类'],
    [thousands(st.items), '精选资源'],
    [thousands(st.github), 'GitHub 项目'],
    ...(totalStars ? [[fmtNum(totalStars), '项目累计 Star']] : []),
  ].map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join('');
  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Awesome AI',
    alternateName: 'Awesome AI 中文人工智能资源全景图',
    url: SITE_URL,
    description,
    inLanguage: 'zh-CN',
    potentialAction: { '@type': 'SearchAction', target: `${SITE_URL}?q={search_term_string}`, 'query-input': 'required name=search_term_string' },
  });
  const vars = {
    TITLE: 'Awesome AI · 最全面的中文人工智能资源全景图',
    DESCRIPTION: esc(description),
    SITE_URL,
    REPO,
    REPO_URL,
    CSS: `assets/style.css?v=${assetHash(path.join(SITE_DIR, 'assets/style.css'))}`,
    JS: `assets/app.js?v=${assetHash(path.join(SITE_DIR, 'assets/app.js'))}`,
    STATS: statsHtml,
    OVERVIEW: renderOverview(doc),
    NAV: renderNav(doc),
    CONTENT: renderContent(doc),
    DATE: date,
    PARTS: String(st.parts),
    SECTIONS: String(st.sections),
    TOTAL: thousands(st.items),
    TOTAL_ROUND: totalRound,
    REPO_STARS: repoStars ? `<span class="btn-count">${fmtNum(repoStars)}</span>` : '',
    JSONLD: jsonld.replace(/</g, '\\u003c'),
  };
  const template = fs.readFileSync(path.join(SITE_DIR, 'template.html'), 'utf8');
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), template.replace(/\{\{(\w+)\}\}/g, (m, k) => (k in vars ? vars[k] : m)));

  const data = {
    name: 'Awesome AI',
    repository: REPO_URL,
    site: SITE_URL,
    generatedAt: new Date().toISOString(),
    stats: st,
    parts: doc.parts.map((p) => ({
      title: p.title,
      emoji: p.emoji,
      sections: p.sections.map((s) => ({
        id: s.id,
        emoji: s.emoji,
        title: s.title,
        intro: s.intro.join(' '),
        source: `${REPO_URL}/blob/main/${s.file}#${s.localId}`,
        subsections: s.subs.map((sb) => ({
          id: sb.id,
          title: sb.title,
          items: sb.tables.filter((t) => t.kind === 'resources').flatMap((t) => t.items.map((it) => ({
            name: stripInline(it.name),
            description: it.desc,
            url: it.url,
            ...Object.fromEntries(it.tags.map((x) => [x.k, stripInline(x.v)])),
            ...(it.meta ? { stars: it.meta.stargazerCount, archived: it.meta.isArchived || undefined } : {}),
          }))),
        })),
      })),
    })),
  };
  fs.writeFileSync(path.join(OUT_DIR, 'data.json'), JSON.stringify(data));
  fs.writeFileSync(path.join(OUT_DIR, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);
  fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}</loc><lastmod>${date}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT_DIR, '404.html'), `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>页面不存在 · Awesome AI</title><link rel="icon" href="${SITE_URL}assets/favicon.svg"><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;background:#0b0f1a;color:#e7e9f3;text-align:center}h1{font-size:72px;margin:0;background:linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899);-webkit-background-clip:text;background-clip:text;color:transparent}a{color:#a5b4fc}</style></head><body><main><h1>404</h1><p>页面不存在</p><p><a href="${SITE_URL}">返回 Awesome AI 首页</a></p></main></body></html>\n`);
  fs.writeFileSync(path.join(OUT_DIR, '.nojekyll'), '');
  const kb = (f) => `${(fs.statSync(path.join(OUT_DIR, f)).size / 1024).toFixed(0)} KB`;
  console.log(`站点已生成：${path.relative(ROOT, OUT_DIR) || '.'}/（index.html ${kb('index.html')}，data.json ${kb('data.json')}）`);
}

// ---------------------------------------------------------------------------
const ghaEscape = (s) => s.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');

async function main() {
  const args = new Set(process.argv.slice(2));
  const doc = mergeDocs(loadSources());

  if (args.has('--toc')) {
    let changed = 0;
    doc.files.forEach((f, k) => {
      const next = k === 0
        ? replaceBlock(replaceBlock(f.md, 'toc', genToc(doc, f.file)), 'stats', genStats(doc))
        : replaceBlock(replaceBlock(f.md, 'toc', genFileToc(f)), 'stats', genFileStats(f));
      if (next === f.md) return;
      fs.writeFileSync(path.join(LIST_DIR, f.file), next);
      changed++;
      console.log(`已更新 ${f.file} 的目录与统计数据`);
    });
    if (!changed) console.log('目录与统计数据已是最新');
    return;
  }

  if (args.has('--check')) {
    const { errors, warns } = check(doc);
    const gha = !!process.env.GITHUB_ACTIONS;
    for (const w of warns) console.log(gha ? `::warning file=${w.file},line=${w.line}::${ghaEscape(w.msg)}` : `警告 ${w.file}:${w.line} ${w.msg}`);
    for (const e of errors) console.log(gha ? `::error file=${e.file},line=${e.line}::${ghaEscape(e.msg)}` : `错误 ${e.file}:${e.line} ${e.msg}`);
    const st = collectStats(doc);
    console.log(`\n共 ${doc.files.length} 个文件、${st.sections} 个分类、${st.subs} 个子类、${st.items} 条资源；${errors.length} 个错误，${warns.length} 个警告`);
    process.exit(errors.length ? 1 : 0);
  }

  await build(doc);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
