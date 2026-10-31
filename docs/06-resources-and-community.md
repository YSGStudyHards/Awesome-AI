<div align="center">

<h1>🧰 资源与社区</h1>

<p><strong>数据集、实战项目、模型 API 与算力平台、社区资讯与求职面试</strong></p>

<!-- stats:start -->
本板块收录 **5** 个分类 · **20+** 个子类 · **350+** 条资源 · **150+** 个 GitHub 开源项目
<!-- stats:end -->

**[🏠 返回首页](../README.md) · [📖 总目录](../README.md#-目录) · [🌐 在线浏览本板块](https://ysgstudyhards.github.io/Awesome-AI/#part-6)**

</div>

## 📑 本板块目录

<!-- toc:start -->
| 分类 | 子类导航 |
|:--|:--|
| [📦 数据集与数据工具](#-数据集与数据工具) | [数据集平台与搜索](#数据集平台与搜索) · [计算机视觉](#计算机视觉) · [自然语言处理与中文语料](#自然语言处理与中文语料) · [大模型预训练语料](#大模型预训练语料) · [指令微调与偏好数据](#指令微调与偏好数据) · [多模态数据](#多模态数据) · [语音数据](#语音数据) · [数据标注工具](#数据标注工具) |
| [🧪 实战项目与教程](#-实战项目与教程) | [从零实现模型](#从零实现模型) · [官方 Cookbook](#官方-cookbook) · [完整应用教程](#完整应用教程) |
| [⚡ 模型 API 与算力平台](#-模型-api-与算力平台) | [国际模型 API](#国际模型-api) · [中文模型 API](#中文模型-api) · [模型与推理托管](#模型与推理托管) · [GPU 与实验算力](#gpu-与实验算力) |
| [🌐 社区与资讯](#-社区与资讯) | [开发者社区与论坛](#开发者社区与论坛) · [官方研究博客](#官方研究博客) · [个人技术博客](#个人技术博客) · [中文 AI 媒体](#中文-ai-媒体) · [Newsletter 与周报](#newsletter-与周报) · [行业报告与趋势](#行业报告与趋势) · [Awesome 精选列表](#awesome-精选列表) · [领域专题 Awesome 列表](#领域专题-awesome-列表) |
| [💼 AI 求职与面试](#-ai-求职与面试) | [大模型面试题库](#大模型面试题库) · [机器学习与深度学习面试](#机器学习与深度学习面试) · [机器学习系统设计](#机器学习系统设计) · [算法刷题](#算法刷题) |
<!-- toc:end -->

---

<!-- part: 🧰 资源与社区 -->

## 📦 数据集与数据工具

> 收录数据集平台、视觉与语言等经典数据集、大模型预训练与指令数据以及数据标注工具

### 数据集平台与搜索

| 名称 | 描述 | 链接 |
|------|------|------|
| Hugging Face Datasets | 开源社区最主要的数据集托管平台，提供数据卡、在线预览与一行代码加载 | https://huggingface.co/datasets |
| Kaggle Datasets | Kaggle 社区数据集平台，覆盖各领域公开数据并可直接在 Notebook 中分析 | https://www.kaggle.com/datasets |
| Google Dataset Search | Google 推出的数据集搜索引擎，按关键词检索全网公开数据集 | https://datasetsearch.research.google.com/ |
| 🤗 Datasets 库 | Hugging Face 数据集加载与处理库，支持内存映射、流式读取与多种文件格式 | https://github.com/huggingface/datasets |
| OpenDataLab | 上海人工智能实验室推出的开放数据平台，汇聚视觉、语言与多模态数据集 | https://opendatalab.org.cn/ |
| ModelScope 数据集 | 阿里魔搭社区数据集频道，提供中文友好的数据集托管、预览与下载 | https://www.modelscope.cn/datasets |
| UCI Machine Learning Repository | 加州大学欧文分校维护的经典机器学习数据集库，以表格数据为主 | https://archive.ics.uci.edu/ |
| OpenML | 开放机器学习平台，统一管理数据集、任务与实验结果并提供多语言 API | https://github.com/openml/OpenML |
| TensorFlow Datasets | TensorFlow 官方数据集集合，提供可直接用于 tf.data 与 JAX 的标准化数据管道 | https://github.com/tensorflow/datasets |
| 天池数据集 | 阿里云天池开放数据集频道，收录竞赛数据与科研数据集 | https://tianchi.aliyun.com/dataset |
| Roboflow Universe | 计算机视觉开放数据集与模型社区，支持多种标注格式导出 | https://universe.roboflow.com |
| Croissant | MLCommons 制定的机器学习数据集元数据格式，已被 Hugging Face、Kaggle、OpenML 支持 | https://github.com/mlcommons/croissant |

### 计算机视觉

| 数据集 | 领域 | 描述 | 链接 |
|--------|------|------|------|
| ImageNet | 图像分类 | 按 WordNet 层级组织的大规模图像数据库，ILSVRC 竞赛推动了深度学习兴起 | https://www.image-net.org/ |
| COCO | 检测与分割 | 含目标检测、实例分割、关键点与图像描述标注的通用视觉数据集 | https://cocodataset.org/ |
| MNIST | 图像分类 | 7 万张手写数字图像数据集，深度学习与 CNN 入门的 Hello World | https://yann.lecun.com/exdb/mnist/ |
| CIFAR-10 / CIFAR-100 | 图像分类 | 多伦多大学发布的 32×32 彩色小图分类数据集，分为 10 类与 100 类两个版本 | https://www.cs.toronto.edu/~kriz/cifar.html |
| Fashion-MNIST | 图像分类 | Zalando 发布的服装图像分类数据集，可直接替换 MNIST 作为基准 | https://github.com/zalandoresearch/fashion-mnist |
| Open Images | 检测与分割 | Google 发布的大规模图像数据集，含图像级标签、边界框、分割掩码与视觉关系标注 | https://storage.googleapis.com/openimages/web/index.html |
| SA-1B | 图像分割 | Meta 为 Segment Anything 发布的分割数据集，含 1100 万张图像与超过 10 亿个掩码 | https://segment-anything.com/dataset/index.html |
| Pascal VOC | 检测与分割 | PASCAL VOC 挑战赛数据集，含 20 类目标检测与分割标注，早期视觉经典基准 | http://host.robots.ox.ac.uk/pascal/VOC/ |
| LVIS | 实例分割 | 面向长尾分布的大词表实例分割数据集，在 COCO 图像上标注上千个类别 | https://github.com/lvis-dataset/lvis-api |
| ADE20K | 语义分割 | MIT CSAIL 发布的场景解析数据集，含像素级物体与部件标注 | https://github.com/CSAILVision/ADE20K |
| Cityscapes | 语义分割 | 城市街景语义理解数据集，提供像素级精细标注，常用于分割模型评测 | https://www.cityscapes-dataset.com/ |
| CelebA | 人脸 | 香港中文大学发布的 20 万张名人人脸图像数据集，带 40 种属性标注 | https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html |
| FFHQ | 人脸生成 | NVIDIA 发布的 7 万张高质量人脸图像数据集，StyleGAN 系列的标准训练数据 | https://github.com/NVlabs/ffhq-dataset |
| Kinetics | 视频理解 | 人体动作识别视频数据集的下载仓库，含 Kinetics-400/600/700 等版本 | https://github.com/cvdfoundation/kinetics-dataset |

### 自然语言处理与中文语料

| 数据集 | 领域 | 描述 | 链接 |
|--------|------|------|------|
| GLUE / SuperGLUE | 自然语言理解 | 通用语言理解评测集合，汇集情感、推理、相似度等多项英文 NLU 任务数据 | https://gluebenchmark.com/ |
| SST-2 | 情感分析 | 斯坦福情感树库的二分类版本，GLUE 中经典的电影评论情感分析数据集 | https://huggingface.co/datasets/sst2 |
| IMDb 影评 | 情感分析 | 包含 5 万条电影评论的二分类情感数据集，文本分类常用入门数据 | https://ai.stanford.edu/~amaas/data/sentiment/ |
| SQuAD | 阅读理解 | 斯坦福抽取式问答数据集，2.0 版本加入了无法回答的问题 | https://rajpurkar.github.io/SQuAD-explorer/ |
| Natural Questions | 开放域问答 | Google 基于真实搜索查询与维基百科页面构建的开放域问答数据集 | https://ai.google.com/research/NaturalQuestions |
| MS MARCO | 信息检索 | 微软基于必应真实查询构建的大规模阅读理解与段落检索数据集 | https://microsoft.github.io/msmarco/ |
| HotpotQA | 多跳问答 | 需要跨多篇维基百科文档推理的多跳问答数据集，附带支持事实标注 | https://hotpotqa.github.io/ |
| MultiNLI | 自然语言推理 | 多体裁自然语言推理数据集，覆盖小说、政府文件、电话对话等文本类型 | https://huggingface.co/datasets/multi_nli |
| CoNLL-2003 | 命名实体识别 | 基于路透社新闻的英文命名实体识别经典数据集，含人名、地名、机构名等实体 | https://huggingface.co/datasets/conll2003 |
| WikiText | 语言建模 | Salesforce 基于维基百科优质条目构建的语言建模数据集，常用于困惑度评测 | https://blog.salesforceairesearch.com/the-wikitext-long-term-dependency-language-modeling-dataset/ |
| nlp_chinese_corpus | 中文语料 | 大规模中文语料合集，含维基百科、新闻、百科问答、社区问答与翻译语料 | https://github.com/brightmart/nlp_chinese_corpus |
| ChineseNlpCorpus | 中文语料 | 中文自然语言处理数据集合集，涵盖情感分析、推荐系统、FAQ 问答等任务 | https://github.com/SophonPlus/ChineseNlpCorpus |
| CLUECorpus2020 | 中文语料 | CLUE 团队基于 Common Crawl 清洗得到的 100GB 中文预训练语料 | https://github.com/CLUEbenchmark/CLUECorpus2020 |
| DuReader | 中文阅读理解 | 百度发布的大规模中文机器阅读理解数据集，问题来自真实搜索日志 | https://github.com/baidu/DuReader |
| CMRC 2018 | 中文阅读理解 | 哈工大讯飞联合实验室发布的中文片段抽取式阅读理解数据集 | https://github.com/ymcui/cmrc2018 |
| THUCNews | 中文文本分类 | 清华大学基于新浪新闻整理的中文新闻文本分类数据集，含 14 个类别 | http://thuctc.thunlp.org/ |

### 大模型预训练语料

| 数据集 | 领域 | 描述 | 链接 |
|--------|------|------|------|
| Common Crawl | 网页 | 非营利组织持续抓取的开放网页存档，是多数大模型预训练语料的源头 | https://commoncrawl.org/ |
| FineWeb | 网页 | Hugging Face 从 Common Crawl 清洗得到的 15T token 级英文网页语料，公开完整处理流程 | https://huggingface.co/datasets/HuggingFaceFW/fineweb |
| FineWeb-Edu | 网页 | 用 LLM 教育价值分类器从 FineWeb 中筛选出的高质量教育类网页子集 | https://huggingface.co/datasets/HuggingFaceFW/fineweb-edu |
| FineWeb2 | 多语言 | FineWeb 的多语言扩展版本，覆盖上千种语言的网页预训练语料 | https://huggingface.co/datasets/HuggingFaceFW/fineweb-2 |
| The Pile | 综合 | EleutherAI 构建的 825GB 英文多源语料，涵盖学术论文、代码、书籍等 22 个子集 | https://pile.eleuther.ai/ |
| RedPajama | 综合 | Together AI 开源的预训练数据与处理流程，V2 提供 30T token 网页数据及质量信号 | https://github.com/togethercomputer/RedPajama-Data |
| Dolma | 综合 | AllenAI 为 OLMo 构建的开放预训练语料及配套数据处理工具包 | https://github.com/allenai/dolma |
| DCLM | 网页 | DataComp for Language Models 数据筛选基准与 DCLM-Baseline 高质量网页语料 | https://www.datacomp.ai/dclm/ |
| C4 | 网页 | Google 为 T5 构建的 Common Crawl 清洗语料，由 AllenAI 提供公开下载版本 | https://huggingface.co/datasets/allenai/c4 |
| RefinedWeb | 网页 | TII 训练 Falcon 使用的严格过滤与去重网页语料，公开约 600B token 子集 | https://huggingface.co/datasets/tiiuae/falcon-refinedweb |
| OpenWebText | 网页 | 复现 OpenAI WebText 的开源网页语料，nanoGPT 复现 GPT-2 时默认使用 | https://skylion007.github.io/OpenWebTextCorpus/ |
| The Stack v2 | 代码 | BigCode 基于 Software Heritage 构建的许可代码数据集，覆盖 600 多种编程语言 | https://github.com/bigcode-project/the-stack-v2 |
| OpenWebMath | 数学 | 从 Common Crawl 提取的 14.7B token 数学网页语料，保留 LaTeX 公式 | https://huggingface.co/datasets/open-web-math/open-web-math |
| Common Corpus | 多语言 | Pleias 发布的约 2T token 多语言语料，仅收录公有领域与开放许可文本 | https://huggingface.co/datasets/PleIAs/common_corpus |
| Wikipedia Dumps | 百科 | 维基媒体官方定期发布的维基百科全量数据转储，常用于预训练与知识库构建 | https://dumps.wikimedia.org/ |
| 万卷 WanJuan 1.0 | 中文多模态 | 上海人工智能实验室开源的多模态预训练语料，含文本、图文与视频数据 | https://github.com/opendatalab/WanJuan1.0 |
| WanJuan-CC | 网页 | 上海人工智能实验室从 Common Crawl 精细清洗的安全、高质量英文网页语料 | https://opendatalab.org.cn/OpenDataLab/WanJuanCC |
| WuDaoCorpora | 中文 | 智源研究院发布的大规模中文语料库，开放约 200GB 文本数据 | https://data.baai.ac.cn/details/WuDaoCorporaText |
| CCI3.0-HQ | 中文 | 智源研究院发布的高质量中文互联网语料，经两阶段混合过滤得到 | https://huggingface.co/datasets/BAAI/CCI3-HQ |
| ChineseWebText 2.0 | 中文 | 中科院自动化所发布的 3.8TB 中文网页语料，带质量、领域与毒性等多维标签 | https://github.com/CASIA-LM/ChineseWebText-2.0 |

### 指令微调与偏好数据

| 数据集 | 领域 | 描述 | 链接 |
|--------|------|------|------|
| Alpaca | 通用指令 | 斯坦福用 Self-Instruct 方法基于 text-davinci-003 生成的 5.2 万条指令数据 | https://github.com/tatsu-lab/stanford_alpaca |
| BELLE | 中文指令 | 链家科技开源的中文对话大模型项目，发布百万级中文指令微调数据 | https://github.com/LianjiaTech/BELLE |
| FLAN Collection | 多任务指令 | Google 汇集上千个 NLP 任务模板的指令微调数据集合，奠定指令微调范式 | https://github.com/google-research/FLAN |
| Super-NaturalInstructions | 多任务指令 | AllenAI 构建的 1600 多个 NLP 任务及其自然语言指令描述数据集 | https://github.com/allenai/natural-instructions |
| Dolly 15k | 通用指令 | Databricks 员工人工编写的 1.5 万条可商用指令数据 | https://huggingface.co/datasets/databricks/databricks-dolly-15k |
| OASST1 | 多轮对话 | Open Assistant 项目众包的多语言对话树数据，附人工质量评分 | https://huggingface.co/datasets/OpenAssistant/oasst1 |
| UltraChat | 多轮对话 | 清华团队用 ChatGPT 模拟用户与助手生成的大规模多轮对话数据集 | https://github.com/thunlp/UltraChat |
| Tülu 3 SFT Mixture | 通用指令 | AllenAI 训练 Tülu 3 使用的开放指令数据混合，覆盖数学、代码与安全 | https://huggingface.co/datasets/allenai/tulu-3-sft-mixture |
| Infinity-Instruct | 通用指令 | 智源研究院发布的大规模中英文指令数据集，含基础指令与对话指令两部分 | https://huggingface.co/datasets/BAAI/Infinity-Instruct |
| COIG-CQIA | 中文指令 | 从中文互联网高质量来源筛选并经人工审核的中文指令微调数据集 | https://huggingface.co/datasets/m-a-p/COIG-CQIA |
| Magpie | 合成指令 | 仅输入对话模板前缀让对齐模型自行生成指令的合成数据方法及数据集 | https://github.com/magpie-align/magpie |
| Nemotron Post-Training v3 | 后训练 | NVIDIA 开放的 Nemotron 后训练数据集合集，含数学、代码、指令遵循与多语言推理 | https://huggingface.co/collections/nvidia/nemotron-post-training-v3 |
| OpenThoughts3 | 推理蒸馏 | OpenThoughts 项目发布的 120 万条数学、代码与科学推理轨迹数据 | https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M |
| OpenR1-Math-220k | 数学推理 | Hugging Face Open R1 项目基于 DeepSeek-R1 生成的 22 万道数学题推理轨迹 | https://huggingface.co/datasets/open-r1/OpenR1-Math-220k |
| NuminaMath-CoT | 数学推理 | Numina 发布的约 86 万道竞赛数学题及思维链解答，AIMO 首届获胜方案训练数据 | https://huggingface.co/datasets/AI-MO/NuminaMath-CoT |
| xLAM Function Calling 60k | 函数调用 | Salesforce 通过可验证生成流程构建的 6 万条函数调用训练数据 | https://huggingface.co/datasets/Salesforce/xlam-function-calling-60k |
| LMSYS-Chat-1M | 真实对话 | 收集自 Chatbot Arena 与 Vicuna 演示的百万条真实用户与大模型对话 | https://huggingface.co/datasets/lmsys/lmsys-chat-1m |
| WildChat | 真实对话 | 收集用户与 ChatGPT 真实交互的大规模对话数据集，公开版本已过滤有害内容 | https://huggingface.co/datasets/allenai/WildChat-4.8M |
| UltraFeedback | 偏好对齐 | OpenBMB 发布的大规模细粒度 AI 反馈数据集，由 GPT-4 从多个维度打分 | https://github.com/OpenBMB/UltraFeedback |
| HH-RLHF | 偏好对齐 | Anthropic 发布的有用性与无害性人类偏好对比数据 | https://huggingface.co/datasets/Anthropic/hh-rlhf |
| HelpSteer3 | 偏好对齐 | NVIDIA 发布的多领域、多语言人工偏好与反馈数据，用于训练奖励模型 | https://huggingface.co/datasets/nvidia/HelpSteer3 |
| PKU-SafeRLHF | 安全对齐 | 北京大学发布的安全对齐偏好数据集，对有用性与无害性分别标注 | https://huggingface.co/datasets/PKU-Alignment/PKU-SafeRLHF |

### 多模态数据

| 数据集 | 领域 | 描述 | 链接 |
|--------|------|------|------|
| LAION | 图文对 | 非营利组织 LAION 发布的开放图文对数据集系列，LAION-5B 经清理后以 Re-LAION-5B 重新发布 | https://laion.ai/ |
| DataComp | 图文对 | 以固定训练流程比较数据筛选策略的图文数据基准，提供 128 亿图文对候选池 | https://github.com/mlfoundations/datacomp |
| COYO-700M | 图文对 | Kakao Brain 发布的 7.47 亿图文对数据集，附带多种质量元数据（已归档） | https://github.com/kakaobrain/coyo-dataset |
| 悟空 Wukong | 中文图文对 | 华为诺亚方舟实验室发布的 1 亿规模中文图文对数据集 | https://wukong-dataset.github.io/wukong-dataset/ |
| Conceptual Captions | 图像描述 | Google 从网页 alt 文本自动清洗得到的约 330 万图像描述数据集（已归档） | https://github.com/google-research-datasets/conceptual-captions |
| LLaVA-Instruct-150K | 视觉指令 | LLaVA 使用纯文本 GPT-4 基于 COCO 图像标注生成的 15 万条视觉指令数据 | https://huggingface.co/datasets/liuhaotian/LLaVA-Instruct-150K |
| ShareGPT4V | 图像描述 | 以 GPT-4V 生成的高质量详细描述为种子扩展得到的百万级图文描述数据集 | https://huggingface.co/datasets/Lin-Chen/ShareGPT4V |
| OBELICS | 图文交错 | Hugging Face 从 Common Crawl 网页构建的 1.41 亿篇图文交错文档数据集 | https://huggingface.co/datasets/HuggingFaceM4/OBELICS |
| MINT-1T | 图文交错 | 含一万亿文本 token 与 34 亿张图像的开源多模态图文交错数据集 | https://github.com/mlfoundations/MINT-1T |
| MMC4 | 图文交错 | AllenAI 将图像插入 C4 文本文档构建的十亿级图文交错语料 | https://github.com/allenai/mmc4 |
| InternVid | 视频文本 | 上海人工智能实验室发布的大规模视频文本数据集，含 700 万视频与 2.34 亿片段描述 | https://github.com/OpenGVLab/InternVideo/tree/main/Data/InternVid |
| Panda-70M | 视频文本 | Snap 发布的 7000 万视频片段及自动生成字幕数据集 | https://github.com/snap-research/Panda-70M |
| OpenVid-1M | 视频生成 | 南京大学发布的百万级高质量文本到视频生成训练数据集 | https://github.com/NJU-PCALab/OpenVid-1M |
| Objaverse-XL | 3D | AllenAI 发布的千万级三维物体数据集，用于 3D 生成与理解研究 | https://github.com/allenai/objaverse-xl |

### 语音数据

| 数据集 | 领域 | 描述 | 链接 |
|--------|------|------|------|
| LibriSpeech | 英文 ASR | 基于 LibriVox 有声书整理的约 1000 小时英文朗读语音数据集，ASR 经典基准 | https://www.openslr.org/12/ |
| Common Voice | 多语言 ASR | Mozilla 发起的众包多语言语音数据项目，覆盖上百种语言并持续更新 | https://github.com/common-voice/common-voice |
| GigaSpeech | 英文 ASR | SpeechColab 发布的 1 万小时标注英文语音数据集，来源于有声书、播客与 YouTube | https://github.com/SpeechColab/GigaSpeech |
| WenetSpeech | 中文 ASR | WeNet 社区发布的 1 万小时以上多领域普通话语音识别语料 | https://github.com/wenet-e2e/WenetSpeech |
| AISHELL-1 | 中文 ASR | 希尔贝壳开源的 178 小时普通话语音识别数据集 | https://www.openslr.org/33/ |
| Multilingual LibriSpeech | 多语言 ASR | 基于 LibriVox 有声书的 8 种语言朗读语音识别数据集 | https://www.openslr.org/94/ |
| GigaSpeech 2 | 多语言 ASR | 面向泰语、印尼语、越南语等低资源语言的自动构建语音识别语料 | https://github.com/SpeechColab/GigaSpeech2 |
| WenetSpeech-Yue | 粤语 ASR | 西北工业大学 ASLP 实验室发布的大规模粤语语音语料，含多维度标注 | https://github.com/ASLP-lab/WenetSpeech-Yue |
| Emilia | 语音生成 | Amphion 团队发布的六语种野外语音生成数据集，Emilia-Large 超过 20 万小时 | https://github.com/open-mmlab/Amphion/tree/main/preprocessors/Emilia |
| LibriTTS | 语音合成 | 从 LibriSpeech 衍生的约 585 小时多说话人英文语音合成数据集 | https://www.openslr.org/60/ |
| LJSpeech | 语音合成 | 单一女性说话人朗读的约 24 小时英文语音合成数据集，含 13100 条短音频 | https://keithito.com/LJ-Speech-Dataset |
| AISHELL-3 | 语音合成 | 希尔贝壳开源的多说话人普通话语音合成数据集，含 218 位说话人录音 | https://www.openslr.org/93/ |
| AudioSet | 音频事件 | Google 基于 YouTube 视频片段构建的大规模人工标注音频事件数据集 | https://research.google.com/audioset/ |
| VoxCeleb | 说话人识别 | 牛津 VGG 从名人访谈视频中提取的大规模说话人识别数据集 | https://www.robots.ox.ac.uk/~vgg/data/voxceleb/ |
| ESC-50 | 环境声分类 | 包含 2000 条 5 秒录音、50 类环境声音的分类基准数据集 | https://github.com/karolpiczak/ESC-50 |

### 数据标注工具

> 说明：同时收录数据管理、数据质量与自动标注工具

| 名称 | 描述 | 链接 |
|------|------|------|
| Label Studio | 支持文本、图像、音频、视频与时序数据的多类型开源标注平台，可接入模型预标注 | https://github.com/HumanSignal/label-studio |
| CVAT | 面向图像、视频与 3D 点云的计算机视觉标注平台，支持自动标注与团队协作 | https://github.com/cvat-ai/cvat |
| X-AnyLabeling | 集成 SAM、YOLO 等模型的 AI 辅助标注桌面工具，覆盖检测、分割、OCR 与多模态任务 | https://github.com/CVHub520/X-AnyLabeling |
| labelme | Python 编写的经典图像标注工具，支持多边形、矩形、点等形状与 AI 辅助标注 | https://github.com/wkentaro/labelme |
| Doccano | 面向文本分类、序列标注与序列到序列任务的开源文本标注工具 | https://github.com/doccano/doccano |
| Argilla | 面向 AI 工程师与领域专家协作构建高质量数据集的平台，适合 LLM 数据标注与反馈收集 | https://github.com/argilla-io/argilla |
| LabelImg | 经典目标检测矩形框标注工具，支持 VOC 与 YOLO 格式，现已并入 Label Studio 社区（已归档） | https://github.com/HumanSignal/labelImg |
| FiftyOne | Voxel51 开源的视觉数据集管理与可视化工具，用于分析数据质量与模型错误 | https://github.com/voxel51/fiftyone |
| cleanlab | 以数据为中心的 AI 库，自动发现标签错误、离群点与重复样本 | https://github.com/cleanlab/cleanlab |
| Xtreme1 | 支持 3D 激光雷达点云、图像与 LLM 数据的多模态开源标注平台 | https://github.com/xtreme1-io/xtreme1 |
| Snorkel | 通过编写标注函数进行弱监督、程序化生成训练数据的框架 | https://github.com/snorkel-team/snorkel |
| ISAT | 基于 SAM 系列模型的交互式半自动图像分割标注工具 | https://github.com/yatengLG/ISAT_with_segment_anything |
| Autodistill | 利用大型基础模型自动标注图像并蒸馏训练小模型的框架 | https://github.com/autodistill/autodistill |
| LabelU | OpenDataLab 开源的多模态数据标注平台，支持图像、视频、音频标注与 AI 预标注 | https://github.com/opendatalab/labelU |
| VGG Image Annotator | 牛津 VGG 开发的轻量级网页标注工具，无需安装即可在浏览器离线运行 | https://www.robots.ox.ac.uk/~vgg/software/via/ |

---

## 🧪 实战项目与教程

> 收录从零实现、官方 Cookbook、完整示例应用与生产级 AI 项目教程

### 从零实现模型

| 名称 | 描述 | 链接 |
|------|------|------|
| nanoGPT | Andrej Karpathy 编写的精简 GPT 训练实现，适合理解完整训练流程 | https://github.com/karpathy/nanoGPT |
| llm.c | 使用纯 C 与 CUDA 实现 GPT-2 训练，展示底层算子与性能优化 | https://github.com/karpathy/llm.c |
| build-nanogpt | 逐步复现 GPT-2 的视频课程配套代码与训练说明 | https://github.com/karpathy/build-nanogpt |
| micrograd | 极简自动微分与神经网络实现，用少量代码解释反向传播 | https://github.com/karpathy/micrograd |
| makemore | 从双字符模型逐步构建 Transformer 字符级语言模型的教程项目 | https://github.com/karpathy/makemore |

### 官方 Cookbook

| 名称 | 描述 | 链接 |
|------|------|------|
| Gemini Cookbook | Google 官方 Gemini API 示例，覆盖多模态、工具调用与长上下文 | https://github.com/google-gemini/cookbook |
| Hugging Face Cookbook | Hugging Face 官方实践笔记，覆盖模型训练、推理与智能体 | https://github.com/huggingface/cookbook |
| Phi Cookbook | 微软 Phi 模型系列的推理、微调、量化与部署示例集合 | https://github.com/microsoft/PhiCookBook |
| NVIDIA GenerativeAIExamples | NVIDIA 生成式 AI 参考应用，覆盖 RAG、推理和企业部署 | https://github.com/NVIDIA/GenerativeAIExamples |

### 完整应用教程

| 名称 | 描述 | 链接 |
|------|------|------|
| RAG From Scratch | LangChain 团队用系列笔记逐步实现 RAG 核心组件与高级模式 | https://github.com/langchain-ai/rag-from-scratch |

---

## ⚡ 模型 API 与算力平台

> 收录主流模型 API、模型托管、推理服务、GPU 云与免费实验算力平台

### 国际模型 API

| 平台 | 描述 | 链接 |
|------|------|------|
| OpenAI Platform | 提供 GPT、推理、多模态、语音和嵌入模型 API | https://platform.openai.com/ |
| Anthropic Console | 提供 Claude 模型 API、批处理、工具调用与提示管理 | https://console.anthropic.com/ |
| Google AI Studio | 面向 Gemini API 的在线原型开发、密钥管理与代码生成平台 | https://aistudio.google.com/ |
| OpenRouter | 通过统一接口调用多家模型，并提供路由、用量和价格对比 | https://openrouter.ai/ |
| Together AI | 提供开放模型推理、微调与专用端点的云服务平台 | https://www.together.ai/ |
| GroqCloud | 基于专用推理硬件提供低延迟开放模型 API | https://console.groq.com/ |
| Mistral La Plateforme | Mistral AI 官方模型 API、微调与智能体开发平台 | https://console.mistral.ai/ |

### 中文模型 API

| 平台 | 描述 | 链接 |
|------|------|------|
| DeepSeek 开放平台 | 提供 DeepSeek 系列模型的兼容 API 与用量管理 | https://platform.deepseek.com/ |
| 阿里云百炼 | 阿里云大模型开发平台，提供通义模型、应用编排与知识库 | https://bailian.console.aliyun.com/ |
| 火山引擎方舟 | 字节跳动旗下模型服务平台，提供模型调用、精调与评测 | https://www.volcengine.com/product/ark |
| 硅基流动 SiliconCloud | 提供多种开源模型的统一推理 API 与专属实例 | https://cloud.siliconflow.cn/ |
| 月之暗面开放平台 | 提供 Kimi 模型 API、长上下文与工具调用能力 | https://platform.moonshot.cn/ |
| 智谱开放平台 | 提供 GLM 系列文本、多模态、语音与智能体 API | https://open.bigmodel.cn/ |

### 模型与推理托管

| 平台 | 描述 | 链接 |
|------|------|------|
| Hugging Face | 全球主流模型与数据集社区，并提供托管推理和应用空间 | https://huggingface.co/ |
| ModelScope 魔搭 | 阿里达摩院发起的模型社区，提供模型、数据集与在线体验 | https://modelscope.cn/ |
| NVIDIA Build | 提供 NVIDIA NIM 模型在线试用与 API 接入 | https://build.nvidia.com/ |
| Replicate | 以统一 API 运行社区模型并支持自定义模型部署 | https://replicate.com/ |
| fal | 面向生成式媒体模型的高速推理与工作流 API 平台 | https://fal.ai/ |

### GPU 与实验算力

| 平台 | 描述 | 链接 |
|------|------|------|
| Google Colab | 提供浏览器 Jupyter 环境与有限免费 GPU 资源 | https://colab.research.google.com/ |
| Kaggle Notebooks | 提供免费 GPU、TPU 环境并集成竞赛数据集与社区代码 | https://www.kaggle.com/code |
| Runpod | 提供按需 GPU 实例、无服务器推理与模型部署能力 | https://www.runpod.io/ |
| Lambda GPU Cloud | 面向深度学习训练与推理的按需 GPU 云平台 | https://lambda.ai/service/gpu-cloud |
| Modal | 以 Python 定义弹性云任务、GPU 作业与模型服务 | https://modal.com/ |

---

## 🌐 社区与资讯

> AI 社区论坛、官方与个人博客、中文媒体、Newsletter、行业报告与 Awesome 精选列表，助你追踪前沿动态

### 开发者社区与论坛

| 社区 | 语言 | 描述 | 链接 |
|------|------|------|------|
| Reddit r/MachineLearning | 英文 | 历史悠久的机器学习英文社区，讨论最新论文、研究与行业动态 | https://www.reddit.com/r/MachineLearning/ |
| Reddit r/LocalLLaMA | 英文 | 本地部署开源大模型的核心社区，聚焦模型发布、量化与推理实践 | https://www.reddit.com/r/LocalLLaMA/ |
| Hacker News | 英文 | Y Combinator 运营的技术新闻社区，AI 新品与论文常在此引发深度讨论 | https://news.ycombinator.com/ |
| Hugging Face 论坛 | 英文 | Hugging Face 官方论坛，讨论 Transformers、Diffusers 等库的使用与问题 | https://discuss.huggingface.co/ |
| OpenAI 开发者社区 | 英文 | OpenAI 官方开发者论坛，交流 API、Agents SDK 与 Codex 等使用经验 | https://community.openai.com/ |
| PyTorch 论坛 | 英文 | PyTorch 官方论坛，解答模型训练、分布式与部署相关问题 | https://discuss.pytorch.org/ |
| Reddit r/StableDiffusion | 英文 | 开源图像与视频生成社区，分享模型、ComfyUI 工作流与作品 | https://www.reddit.com/r/StableDiffusion/ |
| Reddit r/singularity | 英文 | 讨论 AI 进展、AGI 前景与技术社会影响的大型社区 | https://www.reddit.com/r/singularity/ |
| MLOps Community | 英文 | 全球 MLOps 与 AI 工程从业者社区，提供播客、线上活动与 Slack 交流 | https://mlops.community/ |
| DataTalks.Club | 英文 | 数据与机器学习从业者社区，运营免费的 ML、MLOps 与 LLM Zoomcamp 课程 | https://datatalks.club/ |
| Cross Validated | 英文 | Stack Exchange 旗下的统计学与机器学习问答社区 | https://stats.stackexchange.com/ |
| 知乎 | 中文 | 国内问答社区，大量研究者与工程师在此发布大模型技术解读与讨论 | https://www.zhihu.com/ |
| LINUX DO | 中文 | 活跃的中文技术社区，AI 工具、大模型使用与开发相关讨论热度高 | https://linux.do/ |
| WaytoAGI 通往 AGI 之路 | 中文 | 中文 AI 开源知识库与社区，汇集 AIGC 教程、提示词与工具实践 | https://www.waytoagi.com/ |
| 智源社区 | 中文 | 北京智源人工智能研究院主办的 AI 学术社区，提供论文解读、活动与资讯 | https://hub.baai.ac.cn/ |

### 官方研究博客

| 博客 | 机构 | 描述 | 链接 |
|------|------|------|------|
| OpenAI News | OpenAI | OpenAI 官方新闻与研究博客，发布 GPT 系列模型、产品与研究进展 | https://openai.com/news/ |
| Google DeepMind Blog | Google DeepMind | 发布 Gemini、AlphaFold 等前沿研究与模型进展的官方博客 | https://deepmind.google/blog/ |
| Anthropic Research | Anthropic | Claude 背后的对齐、可解释性与社会影响研究 | https://www.anthropic.com/research |
| Anthropic Engineering | Anthropic | 分享 Agent 构建、上下文工程与 Claude Code 等工程实践的技术博客 | https://www.anthropic.com/engineering |
| Google Research Blog | Google | Google Research 官方博客，覆盖机器学习、算法与 AI 应用研究 | https://research.google/blog/ |
| Meta AI Blog | Meta | Meta 官方 AI 博客，发布 Llama 系列模型与 FAIR 研究成果 | https://ai.meta.com/blog/ |
| Microsoft Research Blog | Microsoft | 微软研究院官方博客，涵盖 AI、系统与跨学科研究 | https://www.microsoft.com/en-us/research/blog/ |
| Hugging Face Blog | Hugging Face | 开源模型、训练与推理技术的官方教程与深度解读 | https://huggingface.co/blog |
| NVIDIA 技术博客 | NVIDIA | NVIDIA 官方开发者博客，分享 GPU 加速、推理优化与 AI 工程实践 | https://developer.nvidia.com/blog/ |
| Apple Machine Learning Research | Apple | Apple 机器学习研究官网，发布论文与端侧基础模型技术报告 | https://machinelearning.apple.com/ |
| PyTorch Blog | PyTorch 基金会 | PyTorch 官方博客，发布版本特性、性能优化与生态项目进展 | https://pytorch.org/blog/ |
| Qwen Research | 阿里巴巴通义千问 | 通义千问团队官方研究页面，发布 Qwen 系列模型技术博客 | https://qwen.ai/research |
| ByteDance Seed | 字节跳动 | 字节跳动 Seed 团队官网，发布豆包大模型相关研究与技术报告 | https://seed.bytedance.com/ |
| Mistral AI News | Mistral AI | Mistral AI 官方新闻页，发布开源与商用模型及产品更新 | https://mistral.ai/news/ |
| xAI News | xAI | xAI 官方新闻页，发布 Grok 系列模型与产品动态 | https://x.ai/news |
| Connectionism | Thinking Machines Lab | Thinking Machines Lab 技术博客，发表推理非确定性、LoRA 等深度研究文章 | https://thinkingmachines.ai/blog/ |
| Ai2 Blog | Allen Institute for AI | 艾伦人工智能研究所博客，发布 OLMo、Tülu 等全开源模型研究 | https://allenai.org/blog |
| BAIR Blog | UC Berkeley | 伯克利人工智能研究实验室博客，介绍机器人、强化学习与大模型研究 | https://bair.berkeley.edu/blog/ |
| Stanford HAI News | Stanford | 斯坦福以人为本人工智能研究院的新闻与研究，关注 AI 政策与社会影响 | https://hai.stanford.edu/news |
| Stanford CRFM | Stanford | 斯坦福基础模型研究中心，发布 HELM 评测与基础模型透明度等研究 | https://crfm.stanford.edu/ |
| Hazy Research Blog | Stanford | 斯坦福 Hazy Research 实验室博客，分享 FlashAttention、ThunderKittens 等研究 | https://hazyresearch.stanford.edu/blog |
| LMSYS Blog | LMSYS | LMSYS 组织博客，发布 SGLang、Chatbot Arena 等开源系统与评测研究 | https://lmsys.org/blog/ |
| vLLM Blog | vLLM | vLLM 项目官方博客，分享推理引擎新特性与性能优化 | https://blog.vllm.ai/ |
| Together AI Blog | Together AI | 分享开源模型训练、推理加速与数据集等研究成果的技术博客 | https://www.together.ai/blog |
| EleutherAI Blog | EleutherAI | 非营利开源 AI 研究组织博客，涉及可解释性与开源模型训练 | https://blog.eleuther.ai/ |
| 微软亚洲研究院 | MSRA | 微软亚洲研究院中文官网，发布研究成果解读与技术文章 | https://www.msra.cn/ |
| Google AI Blog | Google | Google 官方博客的 AI 频道，发布 Gemini 模型与 AI 产品动态 | https://blog.google/technology/ai/ |
| AWS 机器学习博客 | Amazon | AWS 官方机器学习博客，提供 Bedrock、SageMaker 等实践教程 | https://aws.amazon.com/blogs/machine-learning/ |
| Distill | Distill | 以交互式可视化阐释机器学习研究的在线期刊，2021 年起停止更新 | https://distill.pub/ |

### 个人技术博客

| 博客 | 作者 | 描述 | 链接 |
|------|------|------|------|
| Lil'Log | Lilian Weng | 以 Agent、扩散模型、RLHF 等主题的长篇综述著称的技术博客 | https://lilianweng.github.io/ |
| Sebastian Raschka Blog | Sebastian Raschka | 深入讲解 LLM 架构、训练与推理模型的技术文章 | https://sebastianraschka.com/blog/ |
| Andrej Karpathy Blog | Andrej Karpathy | 收录 RNN 的不合理有效性、神经网络训练秘诀等经典文章 | https://karpathy.github.io/ |
| Chip Huyen Blog | Chip Huyen | 《AI Engineering》作者的博客，关注 AI 工程、MLOps 与生产实践 | https://huyenchip.com/blog/ |
| Jay Alammar Blog | Jay Alammar | 以图解 Transformer、BERT、GPT 等系列文章闻名的可视化博客 | https://jalammar.github.io/ |
| Simon Willison's Weblog | Simon Willison | Django 联合作者高频记录 LLM 工具、提示注入与 AI 实践的博客 | https://simonwillison.net/ |
| colah's blog | Christopher Olah | Anthropic 联合创始人的博客，以 LSTM 图解与可解释性文章闻名 | https://colah.github.io/ |
| 科学空间 | 苏剑林 | RoPE 提出者的中文博客，深入推导位置编码、注意力与生成模型等数学原理 | https://kexue.fm/ |
| Eugene Yan Blog | Eugene Yan | 关注推荐系统、LLM 应用模式与评测的工程实践博客 | https://eugeneyan.com/ |
| Hamel Husain Blog | Hamel Husain | 专注 LLM 评测（Evals）、微调与 AI 产品工程的实践博客 | https://hamel.dev/ |
| Sebastian Ruder Blog | Sebastian Ruder | NLP 研究者的博客，涵盖迁移学习、多语言模型与优化方法综述 | https://www.ruder.io/ |
| Philipp Schmid Blog | Philipp Schmid | 大模型微调、部署与 Agent 开发的实战教程博客 | https://www.philschmid.de/ |
| Maxime Labonne Blog | Maxime Labonne | 大模型微调、量化与模型合并等主题的技术文章 | https://mlabonne.github.io/blog/ |
| Gwern.net | Gwern Branwen | 独立研究者的长文网站，深入探讨规模假说与 AI 发展 | https://gwern.net/ |
| 宝玉的分享 | 宝玉 | 翻译与解读海外 AI 前沿文章、提示工程与 AI 编程实践的中文博客 | https://baoyu.io/ |

### 中文 AI 媒体

| 媒体 | 描述 | 链接 |
|------|------|------|
| 机器之心 | 专注人工智能的科技媒体，提供前沿论文解读、行业报道与技术专栏 | https://www.jiqizhixin.com/ |
| 量子位 | 追踪人工智能与前沿科技的新媒体，报道大模型技术与产业动态 | https://www.qbitai.com/ |
| 新智元 | 关注人工智能前沿进展与产业生态的科技媒体 | https://aiera.com.cn/ |
| 智东西 | 聚焦 AI、芯片与智能产业的科技媒体 | https://zhidx.com/ |
| InfoQ 中文站 | 面向软件开发者的技术媒体，设有 AI 与大模型工程实践专题 | https://www.infoq.cn/ |
| 雷峰网 | 关注 AI 与智能硬件的科技媒体，旗下有 AI 科技评论 | https://www.leiphone.com/ |
| 晚点 LatePost | 深度报道科技公司与 AI 产业的商业财经媒体 | https://www.latepost.com/ |
| 极客公园 | 关注科技创新与产品的媒体，长期报道 AI 产品与创业者 | https://www.geekpark.net/ |
| 36氪 | 聚焦创投与科技产业的商业媒体，持续报道 AI 公司与融资动态 | https://36kr.com/ |
| 品玩 PingWest | 报道全球科技公司与 AI 产业动态的科技媒体 | https://www.pingwest.com/ |

### Newsletter 与周报

| 名称 | 作者 | 描述 | 链接 |
|------|------|------|------|
| The Batch | 吴恩达 | DeepLearning.AI 出品的 AI 周报，点评一周重要研究与产业新闻 | https://www.deeplearning.ai/the-batch/ |
| Import AI | Jack Clark | Anthropic 联合创始人撰写的周报，聚焦 AI 研究进展与政策影响 | https://jack-clark.net/ |
| Ahead of AI | Sebastian Raschka | 深入解读 LLM 研究论文与技术趋势的通讯 | https://magazine.sebastianraschka.com/ |
| Interconnects | Nathan Lambert | Ai2 研究员关于开源模型、RLHF 与后训练的深度评论 | https://www.interconnects.ai/ |
| Last Week in AI | Andrey Kurenkov 等 | 每周汇总 AI 新闻与研究进展，并配套同名播客 | https://lastweekin.ai/ |
| TLDR AI | TLDR | 每日 AI 新闻摘要邮件，覆盖研究、产品与开发工具 | https://tldr.tech/ai |
| The Rundown AI | Rowan Cheung | 面向大众的每日 AI 新闻简报与工具推荐 | https://www.therundown.ai/ |
| Ben's Bites | Ben Tossell | 面向构建者的 AI 新闻与实用工具通讯 | https://www.bensbites.com/ |
| One Useful Thing | Ethan Mollick | 沃顿商学院教授探讨 AI 在工作与教育中实际应用的随笔 | https://www.oneusefulthing.org/ |
| AI Weekly | AI Weekly 编辑部 | 追踪 AI 专家正在阅读和分享的内容，涵盖模型、融资、政策与研究 | https://aiweekly.co/ |
| The Gradient | The Gradient 编辑部 | 由研究者运营的 AI 研究深度分析刊物，并推出同名访谈播客 | https://thegradient.pub/ |
| Turing Post | Ksenia Se | 解析 AI 模型、Agent 与研究趋势的技术通讯 | https://www.turingpost.com/ |
| Exploring Language Models | Maarten Grootendorst | 以大量图解讲解量化、MoE 与推理模型等主题的通讯 | https://newsletter.maartengrootendorst.com/ |
| SemiAnalysis | Dylan Patel | 深度分析 AI 芯片、算力与数据中心产业的研究通讯 | https://semianalysis.com/ |
| Marcus on AI | Gary Marcus | 对大模型能力与 AI 炒作持批判视角的评论通讯 | https://garymarcus.substack.com/ |
| BestBlogs.dev | ginobefun | 借助大模型筛选与摘要优质 AI 与编程文章的中文阅读平台与周刊 | https://github.com/ginobefun/BestBlogs |

### 行业报告与趋势

| 报告 | 机构 | 描述 | 链接 |
|------|------|------|------|
| AI Index Report | 斯坦福 HAI | 斯坦福年度 AI 指数报告，从研发、技术性能、经济与政策等维度追踪全球 AI | https://hai.stanford.edu/ai-index |
| State of AI Report | Air Street Capital | Nathan Benaich 主编的年度 AI 现状报告，覆盖研究、产业、政策与安全 | https://www.stateof.ai/ |
| Epoch AI | Epoch AI | 研究 AI 算力、数据与模型规模趋势的机构，提供开放数据库与分析 | https://epoch.ai/ |
| 中国信通院白皮书 | 中国信息通信研究院 | 定期发布人工智能、大模型与算力等领域的白皮书和发展报告 | http://www.caict.ac.cn/kxyj/qwfb/bps/ |
| Anthropic Economic Index | Anthropic | 基于真实使用数据分析 AI 对各类工作任务与经济影响的研究 | https://www.anthropic.com/economic-index |
| The State of AI | McKinsey | 麦肯锡年度全球企业 AI 应用调研，追踪生成式 AI 的采用与价值 | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai |
| Our World in Data：人工智能 | Our World in Data | 以开放数据图表呈现 AI 算力、模型规模、投资与公众态度等长期趋势 | https://ourworldindata.org/artificial-intelligence |
| GitHub Octoverse | GitHub | GitHub 年度开发者生态报告，涵盖 AI 项目与 AI 辅助开发趋势 | https://github.blog/news-insights/octoverse/ |

### Awesome 精选列表

> Agent Skills 与 MCP 相关的专题列表另见对应章节

| 列表 | 描述 | 链接 |
|------|------|------|
| awesome-machine-learning | 按编程语言分类整理的机器学习框架、库与软件清单 | https://github.com/josephmisiti/awesome-machine-learning |
| Awesome-LLM | 汇总大语言模型里程碑论文、开源模型、训练框架与部署工具 | https://github.com/Hannibal046/Awesome-LLM |
| awesome-deep-learning | 深度学习教程、课程、论文、框架与数据集资源汇总 | https://github.com/ChristosChristofidis/awesome-deep-learning |
| awesome-llm-apps | 收录基于 RAG、Agent 与多智能体的 LLM 应用示例及完整代码 | https://github.com/Shubhamsaboo/awesome-llm-apps |
| awesome-generative-ai | 生成式 AI 项目与服务精选清单，涵盖文本、图像、音频与视频 | https://github.com/steven2358/awesome-generative-ai |
| awesome-ai-agents | E2B 维护的 AI Agent 项目与产品清单，区分开源与闭源 | https://github.com/e2b-dev/awesome-ai-agents |
| Awesome-Chinese-LLM | 中文大模型资源汇总，涵盖开源模型、应用、数据集与学习教程 | https://github.com/AiHubCN/Awesome-Chinese-LLM |
| funNLP | 中文 NLP 资源大全，收录词库、工具包、语料与预训练模型 | https://github.com/fighting41love/funNLP |
| LLMSurvey | 中国人民大学大模型综述论文的配套论文列表与资源 | https://github.com/RUCAIBox/LLMSurvey |
| open-llms | 采用可商用许可证的开源大语言模型清单 | https://github.com/eugeneyan/open-llms |
| awesome-LLM-resources | 全球大模型资源汇总，覆盖数据、微调、推理、RAG 与 Agent 等方向 | https://github.com/WangRongsheng/awesome-LLM-resources |
| awesome-chatgpt-zh | ChatGPT 中文指南，汇总提示指令、应用开发与精选资源 | https://github.com/EmbraceAGI/awesome-chatgpt-zh |
| best-of-ml-python | 按项目质量评分排名并每周更新的机器学习 Python 库清单 | https://github.com/lukasmasuch/best-of-ml-python |
| awesome-production-machine-learning | 用于部署、监控、扩展与保护生产级机器学习的开源库清单 | https://github.com/EthicalML/awesome-production-machine-learning |
| awesome-artificial-intelligence | AI 综合资源清单，涵盖课程、书籍、工具与研究机构 | https://github.com/owainlewis/awesome-artificial-intelligence |
| awesome-datascience | 数据科学学习资源大全，含教程、工具、数据集与社区 | https://github.com/academic/awesome-datascience |
| awesome-public-datasets | 按领域分类整理的高质量公开数据集清单 | https://github.com/awesomedata/awesome-public-datasets |
| AI Papers of the Week | DAIR.AI 每周精选的重要 AI 论文清单 | https://github.com/dair-ai/AI-Papers-of-the-Week |
| Awesome-AITools | 收录 AI 相关实用工具与应用的中英文清单 | https://github.com/ikaijua/Awesome-AITools |
| LLMsPracticalGuide | 大模型实用指南，含 LLM 演化树、使用示例与论文 | https://github.com/Mooler0410/LLMsPracticalGuide |
| awesome-langchain | LangChain 生态的工具、项目与教程汇总 | https://github.com/kyrolabs/awesome-langchain |
| awesome-deepseek-integration | DeepSeek 官方维护的第三方集成应用清单 | https://github.com/deepseek-ai/awesome-deepseek-integration |
| awesome-mcp-servers | 按类别整理的 MCP 服务器精选清单，覆盖数据库、浏览器与开发工具等 | https://github.com/punkpeye/awesome-mcp-servers |
| awesome-claude-code | Claude Code 的命令、Hooks、子代理、工作流与周边工具精选清单 | https://github.com/hesreallyhim/awesome-claude-code |
| awesome-cursorrules | Cursor 编辑器 .cursorrules 规则文件的社区合集 | https://github.com/PatrickJS/awesome-cursorrules |

### 领域专题 Awesome 列表

| 列表 | 领域 | 描述 | 链接 |
|------|------|------|------|
| Awesome-Multimodal-Large-Language-Models | 多模态 | 追踪多模态大模型的最新论文、数据集与评测基准 | https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models |
| awesome-nlp | NLP | 自然语言处理教程、库、数据集与研究资源清单 | https://github.com/keon/awesome-nlp |
| Awesome-Chinese-NLP | 中文 NLP | 中文自然语言处理工具、语料与资源汇总 | https://github.com/crownpku/Awesome-Chinese-NLP |
| awesome-computer-vision | 计算机视觉 | 计算机视觉书籍、课程、论文与软件资源清单 | https://github.com/jbhuang0604/awesome-computer-vision |
| awesome-rl | 强化学习 | 强化学习代码、教程、论文与应用资源清单 | https://github.com/aikorea/awesome-rl |
| Awesome-Diffusion-Models | 扩散模型 | 扩散模型相关论文、教程与资源汇总 | https://github.com/diff-usion/Awesome-Diffusion-Models |
| Awesome-Video-Diffusion | 视频生成 | 视频生成与编辑方向的扩散模型论文清单 | https://github.com/showlab/Awesome-Video-Diffusion |
| Awesome-LLM-Inference | 推理优化 | 大模型推理论文与代码清单，涵盖 FlashAttention、PagedAttention 与量化 | https://github.com/xlite-dev/Awesome-LLM-Inference |
| Awesome-Efficient-LLM | 高效大模型 | 大模型剪枝、量化、蒸馏等效率优化论文清单 | https://github.com/horseee/Awesome-Efficient-LLM |
| Awesome-LLM-Reasoning | 推理能力 | 从思维链提示到 OpenAI o1、DeepSeek-R1 的大模型推理研究清单 | https://github.com/atfortes/Awesome-LLM-Reasoning |
| Awesome-LLM-Strawberry | 推理能力 | 聚焦 OpenAI o1 类推理技术的论文、博客与项目合集 | https://github.com/hijkzzz/Awesome-LLM-Strawberry |
| Awesome-LLM-Post-training | 后训练 | 大模型后训练与推理能力增强的综述、教程与论文清单 | https://github.com/mbzuai-oryx/Awesome-LLM-Post-training |
| awesome-RLHF | RLHF | 基于人类反馈的强化学习论文、代码与资源清单，持续更新 | https://github.com/opendilab/awesome-RLHF |
| LLM-Agent-Paper-List | 智能体 | 复旦大学大模型智能体综述的配套论文列表 | https://github.com/WooooDyy/LLM-Agent-Paper-List |
| LLMAgentPapers | 智能体 | 浙江大学 ZJUNLP 团队整理的大模型智能体必读论文 | https://github.com/zjunlp/LLMAgentPapers |
| awesome-agentic-patterns | 智能体 | 整理 Agentic AI 系统常见设计模式的精选目录 | https://github.com/nibzard/awesome-agentic-patterns |
| Awesome-GUI-Agent | GUI 智能体 | 多模态 GUI 智能体论文、数据集与评测资源清单 | https://github.com/showlab/Awesome-GUI-Agent |
| Awesome-LLM-RAG | RAG | 大模型检索增强生成前沿研究论文清单 | https://github.com/jxzhangjhu/Awesome-LLM-RAG |
| Awesome-RAG | RAG | 检索增强生成在生成式 AI 中的应用、框架与资源清单 | https://github.com/Danielskry/Awesome-RAG |
| Awesome-LLM-Long-Context-Modeling | 长上下文 | 大模型长上下文建模必读论文与博客清单 | https://github.com/Xnhyacinth/Awesome-LLM-Long-Context-Modeling |
| Awesome-Code-LLM | 代码大模型 | 代码语言模型研究与相关数据集清单，配套 TMLR 综述 | https://github.com/codefuse-ai/Awesome-Code-LLM |
| Awesome-LLM-Robotics | 机器人 | 大模型与多模态模型应用于机器人和强化学习的论文清单 | https://github.com/GT-RIPL/Awesome-LLM-Robotics |
| Awesome-World-Models | 世界模型 | 面向研究者与从业者的世界模型论文与资源清单 | https://github.com/knightnemo/Awesome-World-Models |
| awesome-ai-for-science | AI for Science | 加速物理、化学、生物等科学发现的 AI 工具、论文与数据集清单 | https://github.com/ai4s-research/awesome-ai-for-science |
| Awesome-LLMOps | LLMOps | 面向开发者的 LLMOps 工具精选清单 | https://github.com/tensorchord/Awesome-LLMOps |
| awesome-mlops | MLOps | MLOps 工具与平台精选清单 | https://github.com/kelvins/awesome-mlops |
| awesome-local-llm | 本地部署 | 本地运行大模型的平台、工具、实践与资源清单 | https://github.com/rafska/awesome-local-llm |
| awesome-ai-devtools | AI 开发工具 | AI 驱动的开发者工具精选清单 | https://github.com/jamesmurdza/awesome-ai-devtools |

---

## 💼 AI 求职与面试

> 大模型与机器学习岗位面试题库、机器学习系统设计与算法刷题资源，帮助 AI 求职者系统备考

### 大模型面试题库

| 名称 | 语言 | 描述 | 链接 |
|------|------|------|------|
| llm_interview_note | 中文 | 大模型算法与应用工程师面试笔记，覆盖架构、分布式训练、微调、推理、RAG 与真实面试题 | https://github.com/wdndev/llm_interview_note |
| AgentGuide | 中文 | 求职导向的 AI Agent 学习指南，含 RAG 与 Agent 实战项目、系统设计和面试题库 | https://github.com/adongwanai/AgentGuide |
| AIGC-Interview-Book | 中文 | WeThinkIn 整理的 AIGC、大模型与 AI Agent 算法岗面试资源，兼顾 CV、NLP 等传统方向 | https://github.com/WeThinkIn/AIGC-Interview-Book |
| LLMs_interview_notes | 中文 | 按考点组织的大模型算法岗面试题库，每题给出简答、原理拆解与常见追问 | https://github.com/km1994/LLMs_interview_notes |
| LLMForEverybody | 中文 | 通俗讲解大模型原理与工程实践的系列文章，面向春秋招大模型岗位面试准备 | https://github.com/luhengshiwo/LLMForEverybody |
| DeepLearing-Interview-Awesome-2024 | 中文 | AIGC、CV 与大模型方向的面试问题与答案合集，持续补充新问题与新资源 | https://github.com/315386775/DeepLearing-Interview-Awesome-2024 |
| FAQ_Of_LLM_Interview | 中文 | 大模型算法岗面试题及答案，侧重常见问题与核心概念解析 | https://github.com/aceliuchanghong/FAQ_Of_LLM_Interview |
| awesome-generative-ai-guide | 英文 | 生成式 AI 资源合集，设有按 AI 工程师、AI 产品经理等岗位划分的面试准备专区 | https://github.com/aishwaryanr/awesome-generative-ai-guide |
| LLM Interview Questions and Answers Hub | 英文 | Kalyan KS 整理的百余道大模型面试题及详细解答 | https://github.com/KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub |
| LLMInterviewQuestions | 英文 | 收集 Google、NVIDIA、Meta 等公司考过的大模型面试题，按主题分类整理 | https://github.com/llmgenai/LLMInterviewQuestions |

### 机器学习与深度学习面试

| 名称 | 语言 | 描述 | 链接 |
|------|------|------|------|
| 深度学习 500 问 | 中文 | 以问答形式梳理概率、线性代数、机器学习、深度学习与计算机视觉等常见考点 | https://github.com/scutan90/DeepLearning-500-questions |
| ML-NLP | 中文 | 机器学习、深度学习与 NLP 面试常考知识点及对应代码实现 | https://github.com/NLP-LOVE/ML-NLP |
| AIMLInterviews | 英文 | 面向大厂 AI/ML 岗位的面试指南，覆盖算法编码、ML 编码、ML 基础、系统设计与行为面试 | https://github.com/alirezadir/AIMLInterviews |
| Machine Learning Interviews Book | 英文 | Chip Huyen 撰写的免费在线面试书，讲解 ML 岗位类型、面试流程与 offer 谈判并附分级练习题 | https://huyenchip.com/ml-interviews-book/ |
| 深度学习面试宝典 | 中文 | Amusi 整理的深度学习面试资料，含数学、机器学习、CV、NLP 与 SLAM 等方向 | https://github.com/amusi/Deep-Learning-Interview-Book |
| Deep Learning Interviews | 英文 | Shlomo Kashani 与 Amir Ivry 合著的深度学习面试书，含数百道附完整解答的题目 | https://github.com/BoltzmannEntropy/interviews.ai |
| Minimum Viable Study Plan for ML Interviews | 英文 | 机器学习工程师面试的最小可行学习计划，涵盖面试流程、基础知识与 ML 系统设计 | https://github.com/khangich/machine-learning-interview |
| Data Science Interviews | 英文 | Alexey Grigorev 整理的数据科学面试题与答案，含理论题及 SQL、编码等技术题 | https://github.com/alexeygrigorev/data-science-interviews |
| MLQuestions | 英文 | 机器学习与计算机视觉工程师技术面试题及参考答案，另含 NLP 专题 | https://github.com/andrewekhalel/MLQuestions |
| Cracking the Data Science Interview | 英文 | 数据科学与机器学习面试备考合集，含速查表、书籍、题目与作品集建议 | https://github.com/khanhnamle1994/cracking-the-data-science-interview |
| daily-interview | 中文 | Datawhale 成员整理的面经，覆盖机器学习、CV、NLP、推荐与开发等岗位 | https://github.com/datawhalechina/daily-interview |
| Data Science Cheatsheet | 英文 | 五页篇幅的机器学习速查表，适合考前复习与面试前快速回顾 | https://github.com/aaronwangy/Data-Science-Cheatsheet |

### 机器学习系统设计

| 名称 | 语言 | 描述 | 链接 |
|------|------|------|------|
| ML System Design Case Studies | 英文 | 汇集 80 余家公司 300 多个机器学习系统设计实战案例 | https://github.com/Engineer1999/A-Curated-List-of-ML-System-Design-Case-Studies |
| applied-ml | 英文 | Eugene Yan 按应用场景整理的各公司生产环境机器学习论文与技术博客 | https://github.com/eugeneyan/applied-ml |
| ML System Design Interview 参考资料 | 英文 | ByteByteGo《Machine Learning System Design Interview》各章参考资料 | https://github.com/ByteByteGoHq/ml-bytebytego |
| ml-practical-usecases | 英文 | 收录百余家公司约 650 个机器学习系统设计案例的数据库 | https://github.com/mallahyari/ml-practical-usecases |
| ML System Design Pattern | 英文 | Mercari 总结的机器学习系统设计模式，涵盖服务、训练、质量保障、运维与生命周期 | https://github.com/mercari/ml-system-design-pattern |
| System Design Primer | 中英 | 经典的大规模系统设计学习指南，面向系统设计面试并附 Anki 记忆卡片 | https://github.com/donnemartin/system-design-primer |
| System Design 101 | 英文 | ByteByteGo 用图解方式讲解复杂系统原理，适合系统设计面试复习 | https://github.com/ByteByteGoHq/system-design-101 |

### 算法刷题

| 名称 | 语言 | 描述 | 链接 |
|------|------|------|------|
| LeetCode | 英文 | 国际版算法题库与在线评测平台，提供学习计划、周赛与公司题单 | https://leetcode.com/ |
| 力扣 LeetCode 中国 | 中文 | LeetCode 中国站，提供中文题面、题解社区与企业题库 | https://leetcode.cn/ |
| CodeTop（LeetcodeTop） | 中文 | 汇总国内互联网公司面试高频 LeetCode 题，可按公司、部门与岗位检索 | https://github.com/afatcoder/LeetcodeTop |
| labuladong 的算法笔记 | 中文 | 以框架思维讲解 LeetCode 各类题型的解题套路，强调举一反三 | https://github.com/labuladong/fucking-algorithm |
| 代码随想录 | 中文 | 按推荐顺序编排 200 道经典题的刷题攻略，配详细图解与难点视频讲解 | https://github.com/youngyangyang04/leetcode-master |
| Tech Interview Handbook | 英文 | 面向工程师的免费技术面试手册，含 Grind 75 题单、简历与行为面试指南 | https://github.com/yangshun/tech-interview-handbook |
| NeetCode | 英文 | NeetCode.io 与同名 YouTube 频道配套的官方多语言题解仓库 | https://github.com/neetcode-gh/leetcode |
| LeetCode-Book | 中文 | Krahets 的《剑指 Offer》与《图解算法数据结构》题解，含 Python、Java、C++ 代码 | https://github.com/krahets/LeetCode-Book |
| LeetCodeAnimation | 中文 | 用动画形式逐步演示 LeetCode 题目的解题思路 | https://github.com/MisterBooo/LeetCodeAnimation |
| algorithm-pattern | 中英 | 按题型归纳的算法模板与刷题路线，帮助快速掌握常见解题套路 | https://github.com/greyireland/algorithm-pattern |
| doocs/leetcode | 中英 | 多种编程语言实现的 LeetCode、《剑指 Offer》与《程序员面试金典》题解 | https://github.com/doocs/leetcode |
| 力扣加加 | 中文 | lucifer 的 LeetCode 题解与解题思路记录，按专题归纳常见题型 | https://github.com/azl397985856/leetcode |
| algorithm-base | 中文 | 用动画图解常见算法题，力求把解题思路讲得通俗易懂 | https://github.com/chefyuan/algorithm-base |
| LeetCode Patterns | 英文 | 按解题模式组织的 LeetCode 题单，便于系统化练习 | https://github.com/seanprashad/leetcode-patterns |

<!-- parts:end -->

---

<div align="center">

**[⬅️ 上一篇：🔭 前沿与交叉](05-frontiers.md) · [🏠 返回首页](../README.md) · [下一篇：🤝 参与贡献 ➡️](../CONTRIBUTING.md)**

</div>
