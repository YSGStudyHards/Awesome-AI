# 🤝 贡献指南

感谢你愿意为 **Awesome AI** 贡献力量！本项目的目标是成为全球范围内最全面、最权威的中文人工智能资源清单。为了保证质量与一致性，提交前请花两分钟阅读以下规范。

> 在线浏览：https://ysgstudyhards.github.io/Awesome-AI/ —— 站点由 `README.md` 与 `docs/` 目录下的清单文件自动生成，合并到 `main` 分支后会自动更新。

## 📁 清单文件

为了避免单个文件超过 GitHub 的渲染上限，资源清单按六大板块拆分到 `docs/` 目录下，`README.md` 保留项目介绍、学习路线与总目录：

| 文件 | 板块 | 包含分类 |
|:--|:--|:--|
| `README.md` | 首页 | 项目介绍、学习路线、总目录 |
| `docs/01-getting-started.md` | 🌱 入门与基础 | AI 基础数学、编程与数据科学、经典书籍、课程与教程 |
| `docs/02-core-technologies.md` | 🧱 核心技术 | 机器学习、深度学习、计算机视觉、自然语言处理、语音、强化学习 |
| `docs/03-llm-and-agents.md` | 🌟 大模型与智能体 | 大语言模型、多模态与 AIGC、智能体、Agent Skills、MCP、AI 编程 |
| `docs/04-engineering.md` | 🔧 工程与落地 | RAG、提示与上下文工程、训练微调、推理部署、评测基准、AI 应用 |
| `docs/05-frontiers.md` | 🔭 前沿与交叉 | AI 安全与治理、具身智能、AI for Science、论文与研究 |
| `docs/06-resources-and-community.md` | 🧰 资源与社区 | 数据集、实战项目、模型 API 与算力平台、社区资讯、求职面试 |

## 📌 收录标准

- **高质量**：权威机构、知名作者出品，或在社区中被广泛认可（GitHub 开源项目一般应有较高的 Star 数并保持活跃维护）
- **有价值**：对学习、研究或工程实践有明确帮助，不收录纯营销、引流或内容空洞的页面
- **可访问**：链接真实有效，优先使用官方地址（GitHub 仓库、官网、官方文档、论文主页等）
- **不重复**：同一个链接在全文中只出现一次，请先搜索确认未被收录
- **合规**：不收录盗版书籍、破解软件、违法违规或侵犯他人权益的内容

## ✍️ 格式规范

每个资源占表格中的一行，**最后一列固定为「链接」，并且直接填写完整的裸 URL**（不要使用 🔗、`[链接](...)` 或其他包装形式）：

```markdown
| 名称 | 简介 | 链接 |
|:--|:--|:--|
| LangGraph | LangChain 团队出品的有状态多智能体编排框架，支持循环、持久化与人工介入 | https://github.com/langchain-ai/langgraph |
```

具体要求：

1. **名称**：使用项目 / 书籍 / 课程的官方名称，中文资源可附英文名
2. **描述**：中文撰写，突出核心特点与适用场景，建议 20～60 字，末尾不加句号
3. **链接**：完整的 `https://` 地址，只能放在最后一列；GitHub 项目请使用 `https://github.com/owner/repo` 形式
4. **单元格内不能出现 `|` 字符**，否则会破坏表格结构
5. 部分分类带有额外列（如「作者」「机构」「开源」「类型」），请与所在表格的表头保持一致；「开源」列使用 ✅ / ❌
6. 新增资源请放到 `docs/` 中对应板块文件里最合适的 `##` 分类与 `###` 子类下；同一子类内按重要性 / 影响力排序
7. 如需新增分类，标题以 Emoji 开头（Emoji 不要带 U+FE0F 变体选择符），并在标题下方用 `>` 写一句导语
8. GitHub 只渲染单个 Markdown 文件的前 500 KiB，描述请尽量精炼；`--check` 会在任一文件接近或超过该上限时给出提示
9. 文件之间互相引用时使用相对路径，例如 `[智能体](03-llm-and-agents.md#-智能体agents)`，`--check` 会校验目标文件与锚点是否存在

## ✅ 本地校验

提交 PR 前，请在仓库根目录运行（需要 Node.js 18 及以上版本，无需安装任何依赖）：

```bash
# 校验格式：裸链接、重复链接、列数、描述等（CI 会执行同样的检查）
node scripts/build-site.mjs --check

# 新增或调整了分类后，重新生成 README 与各板块文件中的目录与统计数据
node scripts/build-site.mjs --toc

# 可选：本地预览站点（生成到 _site/ 目录）
node scripts/build-site.mjs
python3 -m http.server 8000 --directory _site
```

设置 `GITHUB_TOKEN` 环境变量后，本地构建也会拉取 GitHub 项目的 Star 数与头像。

## 🌐 GitHub Pages 部署

首次部署前，仓库管理员需要完成一次仓库设置（Fork 仓库也需要单独设置）：

1. 打开仓库的 **Settings → Pages → Build and deployment**。
2. 将 **Source** 设置为 **GitHub Actions**，而不是 **Deploy from a branch**；无需创建 `gh-pages` 分支。
3. 打开 **Actions → 部署 GitHub Pages → Run workflow**，选择 `main` 并运行；如果已有失败记录，也可以选择 **Re-run all jobs**。
4. 部署成功后，从 `deploy` 作业的 `github-pages` 环境链接访问站点。

工作流先构建并上传 `_site/` 产物，再在部署作业中检查 Pages 配置并发布。后续推送到 `main` 的相关文件变更以及每周定时任务会自动更新站点。

如果 `actions/configure-pages` 报 `Get Pages site failed` / `HttpError: Not Found`，通常是尚未完成上述初始化；这不是站点构建脚本出错。请先确认 Pages 已启用且 Source 为 GitHub Actions，再重新运行。若设置正确但仍失败，请检查 Actions 权限、仓库或组织的 Pages 策略及具体错误日志。

工作流中的 `pages: write` 和 `id-token: write` 用于部署，不能让默认 `GITHUB_TOKEN` 首次启用 Pages。不要仅添加 `enablement: true`：该选项需要另行提供具有相应权限的 PAT 或 GitHub App 令牌。本项目采用管理员在设置页面一次性启用的方式，不需要新增密钥。

## 🚀 提交流程

1. Fork 本仓库并新建分支，例如 `add-xxx-agent-framework`
2. 按上述规范修改 `docs/` 下对应的板块文件（学习路线位于 `README.md`），运行 `--check` 确认没有错误
3. 提交 Pull Request，在描述中简要说明推荐理由
4. 维护者审核通过后合并，在线站点会在几分钟内自动更新

如果只是想推荐资源、报告失效链接或提出建议，也欢迎直接 [提交 Issue](https://github.com/YSGStudyHards/Awesome-AI/issues/new)。

## 🗂️ 项目结构

| 路径 | 说明 |
|:--|:--|
| `README.md` | 项目首页：介绍、学习路线与总目录 |
| `docs/*.md` | 六大板块的资源清单本体，与 `README.md` 一起构成站点的数据源 |
| `scripts/build-site.mjs` | 零依赖构建脚本：解析清单、格式校验、生成目录与静态站点 |
| `site/template.html`、`site/assets/` | 站点页面模板、样式与交互脚本 |
| `.github/workflows/pages.yml` | 推送到 `main` 后自动构建并部署 GitHub Pages，每周自动刷新 Star 数据 |
| `.github/workflows/check.yml` | 在 Pull Request 中自动校验清单格式 |

再次感谢你的贡献 ❤️
