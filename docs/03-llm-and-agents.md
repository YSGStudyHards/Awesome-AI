<div align="center">

<h1>🌟 大模型与智能体</h1>

<p><strong>大语言模型、多模态与 AIGC、智能体、Agent Skills、MCP 协议与 AI 编程</strong></p>

<!-- stats:start -->
本板块收录 **6** 个分类 · **50+** 个子类 · **830+** 条资源 · **650+** 个 GitHub 开源项目
<!-- stats:end -->

**[🏠 返回首页](../README.md) · [📖 总目录](../README.md#-目录) · [🌐 在线浏览本板块](https://ysgstudyhards.github.io/Awesome-AI/#part-3)**

</div>

## 📑 本板块目录

<!-- toc:start -->
| 分类 | 子类导航 |
|:--|:--|
| [💬 大语言模型（LLM）](#-大语言模型llm) | [闭源旗舰模型](#闭源旗舰模型) · [开源与开放权重模型](#开源与开放权重模型) · [推理模型](#推理模型) · [代码大模型](#代码大模型) · [端侧与小模型](#端侧与小模型) · [新架构探索](#新架构探索) · [LLM 核心技术](#llm-核心技术) · [LLM 学习资源](#llm-学习资源) |
| [🎨 多模态与 AIGC](#-多模态与-aigc) | [多模态理解模型（VLM）](#多模态理解模型vlm) · [图像生成模型](#图像生成模型) · [图像生成产品](#图像生成产品) · [图像生成工具与生态](#图像生成工具与生态) · [视频生成](#视频生成) · [3D 生成](#3d-生成) · [数字人与口型驱动](#数字人与口型驱动) · [AIGC 社区与模型站](#aigc-社区与模型站) · [AIGC 学习资源](#aigc-学习资源) |
| [🤖 智能体（Agents）](#-智能体agents) | [核心概念](#核心概念) · [Agent 开发框架](#agent-开发框架) · [低代码与可视化 Agent 平台](#低代码与可视化-agent-平台) · [通用智能体与个人助理](#通用智能体与个人助理) · [多智能体系统](#多智能体系统) · [Deep Research 智能体](#deep-research-智能体) · [浏览器与电脑操作智能体](#浏览器与电脑操作智能体) · [Agent 记忆](#agent-记忆) · [Agent 运行环境与工具集成](#agent-运行环境与工具集成) · [垂直领域智能体](#垂直领域智能体) · [Agent 学习资源](#agent-学习资源) |
| [🧩 Agent Skills](#-agent-skills) | [官方与规范](#官方与规范) · [Skills 精选合集](#skills-精选合集) · [软件工程类 Skills](#软件工程类-skills) · [设计与前端类 Skills](#设计与前端类-skills) · [写作、研究与办公类 Skills](#写作研究与办公类-skills) · [人格与角色类 Skills](#人格与角色类-skills) · [Skills 工具与市场](#skills-工具与市场) |
| [🔌 MCP 与 Agent 协议](#-mcp-与-agent-协议) | [协议与规范](#协议与规范) · [MCP 官方 SDK](#mcp-官方-sdk) · [MCP 开发框架与调试工具](#mcp-开发框架与调试工具) · [热门 MCP Server](#热门-mcp-server) · [MCP 市场与目录](#mcp-市场与目录) · [MCP 学习资源](#mcp-学习资源) |
| [💻 AI 编程](#-ai-编程) | [AI 原生 IDE](#ai-原生-ide) · [终端编程智能体（CLI）](#终端编程智能体cli) · [IDE 插件与代码助手](#ide-插件与代码助手) · [自主软件工程智能体](#自主软件工程智能体) · [AI 应用生成器（Vibe Coding）](#ai-应用生成器vibe-coding) · [规范驱动开发与工作流](#规范驱动开发与工作流) · [代码审查与测试](#代码审查与测试) · [代码库理解与上下文工具](#代码库理解与上下文工具) · [AI 编程学习资源](#ai-编程学习资源) |
<!-- toc:end -->

---

<!-- part: 🌟 大模型与智能体 -->

## 💬 大语言模型（LLM）

> 收录主流闭源与开源大模型、推理与代码模型、新架构探索、核心技术与学习资源，覆盖至 2026 年最新进展

### 闭源旗舰模型

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| GPT 系列（GPT-6 / GPT-5） | OpenAI | ❌ | OpenAI 旗舰模型家族，最新 GPT-6 系列按能力与成本分为 Astra、Sol、Luna 等档位 | https://developers.openai.com/api/docs/models |
| Claude 系列（Opus / Sonnet / Haiku） | Anthropic | ❌ | Anthropic 旗舰模型家族，最新为 Claude 5.5 系列，擅长编程、智能体与长上下文任务 | https://www.anthropic.com/claude |
| Gemini 系列 | Google DeepMind | ❌ | 原生多模态模型家族，最新含 Gemini 4 Argon 与 Gemini 3.x Flash，支持百万 token 上下文 | https://deepmind.google/models/gemini/ |
| Grok 系列 | xAI | ❌ | xAI 闭源旗舰模型家族，最新为 Grok 4.6，提供 API 与 Grok 助手 | https://x.ai/ |
| Muse Spark | Meta | ❌ | Meta 闭源模型，经兼容 OpenAI 与 Anthropic SDK 的 Meta Model API 提供，支持 1M 上下文 | https://github.com/meta-models/meta-model-cookbook |
| 豆包 Seed 2.0 | 字节跳动 | ❌ | 豆包大模型 2.0 系列，含 Pro、Lite、Mini 与 Code 版本，强化多模态理解与长程任务执行 | https://github.com/ByteDance-Seed/Seed2.0 |
| 文心大模型（ERNIE 5） | 百度 | ❌ | 百度文心闭源旗舰系列，已迭代至 ERNIE 5.1，提供 Thinking 推理版本 | https://ernie.baidu.com/ |
| Amazon Nova | 亚马逊 | ❌ | 亚马逊自研基础模型系列，含 Micro、Lite、Pro 与 Nova 2 Lite，通过 Amazon Bedrock 提供 | https://github.com/aws-samples/amazon-nova-samples |

### 开源与开放权重模型

> ✅ 表示公开模型权重，具体许可证（Apache 2.0、MIT、社区许可等）以官方仓库为准

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| Qwen3.8 / Qwen3.5 系列（通义千问） | 阿里巴巴 | ✅ | 通义千问最新开源系列，旗舰 2.4T-A95B 采用混合线性注意力，仓库涵盖 Qwen3.5 至 3.8 | https://github.com/QwenLM/Qwen3.8 |
| Qwen3（通义千问） | 阿里巴巴 | ✅ | 支持思考与非思考模式切换的混合推理系列，含 0.6B 至 235B-A22B 稠密与 MoE 模型 | https://github.com/QwenLM/Qwen3 |
| DeepSeek-V4 | 深度求索 | ✅ | Pro 版为 1.6T 总参 49B 激活 MoE，采用 CSA 与 HCA 混合注意力，支持 1M 上下文，另有 Flash 版 | https://huggingface.co/deepseek-ai |
| DeepSeek-V3 / V3.2 | 深度求索 | ✅ | 671B 总参 37B 激活的 MoE，采用 MLA、无辅助损失负载均衡与多 token 预测 | https://github.com/deepseek-ai/DeepSeek-V3 |
| Llama 4 | Meta | ✅ | Meta 首个原生多模态 MoE 系列，含 Scout 与 Maverick，Scout 支持 10M 上下文 | https://github.com/meta-llama/llama-models |
| Muse Spark Open | Meta | ✅ | Meta 开放权重 MoE，816B 总参 42B 激活，支持图像、音频与视频输入，另有 30B 的 Muse Glimmer | https://github.com/meta-models/meta-oss-cookbook |
| Kimi K3 | 月之暗面 | ✅ | 2.8T 参数原生多模态 MoE，采用 Kimi Delta Attention 与 Gated MLA，支持 1M 上下文 | https://github.com/MoonshotAI/Kimi-K3 |
| Kimi K2.5 | 月之暗面 | ✅ | 在 K2 基座上以约 15T 视觉与文本 token 续训的原生多模态智能体模型 | https://github.com/MoonshotAI/Kimi-K2.5 |
| Kimi K2 | 月之暗面 | ✅ | 1T 总参 32B 激活的 MoE，以 MuonClip 优化器训练，面向智能体与编程，后续迭代 K2.6 | https://github.com/MoonshotAI/Kimi-K2 |
| GLM-5 系列 | 智谱 | ✅ | 智谱新一代开源旗舰，已迭代至 GLM-5.3，面向编程与长程智能体工程 | https://github.com/zai-org/GLM-5 |
| GLM-4.5 / 4.6 / 4.7 | 智谱 | ✅ | 355B 总参 32B 激活的 MoE，统一推理、编程与智能体能力，另有轻量版 GLM-4.5-Air | https://github.com/zai-org/GLM-4.5 |
| GLM-4（ChatGLM） | 智谱 / 清华大学 | ✅ | 开源多语言多模态对话模型系列，含 GLM-4-9B 等，支持工具调用与长上下文 | https://github.com/zai-org/GLM-4 |
| ChatGLM-6B | 智谱 / 清华大学 | ✅ | 早期中英双语开源对话模型，可在消费级显卡部署，推动国产开源大模型普及 | https://github.com/zai-org/ChatGLM-6B |
| MiniMax-M3 | MiniMax | ✅ | 约 428B 总参 23B 激活的原生多模态模型，采用 MiniMax 稀疏注意力（MSA），支持 1M 上下文 | https://github.com/MiniMax-AI/MiniMax-M3 |
| MiniMax-M2 系列 | MiniMax | ✅ | 230B 总参 10B 激活的 MoE，面向编程与智能体工作流，后续迭代 M2.5、M2.7 | https://github.com/MiniMax-AI/MiniMax-M2 |
| gpt-oss | OpenAI | ✅ | OpenAI 开放权重 MoE 模型，含 gpt-oss-120b 与 20b，Apache 2.0 许可，可调推理强度 | https://github.com/openai/gpt-oss |
| Gemma 4 / Gemma 3 | Google DeepMind | ✅ | 谷歌开放模型家族，Gemma 4 含 31B 稠密与 26B-A4B MoE，支持多模态输入与思考模式 | https://ai.google.dev/gemma |
| Mistral / Mixtral | Mistral AI | ✅ | 欧洲开源模型代表，最新 Mistral Large 4 为 1T 总参多模态 MoE，另有 Medium 3.5 与 Small 4 | https://mistral.ai/ |
| Grok-1 | xAI | ✅ | xAI 开放的 314B 参数 MoE 基座模型权重，Apache 2.0 许可 | https://github.com/xai-org/grok-1 |
| ERNIE 4.5（文心） | 百度 | ✅ | 文心 4.5 开源系列，含 47B 与 3B 激活的 MoE 及 0.3B 稠密模型，覆盖文本与视觉 | https://github.com/PaddlePaddle/ERNIE |
| Hy3（混元） | 腾讯 | ✅ | 腾讯混元新一代开源 MoE，295B 总参 21B 激活，面向推理与智能体任务 | https://github.com/Tencent-Hunyuan/Hy3 |
| Hy4-preview（混元） | 腾讯 | ✅ | 混元新一代旗舰预览版，770B 总参 49B 激活，采用 Gated DSA 稀疏注意力 | https://github.com/Tencent-Hunyuan/Hy4-preview |
| Hunyuan-A13B（混元） | 腾讯 | ✅ | 80B 总参 13B 激活的 MoE，支持快慢思考切换与 256K 上下文 | https://github.com/Tencent-Hunyuan/Hunyuan-A13B |
| Seed-OSS | 字节跳动 | ✅ | Seed 团队 36B 稠密开源模型，以 12T token 训练，原生 512K 上下文并支持思考预算控制 | https://github.com/ByteDance-Seed/seed-oss |
| MiMo-V2-Flash | 小米 | ✅ | 309B 总参 15B 激活的 MoE，采用混合注意力与多 token 预测，后续推出 V2.5 全模态版本 | https://github.com/XiaomiMiMo/MiMo-V2-Flash |
| Step-3.5-Flash | 阶跃星辰 | ✅ | 196B 总参约 11B 激活的 MoE，面向智能体任务兼顾推理速度与能力 | https://github.com/stepfun-ai/Step-3.5-Flash |
| Ling 2.0（百灵） | 蚂蚁集团 | ✅ | 蚂蚁百灵 MoE 系列，采用 1/32 激活比，含 mini、flash 等，已迭代至 1T 规模的 Ling 2.6 | https://github.com/inclusionAI/Ling-V2 |
| LongCat-2.0 | 美团 | ✅ | 1.6T 总参约 48B 激活，采用 LongCat 稀疏注意力与 N-gram 嵌入，支持 1M 上下文 | https://github.com/meituan-longcat/LongCat-2.0 |
| LongCat-Flash-Chat | 美团 | ✅ | 560B 总参 MoE，引入零计算专家，按 token 动态激活约 27B 参数 | https://github.com/meituan-longcat/LongCat-Flash-Chat |
| Nemotron 3 | NVIDIA | ✅ | Mamba-Transformer 混合 MoE 系列，含 Nano、Super、Ultra，开放权重与可复现训练配方 | https://github.com/NVIDIA-NeMo/Nemotron |
| OLMo | Allen AI | ✅ | 完全开放的语言模型系列，公开权重、训练数据、代码与中间检查点 | https://github.com/allenai/OLMo |
| Granite 4.1 | IBM | ✅ | IBM 企业级开源模型，提供 3B、8B、30B 稠密版本，Apache 2.0 许可 | https://github.com/ibm-granite/granite-4.1-language-models |
| Falcon-H1 | TII | ✅ | 阿联酋 TII 推出的 Transformer 与 Mamba 并行混合架构系列，覆盖 0.5B 至 34B | https://github.com/tiiuae/Falcon-H1 |
| InternLM（书生·浦语） | 上海人工智能实验室 | ✅ | 书生·浦语开源系列，InternLM3-8B 仅用 4T token 训练，支持深度思考模式 | https://github.com/InternLM/InternLM |
| Baichuan（百川） | 百川智能 | ✅ | 中文优化开源大模型，Baichuan 2 含 7B 与 13B，后续推出 Baichuan-M 医疗模型 | https://github.com/baichuan-inc/Baichuan2 |
| Yi（零一万物） | 零一万物 | ✅ | 从零训练的中英双语开源模型系列，含 6B、9B、34B 及 200K 长上下文版本 | https://github.com/01-ai/Yi |
| Command 系列 | Cohere | ✅ | 面向企业 RAG 与工具调用的模型，Command A 与 R+ 权重以非商用许可开放 | https://cohere.com/command |

### 推理模型

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| OpenAI o 系列 | OpenAI | ❌ | 以大规模强化学习训练长思维链的推理模型系列，含 o1、o3 与 o4-mini | https://openai.com/index/learning-to-reason-with-llms/ |
| DeepSeek-R1 | 深度求索 | ✅ | 以 GRPO 大规模强化学习训练的开源推理模型，MIT 许可并开源多个蒸馏小模型 | https://github.com/deepseek-ai/DeepSeek-R1 |
| QwQ | 阿里巴巴 | ✅ | 通义千问推理模型系列，QwQ-32B 以中等规模实现较强的数学与代码推理 | https://github.com/QwenLM/QwQ |
| Kimi k1.5 | 月之暗面 | ❌ | 多模态推理模型技术报告，提出长上下文强化学习扩展与改进的策略优化方法 | https://github.com/MoonshotAI/Kimi-k1.5 |
| Magistral | Mistral AI | ✅ | Mistral 推理模型系列，基于纯强化学习训练，Magistral Small 开放权重 | https://arxiv.org/abs/2506.10910 |
| Phi-4-reasoning | 微软 | ✅ | 基于 Phi-4 经推理数据监督微调与强化学习训练的 14B 推理模型 | https://huggingface.co/microsoft/Phi-4-reasoning |
| MiniMax-M1 | MiniMax | ✅ | 456B 总参 45.9B 激活的开放权重混合注意力推理模型，原生支持 1M 上下文 | https://github.com/MiniMax-AI/MiniMax-M1 |
| LongCat-Flash-Thinking | 美团 | ✅ | 560B 总参 MoE 推理模型，以分领域并行强化学习融合 STEM、代码与智能体能力 | https://github.com/meituan-longcat/LongCat-Flash-Thinking |
| Ring 2.0（百灵） | 蚂蚁集团 | ✅ | 基于 Ling 2.0 MoE 架构经强化学习训练的推理模型系列 | https://github.com/inclusionAI/Ring-V2 |
| Seed-Thinking-v1.5 | 字节跳动 | ❌ | 200B 总参 20B 激活的 MoE 推理模型技术报告，详述强化学习训练方法 | https://github.com/ByteDance-Seed/Seed-Thinking-v1.5 |
| MiMo | 小米 | ✅ | 7B 推理模型，从预训练到后训练全流程面向推理能力优化 | https://github.com/XiaomiMiMo/MiMo |
| DeepSeekMath-V2 | 深度求索 | ✅ | 面向可自我验证数学推理的模型，适用于定理证明与竞赛数学 | https://github.com/deepseek-ai/DeepSeek-Math-V2 |
| DeepSeek-Prover-V2 | 深度求索 | ✅ | 面向 Lean 4 形式化定理证明的开源模型 | https://github.com/deepseek-ai/DeepSeek-Prover-V2 |
| Open-R1 | Hugging Face | ✅ | 完全开放复现 DeepSeek-R1 训练流程，公开数据、代码与模型 | https://github.com/huggingface/open-r1 |
| OpenThinker | Open Thoughts | ✅ | 开源推理数据整理项目，发布 OpenThoughts 数据集与 OpenThinker 模型 | https://github.com/open-thoughts/open-thoughts |
| Skywork-OR1 | 昆仑万维 | ✅ | 基于强化学习训练的数学与代码推理模型，公开数据与训练代码 | https://github.com/SkyworkAI/Skywork-OR1 |
| s1 | 斯坦福大学 | ✅ | 仅用 1000 条样本微调，并以预算强制实现简单的测试时扩展 | https://github.com/simplescaling/s1 |

### 代码大模型

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| Qwen3-Coder | 阿里巴巴 | ✅ | 通义千问代码模型系列，含 480B-A35B 与 Qwen3-Coder-Next，原生 256K 上下文，面向智能体编程 | https://github.com/QwenLM/Qwen3-Coder |
| DeepSeek-Coder-V2 | 深度求索 | ✅ | 基于 DeepSeek-V2 的 MoE 代码模型，支持 338 种编程语言与 128K 上下文 | https://github.com/deepseek-ai/DeepSeek-Coder-V2 |
| DeepSeek-Coder | 深度求索 | ✅ | 从零训练于 2T token 的代码模型系列，覆盖 1.3B 至 33B，支持项目级补全 | https://github.com/deepseek-ai/DeepSeek-Coder |
| Devstral | Mistral AI | ✅ | Mistral 面向软件工程智能体的开源代码模型，含 Devstral 2 与 Devstral Small | https://huggingface.co/mistralai |
| Codestral | Mistral AI | ✅ | Mistral 首个代码模型，支持 80 余种编程语言与中间填充补全 | https://mistral.ai/news/codestral/ |
| Seed-Coder | 字节跳动 | ✅ | 8B 轻量开源代码模型系列，以大模型自主筛选构建代码训练数据 | https://github.com/ByteDance-Seed/Seed-Coder |
| Kimi-Dev | 月之暗面 | ✅ | 72B 开源代码模型，面向软件工程任务的问题定位与修复 | https://github.com/MoonshotAI/Kimi-Dev |
| CodeGeeX4 | 智谱 | ✅ | 基于 GLM-4-9B 的多语言代码模型，支持补全、代码问答与 IDE 插件 | https://github.com/zai-org/CodeGeeX4 |
| StarCoder2 | BigCode | ✅ | BigCode 开放代码模型，基于 The Stack v2 训练，含 3B、7B、15B | https://github.com/bigcode-project/starcoder2 |
| StarCoder | BigCode | ✅ | 开放科学协作训练的 15.5B 代码模型，推动代码大模型开源 | https://github.com/bigcode-project/starcoder |
| OpenCoder | OpenCoder 团队 | ✅ | 完全开放的代码模型，公开训练数据、数据处理流程与训练细节 | https://github.com/OpenCoder-llm/OpenCoder-llm |
| Code Llama | Meta | ✅ | 基于 Llama 2 的代码模型系列，支持代码补全与中间填充（已归档） | https://github.com/meta-llama/codellama |
| Granite Code | IBM | ✅ | IBM 面向企业场景的开源代码模型系列，Apache 2.0 许可（已归档） | https://github.com/ibm-granite/granite-code-models |
| Yi-Coder | 零一万物 | ✅ | 含 1.5B 与 9B 的小参数代码模型，支持 128K 上下文 | https://github.com/01-ai/Yi-Coder |
| aiXcoder-7B | aiXcoder | ✅ | 面向代码补全的 7B 模型，采用结构化中间填充训练 | https://github.com/aixcoder-plugin/aiXcoder-7B |
| WizardCoder | WizardLM 团队 | ✅ | 基于 Evol-Instruct 指令进化方法训练的代码模型，同仓库含 WizardLM 与 WizardMath | https://github.com/nlpxucan/WizardLM |

### 端侧与小模型

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| MiniCPM | 面壁智能 / OpenBMB | ✅ | 端侧小模型系列，已迭代至 MiniCPM5，含 1B 与 2B 等尺寸 | https://github.com/OpenBMB/MiniCPM |
| Phi-4 | 微软 | ✅ | 14B 小模型，以高质量合成数据训练，另有 Phi-4-mini 与多模态版本 | https://huggingface.co/microsoft/phi-4 |
| Gemma 4 端侧版（E2B / E4B） | Google DeepMind | ✅ | 面向手机等端侧设备的 Gemma 4 小模型，附官方 JAX 推理与微调库 | https://github.com/google-deepmind/gemma |
| SmolLM3 | Hugging Face | ✅ | 3B 完全开源小模型，公开训练配方，支持双模式推理与长上下文 | https://github.com/huggingface/smollm |
| Qwen3.5 小尺寸模型 | 阿里巴巴 | ✅ | Qwen3.5 系列 0.8B、2B、4B、9B 模型，适合端侧与低成本部署 | https://huggingface.co/collections/Qwen/qwen35 |
| Llama 3.2（1B / 3B） | Meta | ✅ | Meta 面向端侧设备的轻量文本模型，支持 128K 上下文 | https://www.llama.com/ |
| MobileLLM | Meta | ✅ | 面向手机端优化的十亿参数以下模型，采用深而窄架构与权重共享 | https://github.com/facebookresearch/MobileLLM |
| LFM（Liquid Foundation Models） | Liquid AI | ✅ | 面向端侧的高效基础模型系列，含 LFM2.5 与 LFM3 的文本、视觉与音频模型 | https://github.com/Liquid4All/cookbook |
| Granite 4.0 | IBM | ✅ | 采用 Mamba-2 与 Transformer 混合架构的小模型系列，含 Micro、Tiny 等尺寸 | https://github.com/ibm-granite/granite-4.0-language-models |
| BitNet b1.58 | 微软 | ✅ | 1.58-bit 原生低比特大模型及官方推理框架，可在 CPU 上高效运行 | https://github.com/microsoft/BitNet |
| Hunyuan 稠密小模型 | 腾讯 | ✅ | 混元 0.5B、1.8B、4B、7B 稠密模型，沿用 Hunyuan-A13B 的训练策略 | https://github.com/Tencent-Hunyuan/Hunyuan-7B |
| OpenELM | 苹果 | ✅ | 苹果开源的高效语言模型，采用逐层缩放的参数分配，代码收录于 CoreNet | https://github.com/apple/corenet |
| TinyLlama | 新加坡科技设计大学 | ✅ | 在 3T token 上预训练的 1.1B Llama 架构小模型（已归档） | https://github.com/jzhang38/TinyLlama |

### 新架构探索

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| Mamba / Mamba-2 | CMU / 普林斯顿大学 | ✅ | 选择性状态空间模型，以线性复杂度建模长序列，是 Transformer 的主要替代架构 | https://github.com/state-spaces/mamba |
| RWKV | RWKV 社区 | ✅ | 可像 Transformer 一样并行训练的 RNN 架构，推理无需 KV 缓存，已迭代至 RWKV-7 | https://github.com/BlinkDL/RWKV-LM |
| RetNet | 微软 | ✅ | 保留网络架构，兼顾并行训练、低成本推理与长序列建模 | https://arxiv.org/abs/2307.08621 |
| Jamba | AI21 Labs | ✅ | Transformer 与 Mamba 交错的混合 MoE 架构，支持 256K 上下文 | https://arxiv.org/abs/2403.19887 |
| flash-linear-attention | fla-org | ✅ | 线性注意力等新型序列模型的高效 Triton 实现库，涵盖 GLA、DeltaNet、KDA 等 | https://github.com/fla-org/flash-linear-attention |
| Gated DeltaNet | NVIDIA | ✅ | 结合门控与 Delta 规则改进 Mamba2 的线性注意力，被 Qwen3.5 及后续系列采用 | https://github.com/NVlabs/GatedDeltaNet |
| Kimi Linear | 月之暗面 | ✅ | 基于 Kimi Delta Attention 的混合线性注意力架构，开源 48B-A3B 模型 | https://github.com/MoonshotAI/Kimi-Linear |
| MoBA | 月之暗面 | ✅ | 将 MoE 思想引入注意力的块稀疏注意力机制，面向长上下文 | https://github.com/MoonshotAI/MoBA |
| DeepSeek-V3.2-Exp | 深度求索 | ✅ | 引入 DeepSeek 稀疏注意力（DSA）以提升长上下文效率的实验模型 | https://github.com/deepseek-ai/DeepSeek-V3.2-Exp |
| MiniMax-01 | MiniMax | ✅ | 大规模采用 Lightning Attention 线性注意力的混合架构模型，推理支持 4M 上下文 | https://github.com/MiniMax-AI/MiniMax-01 |
| Engram | 深度求索 | ✅ | 以可扩展查表实现条件记忆，为大模型引入新的稀疏维度 | https://github.com/deepseek-ai/Engram |
| Qwen3.8-Flash-Next | 阿里巴巴 | ✅ | Qwen4 架构预览模型，采用 Gated DeltaNet 与 Qwen 稀疏注意力混合设计 | https://github.com/QwenLM/Qwen3.8-Flash-Next |
| LLaDA | 中国人民大学 / 蚂蚁集团 | ✅ | 掩码扩散语言模型，LLaDA 8B 与同规模自回归模型性能相当 | https://github.com/ML-GSAI/LLaDA |
| LLaDA2.X | 蚂蚁集团 | ✅ | 扩散语言模型系列，LLaDA2.0-flash 将 MoE 扩散模型扩展到 100B 参数 | https://github.com/inclusionAI/LLaDA2.X |
| Dream | 香港大学 | ✅ | 以自回归模型初始化训练的 7B 扩散语言模型 | https://github.com/DreamLM/Dream |
| xLSTM | NX-AI | ✅ | 引入指数门控与矩阵记忆的扩展 LSTM 架构，可与 Transformer 和 SSM 竞争 | https://github.com/NX-AI/xlstm |
| RecurrentGemma | Google DeepMind | ✅ | 基于 Griffin 架构（门控线性循环加局部注意力）的开放权重模型 | https://github.com/google-deepmind/recurrentgemma |
| DeepSeekMoE | 深度求索 | ✅ | 提出细粒度专家切分与共享专家隔离的 MoE 架构 | https://github.com/deepseek-ai/DeepSeek-MoE |

### LLM 核心技术

| 技术 | 描述 | 链接 |
|------|------|------|
| 涌现能力（Emergent Abilities） | 模型规模超过一定阈值后才出现、小模型不具备的能力现象 | https://arxiv.org/abs/2206.07682 |
| 子词分词（BPE） | 将文本切分为子词单元的分词方法，是 GPT 等模型分词器的基础 | https://arxiv.org/abs/1508.07909 |
| RLHF | 基于人类反馈训练奖励模型，再用强化学习优化策略模型 | https://huggingface.co/blog/rlhf |
| 可验证奖励强化学习（RLVR） | 以可自动校验的答案（如数学、代码）作为奖励信号训练模型，由 Tülu 3 提出 | https://arxiv.org/abs/2411.15124 |
| 上下文窗口扩展（YaRN） | 基于 RoPE 插值的高效上下文扩展方法，被 Qwen 等模型用于长文本外推 | https://arxiv.org/abs/2309.00071 |
| 蒸馏（Distillation） | 将大模型能力迁移到小模型，DistilBERT 为早期代表 | https://arxiv.org/abs/1910.01108 |
| 多 token 预测（MTP） | 训练时同时预测多个后续 token，提升样本效率并可用于投机解码 | https://arxiv.org/abs/2404.19737 |
| Muon 优化器 | 基于矩阵正交化的优化器，已被 Kimi K2 等大模型用于大规模训练 | https://github.com/KellerJordan/Muon |

### LLM 学习资源

| 资源 | 类型 | 描述 | 链接 |
|------|------|------|------|
| LLM 课程（Maxime Labonne） | 开源课程 | 含路线图与 Colab 笔记本的 LLM 课程，分基础、科学家与工程师三条路线 | https://github.com/mlabonne/llm-course |
| Andrej Karpathy：Neural Networks: Zero to Hero | 视频系列 | 从反向传播到手写 GPT，逐步实现神经网络与语言模型 | https://karpathy.ai/zero-to-hero.html |
| Andrej Karpathy：Let's build GPT | 视频 | 从零手写 GPT，深入理解 Transformer 原理 | https://www.youtube.com/watch?v=kCc8FmEb1nY |
| Andrej Karpathy：Deep Dive into LLMs like ChatGPT | 视频 | 面向大众的 LLM 全流程讲解，涵盖预训练、后训练与强化学习 | https://www.youtube.com/watch?v=7xTGNNLPyMI |
| Andrej Karpathy：Intro to Large Language Models | 视频 | 一小时 LLM 入门讲座，介绍原理、发展方向与安全挑战 | https://www.youtube.com/watch?v=zjkBMFhNj_g |
| Hugging Face LLM 课程 | 在线课程 | HF 官方课程（原 NLP 课程），讲解 Transformers 生态与大模型微调、推理 | https://huggingface.co/learn/llm-course |
| Stanford CS336：Language Modeling from Scratch | 大学课程 | 斯坦福课程，从分词器、模型架构到训练与对齐完整实现语言模型 | https://cs336.stanford.edu/ |
| Stanford CS25：Transformers United | 大学课程 | 斯坦福 Transformer 研讨课，邀请一线研究者讲授前沿进展 | https://web.stanford.edu/class/cs25/ |
| Stanford CS324：Large Language Models | 大学课程 | 斯坦福 LLM 专题课，涵盖模型能力、数据、安全、法律与环境影响 | https://stanford-cs324.github.io/winter2022/ |
| 3Blue1Brown：深度学习可视化 | 视频 | 用动画直观讲解神经网络、GPT 与注意力机制 | https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi |
| LLM Visualization | 交互可视化 | 以 3D 动画逐步展示 GPT 类模型的推理计算过程 | https://bbycroft.net/llm |
| Transformer Explainer | 交互可视化 | 在浏览器中运行 GPT-2，交互式理解 Transformer 内部计算 | https://poloclub.github.io/transformer-explainer/ |
| The Illustrated Transformer | 图解博客 | Jay Alammar 以图解方式讲解 Transformer 结构，经典入门读物 | https://jalammar.github.io/illustrated-transformer/ |
| The Annotated Transformer | 代码教程 | 哈佛 NLP 逐行注释的 Transformer PyTorch 实现 | https://github.com/harvardnlp/annotated-transformer |
| Cohere LLM University | 在线课程 | Cohere 推出的免费 LLM 课程，涵盖嵌入、RAG 与提示设计 | https://cohere.com/llmu |

---

## 🎨 多模态与 AIGC

> 收录视觉语言模型，以及图像、视频、3D 与数字人生成领域的主流模型、产品、工具与学习资源

### 多模态理解模型（VLM）

> 能理解图像、视频与文档的多模态大模型，闭源模型按家族列出，开源模型链接官方仓库

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| GPT 多模态系列（GPT-4o 起） | OpenAI | ❌ | GPT-4o 开启端到端原生多模态，图像与音频理解能力延续至 GPT-5 及后续系列 | https://developers.openai.com/api/docs/guides/images-vision |
| Gemini 系列 | Google DeepMind | ❌ | 原生多模态模型家族，可统一理解文本、图像、音频、视频与 PDF，支持超长上下文 | https://ai.google.dev/gemini-api/docs |
| Claude 系列 | Anthropic | ❌ | 支持图像与 PDF 输入的视觉理解，擅长图表、截图与长文档分析 | https://platform.claude.com/docs/en/build-with-claude/vision |
| Qwen3-VL | 阿里巴巴 | ✅ | 通义千问视觉语言模型系列，覆盖 2B 至 235B-A22B 稠密与 MoE 版本，提供 Instruct 与 Thinking 版 | https://github.com/QwenLM/Qwen3-VL |
| Qwen3-Omni | 阿里巴巴 | ✅ | 端到端全模态模型，统一理解文本、图像、音频与视频，并可实时流式生成语音 | https://github.com/QwenLM/Qwen3-Omni |
| InternVL | 上海人工智能实验室 | ✅ | 开源多模态大模型系列，最新 InternVL3.5 覆盖 1B 至 241B-A28B 多种规模 | https://github.com/OpenGVLab/InternVL |
| MiniCPM-V / MiniCPM-o | 面壁智能 / OpenBMB | ✅ | 端侧多模态模型系列，MiniCPM-V 4.7 推出 35B-A3B MoE 与 1B 版本，MiniCPM-o 支持全模态实时交互 | https://github.com/OpenBMB/MiniCPM-V |
| GLM-V（GLM-4.5V / GLM-4.6V） | 智谱 | ✅ | 智谱视觉推理模型系列，含 GLM-4.1V-Thinking、GLM-4.5V 与 GLM-4.6V，后续并入原生多模态 GLM-5 系列 | https://github.com/zai-org/GLM-V |
| Kimi-VL | 月之暗面 | ✅ | MoE 视觉语言模型，仅激活 2.8B 参数，支持 128K 上下文并提供长思考版本 | https://github.com/MoonshotAI/Kimi-VL |
| DeepSeek-VL2 | 深度求索 | ✅ | 基于 MoE 架构的视觉语言模型系列，擅长视觉问答、OCR 与图表理解 | https://github.com/deepseek-ai/DeepSeek-VL2 |
| LLaVA | UW-Madison 等 | ✅ | 视觉指令微调的开创性开源工作，奠定视觉编码器加语言模型的主流 VLM 架构 | https://github.com/haotian-liu/LLaVA |
| LLaVA-NeXT / LLaVA-OneVision | LLaVA-VL | ✅ | LLaVA 后续系列，LLaVA-OneVision 统一单图、多图与视频理解，并衍生 LLaVA-Video、LLaVA-Critic | https://github.com/LLaVA-VL/LLaVA-NeXT |
| Ovis2.5 | 阿里巴巴 AIDC-AI | ✅ | 结构化对齐视觉与文本嵌入的多模态模型，Ovis2.5 支持原生分辨率感知与思考模式 | https://github.com/ATH-MaaS/Ovis |
| MiMo-VL | 小米 | ✅ | 小米 7B 视觉语言模型，经四阶段预训练与混合在线强化学习，兼容 Qwen2.5-VL 架构 | https://github.com/XiaomiMiMo/MiMo-VL |
| Seed1.5-VL | 字节跳动 | ❌ | 字节跳动 Seed 视觉语言基础模型，由 532M 视觉编码器与 20B 激活参数 MoE 组成，提供 API 与示例 | https://github.com/ByteDance-Seed/Seed1.5-VL |
| Step3-VL-10B | 阶跃星辰 | ✅ | 10B 参数的轻量级开源多模态基础模型，兼顾视觉感知与复杂推理能力 | https://github.com/stepfun-ai/Step3-VL-10B |
| Molmo2 | Ai2 | ✅ | Ai2 完全开放的视觉语言模型，擅长视频理解、指向定位与目标跟踪，公开数据与训练代码 | https://github.com/allenai/molmo2 |
| CogVLM2 | 智谱 | ✅ | 基于 Llama 3 的开源视觉语言模型，支持高分辨率图像与视频理解 | https://github.com/zai-org/CogVLM2 |
| NVILA / VILA | NVIDIA | ✅ | NVIDIA 高效视觉语言模型系列，NVILA 以先扩展后压缩策略提升高分辨率与长视频处理效率 | https://github.com/NVlabs/VILA |
| FastVLM | 苹果 | ✅ | 采用 FastViTHD 视觉编码器的高效 VLM，大幅缩短首 token 延迟，并提供 iOS 端侧演示 | https://github.com/apple-aiml-research/ml-fastvlm |
| Moondream | M87 Labs | ✅ | 轻量级开源视觉语言模型，提供 2B 与 0.5B 版本，可在边缘设备高效运行 | https://github.com/m87-labs/moondream |
| Florence-2 | 微软 | ✅ | 基于统一序列到序列提示的轻量视觉基础模型，可完成描述、检测、分割与 OCR 等任务 | https://huggingface.co/microsoft/Florence-2-large |
| PaliGemma 2 | Google | ✅ | 基于 SigLIP 视觉编码器与 Gemma 2 的开放视觉语言模型，便于针对特定视觉任务微调 | https://ai.google.dev/gemma/docs/paligemma |
| SmolVLM2 | Hugging Face | ✅ | 面向端侧的小型视觉语言模型，最小 256M 参数即可理解图像与视频 | https://huggingface.co/blog/smolvlm2 |

### 图像生成模型

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| FLUX.2 | Black Forest Labs | ✅ | 统一文生图与多参考图编辑的新一代模型，开放 32B dev 与 4B、9B klein 权重 | https://github.com/black-forest-labs/flux2 |
| FLUX.1 | Black Forest Labs | ✅ | 12B 修正流 Transformer 文生图模型，开放 schnell、dev 及 Kontext 上下文编辑等权重 | https://github.com/black-forest-labs/flux |
| Stable Diffusion 3.5 | Stability AI | ✅ | 基于 MMDiT 架构的文生图模型，提供 Large、Large Turbo 与 Medium 版本 | https://github.com/Stability-AI/sd3.5 |
| Stable Diffusion | CompVis / Stability AI | ✅ | 开启开源文生图浪潮的潜在扩散模型，衍生出庞大的 LoRA 与插件生态 | https://github.com/CompVis/stable-diffusion |
| SDXL / generative-models | Stability AI | ✅ | Stability AI 官方生成模型仓库，包含 SDXL、SDXL-Turbo 与 Stable Video Diffusion | https://github.com/Stability-AI/generative-models |
| Qwen-Image-2.1 | 阿里巴巴 | ✅ | 统一图像生成与编辑的新版 Qwen-Image，支持原生透明通道与多参考图，提供 8 步 Turbo 版 | https://github.com/QwenLM/Qwen-Image-2.1 |
| Qwen-Image | 阿里巴巴 | ✅ | 20B MMDiT 图像生成基础模型，以复杂文字渲染与精准图像编辑见长 | https://github.com/QwenLM/Qwen-Image |
| HunyuanImage-3.0 | 腾讯 | ✅ | 原生多模态自回归 MoE 图像生成模型，总参数 80B、激活 13B，支持推理式生图与图像编辑 | https://github.com/Tencent-Hunyuan/HunyuanImage-3.0 |
| Z-Image | 阿里巴巴 | ✅ | 6B 参数高效图像生成模型家族，Z-Image-Turbo 仅需 8 步推理，16GB 显存消费级显卡可运行 | https://github.com/Tongyi-MAI/Z-Image |
| HiDream-O1-Image | 智象未来 | ✅ | 8B 像素级统一 Transformer 图像生成模型，无需 VAE 与独立文本编码器 | https://github.com/HiDream-ai/HiDream-O1-Image |
| HiDream-I1 | 智象未来 | ✅ | 17B 参数开源文生图基础模型，采用稀疏 DiT 架构，提供 Full、Dev 与 Fast 版本 | https://github.com/HiDream-ai/HiDream-I1 |
| Kolors（可图） | 快手 | ✅ | 快手可图团队的潜在扩散文生图模型，中英文理解与中文文字渲染能力突出 | https://github.com/Kwai-Kolors/Kolors |
| HunyuanDiT | 腾讯 | ✅ | 具备细粒度中英文理解的多分辨率扩散 Transformer 文生图模型 | https://github.com/Tencent-Hunyuan/HunyuanDiT |
| LongCat-Image | 美团 | ✅ | 6B 参数中英双语图像生成与编辑模型，中文文字渲染能力突出 | https://github.com/meituan-longcat/LongCat-Image |
| GLM-Image | 智谱 | ✅ | 9B 自回归生成器加 7B 扩散解码器的混合架构图像模型，擅长文字渲染与知识密集型图像 | https://github.com/zai-org/GLM-Image |
| CogView4 | 智谱 | ✅ | 支持中英双语提示与汉字生成的开源 DiT 文生图模型 | https://github.com/zai-org/CogView4 |
| SANA | NVIDIA | ✅ | 基于线性注意力 DiT 与深度压缩自编码器的高效高分辨率生成模型，并扩展出 SANA-Video | https://github.com/NVlabs/Sana |
| Lumina-Image-2.0 | 上海人工智能实验室 | ✅ | 2.6B 参数的统一高效文生图框架，以 Gemma-2-2B 作为文本编码器 | https://github.com/Alpha-VLLM/Lumina-Image-2.0 |
| PixArt-Σ | 华为诺亚方舟实验室等 | ✅ | 采用弱到强训练策略的高效 DiT 文生图模型，可直接生成 4K 图像 | https://github.com/PixArt-alpha/PixArt-sigma |
| OmniGen2 | 智源研究院 | ✅ | 统一文生图、指令编辑与上下文生成的多模态生成模型，文本与图像采用双路解码 | https://github.com/VectorSpaceLab/OmniGen2 |
| BAGEL | 字节跳动 | ✅ | 开源统一多模态模型，同时具备图像理解、文生图与图像编辑能力，采用 MoT 架构 | https://github.com/ByteDance-Seed/Bagel |
| Janus-Pro | 深度求索 | ✅ | 解耦视觉编码的统一多模态理解与生成模型，兼顾图像理解与文生图 | https://github.com/deepseek-ai/Janus |
| Step1X-Edit | 阶跃星辰 | ✅ | 开源通用图像编辑模型，结合多模态大模型与扩散解码器实现指令编辑 | https://github.com/stepfun-ai/Step1X-Edit |
| VAR | 字节跳动 / 北京大学 | ✅ | 以由粗到细的下一尺度预测生成图像的视觉自回归模型，获 NeurIPS 2024 最佳论文 | https://github.com/FoundationVision/VAR |

### 图像生成产品

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| GPT Image（原 DALL·E 3） | OpenAI | OpenAI 图像生成模型系列，已接替 DALL·E 3，最新 gpt-image-2.5 提供 Sunburst 与 Flare 两个变体 | https://developers.openai.com/api/docs/guides/image-generation |
| Nano Banana（Gemini 图像生成） | Google | Gemini 原生图像生成与编辑模型，最新为 Nano-Banana 2.1 与 Pro，支持多图融合与对话式修图 | https://ai.google.dev/gemini-api/docs/image-generation |
| Midjourney | Midjourney | 以艺术风格与审美见长的商业图像生成服务，亦支持图生视频 | https://www.midjourney.com/ |
| 即梦 AI | 字节跳动 | 字节跳动 AI 创作平台，集成 Seedream 图像生成与 Seedance 视频生成模型 | https://jimeng.jianying.com/ |
| Ideogram | Ideogram | 以准确文字排版渲染见长的图像生成平台，最新为 Ideogram 4.5 | https://ideogram.ai/ |
| Grok Imagine | xAI | xAI 推出的图像与视频生成服务，集成于 Grok 应用并提供 API | https://grok.com/imagine |
| Adobe Firefly | Adobe | Adobe 生成式 AI 创作平台，强调商用安全并深度集成 Photoshop 等创意软件 | https://firefly.adobe.com/ |
| Leonardo.Ai | Leonardo.Ai（Canva） | 面向游戏与设计素材的图像与视频生成平台，支持训练自定义风格模型 | https://leonardo.ai/ |
| Krea | Krea | 以实时生成与画面增强见长的 AI 创作平台，聚合多家图像与视频模型 | https://www.krea.ai/ |
| Recraft | Recraft | 面向设计师的图像生成平台，支持矢量图输出与品牌风格一致性，最新为 Recraft V4.1 | https://www.recraft.ai/ |
| FLUX API | Black Forest Labs | Black Forest Labs 官方 API 与在线平台，提供 FLUX Pro 等闭源高端模型 | https://bfl.ai/ |

### 图像生成工具与生态

| 名称 | 描述 | 链接 |
|------|------|------|
| ComfyUI | 基于节点工作流的模块化扩散模型界面与后端，支持图像、视频、3D 与音频生成 | https://github.com/Comfy-Org/ComfyUI |
| Stable Diffusion WebUI | AUTOMATIC1111 开发的经典 Stable Diffusion 网页界面，扩展插件生态丰富 | https://github.com/AUTOMATIC1111/stable-diffusion-webui |
| Diffusers | Hugging Face 扩散模型库，统一封装图像、视频与音频生成管线，便于推理与微调 | https://github.com/huggingface/diffusers |
| Stable Diffusion WebUI Forge | 基于 WebUI 的性能优化分支，改进显存管理并支持 FLUX 等新模型 | https://github.com/lllyasviel/stable-diffusion-webui-forge |
| Fooocus | 专注提示词与出图体验的离线图像生成软件，大幅简化参数调节 | https://github.com/lllyasviel/Fooocus |
| InvokeAI | 面向专业创作者的扩散模型创作引擎，提供统一画布与节点工作流 | https://github.com/invoke-ai/InvokeAI |
| SD.Next | 支持多种扩散模型与推理后端的高级图像生成网页界面 | https://github.com/vladmandic/sdnext |
| SwarmUI | 以 ComfyUI 为后端的模块化图像生成网页界面，兼顾易用性与可扩展性 | https://github.com/mcmonkeyprojects/SwarmUI |
| ComfyUI-Manager | ComfyUI 官方扩展管理器，用于安装、更新与管理自定义节点 | https://github.com/Comfy-Org/ComfyUI-Manager |
| ControlNet | 通过边缘、深度、姿态等条件精确控制扩散模型生成结构的经典方法 | https://github.com/lllyasviel/ControlNet |
| IP-Adapter | 以图像作为提示的轻量适配器，实现风格与主体参考生成 | https://github.com/tencent-ailab/IP-Adapter |
| InstantID | 仅需单张人脸照片即可实现身份保持生成的免训练方法 | https://github.com/instantX-research/InstantID |
| PhotoMaker | 通过堆叠身份嵌入快速定制真实人像生成的方法 | https://github.com/TencentARC/PhotoMaker |
| IC-Light | 基于扩散模型的图像重打光工具，可按文本或背景调整前景光照 | https://github.com/lllyasviel/IC-Light |
| sd-scripts | kohya-ss 的扩散模型训练脚本集，支持 LoRA、DreamBooth 与多种新模型微调 | https://github.com/kohya-ss/sd-scripts |
| kohya_ss | 基于 sd-scripts 的图形界面训练工具，便于训练 LoRA 等模型 | https://github.com/bmaltais/kohya_ss |
| AI Toolkit | 面向 FLUX 等扩散模型的一站式 LoRA 微调工具，提供网页界面 | https://github.com/ostris/ai-toolkit |
| DiffSynth-Studio | 魔搭社区开源的扩散模型引擎，支持 Qwen-Image、Wan 等模型的推理与训练 | https://github.com/modelscope/DiffSynth-Studio |
| Nunchaku | 基于 SVDQuant 的 4 位扩散模型推理引擎，显著降低显存占用并加速生成 | https://github.com/nunchux-ai/nunchaku |
| ComfyUI-GGUF | 为 ComfyUI 提供 GGUF 量化模型加载支持，便于低显存运行 FLUX 等模型 | https://github.com/city96/ComfyUI-GGUF |
| StreamDiffusion | 面向实时交互式生成的扩散管线，可实现高帧率图像生成 | https://github.com/cumulo-autumn/StreamDiffusion |
| Krita AI Diffusion | 在 Krita 中集成 AI 生成的插件，支持局部重绘、扩图与实时绘制 | https://github.com/Acly/krita-ai-diffusion |
| Real-ESRGAN | 面向真实世界图像与视频的超分辨率修复工具 | https://github.com/xinntao/Real-ESRGAN |
| Upscayl | 免费开源的跨平台 AI 图像放大桌面应用 | https://github.com/upscayl/upscayl |

### 视频生成

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| Sora 2 | OpenAI | ❌ | OpenAI 视频生成模型，Sora 2 可同步生成对白与音效，提供 App 与 sora-2、sora-2-pro API | https://openai.com/sora |
| Veo 3.1 | Google DeepMind | ❌ | Google 视频生成模型，支持原生音频、参考图与首尾帧控制，另有 Omni Flash 对话式视频编辑 | https://deepmind.google/models/veo/ |
| Kling（可灵） | 快手 | ❌ | 快手视频生成大模型与创作平台，已迭代至 Kling 4，支持文生视频、图生视频与视频编辑 | https://klingai.com/ |
| Runway Gen-4.5 | Runway | ❌ | 专业 AI 视频创作平台，自研 Gen-4.5 生成模型与 Aleph 视频编辑模型，并集成第三方模型 | https://runwayml.com/ |
| Seedance 2.x | 字节跳动 | ❌ | 字节跳动 Seed 视频生成模型，支持多模态参考输入与音画同步生成，已迭代至 Seedance 2.5 | https://seed.bytedance.com/en/seedance2_0 |
| 海螺 AI（Hailuo） | MiniMax | ❌ | MiniMax 视频生成平台，提供 Hailuo 系列与 H3 全模态视频模型 | https://hailuoai.video/ |
| Vidu | 生数科技 | ❌ | 生数科技联合清华大学研发的视频生成平台，最新为 Vidu Q3 系列，擅长参考生视频 | https://www.vidu.com/ |
| 通义万相（Wan） | 阿里巴巴 | ❌ | 阿里巴巴视觉生成平台，最新 Wan 3 系列通过 API 提供，Wan2.x 系列已开源 | https://wan.video |
| Pika | Pika Labs | ❌ | 面向创意特效与社交内容的 AI 视频生成平台 | https://pika.art/ |
| Luma Dream Machine | Luma AI | ❌ | Luma AI 的视频与图像生成平台，提供 Ray 系列视频模型 | https://lumalabs.ai/dream-machine |
| PixVerse | 爱诗科技 | ❌ | 爱诗科技推出的 AI 视频生成平台，提供丰富特效模板与多种生成模式 | https://app.pixverse.ai/ |
| Wan2.2 | 阿里巴巴 | ✅ | 引入 MoE 架构的开源视频扩散模型，支持文生视频、图生视频及角色动画与音频驱动生成 | https://github.com/Wan-Video/Wan2.2 |
| Wan2.1 | 阿里巴巴 | ✅ | 开源视频生成基础模型，提供 1.3B 与 14B 版本，支持文生视频、图生视频与视频编辑 | https://github.com/Wan-Video/Wan2.1 |
| HunyuanVideo-1.5 | 腾讯 | ✅ | 8.3B 参数的轻量级视频生成模型，可在消费级显卡上运行 | https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5 |
| HunyuanVideo | 腾讯 | ✅ | 13B 参数的开源视频生成大模型，提供系统化的训练与推理框架 | https://github.com/Tencent-Hunyuan/HunyuanVideo |
| MiniMax-H3 | MiniMax | ✅ | 开源全模态视频生成模型，采用 33B 单流 Transformer，可生成带立体声音频的视频 | https://github.com/MiniMax-AI/MiniMax-H3 |
| LTX-2 | Lightricks | ✅ | 基于 DiT 的音视频同步生成基础模型，最新 LTX-2.5 开放 22B 权重 | https://github.com/Lightricks/LTX-2 |
| CogVideoX | 智谱 | ✅ | 智谱开源视频生成模型系列，支持文生视频、图生视频与视频续写 | https://github.com/zai-org/CogVideo |
| Open-Sora | 潞晨科技 | ✅ | 完全开源的视频生成项目，Open-Sora 2.0 以 11B 参数公开权重与训练代码 | https://github.com/hpcaitech/Open-Sora |
| LongCat-Video | 美团 | ✅ | 13.6B 参数视频生成模型，统一文生视频、图生视频与视频续写，擅长分钟级长视频 | https://github.com/meituan-longcat/LongCat-Video |
| SkyReels-V2 | 昆仑万维 | ✅ | 基于扩散强迫的无限时长视频生成模型，后续 V3 增加参考生视频与音频驱动 | https://github.com/SkyworkAI/SkyReels-V2 |
| MAGI-1 | Sand AI | ✅ | 按视频块自回归生成的视频模型，支持流式生成与无限延展，后续推出 Magi-2 预览版 | https://github.com/SandAI-org/MAGI-1 |
| Step-Video-T2V | 阶跃星辰 | ✅ | 30B 参数开源文生视频模型，采用深度压缩视频 VAE，可生成最长 204 帧 | https://github.com/stepfun-ai/Step-Video-T2V |
| FramePack | lllyasviel | ✅ | 下一帧预测的视频扩散框架，压缩历史帧上下文，笔记本显卡即可生成长视频 | https://github.com/lllyasviel/FramePack |
| VACE | 阿里巴巴 | ✅ | 一体化视频创作与编辑框架，统一参考生成、视频编辑与局部重绘等任务 | https://github.com/ali-vilab/VACE |
| AnimateDiff | 上海人工智能实验室等 | ✅ | 为文生图模型插入运动模块实现图像动画化的经典方法 | https://github.com/guoyww/AnimateDiff |
| Matrix-Game | 昆仑万维 | ✅ | 交互式世界模型，可根据键鼠操作实时生成可游玩的游戏视频 | https://github.com/SkyworkAI/Matrix-Game |

### 3D 生成

| 模型 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| Hunyuan3D-2.1 | 腾讯 | ✅ | 完全开源的图生 3D 资产生成系统，开放形状与 PBR 材质生成模型及训练代码 | https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1 |
| Hunyuan3D-2 | 腾讯 | ✅ | 由形状生成与纹理合成两阶段组成的大规模高分辨率 3D 资产生成系统 | https://github.com/Tencent-Hunyuan/Hunyuan3D-2 |
| TRELLIS.2 | 微软 | ✅ | 4B 参数图生 3D 模型，采用 O-Voxel 稀疏体素结构生成带 PBR 材质的高保真资产 | https://github.com/microsoft/TRELLIS.2 |
| TRELLIS | 微软 | ✅ | 基于结构化 3D 潜变量的 3D 生成模型，可输出网格、辐射场与 3D 高斯 | https://github.com/microsoft/TRELLIS |
| TripoSG | VAST | ✅ | 基于修正流 Transformer 的高保真图生 3D 形状生成模型 | https://github.com/VAST-AI-Research/TripoSG |
| TripoSR | VAST / Stability AI | ✅ | 由单张图像快速重建 3D 物体的前馈模型，推理耗时不到 1 秒 | https://github.com/VAST-AI-Research/TripoSR |
| Step1X-3D | 阶跃星辰 | ✅ | 开源高保真可控 3D 资产生成框架，开放几何与纹理生成模型及数据处理流程 | https://github.com/stepfun-ai/Step1X-3D |
| Pixal3D | 腾讯 | ✅ | 将像素特征反投影到 3D 实现像素对齐的图生 3D 方法，入选 SIGGRAPH 2026 | https://github.com/TencentARC/Pixal3D |
| InstantMesh | 腾讯 | ✅ | 基于稀疏视角大重建模型，从单张图像高效生成 3D 网格 | https://github.com/TencentARC/InstantMesh |
| Stable Fast 3D | Stability AI | ✅ | 从单张图像快速生成带 UV 展开与材质的 3D 网格 | https://github.com/Stability-AI/stable-fast-3d |
| HY-World 2.0 | 腾讯 | ✅ | 多模态 3D 世界模型框架，可由文本、图像或视频生成与重建可探索的 3D 世界 | https://github.com/Tencent-Hunyuan/HY-World-2.0 |
| HunyuanWorld-1.0 | 腾讯 | ✅ | 由文本或图像生成沉浸式、可探索、可交互 3D 世界的开源模型 | https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0 |
| HY-Motion 1.0 | 腾讯 | ✅ | 文本驱动的 3D 人体动作与角色动画生成模型 | https://github.com/Tencent-Hunyuan/HY-Motion-1.0 |
| UniRig | VAST / 清华大学 | ✅ | 基于自回归模型为各类 3D 模型自动生成骨骼与蒙皮绑定 | https://github.com/VAST-AI-Research/UniRig |
| Meshy | Meshy | ❌ | 在线 3D 生成平台，可由文本或图像生成带纹理模型并导出至游戏引擎 | https://meshy.ai/ |
| Tripo | VAST | ❌ | VAST 推出的 AI 3D 建模平台，支持文生 3D、图生 3D 与自动绑定 | https://www.tripo3d.ai/ |
| Rodin（Hyper3D） | 影眸科技 | ❌ | 影眸科技推出的 3D 生成平台，可生成生产级高精度 3D 资产 | https://hyper3d.ai/ |
| threestudio | 开源社区 | ✅ | 基于 2D 扩散先验蒸馏的统一 3D 生成框架，集成 DreamFusion、Magic3D 等方法 | https://github.com/threestudio-project/threestudio |

### 数字人与口型驱动

| 名称 | 机构 | 开源 | 描述 | 链接 |
|------|------|------|------|------|
| LivePortrait | 快手 | ✅ | 基于隐式关键点的高效人像动画方法，可用视频驱动照片的表情与头部动作 | https://github.com/KlingAIResearch/LivePortrait |
| Duix.Avatar | Duix | ✅ | 可完全离线运行的开源数字人视频合成工具，支持形象与声音克隆 | https://github.com/duixcom/Duix-Avatar |
| Duix Mobile | Duix | ✅ | 面向移动端与嵌入式屏幕的实时交互数字人 SDK，支持 Android 与 iOS 端侧部署 | https://github.com/duixcom/Duix-Mobile |
| SadTalker | 西安交通大学等 | ✅ | 由单张照片和音频生成说话头像视频的经典方法，基于 3D 运动系数建模 | https://github.com/OpenTalker/SadTalker |
| Wav2Lip | IIIT Hyderabad | ✅ | 经典唇形同步模型，可为任意视频中的人物匹配语音口型 | https://github.com/Rudrabha/Wav2Lip |
| MuseTalk | 腾讯音乐天琴实验室 | ✅ | 实时高质量的音频驱动唇形同步模型，1.5 版提升清晰度与身份一致性 | https://github.com/TMElyralab/MuseTalk |
| MuseV | 腾讯音乐天琴实验室 | ✅ | 面向虚拟人的无限时长视频生成框架，可与 MuseTalk 组合使用 | https://github.com/TMElyralab/MuseV |
| LatentSync | 字节跳动 | ✅ | 基于音频条件潜在扩散模型的端到端唇形同步方法 | https://github.com/bytedance/LatentSync |
| EchoMimicV2 | 蚂蚁集团 | ✅ | 音频驱动的半身人像动画生成方法，同步生成手势与表情 | https://github.com/antgroup/echomimic_v2 |
| EchoMimicV3 | 蚂蚁集团 | ✅ | 1.3B 参数的统一多模态多任务人像动画模型，12GB 显存即可生成视频 | https://github.com/antgroup/echomimic_v3 |
| Hallo | 复旦大学 | ✅ | 分层音频驱动的人像动画方法，后续 Hallo2、Hallo3 支持更长时长与更高分辨率 | https://github.com/fudan-generative-vision/hallo |
| HunyuanVideo-Avatar | 腾讯 | ✅ | 基于 HunyuanVideo 的音频驱动多角色数字人视频生成模型 | https://github.com/Tencent-Hunyuan/HunyuanVideo-Avatar |
| Linly-Talker | 开源社区 | ✅ | 集成大模型、语音识别、语音合成与口型驱动的智能数字人对话系统 | https://github.com/Kedreamix/Linly-Talker |
| Ditto | 蚂蚁集团 | ✅ | 基于运动空间扩散的实时说话人头像合成方法 | https://github.com/antgroup/ditto-talkinghead |
| FaceChain | 阿里巴巴 | ✅ | 基于少量照片生成个人数字形象与写真的开源框架 | https://github.com/modelscope/facechain |
| HeyGen | HeyGen | ❌ | 商业 AI 数字人视频平台，支持形象克隆、多语言视频翻译与口型同步 | https://www.heygen.com/ |
| Synthesia | Synthesia | ❌ | 面向企业培训与营销内容的 AI 数字人视频生成平台 | https://www.synthesia.io/ |
| D-ID | D-ID | ❌ | 照片驱动的 AI 数字人视频与实时对话头像平台 | https://www.d-id.com/ |

### AIGC 社区与模型站

| 名称 | 描述 | 链接 |
|------|------|------|
| Civitai | 全球主流的 AI 图像模型分享社区，汇集 Checkpoint、LoRA 与作品 | https://civitai.com/ |
| LiblibAI（哩布哩布） | 国内 AI 绘画模型分享与在线生成平台，提供大量 LoRA 与工作流 | https://www.liblib.art/ |
| OpenArt | AI 图像创作平台与 ComfyUI 工作流分享社区 | https://openart.ai/ |
| Lexica | 收录大量 AI 生成图像及其提示词的搜索引擎与生成平台 | https://lexica.art/ |
| ComfyUI Workflows | Comfy Org 官方工作流模板库，覆盖图像、视频、音频与 3D 生成 | https://comfy.org/workflows/ |

### AIGC 学习资源

| 资源 | 类型 | 描述 | 链接 |
|------|------|------|------|
| Hugging Face Diffusion Models Course | 课程 | Hugging Face 官方扩散模型课程，基于 Diffusers 讲解原理、训练与微调 | https://huggingface.co/learn/diffusion-course |
| MIT 6.S184：Flow Matching and Diffusion Models | 大学课程 | MIT 公开课，从微分方程视角系统讲解流匹配与扩散模型并配套实验 | https://diffusion.csail.mit.edu |
| KAIST CS492(C)：Diffusion and Flow Models | 大学课程 | KAIST 扩散与流模型课程，覆盖 DDPM、Score 模型、流匹配与条件生成 | https://diffusion.kaist.ac.kr/ |
| The Annotated Diffusion Model | 教程 | 逐行注解 DDPM 的经典教程，基于 PyTorch 从零实现扩散模型 | https://huggingface.co/blog/annotated-diffusion |
| What are Diffusion Models?（Lilian Weng） | 博客 | 系统梳理扩散模型数学原理与代表方法的经典长文 | https://lilianweng.github.io/posts/2021-07-11-diffusion-models/ |
| Diffusion Models for Video Generation（Lilian Weng） | 博客 | 综述视频扩散模型的架构设计、训练方法与无训练适配技术 | https://lilianweng.github.io/posts/2024-04-12-diffusion-video/ |
| CVPR 2022 扩散模型教程 | 教程 | NVIDIA 与 Google 研究者主讲的扩散生成模型基础与应用教程 | https://cvpr2022-tutorial-diffusion-models.github.io/ |
| Vision Language Models Explained | 博客 | Hugging Face 介绍视觉语言模型原理、选型、评测与微调的入门文章 | https://huggingface.co/blog/vlms |
| ComfyUI 官方文档 | 文档 | ComfyUI 官方文档，涵盖安装、节点、工作流与各类模型使用教程 | https://docs.comfy.org/ |
| ComfyUI Examples | 示例 | ComfyUI 官方示例工作流合集，覆盖 SD、FLUX、Wan、HunyuanVideo 等模型 | https://comfyanonymous.github.io/ComfyUI_examples/ |

---

## 🤖 智能体（Agents）

> AI Agent 能自主规划、调用工具并完成复杂任务，本节收录框架、平台、通用智能体、记忆与学习资源

### 核心概念

| 概念 | 描述 | 链接 |
|------|------|------|
| 规划（Planning） | Agent 将复杂目标分解为子任务并制定执行步骤的能力，代表方法如 Plan-and-Solve | https://arxiv.org/abs/2305.04091 |
| Agent Harness | 包裹模型的 Agent 循环、工具、记忆与权限等运行框架，决定长程任务的可靠性 | https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents |
| 电脑操作（Computer Use） | Agent 通过截图理解界面并操控鼠标键盘，像人一样使用计算机 | https://www.anthropic.com/news/3-5-models-and-computer-use |

### Agent 开发框架

| 框架 | 描述 | 链接 |
|------|------|------|
| LangChain | 主流 LLM 应用与 Agent 开发框架，集成生态丰富，现定位为 Agent 工程平台 | https://github.com/langchain-ai/langchain |
| LangGraph | LangChain 团队推出的图结构 Agent 编排框架，支持状态持久化与人工介入 | https://github.com/langchain-ai/langgraph |
| Deep Agents | LangChain 推出的开箱即用 Agent Harness，内置任务规划、文件系统与子 Agent | https://github.com/langchain-ai/deepagents |
| OpenAI Agents SDK | OpenAI 官方轻量级多 Agent 框架，支持工具调用、Handoffs 交接与 Guardrails | https://github.com/openai/openai-agents-python |
| Claude Agent SDK | Anthropic 官方 Agent SDK，基于 Claude Code 同款 Harness 构建自定义 Agent | https://github.com/anthropics/claude-agent-sdk-python |
| Google ADK | Google 开源的代码优先 Agent 开发套件，支持构建、评估与部署多 Agent 系统 | https://github.com/google/adk-python |
| Microsoft Agent Framework | 微软整合 Semantic Kernel 与 AutoGen 的新一代框架，支持 Python 与 .NET | https://github.com/microsoft/agent-framework |
| AutoGen | 微软开源的多 Agent 对话框架，现已停止维护，由 Microsoft Agent Framework 接替 | https://github.com/microsoft/autogen |
| AG2 | 由 AutoGen 原作者主导的社区分支，定位开源 AgentOS | https://github.com/ag2ai/ag2 |
| Semantic Kernel | 微软开源的企业级 AI 编排 SDK，支持 C#、Python 与 Java | https://github.com/microsoft/semantic-kernel |
| CrewAI | 以角色扮演方式编排多 Agent 协作的 Python 框架，独立于 LangChain 实现 | https://github.com/crewAIInc/crewAI |
| MetaGPT | 模拟软件公司 SOP 的多 Agent 框架，由产品、架构、工程等角色协作完成需求 | https://github.com/FoundationAgents/MetaGPT |
| Agno（原 Phidata） | 高性能 Python Agent 框架与运行时，内置记忆、知识库与工具集成 | https://github.com/agno-agi/agno |
| Smolagents | Hugging Face 推出的极简 Agent 库，Agent 以 Python 代码形式执行动作 | https://github.com/huggingface/smolagents |
| PydanticAI | Pydantic 团队打造的类型安全 Agent 框架，支持结构化输出与多模型接入 | https://github.com/pydantic/pydantic-ai |
| Mastra | TypeScript AI Agent 框架，内置工作流、记忆、RAG 与 MCP 支持 | https://github.com/mastra-ai/mastra |
| Vercel AI SDK | Vercel 推出的 TypeScript AI 工具包，统一多模型调用并支持构建 Agent | https://github.com/vercel/ai |
| Strands Agents | AWS 开源的模型驱动 Agent SDK，提供 Python 与 TypeScript 版本及 Harness | https://github.com/strands-agents/harness-sdk |
| AgentScope | 阿里通义开源的多 Agent 框架，强调 Agent 行为可见、可理解与可信 | https://github.com/agentscope-ai/agentscope |
| Qwen-Agent | 基于通义千问的 Agent 框架与应用，支持函数调用、MCP、代码解释器与 RAG | https://github.com/QwenLM/Qwen-Agent |
| VoltAgent | 开源 TypeScript Agent 框架，配套可观测与运维的 Agent 工程平台 | https://github.com/VoltAgent/voltagent |
| Eino | 字节跳动 CloudWeGo 开源的 Go 语言 LLM 应用与 Agent 开发框架 | https://github.com/cloudwego/eino |
| LangChain4j | Java 生态的 LLM 应用开发库，支持 Agent、RAG 与工具调用 | https://github.com/langchain4j/langchain4j |
| Spring AI | Spring 官方 AI 应用框架，为 Java 提供统一的模型接口与工具调用 | https://github.com/spring-projects/spring-ai |
| Spring AI Alibaba | 阿里基于 Spring AI 推出的 Java Agent 框架，支持多 Agent 与图工作流 | https://github.com/alibaba/spring-ai-alibaba |
| Koog | JetBrains 推出的 Kotlin/Java Agent 框架，面向可预测、容错的企业级 Agent | https://github.com/JetBrains/koog |
| Genkit | Google 开源的 Agentic 应用框架，支持 JavaScript、Go、Dart 与 Python | https://github.com/genkit-ai/genkit |
| BeeAI Framework | IBM 发起的生产级多 Agent 框架，同时提供 Python 与 TypeScript 版本 | https://github.com/i-am-bee/beeai-framework |
| TaskWeaver | 微软开源的代码优先 Agent 框架，面向数据分析任务的规划与执行（已归档） | https://github.com/microsoft/TaskWeaver |

### 低代码与可视化 Agent 平台

| 名称 | 描述 | 链接 |
|------|------|------|
| Dify | 开源 LLM 应用与 Agentic 工作流开发平台，支持可视化编排、RAG 与多模型 | https://github.com/langgenius/dify |
| 扣子（Coze） | 字节跳动推出的 AI Agent 开发平台，零代码搭建智能体并发布到多个渠道 | https://www.coze.cn/ |
| Coze Studio | 扣子开源版，提供可视化 Agent 开发、调试与部署的一站式工具 | https://github.com/coze-dev/coze-studio |
| n8n | 可视化与代码结合的工作流自动化平台，原生支持 AI Agent 节点与大量集成 | https://github.com/n8n-io/n8n |
| Langflow | 可视化构建与部署 AI Agent 和工作流的低代码平台，基于 Python | https://github.com/langflow-ai/langflow |
| AutoGPT | 早期自主 Agent 的代表项目，现发展为可视化构建与部署 Agent 的平台 | https://github.com/Significant-Gravitas/AutoGPT |
| Flowise | 拖拽式可视化构建 AI Agent 与 LLM 工作流的开源工具（已归档） | https://github.com/FlowiseAI/Flowise |
| FastGPT | 基于 LLM 的知识库问答与工作流编排平台，开箱即用的数据处理与 RAG 检索 | https://github.com/labring/FastGPT |
| MaxKB | 飞致云开源的企业级智能体平台，内置 RAG 知识库与工作流编排 | https://github.com/1Panel-dev/MaxKB |
| BISHENG（毕昇） | 面向企业场景的开源 LLM 应用 DevOps 平台，支持工作流、知识库与 Agent | https://github.com/dataelement/bisheng |
| Sim | 可视化构建、部署与监控 AI Agent 工作流的开源协作空间 | https://github.com/simstudioai/sim |
| Activepieces | 开源 AI 工作流自动化平台，可将数百种集成以 MCP 形式提供给 Agent | https://github.com/activepieces/activepieces |
| Astron Agent（星辰 Agent） | 科大讯飞开源的企业级 Agentic 工作流平台，商用友好 | https://github.com/iflytek/astron-agent |
| Nexent | 零代码自动生成生产级 Agent 的开源平台，基于 Harness 工程理念 | https://github.com/ModelEngine-Group/nexent |
| Botpress | 构建与部署 LLM Agent 的开源平台，侧重客服与对话机器人场景 | https://github.com/botpress/botpress |

### 通用智能体与个人助理

| 名称 | 描述 | 链接 |
|------|------|------|
| OpenClaw | 运行在自有设备上的开源个人 AI 助理，通过各类聊天应用接收指令并执行实际任务 | https://github.com/openclaw/openclaw |
| Hermes Agent | Nous Research 开源的自我进化 Agent，内置学习循环，能从经验中沉淀技能并跨会话记忆 | https://github.com/NousResearch/hermes-agent |
| Manus | 通用 AI Agent 产品，可在云端虚拟机中自主完成调研、编程与办公等复杂任务 | https://manus.im/ |
| ChatGPT Agent | OpenAI 在 ChatGPT 中推出的通用 Agent，融合网页操作与深度研究能力 | https://openai.com/index/introducing-chatgpt-agent/ |
| Genspark | 通用 AI Agent 产品，可自主完成调研并生成幻灯片、表格与网页等成果 | https://www.genspark.ai/ |
| OpenManus | MetaGPT 团队推出的开源 Manus 复现项目，可执行多种通用任务 | https://github.com/FoundationAgents/OpenManus |
| nanobot | 港大数据智能实验室开源的轻量级个人 Agent，核心代码精简，内置记忆、MCP 与自动化 | https://github.com/HKUDS/nanobot |
| QwenPaw | 通义 AgentScope 团队推出的个人 AI 助理，支持记忆、技能与钉钉、飞书等多渠道接入 | https://github.com/agentscope-ai/QwenPaw |
| CowAgent | 原 chatgpt-on-wechat，开源个人 AI 助理与 Agent Harness，支持多平台接入与技能扩展 | https://github.com/zhayujie/CowAgent |
| AstrBot | 集成多种即时通讯平台、模型与插件的 Agent 聊天机器人框架 | https://github.com/AstrBotDevs/AstrBot |
| LangBot | 生产级多平台 IM 智能机器人开发平台，支持 Agent 与知识库编排 | https://github.com/langbot-app/LangBot |
| NanoClaw | 在容器中隔离运行的轻量级 OpenClaw 替代方案，可接入 WhatsApp、Telegram 等 | https://github.com/nanocoai/nanoclaw |
| ZeroClaw | Rust 编写的轻量自主个人 AI 助理基础设施，可部署在任意平台 | https://github.com/zeroclaw-labs/zeroclaw |
| Eigent | 开源 Cowork 桌面应用，在本地以多 Agent 团队自动完成复杂工作流 | https://github.com/eigent-ai/eigent |
| LobsterAI | 网易有道开源的桌面级 AI Agent，可完成数据分析、PPT、文档与网页调研 | https://github.com/netease-youdao/LobsterAI |
| GenericAgent | 从数千行种子代码出发自我进化技能树的通用 Agent，可完整控制本机系统 | https://github.com/lsdefine/GenericAgent |
| Kortix（原 Suna） | 开源通用 Agent 平台，现演进为支持多人协作的公司级 Agent 操作系统 | https://github.com/kortix-ai/suna |
| OWL | CAMEL 团队开源的多 Agent 协作通用助手，面向真实世界任务自动化 | https://github.com/camel-ai/owl |
| AgenticSeek | 完全本地运行的 Manus 替代方案，可自主浏览网页、编写代码与规划任务 | https://github.com/Fosowl/agenticSeek |
| II-Agent | Intelligent Internet 开源的通用 Agent 框架，用于构建与部署智能体 | https://github.com/Intelligent-Internet/ii-agent |
| JoyAgent-JDGenie | 京东开源的端到端产品级通用智能体，开箱即用 | https://github.com/jd-opensource/joyagent-jdgenie |
| Agent Zero | 开源 Agent 框架，在 Docker 化 Linux 桌面中操作浏览器、文档与桌面软件完成工作 | https://github.com/agent0ai/agent-zero |
| BabyAGI | 基于任务驱动的自主 Agent 早期代表项目 | https://github.com/yoheinakajima/babyagi |

### 多智能体系统

| 名称 | 描述 | 链接 |
|------|------|------|
| ChatDev | 清华 OpenBMB 开源的多 Agent 协作开发框架，模拟虚拟软件公司完成开发任务 | https://github.com/OpenBMB/ChatDev |
| CAMEL | 最早的多 Agent 角色扮演框架之一，致力于研究 Agent 的规模化规律 | https://github.com/camel-ai/camel |
| Generative Agents | 斯坦福「AI 小镇」论文官方实现，模拟 Agent 的可信人类行为与社交 | https://github.com/joonspk-research/generative_agents |
| AI Town | a16z 开源的可部署 AI 小镇入门套件，AI 角色在虚拟小镇中生活与社交 | https://github.com/a16z-infra/ai-town |
| AgentVerse | 部署多个 LLM Agent 协作解决任务或进行仿真的框架 | https://github.com/OpenBMB/AgentVerse |
| TradingAgents | 模拟交易公司分工的多 Agent 金融交易框架，含分析师、研究员与交易员角色 | https://github.com/TauricResearch/TradingAgents |
| TradingAgents-CN | TradingAgents 中文增强版，适配 A 股市场与国产大模型 | https://github.com/hsliuping/TradingAgents-CN |
| MiroFish | 通用群体智能引擎，以大量 Agent 模拟推演并预测事件走向 | https://github.com/666ghj/MiroFish |
| BettaFish（微舆） | 多 Agent 舆情分析助手，自动采集并分析全网舆情、辅助决策 | https://github.com/666ghj/BettaFish |
| Paperclip | 以组织架构、预算与目标管理 Agent 团队的开源编排应用 | https://github.com/paperclipai/paperclip |
| Edict（三省六部） | 借鉴三省六部制的 OpenClaw 多 Agent 编排系统，带实时看板与全流程审计 | https://github.com/cft0808/edict |
| OASIS | CAMEL 团队开源的社交媒体仿真平台，可模拟百万级 Agent 交互 | https://github.com/camel-ai/oasis |
| AgentSociety | 清华大学 FIB 实验室开源的大模型驱动社会模拟平台，面向社会科学研究 | https://github.com/tsinghua-fib-lab/AgentSociety |
| Mixture-of-Agents（MoA） | Together AI 提出的混合 Agent 方法，多个开源模型分层协作提升回答质量 | https://github.com/togethercomputer/MoA |

### Deep Research 智能体

| 名称 | 描述 | 链接 |
|------|------|------|
| OpenAI Deep Research | OpenAI 推出的深度研究 Agent，自主多步检索并生成带引用的研究报告 | https://openai.com/index/introducing-deep-research/ |
| GPT Researcher | 可基于任意 LLM 对网页与本地数据开展深度研究并生成报告的自主 Agent | https://github.com/assafelovic/gpt-researcher |
| DeerFlow | 字节跳动开源的长程 SuperAgent Harness，借助沙箱、记忆与技能完成研究与创作 | https://github.com/bytedance/deer-flow |
| Tongyi DeepResearch | 阿里通义开源的深度研究 Agent 模型及配套推理框架 | https://github.com/Alibaba-NLP/DeepResearch |
| STORM | 斯坦福开源的知识策展系统，自动检索并撰写带引用的维基式长文 | https://github.com/stanford-oval/storm |
| Open Deep Research | LangChain 开源的可配置深度研究 Agent，支持多种模型与搜索工具（已归档） | https://github.com/langchain-ai/open_deep_research |
| node-DeepResearch | Jina AI 开源的深度搜索 Agent，持续搜索、阅读与推理直至找到答案 | https://github.com/jina-ai/node-DeepResearch |
| deep-research | 结合搜索引擎、网页抓取与 LLM 迭代深入研究的极简开源实现 | https://github.com/dzhng/deep-research |
| WebThinker | 中国人民大学开源的深度研究框架，让推理模型在思考中自主搜索并撰写报告 | https://github.com/RUC-NLPIR/WebThinker |
| Local Deep Research | 支持本地与云端模型的深度研究助手，可完全本地化运行 | https://github.com/LearningCircuit/local-deep-research |
| MiroThinker | MiroMind 开源的深度研究 Agent 与模型，面向复杂研究与预测任务 | https://github.com/MiroMindAI/MiroThinker |
| DeepSearcher | Zilliz 开源的私有数据深度研究工具，结合向量数据库进行推理与检索 | https://github.com/zilliztech/deep-searcher |
| DeepResearchAgent | 昆仑万维天工开源的分层多 Agent 系统，用于深度研究与通用任务求解 | https://github.com/SkyworkAI/DeepResearchAgent |

### 浏览器与电脑操作智能体

| 名称 | 描述 | 链接 |
|------|------|------|
| Browser Use | 让 AI Agent 操作浏览器的开源 Python 库，配套云端浏览器服务 | https://github.com/browser-use/browser-use |
| Stagehand | Browserbase 开源的浏览器自动化 SDK，以自然语言与代码混合操作网页 | https://github.com/browserbase/stagehand |
| Skyvern | 基于 LLM 与计算机视觉的浏览器工作流自动化工具 | https://github.com/Skyvern-AI/skyvern |
| Agent Browser | Vercel Labs 推出的面向 AI Agent 的浏览器自动化 CLI | https://github.com/vercel-labs/agent-browser |
| Page Agent | 阿里开源的页内 JavaScript GUI Agent，用自然语言操控网页界面 | https://github.com/alibaba/page-agent |
| Lightpanda | 专为 AI 与自动化设计的开源无头浏览器，Zig 编写、资源占用低 | https://github.com/lightpanda-io/browser |
| Steel Browser | 面向 AI Agent 的开源浏览器 API 与浏览器沙箱 | https://github.com/steel-dev/steel-browser |
| Nanobrowser | 开源 Chrome 扩展形式的网页自动化 Agent，可使用已登录的真实浏览器 | https://github.com/nanobrowser/nanobrowser |
| BrowserOS | 开源 Agentic 浏览器，可作为 ChatGPT Atlas、Comet 等 AI 浏览器的替代 | https://github.com/browseros-ai/BrowserOS |
| Browser Harness | Browser Use 推出的工具，让 Claude Code、Codex 等直接使用本机真实 Chrome | https://github.com/browser-use/browser-harness |
| UI-TARS | 字节跳动开源的原生 GUI Agent 模型，端到端感知并操作图形界面 | https://github.com/bytedance/UI-TARS |
| UI-TARS Desktop（Agent TARS） | 字节跳动开源的多模态 Agent 栈，包含 Agent TARS 与 UI-TARS 桌面应用 | https://github.com/bytedance/UI-TARS-desktop |
| Agent S | Simular 开源的电脑操作 Agent 框架，像人一样使用计算机完成任务 | https://github.com/simular-ai/Agent-S |
| OmniParser | 微软开源的屏幕解析工具，将界面截图转为结构化元素供纯视觉 GUI Agent 使用 | https://github.com/microsoft/OmniParser |
| Midscene.js | 字节 Web Infra 团队开源的视觉驱动 UI 自动化框架，以自然语言操作与测试界面 | https://github.com/web-infra-dev/midscene |
| Cua | 开源电脑操作 Agent 基础设施，提供跨系统沙箱、驱动与评测基准 | https://github.com/trycua/cua |
| Open Interpreter | 让 LLM 在本地运行代码操作电脑的先驱项目，现转型为面向开源模型的编码 Agent | https://github.com/openinterpreter/openinterpreter |
| UFO | 微软开源的 Windows 桌面 Agent 框架，支持跨设备多 Agent 协作 | https://github.com/microsoft/UFO |
| Fara | 微软推出的原生电脑操作 Agent 模型系列，提供 4B 至 27B 多种规模的开放权重 | https://github.com/microsoft/fara |
| Mobile-Agent | 阿里通义开源的手机 GUI Agent 系列，支持多 Agent 协作操作手机 | https://github.com/X-PLUG/MobileAgent |
| AppAgent | 腾讯开源的多模态手机操作 Agent，像人类用户一样使用 App | https://github.com/TencentQQGYLab/AppAgent |
| Open-AutoGLM | 智谱开源的手机 Agent 模型与框架，用自然语言操控手机完成任务 | https://github.com/zai-org/Open-AutoGLM |

### Agent 记忆

| 名称 | 描述 | 链接 |
|------|------|------|
| Mem0 | 为 AI Agent 提供可插拔长期记忆层的开源方案，面向生产环境 | https://github.com/mem0ai/mem0 |
| Letta（原 MemGPT） | 构建有状态 Agent 的平台，源自 MemGPT，支持自我编辑的分层记忆 | https://github.com/letta-ai/letta |
| Zep | 基于时序知识图谱的 Agent 上下文与记忆服务，仓库提供 SDK 示例与集成 | https://github.com/getzep/zep |
| Graphiti | Zep 开源的实时时序知识图谱框架，为 Agent 构建动态演化的记忆 | https://github.com/getzep/graphiti |
| Cognee | 开源 AI 记忆平台，结合知识图谱与向量检索为 Agent 提供持久记忆 | https://github.com/topoteretes/cognee |
| MemOS | 记忆张量开源的大模型记忆操作系统，统一管理多类型记忆并支持技能复用 | https://github.com/MemTensor/MemOS |
| Supermemory | 高速可扩展的记忆与上下文引擎，可完全本地运行 | https://github.com/supermemoryai/supermemory |
| claude-mem | 自动捕获编码 Agent 会话并压缩为跨会话持久上下文的记忆插件 | https://github.com/thedotmack/claude-mem |
| MemPalace | 本地优先的开源 AI 记忆系统，逐字保存对话并结合语义检索 | https://github.com/MemPalace/mempalace |
| Hindsight | Vectorize 开源的 Agent 记忆系统，可从经验中持续学习 | https://github.com/vectorize-io/hindsight |
| OpenViking | 火山引擎开源的 Agent 上下文数据库，统一管理记忆、知识与技能 | https://github.com/volcengine/OpenViking |
| memU | 跨 Agent 共享的个人记忆框架，持续积累用户偏好与知识 | https://github.com/NevaMind-AI/memU |
| Memori | 与 LLM 无关的 Agent 原生记忆基础设施，把执行过程与对话转为结构化记忆 | https://github.com/MemoriLabs/Memori |
| LangMem | LangChain 推出的长期记忆工具库，支持记忆提取、管理与提示优化 | https://github.com/langchain-ai/langmem |
| A-MEM | 借鉴卡片盒笔记法的 Agentic 记忆系统，可动态组织与演化记忆 | https://github.com/agiresearch/A-mem |
| MemoryOS | 面向个性化 Agent 的分层记忆操作系统，EMNLP 2025 口头报告论文 | https://github.com/BAI-LAB/MemoryOS |
| MIRIX | 多 Agent 个人助理记忆系统，记录屏幕活动并据此回答问题 | https://github.com/Mirix-AI/MIRIX |
| Memobase | 基于用户画像的长期记忆方案，面向聊天机器人应用 | https://github.com/memodb-io/memobase |
| EverOS | 本地优先、Markdown 原生的可移植 Agent 记忆层，由用户掌控数据 | https://github.com/EverMind-AI/EverOS |
| Honcho | 用于构建有状态 Agent 的记忆库，侧重对用户的持续建模 | https://github.com/plastic-labs/honcho |

### Agent 运行环境与工具集成

| 名称 | 描述 | 链接 |
|------|------|------|
| E2B | 为 AI Agent 提供安全云端沙箱的开源基础设施，可执行代码与使用真实工具 | https://github.com/e2b-dev/E2B |
| Daytona | 运行 AI 生成代码的安全弹性沙箱基础设施，官方组织提供 SDK、CLI 与 MCP 工具 | https://github.com/daytona |
| Composio | 为 Agent 提供上千种工具集成、认证管理与沙箱工作台的平台 | https://github.com/ComposioHQ/composio |
| OpenSandbox | 安全、快速且可扩展的开源 AI Agent 沙箱运行时 | https://github.com/opensandbox-group/OpenSandbox |
| Agent Sandbox | Kubernetes SIG 项目，用于管理隔离、有状态的 Agent 工作负载 | https://github.com/kubernetes-sigs/agent-sandbox |
| Microsandbox | 本地优先、可编程的 microVM 沙箱运行时与库 | https://github.com/superradcompany/microsandbox |
| AIO Sandbox | 将浏览器、Shell、文件、MCP 与 VS Code Server 集成在单个容器中的 Agent 沙箱 | https://github.com/agent-infra/sandbox |
| OpenShell | NVIDIA 开源的安全私有自主 Agent 运行时 | https://github.com/NVIDIA/OpenShell |
| NemoClaw | NVIDIA 推出的方案，在 OpenShell 中更安全地运行 OpenClaw、Hermes 等 Agent | https://github.com/NVIDIA/NemoClaw |
| Trigger.dev | 构建与部署持久化 AI Agent 与后台工作流的开源平台 | https://github.com/triggerdotdev/trigger.dev |
| CopilotKit | Agent 与生成式 UI 的前端技术栈，AG-UI 协议的发起方 | https://github.com/CopilotKit/CopilotKit |
| ACI.dev | 开源工具调用平台，通过统一 MCP 或函数调用为 Agent 接入数百种工具 | https://github.com/aipotheosis-labs/aci |
| CLI-Anything | 港大开源的工具，为任意软件生成可供 Agent 调用的 CLI，使软件 Agent 原生化 | https://github.com/HKUDS/CLI-Anything |
| Google Workspace CLI（gws） | Google Workspace 命令行工具，覆盖 Drive、Gmail 等 API，附带 Agent Skills | https://github.com/googleworkspace/cli |
| 飞书 CLI | 飞书官方 CLI，同时面向开发者与 AI Agent，覆盖消息、文档等核心业务 | https://github.com/larksuite/cli |

### 垂直领域智能体

| 名称 | 领域 | 描述 | 链接 |
|------|------|------|------|
| Strix | 安全 | 开源 AI 渗透测试 Agent，动态验证应用漏洞并给出修复建议 | https://github.com/usestrix/strix |
| PentAGI | 安全 | 全自主执行复杂渗透测试任务的多 Agent 系统，运行于隔离环境 | https://github.com/vxcontrol/pentagi |
| PentestGPT | 安全 | 基于 LLM 的自动化渗透测试 Agent 框架 | https://github.com/GreyDGL/PentestGPT |
| AI Hedge Fund | 金融 | 模拟多位投资大师分工决策的 AI 对冲基金多 Agent 教学项目 | https://github.com/virattt/ai-hedge-fund |
| Vibe-Trading | 金融 | 港大开源的个人交易 Agent，以自然语言完成行情研究与策略回测 | https://github.com/HKUDS/Vibe-Trading |
| FinRobot | 金融 | AI4Finance 开源的金融 AI Agent 平台，面向投研分析等金融应用 | https://github.com/AI4Finance-Foundation/FinRobot |
| DB-GPT | 数据 | 开源 Agentic 数据助手框架，以 Agent 完成数据分析与问答 | https://github.com/eosphoros-ai/DB-GPT |
| RD-Agent | 数据科学 | 微软开源的研发自动化 Agent，聚焦量化金融与数据科学等数据驱动场景 | https://github.com/microsoft/RD-Agent |
| DeepTutor | 教育 | 港大开源的终身个性化辅导 Agent，支持答疑、出题练习与学习路径规划 | https://github.com/HKUDS/DeepTutor |
| OpenMAIC | 教育 | 开源多 Agent 互动课堂，一键生成沉浸式的多 Agent 学习体验 | https://github.com/THU-MAIC/OpenMAIC |
| AI Scientist | 科研 | Sakana AI 推出的自动化科研 Agent，覆盖构思、实验到论文撰写全流程 | https://github.com/SakanaAI/AI-Scientist |
| Agent Laboratory | 科研 | 辅助研究者完成文献综述、实验与报告撰写的端到端科研 Agent 工作流 | https://github.com/SamuelSchmidgall/AgentLaboratory |
| autoresearch | 科研 | Karpathy 发起的实验项目，让 Agent 在单 GPU 上自主迭代 nanochat 训练研究 | https://github.com/karpathy/autoresearch |
| agent-qa | 测试 | 具备持久记忆与经验证的自我改进能力的 AI 测试 Agent，覆盖 Web、Android 和 iOS | https://www.vostride.com |

### Agent 学习资源

| 资源名称 | 类型 | 描述 | 链接 |
|---------|------|------|------|
| Anthropic：Building effective agents | 博客 | Anthropic 官方 Agent 构建最佳实践指南，区分工作流与 Agent 的设计模式 | https://www.anthropic.com/research/building-effective-agents |
| Lilian Weng：LLM Powered Autonomous Agents | 博客 | 系统梳理规划、记忆与工具使用的经典 Agent 综述博客，入门必读 | https://lilianweng.github.io/posts/2023-06-23-agent/ |
| Hugging Face Agents 课程 | 课程 | Hugging Face 免费 Agent 课程，涵盖 smolagents、LlamaIndex、LangGraph | https://huggingface.co/learn/agents-course |
| AI Agents for Beginners | 课程 | 微软出品的 AI Agent 入门课程，共 18 课并提供多语言版本 | https://github.com/microsoft/ai-agents-for-beginners |
| LangChain Academy | 课程 | LangChain 官方学习路径，从 LangGraph 基础到 Agent 部署 | https://academy.langchain.com/ |
| AI Agents in LangGraph | 课程 | DeepLearning.AI 与 LangChain 合作的 LangGraph 构建 Agent 短课 | https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/ |
| Multi AI Agent Systems with CrewAI | 课程 | DeepLearning.AI 与 CrewAI 合作的多 Agent 协作系统入门短课 | https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/ |
| Building Agentic RAG with LlamaIndex | 课程 | DeepLearning.AI 与 LlamaIndex 合作的 Agentic RAG 短课 | https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/ |
| Berkeley LLM Agents MOOC | 课程 | 加州大学伯克利分校 LLM Agents 公开课，邀请业界与学界专家授课 | https://llmagents-learning.org/f24 |
| 12-Factor Agents | 指南 | 借鉴 12-Factor App 总结构建生产级 LLM 应用与 Agent 的工程原则 | https://github.com/humanlayer/12-factor-agents |
| OpenAI：A Practical Guide to Building Agents | 指南 | OpenAI 官方 Agent 构建实用指南，涵盖模型选择、工具设计与护栏 | https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf |
| Google：Agents Companion | 白皮书 | Google 发布的 Agent 进阶白皮书，涵盖 AgentOps、多 Agent 与评估 | https://www.kaggle.com/whitepaper-agent-companion |
| Anthropic：How we built our multi-agent research system | 博客 | Anthropic 分享多 Agent 深度研究系统的架构、提示与评估经验 | https://www.anthropic.com/engineering/multi-agent-research-system |
| OpenAI：Harness engineering | 博客 | OpenAI 分享以 Codex Agent 为核心的 Harness 工程实践 | https://openai.com/index/harness-engineering/ |
| GenAI Agents | 教程 | 从基础对话机器人到复杂多 Agent 系统的 Agent 技术教程与实现合集 | https://github.com/NirDiamant/GenAI_Agents |
| Agents Towards Production | 教程 | 代码优先的生产级 Agent 端到端教程，涵盖部署、记忆、安全与可观测 | https://github.com/NirDiamant/agents-towards-production |
| Learn Claude Code | 教程 | 从零构建类 Claude Code 的迷你 Agent Harness，循序渐进理解编码 Agent 原理 | https://github.com/shareAI-lab/learn-claude-code |

---

## 🧩 Agent Skills

> Agent Skills 本质上是包含指令、脚本和资源的文件夹，智能体可发现并调用它们，从而干活更准、更快

### 官方与规范

| 名称 | 描述 | 链接 |
|------|------|------|
| Agent Skills 开放标准 | Agent Skills 开放规范官网，定义 SKILL.md 格式与渐进式加载机制，已被众多 Agent 产品采用 | https://agentskills.io |
| agentskills | Agent Skills 规范与文档的源码仓库，说明技能目录结构、元数据与加载流程 | https://github.com/agentskills/agentskills |
| Anthropic Skills | Anthropic 官方技能仓库，含 Office 文档处理、前端设计、MCP 构建与技能创建等示例 | https://github.com/anthropics/skills |
| Claude Agent Skills 文档 | Claude 开发者平台官方文档，介绍技能结构、加载机制与编写最佳实践 | https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview |
| Anthropic：Introducing Agent Skills | Anthropic 发布 Agent Skills 的官方公告，介绍其在 Claude 各产品与 API 中的用法 | https://www.anthropic.com/news/skills |
| Anthropic：Equipping agents for the real world with Agent Skills | Anthropic 工程博客，阐述 Agent Skills 的设计理念与渐进式披露机制 | https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills |
| Claude Cookbooks：Skills | Anthropic 官方 Cookbook 中的技能教程，演示通过 API 使用与创建自定义技能 | https://github.com/anthropics/claude-cookbooks/tree/main/skills |
| Codex Skills 文档 | OpenAI 官方文档，介绍在 Codex 中使用与创建 Agent Skills | https://developers.openai.com/codex/skills |
| OpenAI Plugins | OpenAI 官方 Codex 插件示例，可打包技能、MCP 与 Hooks，取代已弃用的 openai/skills | https://github.com/openai/plugins |
| Google Skills | Google 官方 Agent Skills，覆盖 Google Cloud 等产品与技术 | https://github.com/google/skills |
| Vercel Agent Skills | Vercel 官方技能合集，含 React 与 Next.js 性能最佳实践、Vercel 项目优化等 | https://github.com/vercel-labs/agent-skills |
| Hugging Face Skills | Hugging Face 官方技能，让 Agent 完成 Hub 操作、数据集创建、模型训练与评测 | https://github.com/huggingface/skills |
| Android Skills | Android 官方技能库，针对 LLM 表现欠佳的 Android 开发场景提供最佳实践指导 | https://github.com/android/skills |
| Microsoft Skills | 微软官方技能、MCP Server 与 AGENTS.md 合集，帮助编码 Agent 正确使用微软 SDK | https://github.com/microsoft/skills |
| MiniMax Skills | MiniMax 官方开发技能，覆盖前端、全栈、Android、iOS 与着色器开发 | https://github.com/MiniMax-AI/skills |
| Cloudflare Skills | Cloudflare 官方技能，指导 Agent 基于 Workers、Agents SDK 等开发者平台构建应用 | https://github.com/cloudflare/skills |

### Skills 精选合集

| 名称 | 描述 | 链接 |
|------|------|------|
| awesome-claude-skills | 精选 Claude Skills、资源与工具合集，用于定制 Claude AI 工作流 | https://github.com/ComposioHQ/awesome-claude-skills |
| Awesome Agent Skills | VoltAgent 整理的技能合集，汇集官方开发团队与社区的上千个 Agent Skills | https://github.com/VoltAgent/awesome-agent-skills |
| awesome-claude-skills（travisvn） | Claude Skills、资源与工具精选列表，侧重 Claude Code 使用场景 | https://github.com/travisvn/awesome-claude-skills |
| Awesome OpenClaw Skills | VoltAgent 整理的 OpenClaw 技能合集，按类别筛选数千个社区技能 | https://github.com/VoltAgent/awesome-openclaw-skills |
| Agentic Awesome Skills | 面向 Claude Code、Codex、Cursor 与 Gemini CLI 的大型可复用技能库 | https://github.com/sickn33/agentic-awesome-skills |
| awesome-copilot | GitHub 官方维护的社区合集，收录 Copilot 指令、Agent、技能与插件配置 | https://github.com/github/awesome-copilot |
| wshobson/agents | 面向 Claude Code、Codex、Cursor 等多种 Harness 的插件市场，含大量子 Agent 与技能 | https://github.com/wshobson/agents |
| awesome-codex-skills | Composio 社区整理的 Codex 实用技能精选，用于自动化各类工作流 | https://github.com/composio-community/awesome-codex-skills |
| 宝玉 Skills（baoyu-skills） | 宝玉分享的日常提效技能合集，含公众号配图、排版与发布等内容创作流程 | https://github.com/JimLiu/baoyu-skills |
| 卡兹克 Skills（khazix-skills） | 数字生命卡兹克开源的实用技能，含目标定义、横纵分析研究与个人写作风格等 | https://github.com/KKKKhazix/khazix-skills |
| garden-skills | ConardLi 开源的技能合集，涵盖网页设计、知识检索与图像生成等场景 | https://github.com/ConardLi/garden-skills |

### 软件工程类 Skills

| 名称 | 描述 | 链接 |
|------|------|------|
| Superpowers | 基于可组合技能的完整软件开发方法论，引导编码 Agent 进行头脑风暴、计划、TDD 与调试 | https://github.com/obra/superpowers |
| Matt Pocock Skills | TypeScript 专家 Matt Pocock 公开的个人工程技能，直接取自其 .agents 目录 | https://github.com/mattpocock/skills |
| Agent Skills（Addy Osmani） | Addy Osmani 整理的面向 AI 编码 Agent 的生产级工程技能 | https://github.com/addyosmani/agent-skills |
| andrej-karpathy-skills | 依据 Karpathy 对 LLM 编码常见问题的观察，总结为单个 CLAUDE.md 行为准则 | https://github.com/multica-ai/andrej-karpathy-skills |
| gstack | Garry Tan 的 Claude Code 配置，以 CEO、设计师、工程经理、发布经理等角色技能组织开发流程 | https://github.com/garrytan/gstack |
| Security Audit Skill | Cloudflare 开源的多阶段安全审计技能，输出经独立验证、机器可读的审计结果 | https://github.com/cloudflare/security-audit-skill |
| Trail of Bits Skills | 安全公司 Trail of Bits 出品的安全研究、漏洞检测与审计工作流技能 | https://github.com/trailofbits/skills |
| planning-with-files | 以持久化 Markdown 文件做任务规划的技能，可在清空上下文或压缩后恢复进度 | https://github.com/OthmanAdi/planning-with-files |
| Caveman | 让编码 Agent 像原始人一样用极简语句回复以节省 Token 的技能与代理 | https://github.com/JuliusBrussee/caveman |
| Waza | Tw93 将常用工程习惯封装为可供 Claude Code、Codex 等执行的技能 | https://github.com/tw93/Waza |
| Agent Skills for Context Engineering | 面向上下文工程、多 Agent 架构与生产级 Agent 系统的技能合集 | https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering |
| dev-browser | 为 Agent 提供网页浏览器操作能力的 Claude 技能 | https://github.com/SawyerHood/dev-browser |
| superpowers-zh | Superpowers 中文增强版，完整汉化并新增中国原创技能，支持多种编码 Agent | https://github.com/jnMetaCode/superpowers-zh |
| yylo-skills | 面向编程 Agent 的工作流技能集，含 Ledger 看板任务管理、项目理解、任务规划与 Wiki 知识沉淀 | https://github.com/yylo-dev/yylo-skills |

### 设计与前端类 Skills

| 名称 | 描述 | 链接 |
|------|------|------|
| Huashu Design | HTML 原生的 Agent 设计技能，一句话生成网页与 App 原型、可编辑 PPTX 与动画，内置设计评审 | https://github.com/alchaincyf/huashu-design |
| UI UX Pro Max | 为 Agent 提供跨平台 UI/UX 设计知识的技能，帮助生成专业界面 | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| Taste Skill | 为编码 Agent 注入设计品味的技能，结合艺术指导、参考图与浏览器自检 | https://github.com/Leonxlnx/taste-skill |
| Impeccable | 为编码 Agent 提供设计词汇与命令，用于打磨、评审与审计界面 | https://github.com/pbakaus/impeccable |
| Emil Kowalski Skills | 设计工程师 Emil Kowalski 的技能合集，面向设计师与前端工程师 | https://github.com/emilkowalski/skills |
| Hallmark | 反「AI 味」的设计技能，避免生成千篇一律的 AI 风格界面，支持 Claude Code、Cursor 与 Codex | https://github.com/Nutlope/hallmark |
| Archify | 将想法、方案或代码库转为可交互架构图的 Agent 技能 | https://github.com/tt-a1i/archify |
| Diagram Design | 编辑风格图表设计技能，支持 45 种图表类型，输出自包含的 HTML 与 SVG | https://github.com/cathrynlavery/diagram-design |
| Frontend Slides | 利用编码 Agent 的前端能力在网页上制作精美幻灯片 | https://github.com/zarazhangrui/frontend-slides |
| 歸藏 PPT Skill | 生成杂志风与瑞士风等精美 HTML 幻灯片的技能，附带配图提示词 | https://github.com/op7418/guizang-ppt-skill |
| Awesome DESIGN.md | 基于知名品牌设计系统分析整理的 DESIGN.md 文件合集，供 Agent 生成风格一致的界面 | https://github.com/VoltAgent/awesome-design-md |
| DESIGN.md | Google Labs 提出的视觉识别描述格式规范，让 Agent 理解并遵循设计系统 | https://github.com/google-labs-code/design.md |
| GSAP Skills | GSAP 官方技能，指导编码 Agent 正确使用 GreenSock 动画库 | https://github.com/greensock/gsap-skills |
| Visual Explainer | 生成富 HTML 页面或幻灯片来呈现架构图、代码差异评审与计划审计的技能 | https://github.com/nicobailon/visual-explainer |

### 写作、研究与办公类 Skills

| 名称 | 描述 | 链接 |
|------|------|------|
| Humanizer | 识别并去除文本中 AI 生成写作痕迹的 Agent 技能 | https://github.com/blader/humanizer |
| Humanizer-zh | Humanizer 的中文版，消除中文文本中的 AI 生成痕迹 | https://github.com/op7418/Humanizer-zh |
| Stop Slop | 用于删除文章中 AI 腔调与套话的技能文件 | https://github.com/hardikpandya/stop-slop |
| Academic Research Skills | 面向 Claude Code 的学术研究技能，覆盖调研、写作、评审与修订全流程 | https://github.com/Imbad0202/academic-research-skills |
| Nature Skills | 按 Nature 论文学术表达与科研绘图规范辅助写作的技能 | https://github.com/Yuan1z0825/nature-skills |
| Scientific Agent Skills | K-Dense 开源的科研技能库，让通用 Agent 胜任生物、化学等领域的科研任务 | https://github.com/K-Dense-AI/scientific-agent-skills |
| AI Research Skills | Orchestra Research 开源的 AI 科研技能库，覆盖 Idea、训练、推理、评测到论文写作 | https://github.com/Orchestra-Research/AI-Research-SKILLs |
| Supervisor Skills | 将博导十年科研经验炼化为可直接调用的技能，覆盖从 Idea 构思到论文投稿 | https://github.com/HKUSTDial/Supervisor-Skills |
| ARIS（Auto Research In Sleep） | 纯 Markdown 编写的自主机器学习科研技能，含跨模型评审循环与 Idea 发掘 | https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep |
| last30days | 汇总 Reddit、X、YouTube、HN 等平台近 30 天讨论并生成调研简报的技能 | https://github.com/mvanhorn/last30days-skill |
| Marketing Skills | 面向 Claude Code 等 Agent 的营销技能，涵盖 CRO、文案、SEO 与数据分析 | https://github.com/coreyhaines31/marketingskills |
| Obsidian Skills | Obsidian CEO kepano 出品，教 Agent 使用 Obsidian CLI 与 Bases 等开放格式 | https://github.com/kepano/obsidian-skills |
| PM Skills | 产品经理技能市场，提供上百个技能、命令与插件，覆盖需求发现、策略、执行与增长 | https://github.com/phuryn/pm-skills |
| 专利交底书 Skill | 面向中国专利的技能，辅助专利点挖掘与技术交底书撰写 | https://github.com/handsomestWei/patent-disclosure-skill |
| Kami | Tw93 出品的排版规则与模板，让 Agent 导出精美 PDF、PNG 与可编辑 PPT | https://github.com/tw93/Kami |
| deed-page-skill | 让 Agent 用一次 curl 请求或远程 MCP 工具把 HTML 页面发布为永久公开链接，无需注册 | https://github.com/f-o-x11/deed-page-skill |

### 人格与角色类 Skills

| 名称 | 描述 | 链接 |
|------|------|------|
| awesome-persona-distill-skills | 人格蒸馏类技能精选，覆盖人物、关系与纪念等场景，提炼表达风格与决策框架 | https://github.com/xixu-me/awesome-persona-distill-skills |
| colleague-skill（现名 Distilly） | 将同事等人物的思维方式蒸馏为可复用技能，供任意 Agent 或机器人调用 | https://github.com/titanwings/distilly |
| 女娲 Skill（nuwa-skill） | 蒸馏任意人物的思维方式，提炼心智模型、决策启发式与表达风格 | https://github.com/alchaincyf/nuwa-skill |
| Agency Agents | 覆盖工程、设计、营销、社区运营等职能的 AI 专家角色合集，可直接用于 Claude Code 等 | https://github.com/msitarzewski/agency-agents |
| Agency Agents 中文版 | 两百余个即插即用的中文 AI 专家角色，含小红书、抖音、飞书等中国市场原创角色 | https://github.com/jnMetaCode/agency-agents-zh |
| dbskill | dontbesilent 制作的中文商业技能工具箱，可诊断生意问题、分析对标同行与策划内容 | https://github.com/dontbesilent2025/dbskill |

### Skills 工具与市场

| 名称 | 描述 | 链接 |
|------|------|------|
| skills（npx skills） | Vercel 开源的 Agent Skills 命令行工具，一条命令将技能安装到多种编码 Agent | https://github.com/vercel-labs/skills |
| skills.sh | Vercel 推出的 Agent Skills 目录与排行榜，可搜索并一键安装技能 | https://skills.sh/ |
| ClawHub | OpenClaw 官方技能市场，可搜索、发布与安装社区技能 | https://clawhub.ai/ |
| Claude 官方插件目录 | Anthropic 管理的官方 Claude Code 插件目录，插件可打包分发技能 | https://github.com/anthropics/claude-plugins-official |
| Skill Seekers | 将文档网站、GitHub 仓库与 PDF 自动转换为 Claude 技能的工具 | https://github.com/yusufkaraaslan/Skill_Seekers |
| SkillSpector | NVIDIA 开源的 Agent 技能安全扫描器，检测漏洞与恶意模式 | https://github.com/NVIDIA/SkillSpector |
| SkillOpt | 微软开源的文本空间优化器，为冻结参数的 LLM Agent 训练可复用技能 | https://github.com/microsoft/SkillOpt |
| Refly | 开源 Agent 技能构建器，以 Vibe Workflow 定义技能，可在 Claude Code、Codex 等运行 | https://github.com/refly-ai/refly |
| 仓颉 Skill（cangjie-skill） | 将书籍、长视频与播客等高价值内容蒸馏为可执行 Agent Skills 的工具 | https://github.com/kangarooking/cangjie-skill |

---

## 🔌 MCP 与 Agent 协议

> 连接模型、工具与智能体的开放协议，以及 MCP 生态中的 SDK、开发工具、Server 与学习资源

### 协议与规范

| 名称 | 描述 | 链接 |
|------|------|------|
| MCP（Model Context Protocol） | Anthropic 开源的模型上下文协议，标准化 LLM 应用与外部工具、数据的连接，现由 AAIF 托管 | https://modelcontextprotocol.io/ |
| MCP 规范（2026-07-28） | MCP 最新版正式规范，定义生命周期、传输、授权以及工具、资源、提示词等协议细节 | https://modelcontextprotocol.io/specification/2026-07-28 |
| MCP 规范仓库 | MCP 规范、Schema 与官方文档的源码仓库，社区在此协作推进协议演进 | https://github.com/modelcontextprotocol/modelcontextprotocol |
| A2A（Agent2Agent Protocol） | Google 提出、现由 Linux 基金会托管的开放协议，用于不同框架构建的智能体间通信与协作 | https://github.com/a2aproject/A2A |
| AGENTS.md | 指导编码 Agent 的开放 Markdown 格式，相当于写给 Agent 的 README，已被众多工具支持 | https://github.com/agentsmd/agents.md |
| Agentic AI Foundation（AAIF） | Linux 基金会旗下的智能体 AI 基金会，托管 MCP、AGENTS.md 与 goose 等开源项目 | https://aaif.io/ |
| AG-UI | Agent 与用户界面的交互协议，以事件流方式将 Agent 后端接入前端应用 | https://github.com/ag-ui-protocol/ag-ui |
| MCP Apps | MCP 官方 UI 扩展的规范与 SDK，让 MCP Server 在聊天客户端中嵌入交互式界面 | https://github.com/modelcontextprotocol/ext-apps |
| A2UI | 智能体生成界面的开放格式与渲染器集合，让 Agent 生成或填充可更新的富交互 UI | https://github.com/a2ui-project/a2ui |
| Agent Client Protocol（ACP） | Zed 发起的编辑器与编码 Agent 通信协议，让任意编辑器接入任意 Agent | https://github.com/agentclientprotocol/agent-client-protocol |
| MCP-UI | 通过 MCP 传递交互式 UI 组件的协议与 SDK，支持在聊天客户端渲染富界面 | https://github.com/MCP-UI-Org/mcp-ui |
| MCP Bundles（MCPB） | MCP Server 的打包格式与工具链，支持在桌面应用中一键安装本地 MCP Server | https://github.com/modelcontextprotocol/mcpb |
| Skills Over MCP | MCP 官方扩展，基于 MCP 原语实现 Agent Skills 的发现与分发 | https://github.com/modelcontextprotocol/ext-skills |
| ANP（Agent Network Protocol） | 开源的智能体网络通信协议，目标是构建开放、安全、高效的智能体互联网 | https://github.com/agent-network-protocol/AgentNetworkProtocol |
| AP2（Agent Payments Protocol） | Google 发起的智能体支付协议，为 AI 驱动的支付提供安全、可互操作的标准 | https://github.com/google-agentic-commerce/AP2 |
| Agentic Commerce Protocol（ACP） | OpenAI 与 Stripe 维护的开放标准，让买家通过 AI Agent 与商家完成购买 | https://github.com/agentic-commerce-protocol/agentic-commerce-protocol |
| UCP（Universal Commerce Protocol） | 开放的通用商务协议，为 AI Agent、商家与支付服务商提供统一的交易语言与原语 | https://github.com/Universal-Commerce-Protocol/ucp |
| OpenAI Apps SDK 示例 | OpenAI Apps SDK 官方示例，演示基于 MCP 为 ChatGPT 构建带交互界面的应用 | https://github.com/openai/openai-apps-sdk-examples |
| llms.txt | 在网站根目录提供 /llms.txt 文件的提案，帮助大模型高效理解网站内容 | https://github.com/AnswerDotAI/llms-txt |
| NLWeb | 为网站构建自然语言交互接口的开放协议与参考实现，每个实例同时也是 MCP Server | https://github.com/nlweb-ai/NLWeb |

### MCP 官方 SDK

| 名称 | 语言 | 描述 | 链接 |
|------|------|------|------|
| Python SDK | Python | MCP 官方 Python SDK，用于构建 MCP Server 与客户端，支持多种传输方式 | https://github.com/modelcontextprotocol/python-sdk |
| TypeScript SDK | TypeScript | MCP 官方 TypeScript SDK，用于在 Node.js 等环境构建 MCP Server 与客户端 | https://github.com/modelcontextprotocol/typescript-sdk |
| Java SDK | Java | MCP 官方 Java SDK，与 Spring AI 团队合作维护，便于 Java 应用接入 MCP | https://github.com/modelcontextprotocol/java-sdk |
| C# SDK | C# | MCP 官方 C# SDK，与微软合作维护，用于 .NET 应用构建 MCP Server 与客户端 | https://github.com/modelcontextprotocol/csharp-sdk |
| Go SDK | Go | MCP 官方 Go SDK，与 Google 合作维护，用于构建 MCP Server 与客户端 | https://github.com/modelcontextprotocol/go-sdk |
| Kotlin SDK | Kotlin | MCP 官方 Kotlin SDK，与 JetBrains 合作维护，用于构建 MCP Server 与客户端 | https://github.com/modelcontextprotocol/kotlin-sdk |
| Rust SDK | Rust | MCP 官方 Rust SDK（rmcp），基于 Tokio 异步运行时实现 | https://github.com/modelcontextprotocol/rust-sdk |
| Swift SDK | Swift | MCP 官方 Swift SDK，与 Apple 合作维护，用于 Apple 平台应用接入 MCP | https://github.com/modelcontextprotocol/swift-sdk |
| Ruby SDK | Ruby | MCP 官方 Ruby SDK，用于构建 MCP Server 与客户端 | https://github.com/modelcontextprotocol/ruby-sdk |
| PHP SDK | PHP | MCP 官方 PHP SDK，与 PHP 基金会合作维护，用于构建 MCP Server 与客户端 | https://github.com/modelcontextprotocol/php-sdk |

### MCP 开发框架与调试工具

| 名称 | 描述 | 链接 |
|------|------|------|
| FastMCP | Pythonic 风格的 MCP Server 与客户端框架，1.0 版已并入官方 Python SDK | https://github.com/PrefectHQ/fastmcp |
| MCP Inspector | MCP 官方测试工具，提供 Web、CLI 与 TUI 界面，用于调试与验证 MCP Server | https://github.com/modelcontextprotocol/inspector |
| mcp-use | 全栈 MCP 框架，用于开发面向 ChatGPT、Claude 的 MCP Apps 与 MCP Server | https://github.com/mcp-use/mcp-use |
| mcp-agent | 基于 MCP 与简单工作流模式构建高效 Agent 的框架 | https://github.com/lastmile-ai/mcp-agent |
| FastAPI-MCP | 将 FastAPI 接口直接暴露为 MCP 工具，并支持身份认证 | https://github.com/tadata-org/fastapi_mcp |
| FastMCP（TypeScript） | 用于快速构建 MCP Server 的 TypeScript 框架 | https://github.com/punkpeye/fastmcp |
| mcp-go | MCP 协议的 Go 语言实现，用于构建 MCP Server 与客户端 | https://github.com/mark3labs/mcp-go |
| xmcp | basement.studio 出品的 TypeScript MCP 框架，用于构建与部署 MCP Server | https://github.com/basementstudio/xmcp |
| mcp-handler | Vercel 出品的适配器，可在 Next.js、Nuxt、Svelte 等框架中快速部署 MCP Server | https://github.com/vercel-labs/mcp-handler |
| MCPJam Inspector | 用于对话、检查与调试 MCP Server、MCP Apps 及 ChatGPT 应用的测试评估平台 | https://github.com/MCPJam/inspector |
| mcpo | Open WebUI 出品的 MCP 转 OpenAPI 代理，让 MCP 工具以 REST 接口被调用 | https://github.com/open-webui/mcpo |
| ContextForge | IBM 开源的 AI 网关、注册中心与代理，统一接入 MCP、A2A 与 REST、gRPC 接口 | https://github.com/IBM/mcp-context-forge |
| Docker MCP Gateway | Docker 官方 MCP 网关与 docker mcp CLI 插件，以容器方式运行和管理 MCP Server | https://github.com/docker/mcp-gateway |
| MetaMCP | 集聚合、编排、中间件与网关于一体的 MCP 代理，可用 Docker 一键部署 | https://github.com/metatool-ai/metamcp |
| agentgateway | 面向 AI Agent 与 MCP Server 的新一代代理网关，支持 MCP 与 A2A 协议 | https://github.com/agentgateway/agentgateway |
| ToolHive | Stacklok 出品的企业级 MCP Server 运行与管理平台 | https://github.com/stacklok/toolhive |
| MCPHub | 自托管的 MCP 网关与控制面，集中连接、管理与运维多个 MCP Server | https://github.com/samanhappy/mcphub |
| Higress | 阿里巴巴开源的 AI 原生 API 网关，支持托管远程 MCP Server | https://github.com/higress-group/higress |
| Supergateway | 在 stdio、SSE 与 Streamable HTTP 之间转换传输方式，让本地 MCP Server 可远程访问 | https://github.com/supercorp-ai/supergateway |
| mcp-proxy | 在 Streamable HTTP 与 stdio 两种 MCP 传输方式之间桥接的代理 | https://github.com/sparfenyuk/mcp-proxy |
| mcp-remote | 让仅支持本地 stdio 的 MCP 客户端连接远程 MCP Server 的工具 | https://github.com/punkpeye/mcp-remote |
| MCPM | 跨平台的 MCP 包管理器与注册表命令行工具，可搜索、配置并路由 MCP Server | https://github.com/pathintegral-institute/mcpm.sh |
| Klavis | 面向 AI Agent 的 MCP 集成平台，帮助 Agent 大规模可靠地调用工具 | https://github.com/Klavis-AI/klavis |
| Arcade MCP | Arcade 的 MCP Server 框架与工具开发库，用于为 Agent 构建自定义能力 | https://github.com/ArcadeAI/arcade-mcp |

### 热门 MCP Server

| 名称 | 描述 | 链接 |
|------|------|------|
| MCP 官方参考 Server | MCP 官方参考实现合集，含文件系统、Git、Fetch、Memory 等示例 Server | https://github.com/modelcontextprotocol/servers |
| GitHub MCP Server | GitHub 官方 MCP Server，让 Agent 管理仓库、Issue、PR 与 Actions 等 | https://github.com/github/github-mcp-server |
| Playwright MCP | 微软官方浏览器自动化 MCP Server，基于无障碍快照而非截图操作网页 | https://github.com/microsoft/playwright-mcp |
| Chrome DevTools MCP | Chrome 官方 MCP Server，让编码 Agent 调用 DevTools 调试网页与分析性能 | https://github.com/ChromeDevTools/chrome-devtools-mcp |
| Context7 | Upstash 出品，为 Agent 提供最新版本的库文档与代码示例，减少过时 API 幻觉 | https://github.com/upstash/context7 |
| Serena | 为编码 Agent 提供语义级代码检索与编辑能力的 MCP 工具集 | https://github.com/oraios/serena |
| MCP for Blender | 让任意大模型通过 MCP 操控 Blender 完成 3D 建模的社区插件，非 Blender 官方项目 | https://github.com/ahujasid/mcp-for-blender |
| n8n-MCP | 让 Claude、Cursor 等 AI 助手理解 n8n 节点并帮你构建工作流的 MCP Server | https://github.com/czlonkowski/n8n-mcp |
| AWS MCP Servers | AWS 官方开源的 MCP Server 合集，覆盖文档查询、基础设施与各类 AWS 服务 | https://github.com/awslabs/mcp |
| MCP Toolbox for Databases | Google 开源的数据库 MCP Server，可连接多种数据库并集中管理工具 | https://github.com/googleapis/mcp-toolbox |
| Cloudflare MCP | Cloudflare 官方按产品划分的 MCP Server 合集，覆盖 Workers、可观测性等服务 | https://github.com/cloudflare/mcp-server-cloudflare |
| Supabase MCP | Supabase 官方 MCP Server，让 AI 助手管理数据库、迁移与项目配置 | https://github.com/supabase/mcp |
| Notion MCP Server | Notion 官方 MCP Server，让 Agent 读写 Notion 页面与数据库 | https://github.com/makenotion/notion-mcp-server |
| MCP Atlassian | 连接 Jira 与 Confluence 的社区 MCP Server，支持云端与私有化部署版本 | https://github.com/sooperset/mcp-atlassian |
| Grafana MCP | Grafana 官方 MCP Server，让 Agent 查询仪表盘、数据源、告警与事件 | https://github.com/grafana/mcp-grafana |
| Stripe AI | Stripe 官方 AI 工具集，提供远程 MCP Server、Agent Skills 与计费集成 SDK | https://github.com/stripe/ai |
| Firecrawl MCP | Firecrawl 官方 MCP Server，为 Agent 提供网页搜索、抓取、爬取与结构化提取 | https://github.com/firecrawl/firecrawl-mcp-server |
| Exa MCP | Exa 官方 MCP Server，为 Agent 提供网页搜索与网页抓取能力 | https://github.com/exa-labs/exa-mcp-server |
| Apify MCP | 让 Agent 调用 Apify 爬虫，从社交媒体、搜索引擎、地图与电商网站提取数据 | https://github.com/apify/apify-mcp-server |
| GitMCP | 为任意 GitHub 项目提供免费远程 MCP Server，让 Agent 读取最新文档以减少幻觉 | https://github.com/idosal/git-mcp |
| Desktop Commander | 为 Claude 等 Agent 提供终端控制、文件搜索与差异化编辑能力的 MCP Server | https://github.com/wonderwhy-er/DesktopCommanderMCP |
| Chrome MCP Server | 基于 Chrome 扩展的 MCP Server，让 AI 助手直接操作日常使用的浏览器 | https://github.com/hangwin/mcp-chrome |
| Windows-MCP | 面向 Windows 的 Computer Use MCP Server，让 Agent 操作桌面与应用 | https://github.com/CursorTouch/Windows-MCP |
| Mobile MCP | 让 Agent 在模拟器与真机上操作 iOS 和 Android 应用的 MCP Server | https://github.com/mobile-next/mobile-mcp |
| Figma Context MCP | 将 Figma 设计稿布局信息提供给 Cursor 等编码 Agent，辅助设计稿转代码 | https://github.com/GLips/Figma-Context-MCP |
| Unity MCP | 连接 AI 助手与 Unity 编辑器，让大模型管理资源、控制场景与编辑脚本 | https://github.com/CoplayDev/unity-mcp |
| MiniMax MCP | MiniMax 官方 MCP Server，提供语音合成、图像生成与视频生成等能力 | https://github.com/MiniMax-AI/MiniMax-MCP |
| AntV MCP Chart | AntV 出品的可视化 MCP Server 与技能，支持 25 种以上图表，用于图表生成与数据分析 | https://github.com/antvis/mcp-server-chart |
| IDA Pro MCP | 通过 MCP 连接 IDA Pro 与大模型的 AI 逆向工程助手 | https://github.com/mrexodia/ida-pro-mcp |
| GhidraMCP | 让大模型通过 MCP 调用 Ghidra 进行二进制逆向分析的 MCP Server | https://github.com/LaurieWired/GhidraMCP |

### MCP 市场与目录

| 名称 | 类型 | 描述 | 链接 |
|------|------|------|------|
| MCP Registry | 官方注册中心 | MCP 官方注册中心，提供公开 MCP Server 元数据的发布、发现与查询 API | https://registry.modelcontextprotocol.io/ |
| mcp.so | 导航站 | 社区 MCP Server 导航站，收录各类 Server 与客户端并支持分类检索 | https://mcp.so/ |
| Smithery | 托管与市场 | MCP Server 托管与发现平台，可搜索并快速连接各类 Server | https://smithery.ai/ |
| Glama | 托管与市场 | Glama 的 MCP Server 目录与托管平台，便于发现与部署开源 MCP Server | https://glama.ai/mcp/servers |
| PulseMCP | 导航站 | 持续更新的 MCP Server 与客户端目录，并提供每周生态资讯 | https://www.pulsemcp.com/ |
| 魔搭 MCP 广场 | 托管与市场 | 魔搭社区的 MCP 广场，汇集国内外 MCP Server，便于中文开发者检索与接入 | https://modelscope.cn/mcp |
| Docker MCP Catalog | 官方目录 | Docker 官方 MCP 注册表，收录可容器化运行的 MCP Server | https://github.com/docker/mcp-registry |
| Microsoft MCP | 官方目录 | 微软官方 MCP Server 实现目录，涵盖 Azure 等服务的数据访问与工具集成 | https://github.com/microsoft/mcp |
| Google MCP | 官方目录 | Google 官方 MCP Server 列表，含 BigQuery、GKE 等托管远程 Server 与部署指南 | https://github.com/google/mcp |
| awesome-mcp-servers（wong2） | Awesome 列表 | 精选 MCP Server 列表，配套网站为 mcpservers.org | https://github.com/wong2/awesome-mcp-servers |
| awesome-mcp-clients | Awesome 列表 | MCP 客户端精选列表，收录支持 MCP 的各类 AI 应用与工具 | https://github.com/punkpeye/awesome-mcp-clients |
| awesome-mcp-devtools | Awesome 列表 | MCP Server 开发相关的工具、SDK、库与测试工具精选列表 | https://github.com/punkpeye/awesome-mcp-devtools |
| Awesome-MCP-ZH | Awesome 列表 | 中文 MCP 资源精选，含 MCP 指南、Server 与客户端推荐 | https://github.com/yzfly/Awesome-MCP-ZH |
| awesome-remote-mcp-servers | Awesome 列表 | 远程 MCP Server 精选列表，可直接通过 URL 接入使用 | https://github.com/jaw9c/awesome-remote-mcp-servers |

### MCP 学习资源

| 资源名称 | 类型 | 描述 | 链接 |
|------|------|------|------|
| MCP 官方文档与教程 | 文档 | MCP 官方入门文档，介绍架构与核心概念，并提供构建 Server 与客户端的教程 | https://modelcontextprotocol.io/introduction |
| Anthropic：Introducing the Model Context Protocol | 博客 | Anthropic 于 2024 年 11 月发布 MCP 的官方公告，阐述协议动机与组成 | https://www.anthropic.com/news/model-context-protocol |
| MCP for Beginners | 课程 | 微软开源的 MCP 入门课程，提供 .NET、Java、TypeScript、Python 等多语言实战示例 | https://github.com/microsoft/mcp-for-beginners |
| Hugging Face MCP 课程 | 课程 | Hugging Face 推出的免费 MCP 课程，从基础概念讲到构建 MCP 应用 | https://huggingface.co/learn/mcp-course |
| MCP 官方快速入门示例 | 示例代码 | MCP 官方教程配套的 Server 与客户端示例代码 | https://github.com/modelcontextprotocol/quickstart-resources |
| MCP 编程极速入门 | 教程 | 中文 MCP 入门教程，涵盖 Server 与客户端开发、调试、Sampling 及 Claude Desktop 接入 | https://github.com/liaokongVFX/MCP-Chinese-Getting-Started-Guide |
| A2A 协议文档 | 文档 | A2A 官方文档站，包含协议规范、核心概念、教程与各语言 SDK 文档 | https://a2a-protocol.org/ |
| A2A 示例 | 示例代码 | A2A 官方示例合集，演示基于 A2A 协议的智能体互操作 | https://github.com/a2aproject/a2a-samples |

---

## 💻 AI 编程

> 收录 AI 原生 IDE、终端编程智能体、代码助手、自主软件工程智能体与 Vibe Coding 等工具，覆盖 AI 辅助开发全流程

### AI 原生 IDE

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| Cursor | Anysphere | 基于 VS Code 的 AI 原生编辑器，提供智能体模式、Tab 预测补全、多模型切换与云端后台智能体 | https://cursor.com/ |
| Windsurf | Cognition | AI 原生 IDE（原 Codeium），以 Cascade 智能体理解代码库上下文并执行多步编辑 | https://windsurf.com/ |
| Google Antigravity | Google | Google 推出的智能体优先开发平台，可在编辑器、终端与浏览器间编排多个智能体并行工作 | https://antigravity.google/ |
| Visual Studio Code | 微软 | 微软开源代码编辑器，已内置 Copilot 对话、智能体模式与 MCP 支持，可接入多家模型 | https://github.com/microsoft/vscode |
| Trae | 字节跳动 | 字节跳动推出的 AI 原生 IDE，支持对话、Builder 与 SOLO 智能体模式，另有面向国内的 TRAE CN | https://www.trae.ai/ |
| Kiro | AWS | 亚马逊推出的规范驱动 AI IDE，先生成需求、设计与任务清单再由智能体实现，支持 Hooks 自动化 | https://kiro.dev/ |
| Qoder | 阿里巴巴 | 阿里巴巴推出的智能体编程平台，强调代码库深度理解、Repo Wiki 与长程任务委派 | https://qoder.com/ |
| Zed | Zed Industries | Rust 编写的高性能协作编辑器，内置智能体面板，并通过 ACP 协议接入外部编程智能体 | https://github.com/zed-industries/zed |
| JetBrains AI | JetBrains | JetBrains 系列 IDE 的 AI 能力集合，包含 AI Assistant、Junie 智能体与多模型接入 | https://www.jetbrains.com/ai/ |
| CodeBuddy | 腾讯 | 腾讯推出的 AI 编程助手，提供 IDE 插件、独立 AI IDE 与命令行等多种形态 | https://copilot.tencent.com/ |
| Orca | Stably AI | 智能体集群开发工作台，可在独立 Git worktree 中并行运行 Codex、Claude Code 等并比较结果 | https://github.com/stablyai/orca |
| Paradev（原 Superset） | ParadevAI | 面向多智能体并行的 IDE，可在隔离工作区中同时编排大量 Claude Code、Codex 等编程智能体 | https://github.com/ParadevAI/Paradev |
| ThinkRail | JetBrains | JetBrains 推出的轻量智能体 IDE，基于 Pi 编程智能体，以活文档规格与技能沉淀项目知识 | https://github.com/JetBrains/thinkrail |
| Void | Void | 开源的 Cursor 替代编辑器，可直连本地模型或任意模型提供商（已归档） | https://github.com/voideditor/void |

### 终端编程智能体（CLI）

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| Claude Code | Anthropic | Anthropic 官方终端编程智能体，理解整个代码库并执行编辑、命令与 Git 工作流，支持子智能体与插件 | https://github.com/anthropics/claude-code |
| Codex CLI | OpenAI | OpenAI 开源的 Rust 终端编程智能体，可本地读写代码与执行命令，并与 Codex 云端任务、IDE 扩展协同 | https://github.com/openai/codex |
| Antigravity CLI | Google | Google 现行的终端多智能体编程工具 agy，已承接 Gemini CLI 的免费与个人订阅用户 | https://antigravity.google/product/antigravity-cli |
| Gemini CLI | Google | Google 开源的终端智能体，现面向 Code Assist 企业用户，个人用户已迁移至 Antigravity CLI | https://github.com/google-gemini/gemini-cli |
| GitHub Copilot CLI | GitHub | 将 Copilot 编程智能体带入终端，原生集成仓库、Issue 与 PR 上下文并支持自定义 MCP 服务器 | https://github.com/github/copilot-cli |
| Qwen Code | 阿里巴巴通义 | 通义千问开源的编程智能体，覆盖终端、IDE、桌面与聊天入口，兼容 OpenAI、Anthropic 等多种接口 | https://github.com/QwenLM/qwen-code |
| Kimi Code CLI | 月之暗面 | 月之暗面推出的终端编程智能体，开箱即用 Kimi 模型，可读写代码、执行命令与抓取网页 | https://github.com/MoonshotAI/kimi-code |
| DeepSeek Harness | 深度求索 | DeepSeek 官方开源的智能体运行框架 dsh，采用一切皆插件架构并提供 Web 界面，处于开发者预览阶段 | https://github.com/deepseek-ai/deepseek-harness |
| opencode | Anomaly（原 SST） | 开源终端编程智能体，提供 TUI、桌面端与 IDE 集成，可自由接入各家模型提供商与本地模型 | https://github.com/anomalyco/opencode |
| Pi | Earendil | 极简可扩展的编程智能体工具包，含统一 LLM 接口、智能体循环、TUI 与编程智能体 CLI | https://github.com/earendil-works/pi |
| Aider | Aider-AI | 终端结对编程工具，基于仓库地图理解代码并自动生成 Git 提交，支持多种模型 | https://github.com/Aider-AI/aider |
| goose | AAIF（原 Block） | 可扩展的开源本地 AI 智能体，可自动完成编码、调试与工作流任务，深度集成 MCP | https://github.com/aaif-goose/goose |
| Crush | Charm | Charm 出品的终端编程智能体，界面精致，支持多模型切换、LSP 与 MCP 扩展 | https://github.com/charmbracelet/crush |
| Amp | Amp | 源自 Sourcegraph 的前沿编程智能体，支持终端与编辑器，强调多模型协同与团队线程共享 | https://ampcode.com/ |
| Factory Droid | Factory | Factory 推出的编程智能体 Droid，可在终端、IDE 与 CI 中执行端到端软件开发任务 | https://factory.ai/ |
| Cursor CLI | Anysphere | Cursor 的命令行智能体，可在终端或 CI 中调用 Cursor Agent 与多家模型 | https://cursor.com/cli |
| Warp | Warp | 由 AI 终端演进而来的开源智能体开发环境，内置编程智能体并可管理多个智能体会话 | https://github.com/warpdotdev/warp |
| JetBrains Junie | JetBrains | JetBrains 推出的编程智能体，可在终端、IDE 与 CI/CD 流水线中运行并自选大模型 | https://github.com/JetBrains/junie |
| Mistral Vibe | Mistral AI | Mistral 官方开源的命令行编程助手，由 Mistral 模型驱动，以对话方式探索与修改代码库 | https://github.com/mistralai/mistral-vibe |
| iFlow CLI | 心流 | 嵌入终端的命令行智能体，可分析仓库、执行编程任务并自动化各类工作流 | https://github.com/iflow-ai/iflow-cli |
| Freebuff（原 Codebuff） | CodebuffAI | 多智能体协作的编程工具，提供 CLI、桌面端与云端等形态，以文字广告支撑免费使用 | https://github.com/CodebuffAI/freebuff |
| Plandex | Plandex | 面向大型项目的终端编程智能体，支持长程任务规划与沙箱化差异审查 | https://github.com/plandex-ai/plandex |

### IDE 插件与代码助手

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| GitHub Copilot | GitHub | GitHub 官方 AI 编程助手，覆盖补全、对话、智能体模式与代码审查，支持 VS Code、JetBrains 等 IDE | https://github.com/features/copilot |
| Cline | Cline | 开源 VS Code 自主编程智能体，可在用户审批下读写文件、执行命令与操作浏览器，支持 MCP | https://github.com/cline/cline |
| Kilo Code | Kilo | 开源智能体工程平台，提供 VS Code、JetBrains 插件与 CLI，支持多模式工作流与多模型接入 | https://github.com/Kilo-Org/kilocode |
| Continue | Continue | 开源编程智能体，支持 VS Code、JetBrains 与 CLI，可自定义模型与规则并在 CI 中运行检查 | https://github.com/continuedev/continue |
| Roo Code | Roo Code | 源自 Cline 的 VS Code 编程智能体，以多模式与自定义模式著称（已归档） | https://github.com/RooCodeInc/Roo-Code |
| Augment Code | Augment Code | 面向大型代码库的 AI 编程平台，以上下文引擎驱动补全、对话与远程智能体 | https://www.augmentcode.com/ |
| Gemini Code Assist | Google | Google 的 AI 编程助手，提供 VS Code 与 JetBrains 插件、智能体模式及 GitHub 代码审查 | https://codeassist.google/ |
| Amazon Q Developer | AWS | 亚马逊的 AI 编程助手，提供代码生成、代码转换升级与 AWS 资源运维辅助 | https://aws.amazon.com/q/developer/ |
| 通义灵码 | 阿里云 | 阿里云推出的智能编码助手，基于通义千问代码模型，提供补全、问答与智能体模式 | https://lingma.aliyun.com/ |
| 文心快码 Comate | 百度 | 百度基于文心大模型的智能代码助手，支持主流 IDE 并提供智能体编程能力 | https://comate.baidu.com/ |
| CodeGeeX | 智谱 | 智谱基于 GLM 代码模型的多语言编程助手，提供代码补全、智能问答与代码翻译 | https://codegeex.cn/ |
| Tabnine | Tabnine | 注重隐私与企业合规的 AI 代码助手，支持私有化部署与多模型选择 | https://www.tabnine.com/ |
| Tabby | TabbyML | 可自托管的开源 AI 编程助手，提供代码补全、对话与仓库上下文索引 | https://github.com/TabbyML/tabby |
| Copilot for Xcode | GitHub | GitHub 官方 Xcode 扩展，为 Apple 平台开发提供 Copilot 补全、对话与智能体模式 | https://github.com/github/CopilotForXcode |
| avante.nvim | avante-corp | 在 Neovim 中复刻 Cursor 体验的插件，支持 AI 对话改写代码并逐块应用差异 | https://github.com/avante-corp/avante.nvim |
| CodeCompanion.nvim | olimorris | Neovim 的 AI 编程插件，支持对话缓冲区、内联编辑、工具调用与 ACP 智能体接入 | https://github.com/olimorris/codecompanion.nvim |
| gptel | karthink | Emacs 中简洁的 LLM 客户端，可在任意缓冲区调用多家模型并支持工具调用 | https://github.com/karthink/gptel |

### 自主软件工程智能体

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| Devin | Cognition | Cognition 推出的自主 AI 软件工程师，可在云端沙箱中规划、编码、测试并提交 PR | https://devin.ai/ |
| OpenHands | OpenHands | 开源 AI 软件开发智能体平台（原 OpenDevin），可写代码、执行命令与浏览网页，提供 CLI、GUI 与云端 | https://github.com/OpenHands/OpenHands |
| GitHub Copilot 编程智能体 | GitHub | 可将 Issue 指派给 Copilot，由其在 GitHub Actions 环境中自主编码并发起 PR 供审查 | https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent |
| Codex 云端 | OpenAI | OpenAI 的云端软件工程智能体，在隔离容器中并行处理任务并生成可审查的代码变更 | https://chatgpt.com/codex |
| Jules | Google | Google 的异步编程智能体，在云端虚拟机中克隆仓库，完成缺陷修复、测试编写与依赖升级 | https://jules.google.com/ |
| SWE-agent | 普林斯顿大学、斯坦福大学 | 通过智能体-计算机接口让语言模型自动修复 GitHub Issue 的研究型智能体 | https://github.com/SWE-agent/SWE-agent |
| mini-swe-agent | SWE-agent 团队 | 仅依赖 bash 的极简 SWE 智能体，代码精简易读，便于研究、评测与二次开发 | https://github.com/SWE-agent/mini-swe-agent |
| Trae Agent | 字节跳动 | 字节跳动开源的通用软件工程智能体，提供 CLI 并采用便于研究扩展的模块化设计 | https://github.com/bytedance/trae-agent |
| DeepCode | 香港大学 | 港大数据智能实验室开源的智能体编程框架，可将论文与文本需求转化为可运行代码 | https://github.com/HKUDS/DeepCode |
| AutoCodeRover | AutoCodeRoverSG | 结合程序结构感知检索与测试的自动程序修复智能体，面向 GitHub Issue 求解 | https://github.com/AutoCodeRoverSG/auto-code-rover |
| Agentless | OpenAutoCoder | 不依赖复杂智能体循环，以定位、修复、验证三阶段解决软件问题的方案 | https://github.com/OpenAutoCoder/Agentless |
| Devika | stitionai | 早期开源 Devin 替代项目，可将高层指令分解为调研、规划与编码步骤 | https://github.com/stitionai/devika |
| GPT Engineer | AntonOsika | 由自然语言需求生成完整代码库的早期项目，Lovable 的前身（已归档） | https://github.com/AntonOsika/gpt-engineer |

### AI 应用生成器（Vibe Coding）

| 名称 | 机构 | 描述 | 链接 |
|------|------|------|------|
| Lovable | Lovable | 通过对话生成全栈 Web 应用的平台，集成 Supabase 后端、一键部署与 GitHub 同步 | https://lovable.dev/ |
| Bolt.new | StackBlitz | 基于 WebContainers 在浏览器中由提示词生成、运行并部署全栈应用 | https://bolt.new/ |
| v0 | Vercel | Vercel 的 AI 应用构建器，由提示词生成 React 与 Next.js 界面和应用并一键部署 | https://v0.app/ |
| Replit | Replit | 云端开发与部署平台，Replit Agent 可根据自然语言构建、测试并上线应用 | https://replit.com/ |
| Base44 | Wix | 通过对话构建带数据库与用户认证的应用的无代码平台，已被 Wix 收购 | https://base44.com/ |
| MGX（MetaGPT X） | DeepWisdom | 基于 MetaGPT 多智能体团队的应用构建平台，模拟产品、架构与工程师分工协作 | https://mgx.dev/ |
| Google Stitch | Google | Google Labs 的 AI 界面设计工具，可由文字描述或草图生成 UI 设计稿与前端代码 | https://stitch.withgoogle.com/ |
| bolt.diy | StackBlitz Labs | Bolt.new 的官方开源版本，可选择任意大模型在浏览器中生成全栈应用 | https://github.com/stackblitz-labs/bolt.diy |
| Dyad | Dyad | 本地运行的开源 AI 应用构建器，可作为 Lovable、v0、Bolt 的替代并自带模型密钥 | https://github.com/dyad-sh/dyad |
| Open Lovable | Firecrawl | 输入网址即可克隆网站并生成 React 应用的开源项目 | https://github.com/firecrawl/open-lovable |
| screenshot-to-code | abi | 将截图、设计稿或录屏转换为 HTML、Tailwind、React、Vue 代码的开源工具 | https://github.com/abi/screenshot-to-code |
| Onlook | Onlook | 面向设计师的开源可视化 AI 编辑器，可在浏览器中可视化编辑 Next.js 与 Tailwind 应用 | https://github.com/onlook-dev/onlook |
| Open Design | Nexu | 本地优先的开源协作式 AI 设计智能体工作区，可生成原型、网站、应用与动效 | https://github.com/nexu-io/open-design |
| VibeSDK | Cloudflare | Cloudflare 开源的 Vibe Coding 平台方案，可自行部署类似 Lovable 的应用生成服务 | https://github.com/cloudflare/vibesdk |
| Chef | Convex | Convex 推出的全栈应用生成智能体，内置数据库、用户认证与实时后端 | https://github.com/convex/chef |
| LlamaCoder | Nutlope | 由一句提示词生成小型 React 应用的开源 Claude Artifacts 替代品 | https://github.com/Nutlope/llamacoder |
| OpenUI | Weights & Biases | 用自然语言描述界面并实时渲染、迭代的开源 UI 生成工具 | https://github.com/wandb/openui |
| AI Website Cloner Template | JCodesMore | 借助 Claude Code 等编程智能体一条命令复刻网站页面的开源模板 | https://github.com/JCodesMore/ai-website-cloner-template |

### 规范驱动开发与工作流

> 规范驱动开发（SDD）先写需求与设计规格再交给智能体实现；本节同时收录编程智能体的增强框架、多智能体编排与配套工具

| 名称 | 描述 | 链接 |
|------|------|------|
| Spec Kit | GitHub 官方开源的规范驱动开发工具包，以 specify、plan、tasks 等命令引导智能体按规格实现 | https://github.com/github/spec-kit |
| OpenSpec | 轻量的规范驱动开发框架，在编写代码前让人与 AI 就变更提案与规格达成一致 | https://github.com/Fission-AI/OpenSpec |
| BMAD-METHOD | 敏捷 AI 驱动开发方法论，由分析师、架构师、开发者等专职智能体协作推进项目 | https://github.com/bmad-code-org/BMAD-METHOD |
| Conductor | Google 推出的规范驱动开发插件，适用于 Antigravity、Claude Code 等编程智能体 | https://github.com/gemini-cli-extensions/conductor |
| GSD Core | 轻量的元提示、上下文工程与规范驱动开发系统，以讨论、规划、执行、验证、交付循环推进项目 | https://github.com/open-gsd/gsd-core |
| Task Master | 将 PRD 拆解为可执行任务并驱动 Cursor、Claude Code 等逐项实现的任务管理系统 | https://github.com/eyaltoledano/claude-task-master |
| cc-sdd | 为 Claude Code、Codex 等编程智能体提供 Kiro 风格规范驱动开发命令的工具 | https://github.com/gotalab/cc-sdd |
| Trellis | 编程智能体工作流框架，自动注入项目规范并以任务与工作日志沉淀团队共享的项目记忆 | https://github.com/mindfold-ai/Trellis |
| CCPM | 基于 GitHub Issues 与 Git worktree 的 Claude Code 项目管理与并行执行系统 | https://github.com/automazeio/ccpm |
| ECC | 面向 Claude Code、Codex、Cursor 等的智能体增强系统，集成技能、记忆、安全与研究优先开发流程 | https://github.com/affaan-m/ECC |
| SuperClaude | 为 Claude Code 增加专用命令、认知角色与开发方法论的配置框架 | https://github.com/SuperClaude-Org/SuperClaude_Framework |
| oh-my-claudecode | 面向 Claude Code 的多智能体编排插件，提供团队协作模式与自动化工作流 | https://github.com/Yeachan-Heo/oh-my-claudecode |
| OmO（oh-my-openagent） | 原 oh-my-opencode，为编程智能体提供多模型协作、记忆系统与工作流编排的增强套件 | https://github.com/code-yeongyu/oh-my-openagent |
| Ruflo（原 Claude Flow） | 面向 Claude Code 的多智能体编排平台，支持蜂群协作、持久记忆与 MCP 工具 | https://github.com/ruvnet/ruflo |
| Beads | 面向编程智能体的轻量问题追踪与记忆系统，以依赖图管理长程任务 | https://github.com/gastownhall/beads |
| Vibe Kanban | 以看板方式编排 Claude Code、Codex 等多个编程智能体并行工作并审查结果 | https://github.com/BloopAI/vibe-kanban |
| Claude Squad | 在终端中统一管理多个 Claude Code、Codex、Aider 会话，基于 tmux 与 worktree 隔离 | https://github.com/smtg-ai/claude-squad |
| Container Use | Dagger 推出的隔离开发环境，让多个编程智能体在独立容器与 Git 分支中安全并行 | https://github.com/dagger/container-use |
| herdr | Rust 编写的编程智能体终端运行时，后台保持会话、标记智能体状态并支持多机管理 | https://github.com/herdrdev/herdr |
| cmux | 基于 Ghostty 的开源 macOS 终端，为 AI 编程智能体提供垂直标签页与通知 | https://github.com/manaflow-ai/cmux |
| Claude Code Router | 将 Claude Code 请求路由至不同模型提供商并可按场景切换模型的代理工具 | https://github.com/musistudio/claude-code-router |
| CC Switch | 跨平台桌面工具，统一管理 Claude Code、Codex、Gemini CLI 等工具的供应商配置与 MCP | https://github.com/farion1231/cc-switch |
| ccusage | 读取本地日志分析 Claude Code、Codex 等工具 Token 用量与费用的命令行工具 | https://github.com/ccusage/ccusage |
| CodexBar | 在 macOS 菜单栏显示 Codex、Claude Code 等工具的用量额度与重置时间 | https://github.com/steipete/CodexBar |
| Claude Code Templates | 提供智能体、命令、Hooks、MCP 等 Claude Code 配置模板的命令行工具与监控面板 | https://github.com/davila7/claude-code-templates |
| Codex Plugin for Claude Code | OpenAI 官方插件，可在 Claude Code 中调用 Codex 审查代码或委派任务 | https://github.com/openai/codex-plugin-cc |
| AionUi | 为 Claude Code、Codex、Gemini CLI 等命令行智能体提供统一的桌面图形界面 | https://github.com/iOfficeAI/AionUi |
| Happy | Claude Code 与 Codex 的移动端与网页客户端，支持端到端加密的远程控制 | https://github.com/slopus/happy |

### 代码审查与测试

| 名称 | 描述 | 链接 |
|------|------|------|
| CodeRabbit | AI 代码审查平台，在 PR 中自动生成逐行审查意见与变更摘要，并提供 IDE 与 CLI 审查 | https://www.coderabbit.ai/ |
| Greptile | 基于全仓代码图谱理解上下文的 AI 代码审查工具，在 PR 中发现缺陷与风险 | https://www.greptile.com/ |
| Qodo | 面向企业的 AI 代码质量平台，提供 PR 审查、测试生成与 IDE 智能体 | https://www.qodo.ai/ |
| PR-Agent | 开源 AI PR 审查工具，提供自动审查、描述生成与改进建议，支持 GitHub、GitLab 等平台 | https://github.com/The-PR-Agent/pr-agent |
| Open Code Review | 阿里巴巴开源的代码审查工具，结合确定性流水线与 LLM 智能体给出精确的行级评论 | https://github.com/alibaba/open-code-review |
| Claude Code Action | Anthropic 官方 GitHub Action，在 PR 与 Issue 中通过 @claude 触发代码审查与实现 | https://github.com/anthropics/claude-code-action |
| Claude Code Security Review | Anthropic 官方 GitHub Action，利用 Claude 对 PR 变更进行语义级安全审查 | https://github.com/anthropics/claude-code-security-review |
| Codex GitHub Action | OpenAI 官方 GitHub Action，在 CI 工作流中运行 Codex 执行代码审查与自动修复 | https://github.com/openai/codex-action |
| run-gemini-cli | Google 官方 GitHub Action，在工作流中调用 Gemini CLI 进行 PR 审查与 Issue 分诊 | https://github.com/google-github-actions/run-gemini-cli |
| Kodus | 可自托管的开源 AI 代码审查智能体，支持自带模型并学习团队规范 | https://github.com/kodustech/kodus-ai |
| DeepAudit | 国产开源的多智能体代码安全审计系统，支持漏洞挖掘与验证 | https://github.com/lintsinghua/DeepAudit |
| Keploy | 根据真实流量自动生成 API 测试用例与数据 Mock 的开源测试平台 | https://github.com/keploy/keploy |
| Shortest | 用自然语言编写端到端测试并由 AI 驱动执行的开源测试框架 | https://github.com/antiwork/shortest |
| Qodo Cover | 基于大模型自动生成单元测试以提升代码覆盖率的开源工具 | https://github.com/qodo-ai/qodo-cover |

### 代码库理解与上下文工具

| 名称 | 描述 | 链接 |
|------|------|------|
| DeepWiki | Cognition 推出的代码库百科服务，为 GitHub 仓库自动生成可对话的文档与架构图 | https://deepwiki.com/ |
| DeepWiki-Open | 开源的 DeepWiki 实现，可为 GitHub、GitLab 仓库生成交互式 Wiki 与 RAG 问答 | https://github.com/AsyncFuncAI/deepwiki-open |
| OpenDeepWiki | AIDotNet 开源的代码知识库系统，将代码仓库转化为结构化文档并提供 MCP 服务 | https://github.com/AIDotNet/OpenDeepWiki |
| Repomix | 将整个仓库打包为单个 AI 友好文件以便输入大模型分析，支持 Token 统计与代码压缩 | https://github.com/yamadashy/repomix |
| Gitingest | 将任意 Git 仓库转换为适合 LLM 阅读的文本摘要，替换网址中的 hub 即可使用 | https://github.com/coderamp-labs/gitingest |
| code2prompt | 将代码库转换为单一 LLM 提示词的 Rust 命令行工具，支持模板与 Token 计数 | https://github.com/mufeedvh/code2prompt |
| files-to-prompt | Simon Willison 开发的命令行工具，将多个文件拼接为适合大模型的提示词 | https://github.com/simonw/files-to-prompt |
| GitDiagram | 为任意 GitHub 仓库自动生成可交互的系统架构图 | https://github.com/ahmedkhaleel2004/gitdiagram |
| Codebase to Tutorial | 基于 PocketFlow 智能体分析代码库并自动生成面向初学者的教程 | https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge |
| Graphify | 将代码库及其文档、SQL 模式、配置与 PDF 转为可查询知识图谱，以技能形式接入编程智能体 | https://github.com/Graphify-Labs/graphify |
| Understand-Anything | 将任意代码转化为可探索、搜索与提问的交互式知识图谱，帮助理解陌生项目 | https://github.com/Egonex-AI/Understand-Anything |
| CodeGraph | 预先索引并随代码变更自动同步的代码知识图谱，供 Claude Code、Codex 等智能体查询 | https://github.com/colbymchenry/codegraph |
| code-review-graph | 本地优先的代码智能图谱，通过 MCP 与 CLI 让 AI 编程工具只读取相关代码 | https://github.com/tirth8205/code-review-graph |
| codebase-memory-mcp | 将代码、文档与基础设施连接为持久图谱的本地代码智能工具，提供 MCP 接口 | https://github.com/DeusData/codebase-memory-mcp |
| Claude Context | Zilliz 开源的代码语义搜索 MCP，以向量数据库为编程智能体提供全仓上下文 | https://github.com/zilliztech/claude-context |
| RTK | 过滤并压缩常见开发命令输出的命令行代理，减少编程智能体的 Token 消耗 | https://github.com/rtk-ai/rtk |
| Headroom | 在工具输出、日志、文件与 RAG 片段进入模型前进行压缩以节省 Token | https://github.com/headroomlabs-ai/headroom |
| context-mode | 面向编程智能体的上下文窗口优化工具，沙箱化工具输出并持久化会话记忆 | https://github.com/mksglu/context-mode |

### AI 编程学习资源

| 名称 | 类型 | 描述 | 链接 |
|------|------|------|------|
| Claude Code 官方文档 | 官方文档 | Anthropic 官方 Claude Code 文档，涵盖安装配置、工作流、子智能体、Hooks 与 SDK | https://code.claude.com/docs/en/overview |
| Claude Code 最佳实践 | 官方文章 | Anthropic 工程团队总结的 Claude Code 使用经验，涵盖 CLAUDE.md、规划与多会话协作 | https://www.anthropic.com/engineering/claude-code-best-practices |
| OpenAI Codex 文档 | 官方文档 | OpenAI 官方 Codex 文档，覆盖 CLI、IDE 扩展、云端任务与配置说明 | https://developers.openai.com/codex |
| GitHub Copilot 文档 | 官方文档 | GitHub 官方 Copilot 文档，介绍补全、对话、智能体模式、编程智能体与自定义指令 | https://docs.github.com/en/copilot |
| Cursor 文档 | 官方文档 | Cursor 官方文档，介绍智能体、规则、上下文管理与后台智能体等功能 | https://cursor.com/docs |
| Claude Code Best Practice | 教程 | 社区整理的 Claude Code 最佳实践合集，涵盖子智能体、命令、技能、Hooks 与工作流 | https://github.com/shanraisshan/claude-code-best-practice |
| Claude How To | 教程 | 图文并茂、示例驱动的 Claude Code 指南，从基础概念到高级智能体并附可复用模板 | https://github.com/luongnv89/claude-howto |
| Claude Code Ultimate Guide | 教程 | 覆盖智能体工作流、Hooks、技能、MCP 与生产级模板的 Claude Code 系统指南 | https://github.com/FlorianBruniaux/claude-code-ultimate-guide |
| Claude Code Tips | 技巧集 | 从入门到进阶的 Claude Code 实用技巧合集，含自定义状态栏与容器内运行等示例 | https://github.com/ykdojo/claude-code-tips |
| Context Engineering Intro | 教程 | 以 Claude Code 为例介绍上下文工程方法，提供 PRP 模板让 AI 编程助手稳定产出 | https://github.com/coleam00/context-engineering-intro |
| Easy-Vibe | 中文教程 | Datawhale 出品的 Vibe Coding 入门课程，面向零基础 AI 产品构建者 | https://github.com/datawhalechina/easy-vibe |
| Vibe-Vibe | 中文教程 | Datawhale 出品的系统化 Vibe Coding 教程，从零开始到全栈应用落地 | https://github.com/datawhalechina/vibe-vibe |
| AI Coding Guide | 中文教程 | 面向新手的 AI 编程命令行中文教程，系统讲解 Claude Code 与 Codex 的使用 | https://github.com/stormzhang/ai-coding-guide |
| AI Dev Tools Zoomcamp | 课程 | DataTalksClub 的免费实践课程，讲解如何用 AI 开发工具构建、测试、部署与审计软件 | https://github.com/DataTalksClub/ai-dev-tools-zoomcamp |
| Mastering GitHub Copilot | 课程 | 微软出品的 GitHub Copilot 结对编程课程，循序渐进讲解 Copilot 的各项能力 | https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming |
| Ultimate Guide to Vibe Coding | 指南 | Vibe Coding 实践指南，介绍用 Claude Code 或 Codex 先写设计文档与实施计划、再逐步实现项目的流程 | https://github.com/EnzeD/vibe-coding |

<!-- parts:end -->

---

<div align="center">

**[⬅️ 上一篇：🧱 核心技术](02-core-technologies.md) · [🏠 返回首页](../README.md) · [下一篇：🔧 工程与落地 ➡️](04-engineering.md)**

</div>
