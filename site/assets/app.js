/* Awesome AI · 站点交互脚本（零依赖） */
(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;
  const body = document.body;
  const topbar = $('.topbar');
  const q = $('#q');
  const main = $('#main');
  const content = $('#content');
  const sidebar = $('#sidebar');
  const resultEl = $('#result');
  const emptyEl = $('#empty');
  const progress = $('#progress');
  const toTop = $('#toTop');
  const toast = $('#toast');
  const menuBtn = $('#menuBtn');

  const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const decode = (s) => { try { return decodeURIComponent(s); } catch (e) { return s; } };

  /* ---------- 头像 / 网站图标加载失败时回退为字母头像 ---------- */
  const dropImg = (img) => { if (img.parentNode && img.parentNode.classList.contains('av')) img.remove(); };
  document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') dropImg(e.target); }, true);
  document.addEventListener('load', (e) => {
    const t = e.target;
    if (t.tagName === 'IMG' && t.classList.contains('fav') && t.naturalWidth > 0 && t.naturalWidth < 8) dropImg(t);
  }, true);
  $$('.av img').forEach((img) => { if (img.complete && !img.naturalWidth) dropImg(img); });

  /* ---------- 主题切换 ---------- */
  $('#themeBtn').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* 隐私模式下忽略 */ }
  });

  /* ---------- 轻提示 ---------- */
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
  }

  /* ---------- 移动端抽屉导航 ---------- */
  function openNav(open) {
    body.classList.toggle('nav-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  }
  menuBtn.addEventListener('click', () => openNav(!body.classList.contains('nav-open')));
  $('#scrim').addEventListener('click', () => openNav(false));
  const mqDrawer = matchMedia('(max-width: 1100px)');
  const onMq = (e) => { if (!e.matches) openNav(false); };
  if (mqDrawer.addEventListener) mqDrawer.addEventListener('change', onMq); else mqDrawer.addListener(onMq);

  /* ---------- 页内跳转 ----------
   * 分类区块使用了 content-visibility:auto，未渲染区块的高度是估算值，
   * 因此先瞬时定位，待目标附近内容渲染后再校正一次位置。 */
  function targetOf(hash) {
    if (!hash || hash.length < 2 || hash[0] !== '#') return null;
    return document.getElementById(decode(hash.slice(1)));
  }
  let jumpId = 0;
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach((t) => window.addEventListener(t, () => { jumpId++; }, { passive: true }));
  function jumpTo(el, block = 'start') {
    if (!el) return;
    const id = ++jumpId;
    let last = null;
    let stable = 0;
    let frames = 0;
    const step = () => {
      if (id !== jumpId) return; // 用户已手动滚动，停止校正
      el.scrollIntoView({ block, inline: 'nearest' });
      const top = Math.round(el.getBoundingClientRect().top);
      stable = top === last ? stable + 1 : 0;
      last = top;
      if (stable < 4 && ++frames < 60) requestAnimationFrame(step);
    };
    step();
  }

  /* ---------- 搜索与筛选 ---------- */
  const cards = $$('.card');
  const sections = $$('.section');
  const subs = $$('.sub');
  const secIndex = new Map(sections.map((s, i) => [s, i]));
  const subIndex = new Map(subs.map((s, i) => [s, i]));
  const navSecs = new Map($$('.nav-sec').map((n) => [n.dataset.id, n]));
  const navSubs = new Map($$('.nav-subs a').map((a) => [decode(a.getAttribute('href').slice(1)), a]));
  const subCounts = subs.map((s) => s.querySelector('.count'));
  const subTotals = subCounts.map((c) => (c ? c.textContent : ''));

  const cardSec = new Int32Array(cards.length);
  const cardSub = new Int32Array(cards.length);
  const haystack = cards.map((c, i) => {
    const sec = c.closest('.section');
    const sub = c.closest('.sub');
    cardSec[i] = sec ? secIndex.get(sec) : -1;
    cardSub[i] = sub ? subIndex.get(sub) : -1;
    const subTitle = sub && sub.querySelector('.sub-title') ? sub.querySelector('.sub-title').textContent : '';
    return `${c.textContent} ${subTitle} ${sec ? sec.dataset.title : ''}`.replace(/\s+/g, ' ').toLowerCase();
  });

  // 每个板块横幅对应其后的若干分类区块
  const partOf = [];
  let curPart = null;
  for (const el of main.children) {
    if (el.classList.contains('part-banner')) { curPart = { el, secs: [] }; partOf.push(curPart); } else if (el.classList.contains('section') && curPart) curPart.secs.push(secIndex.get(el));
  }

  const TOTAL = cards.length;
  const state = { query: '', kind: 'all', sort: 'default' };

  function apply(scroll) {
    const terms = state.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtering = terms.length > 0 || state.kind !== 'all';
    const secN = new Int32Array(sections.length);
    const subN = new Int32Array(subs.length);
    let n = 0;
    for (let i = 0; i < cards.length; i++) {
      const ok = (state.kind === 'all' || cards[i].dataset.k === state.kind) && terms.every((t) => haystack[i].includes(t));
      cards[i].hidden = !ok;
      if (ok) {
        n++;
        if (cardSec[i] >= 0) secN[cardSec[i]]++;
        if (cardSub[i] >= 0) subN[cardSub[i]]++;
      }
    }
    subs.forEach((s, i) => {
      s.hidden = filtering && subN[i] === 0;
      if (subCounts[i]) subCounts[i].textContent = filtering ? subN[i] : subTotals[i];
      const link = navSubs.get(s.id);
      if (link) link.hidden = s.hidden;
    });
    sections.forEach((s, i) => {
      s.hidden = filtering && secN[i] === 0;
      const nav = navSecs.get(s.id);
      if (!nav) return;
      nav.classList.toggle('dim', s.hidden);
      const cnt = nav.querySelector('.nav-count');
      if (cnt) cnt.textContent = filtering ? secN[i] : cnt.dataset.total;
    });
    partOf.forEach((p) => { p.el.hidden = filtering && p.secs.every((i) => sections[i].hidden); });

    const what = state.kind === 'gh' ? '个 GitHub 项目' : state.kind === 'web' ? '个网站 / 文档' : '条资源';
    if (!filtering) resultEl.innerHTML = `共 <b>${fmt(TOTAL)}</b> 条精选资源`;
    else if (terms.length) resultEl.innerHTML = `找到 <b>${fmt(n)}</b> ${what}匹配「<mark>${esc(state.query.trim())}</mark>」<button type="button" class="clear">清除</button>`;
    else resultEl.innerHTML = `筛选出 <b>${fmt(n)}</b> ${what}<button type="button" class="clear">清除筛选</button>`;
    emptyEl.hidden = n > 0;

    const u = new URL(location.href);
    if (state.query.trim()) u.searchParams.set('q', state.query.trim()); else u.searchParams.delete('q');
    if (u.href !== location.href) history.replaceState(history.state, '', u);

    if (scroll) {
      const top = content.getBoundingClientRect().top + scrollY - topbar.offsetHeight;
      if (Math.abs(scrollY - top) > 2) window.scrollTo({ top, behavior: 'auto' });
    }
    spy();
  }

  let debounce;
  const onQuery = () => { state.query = q.value; apply(true); };
  q.addEventListener('input', () => { clearTimeout(debounce); debounce = setTimeout(onQuery, 140); });
  q.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    clearTimeout(debounce);
    onQuery();
    if (matchMedia('(hover: none)').matches) q.blur();
  });

  function setSeg(attr, value) {
    $$(`[data-${attr}]`).forEach((b) => b.classList.toggle('active', b.dataset[attr] === value));
  }
  function resetFilters() {
    clearTimeout(debounce);
    q.value = '';
    state.query = '';
    state.kind = 'all';
    setSeg('kind', 'all');
    apply(false);
  }

  /* ---------- 排序 ---------- */
  const grids = $$('.grid');
  const hasStars = cards.some((c) => Number(c.dataset.stars) > 0);
  const sortSeg = $('[data-sort]') && $('[data-sort]').parentElement;
  if (!hasStars && sortSeg) sortSeg.hidden = true;
  function sortCards() {
    const byIndex = (a, b) => a.dataset.i - b.dataset.i;
    const byStars = (a, b) => (Number(b.dataset.stars) - Number(a.dataset.stars)) || byIndex(a, b);
    for (const g of grids) {
      const items = Array.from(g.children);
      items.sort(state.sort === 'stars' ? byStars : byIndex);
      g.append(...items);
    }
  }

  /* ---------- 复制链接 ---------- */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      ta.remove();
      return ok;
    }
  }

  /* ---------- 统一点击处理 ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target;
    const copy = t.closest('.copy');
    if (copy) {
      e.preventDefault();
      const url = copy.closest('.card').querySelector('.card-name').getAttribute('href');
      copyText(url).then((ok) => showToast(ok ? `已复制：${url}` : '复制失败，请手动复制链接'));
      return;
    }
    if (t.closest('.result .clear')) { resetFilters(); return; }
    const kindBtn = t.closest('[data-kind]');
    if (kindBtn) { state.kind = kindBtn.dataset.kind; setSeg('kind', state.kind); apply(true); return; }
    const sortBtn = t.closest('[data-sort]');
    if (sortBtn) { state.sort = sortBtn.dataset.sort; setSeg('sort', state.sort); sortCards(); return; }

    const a = t.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = a.getAttribute('href');
    const el = targetOf(href);
    if (!el) return;
    e.preventDefault();
    openNav(false);
    if (el.id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState(null, '', location.pathname + location.search);
      return;
    }
    if (el.closest('[hidden]')) resetFilters();
    if (main.contains(el)) jumpTo(el); else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', href);
  });
  window.addEventListener('popstate', () => { const el = targetOf(location.hash); if (el) jumpTo(el); });

  /* ---------- 随机发现 ---------- */
  $('#randomBtn').addEventListener('click', () => {
    const pool = cards.filter((c) => !c.hidden);
    if (!pool.length) { showToast('当前筛选下没有资源'); return; }
    const c = pool[Math.floor(Math.random() * pool.length)];
    jumpTo(c, 'center');
    c.classList.remove('flash');
    void c.offsetWidth;
    c.classList.add('flash');
    setTimeout(() => c.classList.remove('flash'), 2000);
    showToast(`🎲 随机发现：${c.querySelector('.card-name').textContent}`);
  });

  /* ---------- 快捷键 ---------- */
  document.addEventListener('keydown', (e) => {
    const t = e.target;
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable;
    if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      q.focus();
      q.select();
      return;
    }
    if (e.key === 'Escape') {
      if (body.classList.contains('nav-open')) { openNav(false); menuBtn.focus(); return; }
      if (t === q) {
        e.preventDefault();
        if (q.value) { q.value = ''; onQuery(); } else q.blur();
      }
    }
  });

  /* ---------- 滚动：进度条、回到顶部、目录高亮 ---------- */
  let activeSec = null;
  let activeSub = null;
  function keepVisible(el) {
    if (!sidebar || !el) return;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (top < sidebar.scrollTop + 48 || bottom > sidebar.scrollTop + sidebar.clientHeight - 48) {
      sidebar.scrollTo({ top: Math.max(0, top - sidebar.clientHeight / 3), behavior: 'smooth' });
    }
  }
  function spy() {
    const line = topbar.offsetHeight + 96;
    let cur = null;
    for (const s of sections) {
      if (s.hidden) continue;
      if (s.getBoundingClientRect().top <= line) cur = s; else break;
    }
    if (cur !== activeSec) {
      if (activeSec && navSecs.get(activeSec.id)) navSecs.get(activeSec.id).classList.remove('active');
      activeSec = cur;
      const nav = cur && navSecs.get(cur.id);
      if (nav) { nav.classList.add('active'); keepVisible(nav); }
    }
    let sub = null;
    if (cur) {
      for (const sb of cur.querySelectorAll('.sub[id]')) {
        if (sb.hidden) continue;
        if (sb.getBoundingClientRect().top <= line) sub = sb; else break;
      }
    }
    if (sub !== activeSub) {
      if (activeSub && navSubs.get(activeSub.id)) navSubs.get(activeSub.id).classList.remove('current');
      activeSub = sub;
      if (sub && navSubs.get(sub.id)) navSubs.get(sub.id).classList.add('current');
    }
  }
  let ticking = false;
  function onScroll() {
    ticking = false;
    const max = root.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    toTop.classList.toggle('show', scrollY > 900);
    spy();
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- 初始状态：?q= 搜索参数与 #锚点 ---------- */
  const initQ = new URLSearchParams(location.search).get('q');
  if (initQ) {
    q.value = initQ;
    state.query = initQ;
    apply(false);
    requestAnimationFrame(() => apply(true));
  } else if (location.hash) {
    const el = targetOf(location.hash);
    if (el) {
      if (document.readyState === 'complete') jumpTo(el);
      else window.addEventListener('load', () => jumpTo(el), { once: true });
    }
  }
  onScroll();
})();
