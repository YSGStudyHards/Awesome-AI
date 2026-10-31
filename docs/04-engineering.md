<div align="center">

<h1>🔧 工程与落地</h1>

<p><strong>RAG、提示与上下文工程、训练微调、推理部署、评测基准与 AI 应用</strong></p>

<!-- stats:start -->
本板块收录 **6** 个分类 · **30+** 个子类 · **460+** 条资源 · **360+** 个 GitHub 开源项目
<!-- stats:end -->

**[🏠 返回首页](../README.md) · [📖 总目录](../README.md#-目录) · [🌐 在线浏览本板块](https://ysgstudyhards.github.io/Awesome-AI/#part-4)**

</div>

## 📑 本板块目录

<!-- toc:start -->
| 分类 | 子类导航 |
|:--|:--|
| [🔍 RAG 与知识库](#-rag-与知识库) | [RAG 框架与引擎](#rag-框架与引擎) · [GraphRAG 与知识增强](#graphrag-与知识增强) · [企业知识库与问答系统](#企业知识库与问答系统) · [文档解析与 OCR](#文档解析与-ocr) · [网页抓取与数据接入](#网页抓取与数据接入) · [Embedding 与 Rerank 模型](#embedding-与-rerank-模型) · [向量数据库与检索引擎](#向量数据库与检索引擎) · [RAG 学习资源](#rag-学习资源) |
| [💡 提示工程与上下文工程](#-提示工程与上下文工程) | [权威指南](#权威指南) · [提示库与学习资源](#提示库与学习资源) · [提示编程与优化](#提示编程与优化) |
| [🔥 模型训练与微调](#-模型训练与微调) | [微调框架](#微调框架) · [对齐与强化学习](#对齐与强化学习) · [分布式训练与加速](#分布式训练与加速) |
| [🚀 推理部署与 LLMOps](#-推理部署与-llmops) | [高性能推理引擎](#高性能推理引擎) · [本地运行与桌面工具](#本地运行与桌面工具) · [服务化与网关](#服务化与网关) · [可观测与 LLMOps](#可观测与-llmops) |
| [📊 评测基准与排行榜](#-评测基准与排行榜) | [综合排行榜](#综合排行榜) · [通用能力基准](#通用能力基准) · [推理与数学基准](#推理与数学基准) · [代码与软件工程基准](#代码与软件工程基准) · [智能体与工具调用基准](#智能体与工具调用基准) · [多模态与长上下文基准](#多模态与长上下文基准) · [中文评测基准](#中文评测基准) · [评测框架与工具](#评测框架与工具) |
| [📱 AI 应用与效率工具](#-ai-应用与效率工具) | [官方 AI 助手](#官方-ai-助手) · [开源对话客户端与 WebUI](#开源对话客户端与-webui) · [AI 搜索](#ai-搜索) · [知识管理与笔记](#知识管理与笔记) · [办公与内容创作](#办公与内容创作) · [翻译与阅读](#翻译与阅读) · [音视频与多媒体工具](#音视频与多媒体工具) · [浏览器与桌面助手](#浏览器与桌面助手) · [AI 工具导航](#ai-工具导航) |
<!-- toc:end -->

---

<!-- part: 🔧 工程与落地 -->

## 🔍 RAG 与知识库

> 检索增强生成（RAG）让大模型基于外部知识作答，本节收录 RAG 框架、文档解析、Embedding 与向量数据库

### RAG 框架与引擎

| 名称 | 描述 | 链接 |
|------|------|------|
| RAGFlow | 基于深度文档理解的开源 RAG 引擎，融合 Agent 能力，支持复杂格式解析与可溯源引用 | https://github.com/infiniflow/ragflow |
| LlamaIndex | 专注数据索引与检索的 LLM 应用框架，提供数据连接器、索引、查询引擎与 Agent 工作流 | https://github.com/run-llama/llama_index |
| LightRAG | 港大开源的轻量 RAG 框架，结合知识图谱与向量实现双层检索，支持增量更新 | https://github.com/HKUDS/LightRAG |
| Haystack | deepset 开源的生产级 AI 编排框架，以模块化 Pipeline 构建 RAG、语义搜索与 Agent | https://github.com/deepset-ai/haystack |
| PageIndex | 无向量、基于推理的 RAG 方案，将长文档构建为树状目录索引，由 LLM 推理定位相关章节 | https://github.com/VectifyAI/PageIndex |
| WeKnora | 腾讯开源的大模型知识库平台，将原始文档转为可检索的 RAG 与自主推理 Agent | https://github.com/Tencent/WeKnora |
| RAG-Anything | 港大基于 LightRAG 打造的一体化多模态 RAG 框架，统一处理文本、图片、表格与公式 | https://github.com/HKUDS/RAG-Anything |
| Kotaemon | 开源文档问答 RAG 工具，提供简洁 Web 界面，支持混合检索、GraphRAG 与多模态解析 | https://github.com/Cinnamon/kotaemon |
| txtai | 一体化 AI 框架，集语义搜索、Embedding 数据库、LLM 编排与语言模型工作流于一身 | https://github.com/neuml/txtai |
| R2R | 生产级 Agentic RAG 检索系统，提供 RESTful API，支持多模态摄取、混合检索与知识图谱 | https://github.com/SciPhi-AI/R2R |
| FlashRAG | 人大开源的 RAG 研究工具包，复现多种主流 RAG 算法并提供标准化评测数据集 | https://github.com/RUC-NLPIR/FlashRAG |
| LEANN | 面向个人设备的轻量向量索引，按需重算 Embedding 以大幅节省存储，实现完全本地的私有 RAG | https://github.com/StarTrail-org/LEANN |
| Quivr | 面向持续流入内容的开源检索引擎，支持关键词与语义混合检索、版本追溯、主题告警与 MCP 接入 | https://github.com/The-Vibe-Company/quivr |
| llmware | 面向企业的 RAG 统一框架，配套多种小型专用模型，适合本地私有化部署 | https://github.com/llmware-ai/llmware |
| CocoIndex | 声明式增量数据转换引擎，源数据变化时仅重算增量，为 RAG 与 Agent 保持索引新鲜 | https://github.com/cocoindex-io/cocoindex |
| Pathway | Python 实时流处理与 ETL 框架，底层为 Rust 引擎，可构建实时更新的 LLM 与 RAG 管道 | https://github.com/pathwaycom/pathway |
| Serviette（原 Pathway LLM App） | Pathway 推出的无代码 RAG 服务器，答案随文档变更实时同步，兼容多种向量数据库 | https://github.com/pathwaycom/serviette |
| Morphik | 开源多模态检索引擎，面向含图表与扫描页的复杂文档，提供多模态检索与知识图谱能力 | https://github.com/morphik-org/morphik-core |
| MiniRAG | 港大开源的轻量 RAG 方案，借助异构图索引让小模型也能完成高效检索增强生成 | https://github.com/HKUDS/MiniRAG |
| VideoRAG | 港大开源的视频 RAG 框架，结合图结构知识与多模态检索，支持超长视频理解与问答 | https://github.com/HKUDS/VideoRAG |
| Agentset | 开源 RAG 平台，内置引用溯源、深度研究、多格式文件解析与 MCP Server | https://github.com/agentset-ai/agentset |
| RAGLite | 轻量 Python RAG 工具包，基于 DuckDB 或 PostgreSQL 实现混合检索与重排序 | https://github.com/superlinear-ai/raglite |
| TrustRAG | 注重可靠输入与可信输出的模块化 RAG 框架，覆盖文档解析、检索、重排与引用生成 | https://github.com/gomate-community/TrustRAG |

### GraphRAG 与知识增强

| 名称 | 描述 | 链接 |
|------|------|------|
| GraphRAG | 微软开源的图谱增强 RAG，用 LLM 抽取知识图谱并生成社区摘要，擅长回答全局性问题 | https://github.com/microsoft/graphrag |
| KAG | 蚂蚁集团基于 OpenSPG 引擎的知识增强生成框架，以逻辑形式引导推理，面向专业领域问答 | https://github.com/OpenSPG/KAG |
| HippoRAG | 受人类长期记忆机制启发的 RAG 框架，以知识图谱与个性化 PageRank 实现多跳关联检索 | https://github.com/OSU-NLP-Group/HippoRAG |
| Fast GraphRAG | Circlemind 开源的高效 GraphRAG 实现，以 PageRank 图探索降低构建与查询成本 | https://github.com/circlemind-ai/fast-graphrag |
| nano-graphrag | 简洁易改的 GraphRAG 实现，核心代码精简，便于学习与二次开发 | https://github.com/gusye1234/nano-graphrag |
| LLM Graph Builder | Neo4j Labs 出品，利用 LLM 将 PDF、网页与视频等非结构化数据转为知识图谱 | https://github.com/neo4j-labs/llm-graph-builder |
| Neo4j GraphRAG Python | Neo4j 官方 GraphRAG Python 库，提供知识图谱构建以及向量与图混合检索组件 | https://github.com/neo4j/neo4j-graphrag-python |
| TrustGraph | 面向 Agent 的知识与上下文平台，提供知识图谱构建、GraphRAG 检索与治理能力 | https://github.com/trustgraph-ai/trustgraph |
| AutoFlow | PingCAP 基于 TiDB 向量存储构建的 Graph RAG 对话式知识库工具 | https://github.com/pingcap/autoflow |
| RAPTOR | RAPTOR 论文官方实现，通过递归聚类与摘要构建树状索引，支持多粒度检索 | https://github.com/parthsarthi03/raptor |
| Youtu-GraphRAG | 腾讯优图开源的 GraphRAG 框架，以统一 Agent 范式贯通图谱构建、索引与检索推理 | https://github.com/TencentCloudADP/youtu-graphrag |
| KGGen | 斯坦福开源的知识图谱生成工具，利用 LLM 从任意文本抽取并聚合实体关系 | https://github.com/stair-lab/kg-gen |
| GraphRAG-SDK | FalkorDB 推出的 GraphRAG 开发套件，自动构建本体与知识图谱并支持自然语言查询 | https://github.com/FalkorDB/GraphRAG-SDK |

### 企业知识库与问答系统

| 名称 | 描述 | 链接 |
|------|------|------|
| Onyx | 开源企业 AI 平台（原 Danswer），连接 Slack、Drive、Confluence 等应用提供知识问答与 Agent | https://github.com/onyx-dot-app/onyx |
| PrivateGPT | Zylon 开源的私有 AI 应用 API 层，基于本地模型提供 RAG、工具调用与 MCP，数据不出本地 | https://github.com/zylon-ai/private-gpt |
| Langchain-Chatchat | 基于 LangChain 与 ChatGLM、Qwen 等模型的本地知识库问答项目（原 Langchain-ChatGLM） | https://github.com/chatchat-space/Langchain-Chatchat |
| QAnything | 网易有道开源的本地知识库问答系统，采用 Embedding 加 Rerank 的两阶段检索 | https://github.com/netease-youdao/QAnything |
| WrenAI | 开源 GenBI 智能体，借助语义层将自然语言问题转为可信的 SQL 查询与图表 | https://github.com/Canner/WrenAI |
| DocsGPT | 可私有化部署的 AI 平台，支持文档分析、企业搜索、深度研究与 Agent 构建 | https://github.com/arc53/DocsGPT |
| LocalGPT | 在本地设备上与文档对话的私有 RAG 方案，数据全程不离开本机 | https://github.com/PromtEngineer/localGPT |
| PandaWiki | 长亭科技开源的 AI 知识库搭建系统，可构建产品与技术文档、FAQ 并提供智能问答 | https://github.com/chaitin/PandaWiki |
| PipesHub | 开源企业搜索与上下文层，连接 Slack、Drive、Jira 等数据源并保留权限控制 | https://github.com/pipeshub-ai/pipeshub-ai |
| Yuxi（语析） | 可私有部署的多租户知识智能体平台，统一 RAG、知识图谱、多智能体与权限管理 | https://github.com/xerrors/Yuxi |
| Vanna | 基于 RAG 的 Text-to-SQL 框架，让用户用自然语言与数据库对话（已归档） | https://github.com/vanna-ai/vanna |
| Verba | Weaviate 推出的开源 RAG 聊天应用，开箱即用地对文档进行检索问答（已归档） | https://github.com/weaviate/Verba |

### 文档解析与 OCR

| 名称 | 描述 | 链接 |
|------|------|------|
| MinerU | 上海 AI 实验室开源的文档解析工具，将 PDF 与 Office 文档转为适合 LLM 的 Markdown 与 JSON | https://github.com/opendatalab/MinerU |
| Docling | IBM 发起、现由 LF AI & Data 托管的文档转换工具，擅长 PDF 版面与表格解析 | https://github.com/docling-project/docling |
| MarkItDown | 微软开源的轻量工具，将 PDF、Office、图片与音频等文件转换为 Markdown | https://github.com/microsoft/markitdown |
| PaddleOCR | 百度飞桨 OCR 与文档解析工具包，提供 PP-OCR 与 PaddleOCR-VL 等模型，支持多语言 | https://github.com/PaddlePaddle/PaddleOCR |
| Marker | Datalab 开源的 PDF 转 Markdown 与 JSON 工具，可结合 LLM 提升表格与公式精度 | https://github.com/datalab-to/marker |
| olmOCR | AI2 开源的 PDF 线性化工具包，基于视觉语言模型将文档转为干净文本，用于 LLM 训练数据 | https://github.com/allenai/olmocr |
| DeepSeek-OCR | DeepSeek 提出的上下文光学压缩模型，用少量视觉 Token 编码长文本并完成 OCR | https://github.com/deepseek-ai/DeepSeek-OCR |
| DeepSeek-OCR 2 | DeepSeek-OCR 的第二代版本，提出视觉因果流（Visual Causal Flow）编码方法 | https://github.com/deepseek-ai/DeepSeek-OCR-2 |
| dots.ocr | 基于单一视觉语言模型的多语言文档版面解析模型，统一完成版面检测与内容识别 | https://github.com/studio-dots-ai/dots.ocr |
| MonkeyOCR | 华中科大开源的轻量多模态文档解析模型，采用结构-识别-关系三元组范式 | https://github.com/Yuliang-Liu/MonkeyOCR |
| Dolphin | 字节跳动开源的文档图像解析模型，先分析版面再以异构锚点提示并行解析各元素 | https://github.com/bytedance/Dolphin |
| Chandra | Datalab 推出的 OCR 模型，可处理复杂表格、表单与手写内容并保留完整版面 | https://github.com/datalab-to/chandra |
| GLM-OCR | 智谱开源的多模态 OCR 模型，基于 GLM-V 架构，擅长公式与表格识别及信息抽取 | https://github.com/zai-org/GLM-OCR |
| HunyuanOCR | 腾讯混元开源的轻量端到端 OCR 模型，统一文档解析、文字定位、信息抽取与图片翻译 | https://github.com/Tencent-Hunyuan/HunyuanOCR |
| Surya | 多语言文档 OCR 工具包，支持 90 余种语言的文字识别、版面分析、阅读顺序与表格识别 | https://github.com/datalab-to/surya |
| Unstructured | 开源文档 ETL 库，将 PDF、HTML、Word 等多种格式转为可供 LLM 使用的结构化数据 | https://github.com/Unstructured-IO/unstructured |
| LlamaParse | LlamaIndex 推出的云端文档解析与知识管理服务，提供 LlamaParse 等 SDK | https://github.com/run-llama/llama_cloud_services |
| LiteParse | LlamaIndex 开源的轻量本地 PDF 解析器，输出带坐标框的空间文本，无需云端依赖 | https://github.com/run-llama/liteparse |
| OpenDataLoader PDF | 面向 AI 的开源 PDF 解析器，输出 Markdown 与 JSON，并支持 PDF 无障碍化自动处理 | https://github.com/opendataloader-project/opendataloader-pdf |
| PDF-Extract-Kit | MinerU 团队的 PDF 内容提取工具箱，集成版面检测、公式与表格识别等模型 | https://github.com/opendatalab/PDF-Extract-Kit |
| Nougat | Meta 开源的学术论文 OCR 模型，将 PDF 转为包含 LaTeX 公式的 Markdown | https://github.com/facebookresearch/nougat |
| GOT-OCR2.0 | 通用 OCR 理论（OCR-2.0）的端到端模型实现，统一识别文本、公式、表格与乐谱等内容 | https://github.com/Ucas-HaoranWei/GOT-OCR2.0 |
| Zerox | 基于视觉大模型的 OCR 与文档抽取工具，将 PDF 页面转为图片后交由 VLM 生成 Markdown | https://github.com/getomni-ai/zerox |
| Xberg（原 Kreuzberg） | 多语言文档智能引擎，可从 100 余种格式中提取文本、表格与元数据，内置 OCR | https://github.com/xberg-io/xberg |
| Unstract | LLM 驱动的非结构化数据抽取平台，可将文档处理流程部署为 API 或 ETL 管道 | https://github.com/Zipstack/unstract |
| PyMuPDF4LLM | PyMuPDF 的 LLM 扩展，快速将 PDF 转为 Markdown 并保留标题、表格等结构 | https://github.com/pymupdf/pymupdf4llm |
| OCRmyPDF | 为扫描版 PDF 添加可搜索 OCR 文本层的命令行工具，基于 Tesseract | https://github.com/ocrmypdf/OCRmyPDF |

### 网页抓取与数据接入

| 名称 | 描述 | 链接 |
|------|------|------|
| Firecrawl | 将网站抓取并转为 LLM 可用的 Markdown 或结构化数据的 API 服务，支持自托管 | https://github.com/firecrawl/firecrawl |
| Crawl4AI | 面向 LLM 的开源网页爬虫，输出干净的 Markdown，支持异步并发与结构化抽取 | https://github.com/unclecode/crawl4ai |
| Jina Reader | 在 URL 前加前缀即可将网页转为 LLM 友好文本的服务，同时支持网页搜索 | https://github.com/jina-ai/reader |
| ScrapeGraphAI | 基于 LLM 与图流程的 Python 爬虫库，用自然语言描述即可抽取网页信息 | https://github.com/ScrapeGraphAI/Scrapegraph-ai |
| Crawlee | Apify 开源的 Node.js 网页爬取与浏览器自动化库，适合构建稳定的大规模爬虫 | https://github.com/apify/crawlee |
| Crawlee for Python | Crawlee 的 Python 版本，可为 AI、LLM 与 RAG 提取数据，支持 BeautifulSoup 与 Playwright | https://github.com/apify/crawlee-python |
| GPT Crawler | Builder.io 开源的网站爬取工具，可生成知识文件用于创建自定义 GPT | https://github.com/BuilderIO/gpt-crawler |
| Maxun | 开源无代码网页数据提取平台，可将任意网站转为结构化 API | https://github.com/getmaxun/maxun |
| Spider | Rust 编写的高性能网页爬虫，低延迟抓取网页数据并可直接输出给 AI 使用 | https://github.com/spider-rs/spider |
| Trafilatura | Python 网页正文与元数据提取工具，广泛用于构建 LLM 预训练语料 | https://github.com/adbar/trafilatura |
| LLM Scraper | TypeScript 库，借助 LLM 将任意网页转为符合 Schema 的结构化数据 | https://github.com/mishushakov/llm-scraper |
| Airbyte | 开源数据集成平台，提供大量连接器，将 API、数据库与文件数据同步到数仓或向量库 | https://github.com/airbytehq/airbyte |

### Embedding 与 Rerank 模型

| 名称 | 描述 | 链接 |
|------|------|------|
| Sentence Transformers | 主流文本向量框架，可便捷使用与训练 Embedding、Cross-Encoder 重排与稀疏编码模型 | https://github.com/huggingface/sentence-transformers |
| BGE（FlagEmbedding） | 智源开源的 BGE 系列检索模型库，涵盖多语言 Embedding、Reranker 与 BGE-M3 | https://github.com/FlagOpen/FlagEmbedding |
| Qwen3-Embedding | 通义千问推出的 Qwen3 文本 Embedding 与 Reranker 系列模型，支持多语言与多种尺寸 | https://github.com/QwenLM/Qwen3-Embedding |
| Qwen3-VL-Embedding | 基于 Qwen3-VL 的多模态 Embedding 与 Reranker 模型，支持文本、图像、截图与视频检索 | https://github.com/QwenLM/Qwen3-VL-Embedding |
| Jina Embeddings | Jina AI 推出的多语言、多模态向量模型系列，同时提供 Reranker 与 API 服务 | https://jina.ai/embeddings/ |
| GTE | 阿里通义实验室的 GTE 通用文本向量模型系列，包含多语言 Embedding 与 Reranker | https://huggingface.co/Alibaba-NLP |
| E5 | 微软提出的 E5 文本向量模型系列，基于弱监督对比学习预训练，含多语言版本 | https://github.com/microsoft/unilm/tree/master/e5 |
| Nomic Embed | Nomic 开源的对比学习训练库，提供 Nomic Embed 系列完全开放向量模型的训练代码 | https://github.com/nomic-ai/contrastors |
| BCEmbedding | 网易有道开源的中英双语 Embedding 与 Reranker 模型，是 QAnything 的检索底座 | https://github.com/netease-youdao/BCEmbedding |
| text2vec | 中文文本向量化工具库，实现 Word2Vec、SBERT、CoSENT 等表示方法并提供中文向量模型 | https://github.com/shibing624/text2vec |
| Cohere Embed | Cohere 的商用多语言、多模态向量模型，面向企业搜索与 RAG 场景 | https://cohere.com/embed |
| Cohere Rerank | Cohere 的商用重排序模型，可在现有检索系统之上提升搜索相关性 | https://cohere.com/rerank |
| Voyage AI | 专注检索场景的商用 Embedding 与 Reranker 模型提供商，现隶属 MongoDB | https://www.voyageai.com/ |
| Text Embeddings Inference | Hugging Face 开源的 Embedding 与 Reranker 高性能推理服务，支持主流开源模型 | https://github.com/huggingface/text-embeddings-inference |
| Infinity Embedding | 高吞吐、低延迟的 Embedding、Reranker 与 CLIP 模型推理服务，兼容 OpenAI API | https://github.com/michaelfeil/infinity |
| FastEmbed | Qdrant 推出的轻量 Embedding 库，基于 ONNX Runtime，无需 GPU 即可快速生成向量 | https://github.com/qdrant/fastembed |
| ColBERT | 斯坦福提出的后期交互检索模型，以 Token 级向量匹配兼顾检索效率与精度 | https://github.com/stanford-futuredata/ColBERT |
| RAGatouille | 让 ColBERT 等后期交互检索模型易于在 RAG 管道中使用与训练的库 | https://github.com/AnswerDotAI/RAGatouille |
| ColPali | 基于视觉语言模型的文档检索方法，直接对页面图像编码，免去 OCR 与版面解析 | https://github.com/illuin-tech/colpali |
| rerankers | 轻量统一的重排序 API 库，一套接口调用各类 Cross-Encoder 与 LLM 重排模型 | https://github.com/AnswerDotAI/rerankers |
| Model2Vec | 将句向量模型蒸馏为静态向量模型的工具，模型体积小、推理速度快 | https://github.com/MinishLab/model2vec |
| LLM2Vec | 将仅解码器 LLM 转换为文本编码器的方法与代码，可获得高质量文本向量 | https://github.com/McGill-NLP/llm2vec |
| RAG-Retrieval | 统一的 RAG 检索模型微调框架，支持 Embedding、ColBERT 与 Reranker 的训练与推理 | https://github.com/NovaSearch-Team/RAG-Retrieval |
| FlashRank | 超轻量重排序库，无需 PyTorch 即可在 CPU 上运行 Pairwise 与 Listwise 重排 | https://github.com/PrithivirajDamodaran/FlashRank |
| BM25S | 基于 NumPy 与 Numba 的高速 BM25 检索库，可作为混合检索中的稀疏召回组件 | https://github.com/xhluca/bm25s |
| Pyserini | 滑铁卢大学开源的可复现信息检索工具包，支持稀疏与稠密检索 | https://github.com/castorini/pyserini |

### 向量数据库与检索引擎

| 名称 | 描述 | 链接 |
|------|------|------|
| Milvus | 高性能云原生分布式向量数据库，支持多种 ANN 索引与混合检索，适合大规模部署 | https://github.com/milvus-io/milvus |
| FAISS | Meta 开源的高效向量相似度搜索与聚类库，支持 GPU 加速，是众多向量库的底层 | https://github.com/facebookresearch/faiss |
| Qdrant | Rust 编写的高性能向量数据库与搜索引擎，支持丰富的过滤条件与混合检索 | https://github.com/qdrant/qdrant |
| Chroma | 轻量级开源向量数据库与 AI 搜索基础设施，API 简洁、开发友好，适合快速原型 | https://github.com/chroma-core/chroma |
| Weaviate | 开源 AI 原生向量数据库，内置向量化模块，支持多模态语义检索与 BM25 混合检索 | https://github.com/weaviate/weaviate |
| pgvector | PostgreSQL 的向量相似度搜索扩展，支持 HNSW 与 IVFFlat 索引 | https://github.com/pgvector/pgvector |
| LanceDB | 基于 Lance 列式格式的嵌入式多模态检索库，无需独立服务即可存储与检索向量 | https://github.com/lancedb/lancedb |
| Elasticsearch | 分布式 RESTful 搜索引擎，支持全文检索、向量检索与混合排序 | https://github.com/elastic/elasticsearch |
| OpenSearch | 源自 Elasticsearch 的开源搜索与分析套件，由 Linux 基金会托管，支持 k-NN 向量检索 | https://github.com/opensearch-project/OpenSearch |
| Vespa | 源自 Yahoo 的开源 AI 搜索平台，支持向量、全文与结构化数据的实时检索与排序 | https://github.com/vespa-engine/vespa |
| Redis | 内存数据库，提供向量搜索与语义缓存能力，可用作低延迟的 RAG 检索层 | https://github.com/redis/redis |
| Pinecone | 全托管的商用 Serverless 向量数据库，开箱即用，适合生产级检索应用 | https://www.pinecone.io/ |
| Zilliz Cloud | Milvus 团队推出的全托管向量数据库云服务，免运维支持大规模向量检索 | https://zilliz.com/cloud |
| Meilisearch | Rust 编写的快速搜索引擎 API，支持 AI 混合检索与即时搜索体验 | https://github.com/meilisearch/meilisearch |
| Typesense | 开源快速搜索引擎，可替代 Algolia 与 Pinecone，支持向量与语义检索 | https://github.com/typesense/typesense |
| Infinity | RAGFlow 团队开源的 AI 原生数据库，融合稠密向量、稀疏向量、张量与全文多路召回 | https://github.com/infiniflow/infinity |
| VectorChord | PostgreSQL 向量检索扩展，pgvecto.rs 的继任者，采用 RaBitQ 压缩降低存储成本 | https://github.com/supervc-stack/VectorChord |
| pgvectorscale | Timescale 开源的 pgvector 增强扩展，基于 DiskANN 索引提升大规模向量检索性能 | https://github.com/timescale/pgvectorscale |
| ParadeDB | 基于 PostgreSQL 的搜索数据库，提供 BM25 全文检索、向量检索与聚合分析 | https://github.com/paradedb/paradedb |
| sqlite-vec | 可在任意平台运行的 SQLite 向量搜索扩展，适合端侧与嵌入式场景 | https://github.com/asg017/sqlite-vec |
| Zvec | 阿里巴巴开源的轻量进程内向量数据库，可直接嵌入应用使用 | https://github.com/alibaba/zvec |
| seekdb | OceanBase 开源的 AI 原生搜索数据库，在单一引擎中统一向量、全文与结构化数据检索 | https://github.com/oceanbase/seekdb |
| Vald | 雅虎日本开源的云原生分布式向量搜索引擎，基于 NGT 近似最近邻算法 | https://github.com/vdaas/vald |
| Deep Lake | 面向 AI 的多模态数据湖与向量存储，同时支持检索与模型训练数据加载 | https://github.com/activeloopai/deeplake |
| Tantivy | 受 Lucene 启发的 Rust 全文搜索引擎库，常用于构建 BM25 检索组件 | https://github.com/quickwit-oss/tantivy |
| hnswlib | HNSW 近似最近邻算法的高效 C++ 与 Python 实现，仅需头文件即可使用 | https://github.com/nmslib/hnswlib |
| Annoy | Spotify 开源的近似最近邻检索库，基于随机投影树，索引可通过内存映射共享 | https://github.com/spotify/annoy |
| USearch | 轻量高性能的单文件向量检索与聚类引擎，提供多语言绑定 | https://github.com/unum-cloud/USearch |
| DiskANN | 微软开源的磁盘图索引向量检索库，支持数据实时更新与带过滤的检索 | https://github.com/microsoft/DiskANN |
| ScaNN | Google 开源的高效向量相似度搜索库，采用各向异性向量量化技术 | https://github.com/google-research/google-research/tree/master/scann |

### RAG 学习资源

| 名称 | 类型 | 描述 | 链接 |
|------|------|------|------|
| RAG Techniques | 教程 | 系统展示各类高级 RAG 技术的 Jupyter Notebook 教程集，每种技术附原理讲解与实现 | https://github.com/NirDiamant/RAG_Techniques |
| All-in-RAG | 中文教程 | Datawhale 出品的 RAG 技术全栈中文教程，覆盖数据处理、索引、检索、生成与评估 | https://github.com/datawhalechina/all-in-rag |
| 动手学大模型应用开发（LLM Universe） | 中文教程 | Datawhale 面向小白开发者的大模型应用开发教程，以个人知识库助手项目讲解 RAG 全流程 | https://github.com/datawhalechina/llm-universe |
| Contextual Retrieval | 技术博客 | Anthropic 提出的上下文检索方法，为文本块补充上下文后再做嵌入与 BM25 索引 | https://www.anthropic.com/engineering/contextual-retrieval |
| bRAG-langchain | 教程 | 从基础到进阶的 RAG 实践 Notebook 系列，涵盖多查询、路由、索引与重排等技术 | https://github.com/bragai/bRAG-langchain |
| Agentic RAG for Dummies | 教程 | 基于 LangGraph 的模块化 Agentic RAG 入门项目，快速理解检索增强 Agent 的构建方法 | https://github.com/GiovanniPasq/agentic-rag-for-dummies |
| RAG Zero to Hero Guide | 学习指南 | 从基础到进阶的 RAG 学习路线，汇总相关概念、技术、论文与实践资源 | https://github.com/KalyanKS-NLP/rag-zero-to-hero-guide |
| RAG Time | 课程 | 微软推出的为期 5 周的 RAG 学习课程，包含视频讲解、示例代码与文档 | https://github.com/microsoft/rag-time |
| Pinecone RAG 系列教程 | 教程 | Pinecone 学习中心的 RAG 系列文章，讲解检索增强生成、Embedding 与重排序等主题 | https://www.pinecone.io/learn/series/rag/ |

---

## 💡 提示工程与上下文工程

> 收录提示设计、上下文组织、结构化生成与提示优化领域的权威指南和实用工具

### 权威指南

| 名称 | 描述 | 链接 |
|------|------|------|
| Prompt Engineering Guide | 系统整理提示技术、推理方法、应用案例与相关论文的开放指南 | https://www.promptingguide.ai/zh |
| OpenAI Prompt Engineering | OpenAI 官方提示工程最佳实践，涵盖指令、示例与外部知识 | https://platform.openai.com/docs/guides/prompt-engineering |
| Anthropic Prompt Engineering | Anthropic 官方提示设计教程，覆盖清晰指令、示例与思维链策略 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview |
| Google Prompt Design Strategies | Google Gemini 官方提示设计策略与常见模式说明 | https://ai.google.dev/gemini-api/docs/prompting-strategies |
| Context Engineering for AI Agents | Anthropic 关于智能体上下文筛选、压缩与持久化的工程指南 | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents |

### 提示库与学习资源

| 名称 | 描述 | 链接 |
|------|------|------|
| Prompts.chat | 社区维护的高质量提示模板集合，覆盖写作、开发与专业角色 | https://github.com/f/prompts.chat |
| Prompt Engineering Guide GitHub | DAIR.AI 维护的提示工程指南源码、课程与研究资料合集 | https://github.com/dair-ai/Prompt-Engineering-Guide |
| OpenAI Cookbook | OpenAI 官方示例集合，涵盖提示模式、工具调用与结构化输出 | https://github.com/openai/openai-cookbook |
| Claude Cookbooks | Anthropic 官方代码示例与提示模式，覆盖分类、检索和工具使用 | https://github.com/anthropics/claude-cookbooks |

### 提示编程与优化

| 名称 | 描述 | 链接 |
|------|------|------|
| DSPy | 将大模型提示与模块表示为可自动优化的声明式程序框架 | https://github.com/stanfordnlp/dspy |
| Guidance | 微软开源的生成控制语言，支持模板、约束解码与结构化输出 | https://github.com/guidance-ai/guidance |
| Outlines | 通过正则、语法和类型约束确保模型生成结构化内容的工具 | https://github.com/dottxt-ai/outlines |
| Mirascope | 以 Python 类型和函数组织提示、工具调用与大模型工作流 | https://github.com/Mirascope/mirascope |

---

## 🔥 模型训练与微调

> 收录大模型微调、分布式训练、偏好优化、训练加速与数据处理工具链

### 微调框架

| 名称 | 描述 | 链接 |
|------|------|------|
| LLaMA-Factory | 支持多模型、多任务与多种高效微调方法的一站式训练框架 | https://github.com/hiyouga/LlamaFactory |
| Axolotl | 以 YAML 配置驱动的大模型微调框架，支持多种架构与分布式训练 | https://github.com/axolotl-ai-cloud/axolotl |
| Unsloth | 通过定制内核降低大模型微调显存占用并提升训练速度 | https://github.com/unslothai/unsloth |
| ms-swift | ModelScope 开源的大模型与多模态模型训练、评测和部署框架 | https://github.com/modelscope/ms-swift |
| torchtune | PyTorch 官方原生大模型微调库，提供可组合训练配方 | https://github.com/meta-pytorch/torchtune |
| PEFT | Hugging Face 参数高效微调库，统一实现 LoRA 等主流方法 | https://github.com/huggingface/peft |

### 对齐与强化学习

| 名称 | 描述 | 链接 |
|------|------|------|
| TRL | Hugging Face 后训练库，支持 SFT、DPO、GRPO 与奖励模型训练 | https://github.com/huggingface/trl |
| verl | 灵活高效的大模型强化学习后训练框架，支持多种分布式后端 | https://github.com/verl-project/verl |
| OpenRLHF | 基于 Ray 与高性能推理引擎的大模型 RLHF 训练框架 | https://github.com/OpenRLHF/OpenRLHF |
| NeMo-Aligner | NVIDIA NeMo 生态中的大模型对齐工具，支持多种偏好优化算法（已归档） | https://github.com/NVIDIA/NeMo-Aligner |

### 分布式训练与加速

| 名称 | 描述 | 链接 |
|------|------|------|
| DeepSpeed | 微软开源的深度学习优化库，提供 ZeRO、并行训练与推理能力 | https://github.com/deepspeedai/DeepSpeed |
| Megatron-LM | NVIDIA 大规模 Transformer 训练框架，支持多维并行策略 | https://github.com/NVIDIA/Megatron-LM |
| ColossalAI | 提供多维并行、异构内存与大模型训练优化的分布式系统 | https://github.com/hpcaitech/ColossalAI |
| Liger Kernel | 面向大模型训练的 Triton 内核集合，降低显存并提升吞吐 | https://github.com/linkedin/Liger-Kernel |
| bitsandbytes | 提供低比特优化器和量化算子，广泛用于低显存微调 | https://github.com/bitsandbytes-foundation/bitsandbytes |

---

## 🚀 推理部署与 LLMOps

> 收录大模型推理引擎、本地运行、模型服务、网关与生产可观测工具

### 高性能推理引擎

| 名称 | 描述 | 链接 |
|------|------|------|
| vLLM | 采用 PagedAttention 的高吞吐大模型推理与 OpenAI 兼容服务引擎 | https://github.com/vllm-project/vllm |
| SGLang | 面向大模型与多模态模型的高性能结构化生成和服务框架 | https://github.com/sgl-project/sglang |
| TensorRT-LLM | NVIDIA 针对 GPU 优化的大模型推理库，支持量化与多卡并行 | https://github.com/NVIDIA/TensorRT-LLM |
| llama.cpp | 以 C++ 实现的跨平台本地推理引擎，广泛支持 GGUF 量化模型 | https://github.com/ggml-org/llama.cpp |
| MLC LLM | 基于机器学习编译技术将大模型部署到浏览器、移动端与 GPU | https://github.com/mlc-ai/mlc-llm |
| LMDeploy | OpenMMLab 开源的大模型压缩、推理与服务工具箱 | https://github.com/InternLM/lmdeploy |

### 本地运行与桌面工具

| 名称 | 描述 | 链接 |
|------|------|------|
| Ollama | 通过统一命令与模型库在本地快速运行主流开放模型 | https://ollama.com/ |
| LM Studio | 提供模型下载、对话和本地 OpenAI 兼容 API 的桌面应用 | https://lmstudio.ai/ |
| MLX LM | 面向 Apple Silicon 的大模型生成、量化与微调工具 | https://github.com/ml-explore/mlx-lm |
| llama-cpp-python | llama.cpp 的 Python 绑定与 OpenAI 兼容服务接口 | https://github.com/abetlen/llama-cpp-python |

### 服务化与网关

| 名称 | 描述 | 链接 |
|------|------|------|
| Text Generation Inference | Hugging Face 面向生产环境的大模型推理服务工具（已归档） | https://github.com/huggingface/text-generation-inference |
| LiteLLM | 以 OpenAI 兼容接口统一调用多家模型并提供代理网关 | https://github.com/BerriAI/litellm |
| BentoML | 将模型封装为可扩展在线服务并部署到云端或集群的平台 | https://github.com/bentoml/BentoML |
| KServe | Kubernetes 原生模型服务平台，支持弹性伸缩与多框架推理 | https://github.com/kserve/kserve |
| NVIDIA Triton | 支持多框架、多模型并发和动态批处理的推理服务器 | https://github.com/triton-inference-server/server |

### 可观测与 LLMOps

| 名称 | 描述 | 链接 |
|------|------|------|
| Langfuse | 开源大模型可观测平台，覆盖追踪、提示管理、评测与成本分析 | https://github.com/langfuse/langfuse |
| Phoenix | Arize 开源的 AI 可观测与评测平台，支持追踪和实验分析 | https://github.com/Arize-ai/phoenix |
| OpenLLMetry | 基于 OpenTelemetry 的大模型应用追踪与指标采集工具 | https://github.com/traceloop/openllmetry |
| Helicone | 面向大模型 API 的开源网关与可观测平台，支持缓存和成本分析 | https://github.com/Helicone/helicone |

---

## 📊 评测基准与排行榜

> 收录主流大模型排行榜、各能力维度评测基准与开源评测框架，帮助客观衡量、对比与选择模型

### 综合排行榜

> 单一榜单易受数据污染与刷榜影响，选型时建议交叉参考多个榜单

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| LMArena（原 Chatbot Arena） | LMArena | 基于真人匿名双盲对战投票的模型竞技场，按偏好评分排名，设文本、视觉、WebDev 等多个榜单 | https://lmarena.ai/ |
| Artificial Analysis | Artificial Analysis | 独立第三方评测平台，横向对比模型智能指数、输出速度与价格，并覆盖图像、语音模型 | https://artificialanalysis.ai/ |
| Scale SEAL 排行榜 | Scale AI | 基于私有评测集与专家评审的前沿模型榜单，降低数据污染与针对性刷榜的影响 | https://labs.scale.com/leaderboard |
| Epoch AI Benchmarking Hub | Epoch AI | 独立研究机构自行运行评测，持续追踪前沿模型在 GPQA、FrontierMath 等基准上的表现 | https://epoch.ai/benchmarks |
| LiveBench | Abacus.AI、NYU 等 | 定期更新题目以抵抗数据污染的综合基准，覆盖数学、编程、推理、语言与数据分析 | https://livebench.ai/ |
| OpenCompass 司南排行榜 | 上海人工智能实验室 | 基于 OpenCompass 评测体系定期发布的大语言模型与多模态模型榜单 | https://rank.opencompass.org.cn/ |
| FlagEval 天秤 | 北京智源人工智能研究院 | 智源推出的大模型评测体系与开放平台，提供语言、多模态等多类模型榜单 | https://flageval.baai.ac.cn/ |
| OpenRouter Rankings | OpenRouter | 按 OpenRouter 平台真实 Token 调用量统计的模型与应用排行，反映实际采用情况 | https://openrouter.ai/rankings |
| Open LLM Leaderboard | Hugging Face | 基于 IFEval、BBH、MATH、GPQA、MuSR、MMLU-Pro 的开源模型自动评测榜，现已退役 | https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard |

### 通用能力基准

| 基准 | 机构 | 描述 | 链接 |
|------|------|------|------|
| MMLU | UC Berkeley | 覆盖 57 个学科的多项选择题知识与推理基准，长期作为通用能力的标准测试 | https://github.com/hendrycks/test |
| MMLU-Pro | TIGER-Lab | MMLU 的增强版，选项扩充至 10 个并加入更多推理型题目，区分度更高 | https://github.com/TIGER-AI-Lab/MMLU-Pro |
| GPQA | NYU 等 | 由领域专家编写、难以靠搜索作答的研究生级生物、物理、化学问答，常用 Diamond 子集 | https://github.com/idavidrein/gpqa |
| Humanity's Last Exam（HLE） | CAIS、Scale AI | 由全球学科专家贡献的约 2500 道前沿难题，衡量模型逼近人类专家知识上限的程度 | https://github.com/centerforaisafety/hle |
| SimpleQA | OpenAI | 答案唯一且可核验的短事实问答基准，专门衡量模型事实准确性与幻觉倾向 | https://openai.com/index/introducing-simpleqa |
| IFEval | Google | 以可程序化验证的格式约束检测模型指令遵循能力，被各大榜单广泛采用 | https://github.com/google-research/google-research/tree/master/instruction_following_eval |
| MT-Bench | LMSYS | 80 道多轮开放问题配合强模型裁判打分，LLM-as-a-Judge 评测的代表性工作 | https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge |
| Arena-Hard-Auto | LMArena | 从竞技场真实提问中筛选高难题目并由强模型自动评审，与真人排名高度相关 | https://github.com/lmarena/arena-hard-auto |
| AlpacaEval | Stanford Tatsu Lab | 基于 LLM 自动评审的指令遵循评测，提供长度控制胜率以降低冗长偏好 | https://github.com/tatsu-lab/alpaca_eval |
| GDPval | OpenAI | 覆盖 44 种职业真实工作产出的经济价值任务评测，由行业专家盲评对比 | https://openai.com/index/gdpval/ |
| HealthBench | OpenAI | 由数百名医生编写评分细则的医疗对话评测，覆盖多国真实健康场景 | https://openai.com/index/healthbench |
| SuperGPQA | 字节跳动 Seed 等 | 覆盖 285 个研究生学科的大规模知识与推理基准 | https://github.com/SuperGPQA/SuperGPQA |
| TruthfulQA | Oxford、OpenAI | 检验模型是否复述常见误解与错误观念的真实性问答基准 | https://github.com/sylinrl/TruthfulQA |
| RewardBench | Ai2 | 评测奖励模型在对话、安全、推理等偏好判断上的准确性，已推出 RewardBench 2 | https://github.com/allenai/reward-bench |
| Vectara 幻觉排行榜 | Vectara | 用 HHEM 模型衡量各大模型在摘要任务中的幻觉率并持续更新 | https://github.com/vectara/hallucination-leaderboard |
| BIG-bench | Google 等 | 由数百位研究者协作贡献 200 余项任务的大型基准（已归档） | https://github.com/google/BIG-bench |

### 推理与数学基准

| 基准 | 机构 | 描述 | 链接 |
|------|------|------|------|
| ARC-AGI | ARC Prize 基金会 | François Chollet 提出的抽象推理网格谜题，ARC Prize 持续推出 ARC-AGI-2、ARC-AGI-3 等新版本 | https://arcprize.org/ |
| FrontierMath | Epoch AI | 由数学家原创的未公开研究级难题集，答案可自动验证，用于衡量前沿数学能力 | https://epoch.ai/frontiermath |
| MathArena | ETH Zurich | 在 AIME、HMMT 等新近举办的竞赛上即时评测模型，避免训练数据污染 | https://github.com/eth-sri/matharena |
| MATH | UC Berkeley | 12500 道高中竞赛数学题及逐步解答，其 MATH-500 子集被广泛引用 | https://github.com/hendrycks/math |
| GSM8K | OpenAI | 8500 道小学数学应用题，曾是多步算术推理的标准基准（已归档） | https://github.com/openai/grade-school-math |
| Omni-MATH | 北京大学、阿里巴巴 | 4000 余道奥赛级数学题，按子领域与难度细分的数学推理基准 | https://github.com/KbsdJames/Omni-MATH |
| OlympiadBench | 清华大学等 | 奥林匹克级数学与物理竞赛题组成的中英双语多模态推理基准 | https://github.com/OpenBMB/OlympiadBench |
| BIG-Bench Hard（BBH） | Google、Stanford | 从 BIG-bench 中挑选的 23 项高难任务，常用于检验思维链推理效果 | https://github.com/suzgunmirac/BIG-Bench-Hard |
| GSM-Symbolic | Apple | 将 GSM8K 题目模板化生成变体，检验数学推理在数值与条件扰动下的稳健性 | https://github.com/apple-aiml-research/ml-gsm-symbolic |
| PutnamBench | UT Austin | 基于 Putnam 竞赛题的形式化定理证明基准，提供 Lean 4、Isabelle、Coq 三种形式化版本 | https://github.com/trishullab/PutnamBench |
| miniF2F | OpenAI 等 | 取材于 AMC、AIME、IMO 的跨形式系统定理证明基准（已归档） | https://github.com/openai/miniF2F |

### 代码与软件工程基准

| 基准 | 机构 | 描述 | 链接 |
|------|------|------|------|
| SWE-bench | Princeton、Stanford | 要求模型修复真实 GitHub 仓库 Issue 并通过测试的软件工程基准，含 Multimodal 等变体 | https://github.com/SWE-bench/SWE-bench |
| SWE-bench Verified | OpenAI | 经人工逐题审核的 500 题 SWE-bench 子集，剔除描述不清或测试不当的题目 | https://openai.com/index/introducing-swe-bench-verified |
| SWE-bench Pro | Scale AI | 面向长周期企业级任务的高难软件工程基准，含公开集与商业私有集 | https://github.com/scaleapi/SWE-bench_Pro-os |
| Terminal-Bench | Stanford、Laude Institute | 在真实终端环境中评测智能体完成编译、运维、数据处理等复杂任务的能力 | https://www.tbench.ai/ |
| Multi-SWE-bench | 字节跳动 Seed | 覆盖 Java、TypeScript、Go、Rust、C++ 等多种语言的 Issue 修复基准 | https://github.com/multi-swe-bench/multi-swe-bench |
| HumanEval | OpenAI | 164 道手写 Python 函数补全题与 pass@k 指标，代码生成评测的经典起点 | https://github.com/openai/human-eval |
| MBPP | Google | 约 1000 道入门级 Python 编程题，与 HumanEval 并列的经典代码基准 | https://github.com/google-research/google-research/tree/master/mbpp |
| EvalPlus | UIUC | 大幅扩充 HumanEval 与 MBPP 的测试用例（HumanEval+、MBPP+），更严格地检验代码正确性 | https://github.com/evalplus/evalplus |
| LiveCodeBench | UC Berkeley、MIT 等 | 持续从 LeetCode、AtCoder、Codeforces 收集新题，按发布时间窗口规避数据污染 | https://github.com/LiveCodeBench/LiveCodeBench |
| LiveCodeBench Pro | NYU 等 | 基于 Codeforces、ICPC、IOI 等竞赛题的高难算法编程基准与评测工具 | https://github.com/GavinZhengOI/LiveCodeBench-Pro |
| Aider Polyglot 排行榜 | Aider | 用 225 道 Exercism 多语言练习题评测模型代码编辑能力的排行榜 | https://aider.chat/docs/leaderboards |
| SWE-Lancer | OpenAI | 基于 Upwork 上 1400 余项真实自由职业软件任务、按实际报酬计价的评测 | https://github.com/openai/frontier-evals/tree/main/project/swelancer |
| MLE-bench | OpenAI | 选取 75 个 Kaggle 竞赛，评估智能体完成机器学习工程任务的能力 | https://github.com/openai/mle-bench |
| KernelBench | Stanford | 评测模型编写高效 GPU 内核的能力，同时衡量正确性与相对 PyTorch 的加速比 | https://github.com/ScalingIntelligence/KernelBench |
| BigCodeBench | BigCode | 要求组合调用多种第三方库完成实际编程任务的代码生成基准（已归档） | https://github.com/bigcode-project/bigcodebench |
| Spider 2.0 | 香港大学 XLANG Lab | 面向真实企业级数据库工作流的 Text-to-SQL 智能体基准 | https://github.com/xlang-ai/Spider2 |
| DS-1000 | 香港大学等 | 覆盖 NumPy、Pandas 等 7 个 Python 库的 1000 道数据科学代码题 | https://github.com/xlang-ai/DS-1000 |
| SciCode | UIUC 等 | 由科学家编写的科研代码生成基准，覆盖物理、化学、生物、数学等学科 | https://github.com/scicode-bench/SciCode |

### 智能体与工具调用基准

| 基准 | 机构 | 描述 | 链接 |
|------|------|------|------|
| GAIA | Meta、Hugging Face | 需要组合推理、多模态理解与网页浏览等工具的通用 AI 助手基准 | https://huggingface.co/spaces/gaia-benchmark/leaderboard |
| Gaia2 / ARE | Meta | Meta 智能体研究环境 ARE 及 Gaia2 基准，在动态演化场景中评测多步推理与适应能力 | https://github.com/facebookresearch/meta-agents-research-environments |
| τ²-bench | Sierra | τ-bench 升级版，模拟用户与智能体在航空、零售、电信等领域交互，以 pass^k 评测工具调用与策略遵循的可靠性 | https://github.com/sierra-research/tau2-bench |
| BFCL | UC Berkeley | 伯克利函数调用排行榜，覆盖多语言、并行、多轮及智能体式函数调用 | https://gorilla.cs.berkeley.edu/leaderboard.html |
| BrowseComp | OpenAI | 1266 道需深度网页检索才能找到答案的难题，用于评测浏览与深度研究智能体 | https://openai.com/index/browsecomp |
| OSWorld | 香港大学 XLANG Lab | 在真实操作系统环境中评测多模态智能体完成开放式电脑操作任务 | https://github.com/xlang-ai/OSWorld |
| WebArena | CMU | 自托管电商、论坛、代码托管等真实网站环境的网页智能体基准，另有多模态扩展 VisualWebArena | https://github.com/web-arena-x/webarena |
| AgentBench | 清华大学、智谱 | 覆盖操作系统、数据库、知识图谱、网页等 8 类环境的 LLM 智能体综合基准 | https://github.com/THUDM/AgentBench |
| AppWorld | Stony Brook 等 | 模拟 9 个日常应用及数百个 API 的可控世界，评测编程式交互智能体 | https://github.com/StonyBrookNLP/appworld |
| Mind2Web | 俄亥俄州立大学 | 来自 137 个真实网站的通用网页智能体数据集与基准，另有在线版与 Mind2Web 2 | https://github.com/OSU-NLP-Group/Mind2Web |
| ToolBench | OpenBMB | 收集 16000 余个真实 RESTful API 的工具学习数据集，附 ToolEval 自动评测 | https://github.com/OpenBMB/ToolBench |
| AndroidWorld | Google | 在真实 Android 模拟器中动态生成任务的移动端智能体评测环境 | https://github.com/google-research/android_world |
| TheAgentCompany | CMU | 模拟软件公司办公环境，评测智能体完成真实职场任务的能力 | https://github.com/TheAgentCompany/TheAgentCompany |
| Toolathlon | 香港科技大学 | 基于 600 多种真实软件工具的长程任务基准，评测语言智能体的通用工具使用 | https://github.com/hkust-nlp/Toolathlon |
| MCP-Universe | Salesforce | 基于真实 MCP 服务器的智能体评测与训练框架，覆盖导航、金融分析、代码仓库管理等场景 | https://github.com/SalesforceAIResearch/MCP-Universe |
| MCPMark | EvalSys | 对模型与智能体在真实 MCP 场景中的使用能力进行压力测试的基准 | https://github.com/eval-sys/mcpmark |
| BrowserGym | ServiceNow | 统一 WebArena、VisualWebArena、WorkArena 等网页智能体基准的 Gym 式评测环境 | https://github.com/ServiceNow/BrowserGym |
| DeepResearch Bench | 中国科学技术大学等 | 由领域专家设计的博士级研究任务集，从报告质量与引用准确性评测深度研究智能体 | https://github.com/Ayanami0730/deep_research_bench |
| BrowseComp-Plus | 滑铁卢大学等 | 使用固定语料库的 BrowseComp 变体，便于公平、可复现地评测深度研究智能体 | https://github.com/texttron/BrowseComp-Plus |
| SkillsBench | BenchFlow | 评测 Agent Skills 的实际效果以及智能体调用技能完成任务的能力 | https://github.com/benchflow-ai/skillsbench |

### 多模态与长上下文基准

| 基准 | 机构 | 描述 | 链接 |
|------|------|------|------|
| MMMU | OSU、Waterloo 等 | 覆盖 30 个学科的大学水平多学科多模态理解与推理基准，另有 MMMU-Pro | https://github.com/MMMU-Benchmark/MMMU |
| OpenVLM Leaderboard | OpenCompass | 基于 VLMEvalKit 汇总多个多模态基准成绩的视觉语言模型排行榜 | https://huggingface.co/spaces/opencompass/open_vlm_leaderboard |
| MathVista | UCLA 等 | 融合视觉理解与数学推理的多模态数学基准 | https://github.com/lupantech/MathVista |
| MATH-Vision | 香港中文大学 MMLab | 取材于真实数学竞赛的多模态数学推理题集，按学科与难度分级 | https://github.com/mathllm/MATH-V |
| Video-MME | 中国科学技术大学、厦门大学等 | 覆盖短、中、长视频及字幕、音频信息的综合视频理解基准，另有 Video-MME-v2 | https://github.com/MME-Benchmarks/Video-MME |
| MMBench | 上海人工智能实验室 | 中英双语多模态能力细粒度评测，采用循环评估策略提升结果稳健性 | https://github.com/open-compass/MMBench |
| MMStar | 中国科学技术大学、上海人工智能实验室 | 人工精选 1500 道必须依赖视觉信息作答的样本，减少数据泄漏影响 | https://github.com/MMStar-Benchmark/MMStar |
| MM-Vet | 新加坡国立大学等 | 评测识别、OCR、知识、空间感知、语言生成与数学等整合能力的开放式基准 | https://github.com/yuweihao/MM-Vet |
| OCRBench | 华中科技大学 | 评测多模态大模型文字识别与文档理解能力的 OCR 基准 | https://github.com/Yuliang-Liu/MultimodalOCR |
| HallusionBench | 马里兰大学 | 诊断视觉语言模型语言幻觉与视觉错觉问题的图文推理基准 | https://github.com/tianyi-lab/HallusionBench |
| VBench | 南洋理工大学、上海人工智能实验室 | 将视频生成质量拆解为多个细分维度的视频生成模型评测套件 | https://github.com/Vchitect/VBench |
| GenEval | 华盛顿大学 | 借助目标检测检查物体、数量、颜色、位置等组合生成能力的文生图评测框架 | https://github.com/djghosh13/geneval |
| VoiceBench | 新加坡国立大学等 | 评测基于 LLM 的语音助手在多样化语音输入下的表现 | https://github.com/MatthewCYM/VoiceBench |
| Open ASR Leaderboard | Hugging Face | 统一评测开源与商用语音识别模型准确率和速度的排行榜 | https://github.com/huggingface/open_asr_leaderboard |
| RULER | NVIDIA | 可配置序列长度与任务复杂度的合成长上下文基准，衡量模型真实有效上下文长度 | https://github.com/NVIDIA/RULER |
| LongBench | 清华大学、智谱 | 中英双语长文本理解基准，LongBench v2 聚焦长上下文深度理解与推理 | https://github.com/THUDM/LongBench |
| Needle In A Haystack | Greg Kamradt | 在长文本不同位置插入「针」检验信息检索能力的大海捞针压力测试 | https://github.com/gkamradt/needle-in-a-haystack |
| OpenAI-MRCR | OpenAI | 多轮共指消解长上下文数据集，要求模型在大量相似对话中定位指定的目标回复 | https://huggingface.co/datasets/openai/mrcr |
| HELMET | Princeton | 覆盖 RAG、引用生成、重排序、长文档问答等应用任务的长上下文评测 | https://github.com/princeton-nlp/HELMET |
| MTEB | MTEB 社区 | 覆盖检索、聚类、分类等大量任务的多语言文本嵌入基准与排行榜 | https://github.com/embeddings-benchmark/mteb |

### 中文评测基准

| 基准 | 机构 | 描述 | 链接 |
|------|------|------|------|
| SuperCLUE | CLUE 团队 | 中文通用大模型综合性测评基准，定期发布中文大模型榜单与专项测评 | https://github.com/CLUEbenchmark/SuperCLUE |
| C-Eval | 上海交大、清华、港科大等 | 13948 道题覆盖 52 个学科与四个难度级别的中文基础模型评测套件 | https://github.com/hkust-nlp/ceval |
| CMMLU | MBZUAI 等 | 覆盖 67 个主题、包含大量中国特有知识的中文多任务语言理解基准 | https://github.com/haonan-li/CMMLU |
| GAOKAO-Bench | 复旦大学 OpenLMLab | 以历年高考真题评测大模型语言理解与逻辑推理能力 | https://github.com/OpenLMLab/GAOKAO-Bench |
| AGIEval | Microsoft | 基于高考、司法考试、SAT、LSAT 等人类标准化考试的中英双语评测基准 | https://github.com/ruixiangcui/AGIEval |
| ReLE 中文大模型能力评测 | 非线智能 | 持续评测数百个国内外大模型在教育、医疗、金融、法律等领域的中文表现 | https://github.com/jeinlee1991/chinese-llm-benchmark |
| Chinese SimpleQA | 阿里巴巴淘天集团 | 中文短事实问答基准，衡量模型中文事实知识的准确性与幻觉 | https://github.com/LivingFutureLab/ChineseSimpleQA |
| AlignBench | 清华大学、智谱 | 多维度评测中文大模型对齐水平，采用规则校准的 LLM 裁判打分 | https://github.com/THUDM/AlignBench |
| xbench | 红杉中国 | 分 AGI 追踪与职业对齐两条主线的长青评测体系，开源 ScienceQA、DeepSearch 评测集 | https://github.com/xbench-ai/xbench-evals |
| BrowseComp-ZH | 港科大（广州）等 | 面向中文互联网的网页浏览智能体基准，题目经多轮人工校验 | https://github.com/PALIN2018/BrowseComp-ZH |
| CLUE | CLUE 团队 | 中文语言理解测评基准，包含分类、阅读理解等代表性数据集与排行榜 | https://github.com/CLUEbenchmark/CLUE |
| CMMMU | M-A-P 等 | 中文大学水平多学科多模态理解与推理基准 | https://github.com/CMMMU-Benchmark/CMMMU |
| CMB | 香港中文大学（深圳） | 中文医学评测基准，包含各类医学考试题与临床诊断病例 | https://github.com/FreedomIntelligence/CMB |
| LawBench | 上海人工智能实验室等 | 从法律知识记忆、理解、应用三个认知层级评测大模型法律能力 | https://github.com/open-compass/LawBench |

### 评测框架与工具

| 名称 | 描述 | 链接 |
|------|------|------|
| OpenCompass | 上海人工智能实验室开源的一站式大模型评测平台，支持上百个数据集与主流模型 | https://github.com/open-compass/opencompass |
| lm-evaluation-harness | EleutherAI 的少样本评测框架，内置数百项任务，被众多榜单与论文用作评测后端 | https://github.com/EleutherAI/lm-evaluation-harness |
| Inspect | 英国 AI 安全研究所开源的评测框架，支持智能体、工具调用与沙箱，配套 inspect_evals 评测集 | https://github.com/UKGovernmentBEIS/inspect_ai |
| LightEval | Hugging Face 排行榜与评测团队的轻量评测工具包，支持多种推理后端与 1000 多项任务 | https://github.com/huggingface/lighteval |
| EvalScope | 魔搭社区的模型评测与性能压测框架，支持 LLM、多模态、Embedding 与 RAG 评测 | https://github.com/modelscope/evalscope |
| promptfoo | 面向 LLM 应用的提示词测试、模型对比与红队测试命令行工具，可集成 CI | https://github.com/promptfoo/promptfoo |
| DeepEval | 类 Pytest 的 LLM 应用评测框架，内置 G-Eval、幻觉、RAG、智能体等多种指标 | https://github.com/confident-ai/deepeval |
| Ragas | 专注 RAG 与智能体应用的评测框架，提供忠实度、上下文召回率等指标 | https://github.com/vibrantlabsai/ragas |
| OpenAI Evals | OpenAI 开源的 LLM 评测框架与社区基准注册表 | https://github.com/openai/evals |
| HELM | 斯坦福 CRFM 的整体评测框架，从准确性、校准、鲁棒性等多维度评测并发布系列榜单 | https://github.com/stanford-crfm/helm |
| VLMEvalKit | OpenCompass 推出的多模态大模型评测工具包，一条命令即可评测数十个基准 | https://github.com/open-compass/VLMEvalKit |
| lmms-eval | 覆盖图像、视频、音频任务的多模态大模型统一评测框架 | https://github.com/EvolvingLMMs-Lab/lmms-eval |
| Harbor | Terminal-Bench 团队推出的智能体评测框架，可在云端沙箱中并行运行大规模基准并生成 RL 轨迹 | https://github.com/harbor-framework/harbor |
| TruLens | 通过反馈函数与链路追踪评测 LLM 应用和智能体的开源工具 | https://github.com/truera/trulens |
| simple-evals | OpenAI 轻量评测库，保留 SimpleQA、BrowseComp、HealthBench 参考实现，已停止更新 | https://github.com/openai/simple-evals |
| Prometheus-Eval | 用开源评审模型 Prometheus 进行直接打分与成对比较的 LLM 评估工具 | https://github.com/prometheus-eval/prometheus-eval |
| OpenJudge | AgentScope 团队的统一评测与奖励框架，可构建评审器并输出质量奖励信号 | https://github.com/agentscope-ai/OpenJudge |
| NeMo Evaluator | NVIDIA 开源的可扩展、可复现模型与基准评测库 | https://github.com/NVIDIA-NeMo/Evaluator |
| Evaluation Guidebook | Hugging Face 整理的 LLM 评测实践指南，涵盖自动基准、人工评测与 LLM 裁判 | https://github.com/huggingface/evaluation-guidebook |

---

## 📱 AI 应用与效率工具

> 汇集主流 AI 助手、开源对话客户端、AI 搜索以及办公、翻译、音视频等效率工具，帮助把 AI 用进日常工作与学习

### 官方 AI 助手

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| ChatGPT | OpenAI | OpenAI 推出的通用 AI 助手，支持对话、联网搜索、深度研究、图像生成与 Agent 模式 | https://chatgpt.com/ |
| Gemini | Google | Google 的 AI 助手，深度集成搜索、Gmail、文档等 Google 服务，支持多模态与 Deep Research | https://gemini.google.com/ |
| Claude | Anthropic | Anthropic 推出的 AI 助手，擅长长文档分析、写作与编程，支持 Artifacts、项目与连接器 | https://claude.ai/ |
| DeepSeek | 深度求索 | 深度求索官方对话助手，可免费使用 DeepSeek 最新模型，支持深度思考与联网搜索 | https://chat.deepseek.com/ |
| 豆包 | 字节跳动 | 字节跳动推出的 AI 助手，覆盖对话、写作、搜索、图像生成与实时语音通话 | https://www.doubao.com/ |
| 千问（原通义） | 阿里巴巴 | 阿里巴巴基于 Qwen 系列模型打造的 AI 助手，覆盖对话、办公、搜索与多模态创作 | https://www.qianwen.com/ |
| Kimi | 月之暗面 | 月之暗面推出的 AI 助手，以长上下文、联网搜索与 Agent 能力见长 | https://www.kimi.com/ |
| Microsoft Copilot | Microsoft | 微软面向个人用户的 AI 助手，集成于 Windows、Edge 与 Bing 等产品 | https://copilot.microsoft.com/ |
| Grok | xAI | xAI 推出的 AI 助手，可实时检索 X 平台与网页信息 | https://grok.com/ |
| Meta AI | Meta | Meta 推出的 AI 助手，集成于 WhatsApp、Instagram、Facebook 与智能眼镜等产品 | https://www.meta.ai/ |
| 腾讯元宝 | 腾讯 | 腾讯推出的 AI 助手，基于混元等模型，可检索微信公众号等生态内容 | https://yuanbao.tencent.com/ |
| 文心一言 | 百度 | 百度基于文心大模型的 AI 助手，支持对话问答、写作与多模态创作 | https://yiyan.baidu.com/ |
| 智谱清言 | 智谱 | 智谱基于 GLM 系列模型的 AI 助手，支持对话、写作与智能体任务 | https://chatglm.cn/ |
| Le Chat | Mistral AI | 法国 Mistral AI 推出的 AI 助手，支持联网搜索、文档分析与图像生成 | https://chat.mistral.ai/ |
| Qwen Chat | 阿里巴巴 | 通义千问团队面向全球用户的对话平台，可体验 Qwen 系列最新模型 | https://chat.qwen.ai/ |
| Z.ai | 智谱 | 智谱面向全球用户的对话平台，可体验 GLM 系列最新模型 | https://chat.z.ai/ |
| 讯飞星火 | 科大讯飞 | 科大讯飞基于星火大模型的 AI 助手，在语音交互、教育与办公场景应用广泛 | https://xinghuo.xfyun.cn/ |
| 阶跃 AI（原跃问） | 阶跃星辰 | 阶跃星辰推出的 AI 助手，基于自研 Step 系列多模态模型 | https://www.stepfun.com/ |
| 天工 AI | 昆仑万维 | 昆仑万维推出的 AI 助手，提供 AI 搜索与可生成文档、PPT、表格的智能体 | https://www.tiangong.cn/ |
| Poe | Quora | Quora 推出的多模型聚合平台，可在同一应用中使用多家主流模型与自定义机器人 | https://poe.com/ |

### 开源对话客户端与 WebUI

> 用于在本地运行模型的 Ollama、LM Studio、Jan 等工具见推理与部署章节

| 名称 | 描述 | 链接 |
|------|------|------|
| Open WebUI | 功能完善的自托管 AI 对话平台，支持 Ollama 与 OpenAI 兼容接口、RAG、工具与多用户管理 | https://github.com/open-webui/open-webui |
| LobeHub（原 LobeChat） | 由 LobeChat 演进而来的开源 AI 协作平台，支持多模型对话、知识库、MCP 插件与 Agent 团队 | https://github.com/lobehub/lobehub |
| Cherry Studio | 支持众多模型服务商的桌面 AI 客户端，内置助手库、知识库、MCP 与 Agent 功能 | https://github.com/CherryHQ/cherry-studio |
| NextChat | 轻量的跨平台 AI 对话客户端，可一键部署私有 Web 版，并提供桌面与移动端 | https://github.com/ChatGPTNextWeb/NextChat |
| AnythingLLM | 本地优先的一体化 AI 应用，集成多模型对话、文档 RAG 与 Agent，提供桌面版与 Docker 部署 | https://github.com/Mintplex-Labs/anything-llm |
| LibreChat | 开源的 ChatGPT 式多模型对话平台，支持 Agent、MCP、代码解释器与多用户认证 | https://github.com/LibreChat-AI/LibreChat |
| Chatbox | 覆盖 Windows、macOS、Linux 与移动端的 AI 客户端，可接入多家模型 API 与本地模型 | https://github.com/chatboxai/chatbox |
| SillyTavern | 面向进阶用户的 LLM 前端，擅长角色扮演与互动叙事，支持多种模型后端与扩展 | https://github.com/SillyTavern/SillyTavern |
| HuggingChat（chat-ui） | Hugging Face 开源的对话界面代码库，即 HuggingChat 的底层实现，可对接各类开源模型 | https://github.com/huggingface/chat-ui |
| big-AGI | 面向专业用户的 AI 工作台，支持多模型并行对话（Beam）与结果融合、AI 角色等功能 | https://github.com/enricoros/big-AGI |
| DeepChat | 开源 AI 智能助手，连接多家云端与本地模型，支持 MCP 工具调用与联网搜索 | https://github.com/ThinkInAIXYZ/deepchat |
| 5ire | 跨平台桌面 AI 助手与 MCP 客户端，兼容主流模型服务商并支持本地知识库 | https://github.com/nanbingxyz/5ire |
| RikkaHub | 原生 Android 大模型对话应用，支持接入多家模型服务商 | https://github.com/rikkahub/rikkahub |
| Kelivo | Flutter 编写的跨平台大模型对话客户端，同时支持移动端与桌面端 | https://github.com/Chevey339/kelivo |
| Conduit | Open WebUI 的原生 iOS 与 Android 客户端，也可直连 OpenAI 兼容接口与 Ollama | https://github.com/cogwheel0/conduit |
| Enchanted | iOS 与 macOS 原生应用，用于连接 Ollama 等私有部署的开源模型 | https://github.com/gluonfield/enchanted |
| PyGPT | Python 编写的开源桌面 AI 助手，集成对话、Agent、图像生成、语音与文件处理等多种模式 | https://github.com/szczyglis-dev/py-gpt |

### AI 搜索

| 名称 | 开源 | 描述 | 链接 |
|------|------|------|------|
| Perplexity | ❌ | 以标注引用来源著称的 AI 搜索引擎，支持深度研究、多模型切换与 Spaces 知识空间 | https://www.perplexity.ai/ |
| 秘塔 AI 搜索 | ❌ | 无广告的中文 AI 搜索引擎，支持研究模式与学术检索，生成带来源的结构化答案 | https://metaso.cn/ |
| 纳米 AI 搜索 | ❌ | 360 推出的 AI 搜索与智能体平台，聚合多家大模型并支持多智能体协作完成任务 | https://www.n.cn/ |
| You.com | ❌ | 较早将对话式 AI 与网页搜索结合的搜索引擎，并提供面向开发者的搜索 API | https://you.com/ |
| Vane（原 Perplexica） | ✅ | 开源 AI 问答搜索引擎，可接入本地或云端模型，借助 SearXNG 检索网页并给出引用 | https://github.com/ItzCrazyKns/Vane |
| Morphic | ✅ | 带生成式 UI 的开源 AI 搜索引擎，可自托管并接入多家模型 | https://github.com/miurla/morphic |
| Scira（原 MiniPerplx） | ✅ | 极简风格的开源 AI 搜索引擎，回答附带引用来源，基于 Vercel AI SDK 构建 | https://github.com/zaidmukaddam/scira |
| SearXNG | ✅ | 注重隐私的开源元搜索引擎，常被用作自托管 AI 搜索与 Agent 的检索后端 | https://github.com/searxng/searxng |
| MindSearch | ✅ | 上海 AI 实验室 InternLM 团队开源的多智能体网页搜索框架，模拟人类多步检索与推理 | https://github.com/InternLM/MindSearch |
| MemFree | ✅ | 开源混合 AI 搜索引擎，可同时检索网页与个人书签、笔记等资料 | https://github.com/memfreeme/memfree |
| Tavily | ❌ | 面向 AI Agent 与 RAG 的搜索 API，返回经过清洗、便于大模型使用的检索结果 | https://www.tavily.com/ |
| Exa | ❌ | 基于神经网络嵌入的搜索引擎与 API，为 AI 应用提供语义化网页检索 | https://exa.ai/ |

### 知识管理与笔记

| 名称 | 开源 | 描述 | 链接 |
|------|------|------|------|
| Gemini Notebook（原 NotebookLM） | ❌ | Google 的 AI 研究笔记工具，基于上传资料回答问题，可生成音频概览、思维导图与学习材料 | https://notebook.google.com/ |
| Notion AI | ❌ | 集成于 Notion 的 AI 助手，可跨页面与已连接应用搜索、写作和整理信息 | https://www.notion.so/product/ai |
| 腾讯 ima | ❌ | 腾讯推出的 AI 知识库与工作台，可基于个人资料与公众号内容搜索、问答和写作 | https://ima.qq.com/ |
| Open Notebook | ✅ | 注重隐私的开源 NotebookLM 替代方案，支持多家模型与播客生成 | https://github.com/lfnovo/open-notebook |
| AFFiNE | ✅ | 融合文档、白板与数据库的开源知识库，内置 AI 助手，可替代 Notion 与 Miro | https://github.com/toeverything/AFFiNE |
| AppFlowy | ✅ | 开源 AI 协作工作空间，Notion 的替代方案，支持本地模型与私有部署 | https://github.com/AppFlowy-IO/AppFlowy |
| 思源笔记（SiYuan） | ✅ | 隐私优先、可自托管的开源知识库，支持块级引用并可与 AI Agent 协作 | https://github.com/siyuan-note/siyuan |
| Khoj | ✅ | 可自托管的开源 AI 第二大脑，基于网页与个人文档回答问题，支持自定义 Agent 与定时任务 | https://github.com/khoj-ai/khoj |
| SurfSense | ✅ | 可离线部署的开源 NotebookLM 替代，可连接搜索引擎及 Slack、Notion 等数据源 | https://github.com/MODSetter/SurfSense |
| Copilot for Obsidian | ✅ | Obsidian 中的 AI 助手插件，可基于笔记库问答，并在 Obsidian 内运行 Codex、Claude Code 等 Agent | https://github.com/logancyang/obsidian-copilot |
| Smart Connections | ✅ | Obsidian 插件，利用本地嵌入在写作时发现相关笔记与片段 | https://github.com/brianpetro/obsidian-smart-connections |
| Text Generator | ✅ | Obsidian 插件，调用多家模型在笔记中生成、续写与改写文本 | https://github.com/nhaouari/obsidian-textgenerator-plugin |
| NoteGen | ✅ | 本地优先的跨平台 Markdown 笔记应用，用 AI 将零散记录整理为结构化笔记 | https://github.com/codexu/note-gen |
| Blinko | ✅ | 开源、可自托管的 AI 卡片笔记工具，支持基于 RAG 的笔记检索与问答 | https://github.com/blinkospace/blinko |
| Karakeep（原 Hoarder） | ✅ | 可自托管的书签与收藏应用，利用 AI 自动打标签并支持全文检索 | https://github.com/karakeep-app/karakeep |
| Surf | ✅ | Deta 开源的个人 AI 笔记本，整理文件与网页并据此生成笔记 | https://github.com/deta/surf |
| Mem | ❌ | AI 驱动的笔记应用，可自动组织与关联笔记，并支持基于笔记内容问答 | https://mem.ai/ |
| Podcastfy | ✅ | 将网页、PDF、视频等多模态内容转为多语言对话式播客的开源工具 | https://github.com/souzatharsis/podcastfy |
| NotebookLlama | ✅ | LlamaIndex 推出的开源 NotebookLM 替代方案，基于 LlamaCloud 解析文档 | https://github.com/run-llama/notebookllama |

### 办公与内容创作

| 名称 | 开源 | 描述 | 链接 |
|------|------|------|------|
| Microsoft 365 Copilot | ❌ | 集成于 Word、Excel、PowerPoint、Outlook 与 Teams 的办公 AI 助手 | https://www.microsoft.com/en-us/microsoft-365/copilot |
| WPS AI | ❌ | 金山办公推出的办公 AI 助手，覆盖文档写作、表格分析与 PPT 生成 | https://ai.wps.cn/ |
| Gamma | ❌ | 用 AI 快速生成演示文稿、文档与网页的在线创作工具 | https://gamma.app/ |
| Canva | ❌ | 在线设计平台，内置 AI 图像生成、文案撰写与一键排版等功能 | https://www.canva.com/ |
| Napkin AI | ❌ | 将文字内容自动转换为图表、流程图等可视化图形的工具 | https://www.napkin.ai/ |
| PPT Master | ✅ | 将文档或主题转为原生可编辑 PowerPoint 的开源工具，支持原生形状、动画与数据图表 | https://github.com/hugohe3/ppt-master |
| Banana Slides | ✅ | 原生 AI PPT 生成应用，支持上传模板图片与素材，可用自然语言修改指定区域并导出可编辑 PPT | https://github.com/Anionex/banana-slides |
| Presenton | ✅ | 开源 AI 演示文稿生成器与 API，可自托管或使用桌面版，支持多家模型与自定义模板 | https://github.com/presenton/presenton |
| LandPPT | ✅ | 基于大模型的演示文稿生成平台，可将文档内容自动转换为 PPT，支持多模型与模板 | https://github.com/sligter/LandPPT |
| ALLWEONE Presentation AI | ✅ | 开源 AI 演示文稿生成器，可作为 Gamma 的替代，支持自定义主题与配图生成 | https://github.com/allweonedev/presentation-ai |
| PPTist | ✅ | 基于 Vue 3 的开源在线演示文稿应用，还原 PowerPoint 常用功能并支持基于模板的 AI 生成 | https://github.com/pipipi-pikachu/PPTist |
| Next AI Draw.io | ✅ | 通过对话生成与修改 draw.io 图表的 AI 应用，提供 Web 版、桌面版与 MCP 服务 | https://github.com/DayuanJiang/next-ai-draw-io |
| Univer | ✅ | 面向 AI Agent 的开源办公套件内核，支持表格、文档与幻灯片等并可由 Agent 直接操作 | https://github.com/dream-num/univer |
| PasteMD | ✅ | 一键将 Markdown 与网页 AI 对话内容粘贴为 Word、WPS 与 Excel 格式的效率工具 | https://github.com/RICHQAQ/PasteMD |
| Meetily | ✅ | 隐私优先的开源 AI 会议记录工具，在本地完成转写并生成会议纪要 | https://github.com/Zackriya-Solutions/meetily |
| Anarlog（原 Hyprnote） | ✅ | 本地优先的开源 AI 会议记事本，可作为 Granola 的替代 | https://github.com/fastrepl/anarlog |
| Otter.ai | ❌ | 会议实时转写与 AI 摘要助手，可自动生成会议纪要与待办事项 | https://otter.ai/ |

### 翻译与阅读

| 名称 | 开源 | 描述 | 链接 |
|------|------|------|------|
| 沉浸式翻译 | ❌ | 双语对照的网页翻译扩展，支持 PDF、EPUB、视频字幕与输入框翻译，可接入多家大模型 | https://immersivetranslate.com/ |
| DeepL | ❌ | 以译文质量著称的 AI 翻译服务，提供文档翻译与写作润色工具 DeepL Write | https://www.deepl.com/ |
| PDFMathTranslate | ✅ | 基于 AI 的 PDF 科技论文全文双语翻译工具，完整保留公式、图表与排版 | https://github.com/PDFMathTranslate/PDFMathTranslate |
| BabelDOC | ✅ | 开源 PDF 文档翻译库与命令行工具，可生成保留排版的双语对照 PDF | https://github.com/funstory-ai/BabelDOC |
| NextAI Translator（原 OpenAI Translator） | ✅ | 基于大模型的划词翻译浏览器扩展与跨平台桌面应用，支持翻译、润色与总结 | https://github.com/nextai-translator/nextai-translator |
| 简约翻译（KISS Translator） | ✅ | 简约开源的双语对照翻译浏览器扩展与油猴脚本，支持多种翻译服务与 AI 接口 | https://github.com/fishjar/kiss-translator |
| 陪读蛙（Read Frog） | ✅ | 开源 AI 沉浸式翻译与语言学习扩展，支持生词闪卡，可作为沉浸式翻译的替代 | https://github.com/mengxi-ream/read-frog |
| Easydict | ✅ | 简洁的 macOS 查词翻译应用，支持离线 OCR 以及系统词典、DeepL 与多家大模型翻译 | https://github.com/tisfeng/Easydict |
| Bob | ❌ | macOS 平台的翻译与 OCR 软件，可通过插件接入大模型翻译服务 | https://github.com/ripperhe/Bob |
| STranslate | ✅ | Windows 平台即用即走的翻译与 OCR 工具，支持多种翻译服务与大模型 | https://github.com/STranslate/STranslate |
| Pot | ✅ | 跨平台划词翻译与 OCR 软件，支持多种翻译引擎与大模型（已归档） | https://github.com/pot-app/pot-desktop |
| Zotero PDF Translate | ✅ | Zotero 插件，可翻译 PDF、EPUB、网页、元数据与批注，支持 20 多种翻译服务 | https://github.com/windingwind/zotero-pdf-translate |
| Zotero GPT | ✅ | 将大模型接入 Zotero 的插件，用于文献阅读、总结与问答 | https://github.com/MuiseDestiny/zotero-gpt |
| TranslateBooksWithLLMs | ✅ | 使用本地或云端大模型翻译整本书籍与长文档，支持 EPUB、DOCX 与字幕等格式 | https://github.com/hydropix/TranslateBooksWithLLMs |
| Translation Agent | ✅ | 吴恩达开源的反思式 Agent 翻译工作流，通过翻译、反思、改进三步提升译文质量 | https://github.com/andrewyng/translation-agent |
| ChatPDF | ❌ | 上传 PDF 即可与文档对话问答的在线阅读工具 | https://www.chatpdf.com/ |

### 音视频与多媒体工具

| 名称 | 开源 | 描述 | 链接 |
|------|------|------|------|
| MoneyPrinterTurbo | ✅ | 根据主题或关键词，利用大模型自动生成文案、素材、字幕与配乐并合成短视频 | https://github.com/harry0703/MoneyPrinterTurbo |
| VideoLingo | ✅ | 一键全自动的视频字幕切分、翻译、对齐与配音工具，生成高质量单行字幕 | https://github.com/Huanshere/VideoLingo |
| pyvideotrans | ✅ | 视频翻译与配音工具，可将视频从一种语言转换为另一种语言并嵌入字幕与配音 | https://github.com/jianchang512/pyvideotrans |
| 卡卡字幕助手（VideoCaptioner） | ✅ | 基于大模型的字幕助手，完成字幕生成、断句、校正与翻译全流程 | https://github.com/WEIFENG2333/VideoCaptioner |
| OpenCreator（原 KrillinAI） | ✅ | 由视频翻译配音工具 KrillinAI 演进而来的开源 AI 创作者工作空间 | https://github.com/krillinai/OpenCreator |
| NarratoAI | ✅ | 利用大模型一键生成影视解说文案并自动剪辑视频的工具 | https://github.com/linyqh/NarratoAI |
| Buzz | ✅ | 基于 OpenAI Whisper 在本地离线转写与翻译音频的桌面应用 | https://github.com/chidiwilliams/buzz |
| Handy | ✅ | 免费开源、完全离线运行的语音转文字桌面应用，按快捷键即可语音输入 | https://github.com/cjpais/Handy |
| AutoClip | ✅ | 开源 AI 视频剪辑桌面工具，粘贴链接即可生成适配抖音、B 站等平台的成片、封面与文案 | https://github.com/zhouxiaoka/autoclip |
| FunClip | ✅ | 阿里通义开源的视频语音识别与剪辑工具，基于 FunASR 并支持大模型辅助选取片段 | https://github.com/modelscope/FunClip |
| 妙幕（SmartSub） | ✅ | 一站式视频转字幕、字幕翻译、AI 配音与字幕烧录桌面工具，支持本地模型离线处理 | https://github.com/buxuku/SmartSub |
| YouDub | ✅ | 开源的 YouTube 与 B 站视频 AI 本地化工具，集成语音识别、字幕翻译与配音 | https://github.com/liuzhao1225/YouDub-webui |
| BibiGPT | ✅ | 一键总结 B 站、YouTube 等平台音视频内容并支持对话追问的工具（开源 v1 版本） | https://github.com/JimmyLv/BibiGPT-v1 |
| BiliNote | ✅ | AI 视频笔记生成工具，可将 B 站、YouTube、抖音等平台视频转为结构化 Markdown 笔记 | https://github.com/JefferyHcool/BiliNote |
| Descript | ❌ | 以编辑文字稿的方式剪辑音视频，内置 AI 转写、配音与去除口头禅等功能 | https://www.descript.com/ |
| CapCut | ❌ | 字节跳动旗下视频剪辑工具（剪映国际版），内置自动字幕、AI 配音与智能剪辑 | https://www.capcut.com/ |

### 浏览器与桌面助手

| 名称 | 开源 | 描述 | 链接 |
|------|------|------|------|
| ChatGPT Atlas | ❌ | OpenAI 推出的 AI 浏览器，内置 ChatGPT 侧边栏、浏览记忆与 Agent 模式 | https://chatgpt.com/atlas |
| Comet | ❌ | Perplexity 推出的 AI 浏览器，可在浏览时总结网页并代为执行多步任务 | https://www.perplexity.ai/comet |
| Monica | ❌ | 集成多家模型的浏览器 AI 助手扩展，支持网页总结、翻译与写作 | https://monica.im/ |
| Raycast | ❌ | macOS 效率启动器，内置 Raycast AI，可在系统任意位置调用多家模型 | https://www.raycast.com/ |
| ChatHub | ✅ | 一站式聊天机器人浏览器扩展，可在同一界面同时与多个 AI 模型对话并对比回答 | https://github.com/chathub-dev/chathub |
| Page Assist | ✅ | 浏览器侧边栏扩展，可调用本地运行的模型在浏览网页时对话与问答 | https://github.com/n4ze3m/page-assist |
| ChatGPTBox | ✅ | 将 ChatGPT 等大模型深度集成到浏览器的开源扩展，支持网页总结与划词问答 | https://github.com/ChatGPTBox-dev/chatGPTBox |
| Dayflow | ✅ | 自动工作日志与时间追踪应用，私密地将屏幕活动整理为时间线 | https://github.com/JerryZLiu/Dayflow |

### AI 工具导航

| 名称 | 描述 | 链接 |
|------|------|------|
| There's An AI For That | 规模较大的 AI 工具导航站，可按任务与职业分类检索 AI 产品 | https://theresanaiforthat.com/ |
| Futurepedia | AI 工具目录与教程平台，按类别收录 AI 工具并提供使用教程 | https://www.futurepedia.io/ |
| Toolify.ai | AI 工具导航站，按类别与访问量等维度整理 AI 产品，提供中文界面 | https://www.toolify.ai/ |
| AI 工具集 | 国内常用的 AI 工具导航站，按类别收录国内外 AI 工具与资讯 | https://ai-bot.cn/ |
| Future Tools | 由 Matt Wolfe 维护的 AI 工具目录与资讯站点 | https://www.futuretools.io/ |
| Product Hunt AI | Product Hunt 的人工智能话题页，可追踪新发布的 AI 产品与社区评价 | https://www.producthunt.com/topics/artificial-intelligence |
| GPT Store | OpenAI 官方的 GPTs 商店，可浏览与使用社区构建的定制 ChatGPT | https://chatgpt.com/gpts |
| Hugging Face Spaces | Hugging Face 的 AI 应用托管与展示平台，可在线体验大量开源模型 Demo | https://huggingface.co/spaces |
| AI Valley | 按类别收录 AI 产品与开发工具的 AI 工具目录站 | https://aivalley.ai/ |

<!-- parts:end -->

---

<div align="center">

**[⬅️ 上一篇：🌟 大模型与智能体](03-llm-and-agents.md) · [🏠 返回首页](../README.md) · [下一篇：🔭 前沿与交叉 ➡️](05-frontiers.md)**

</div>
