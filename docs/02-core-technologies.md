<div align="center">

<h1>🧱 核心技术</h1>

<p><strong>机器学习、深度学习、计算机视觉、自然语言处理、语音与强化学习等核心技术方向</strong></p>

<!-- stats:start -->
本板块收录 **6** 个分类 · **30+** 个子类 · **350+** 条资源 · **290+** 个 GitHub 开源项目
<!-- stats:end -->

**[🏠 返回首页](../README.md) · [📖 总目录](../README.md#-目录) · [🌐 在线浏览本板块](https://ysgstudyhards.github.io/Awesome-AI/#part-2)**

</div>

## 📑 本板块目录

<!-- toc:start -->
| 分类 | 子类导航 |
|:--|:--|
| [📈 机器学习](#-机器学习) | [学习资源](#学习资源) · [经典算法速览](#经典算法速览) · [机器学习库](#机器学习库) · [时间序列与表格数据](#时间序列与表格数据) · [AutoML 与超参优化](#automl-与超参优化) · [模型可解释性](#模型可解释性) · [MLOps 与实验管理](#mlops-与实验管理) |
| [🧠 深度学习](#-深度学习) | [学习资源](#学习资源-1) · [深度学习框架](#深度学习框架) · [训练与模型工具库](#训练与模型工具库) · [图神经网络](#图神经网络) · [可视化与调试](#可视化与调试) |
| [👀 计算机视觉](#-计算机视觉) | [学习资源](#学习资源-2) · [基础库与工具](#基础库与工具) · [目标检测与分割](#目标检测与分割) · [视觉基础模型](#视觉基础模型) · [OCR 与文字识别](#ocr-与文字识别) · [人脸、姿态与跟踪](#人脸姿态与跟踪) · [3D 视觉与神经渲染](#3d-视觉与神经渲染) |
| [📝 自然语言处理](#-自然语言处理) | [学习资源](#学习资源-3) · [经典 NLP 工具库](#经典-nlp-工具库) · [中文 NLP 工具](#中文-nlp-工具) · [分词与 Tokenizer](#分词与-tokenizer) · [预训练语言模型](#预训练语言模型) · [信息抽取与知识图谱](#信息抽取与知识图谱) · [机器翻译](#机器翻译) |
| [🎧 语音与音频](#-语音与音频) | [语音识别](#语音识别) · [语音合成与声音克隆](#语音合成与声音克隆) · [音频与音乐生成](#音频与音乐生成) |
| [🎮 强化学习](#-强化学习) | [算法与训练框架](#算法与训练框架) · [环境与仿真](#环境与仿真) · [学习资源](#学习资源-4) |
<!-- toc:end -->

---

<!-- part: 🧱 核心技术 -->

## 📈 机器学习

> 从经典算法到表格建模、时间序列、AutoML 与 MLOps，覆盖机器学习的学习路径与工程工具链

### 学习资源

| 名称 | 机构/讲者 | 描述 | 链接 |
|------|------|------|------|
| Machine Learning Specialization | 吴恩达（DeepLearning.AI、Stanford Online） | 吴恩达 2022 年新版机器学习入门专项课程，用 Python 讲解监督学习、无监督学习、推荐系统与强化学习 | https://www.coursera.org/specializations/machine-learning-introduction |
| 吴恩达机器学习（中文字幕） | 吴恩达（B 站） | 吴恩达经典 Coursera 机器学习课程的中文字幕版，适合零基础中文学习者入门 | https://www.bilibili.com/video/BV164411b7dx |
| CS229 机器学习 | Stanford（吴恩达等） | 斯坦福经典机器学习课程，讲义推导严谨，覆盖监督学习、无监督学习、学习理论与强化学习 | https://cs229.stanford.edu/ |
| Google 机器学习速成课程（MLCC） | Google | Google 官方免费机器学习入门课程，配有交互式可视化与编程练习 | https://developers.google.com/machine-learning/crash-course |
| 机器学习白板推导系列 | shuhuai008（B 站） | 在白板上逐步手推 SVM、EM、HMM、条件随机场、高斯过程等算法的数学推导 | https://www.bilibili.com/video/BV1aE411o7qd |
| 吴恩达机器学习课程笔记 | 黄海广 | 吴恩达机器学习课程的中文笔记，附 Python 版作业代码与中英字幕视频 | https://github.com/fengdu78/Coursera-ML-AndrewNg-Notes |
| 林轩田机器学习笔记 | 红色石头（RedstoneWill） | 台湾大学林轩田《机器学习基石》与《机器学习技法》两门课程的中文学习笔记 | https://github.com/RedstoneWill/HsuanTienLin_MachineLearning |
| Learning from Data | Caltech（Yaser Abu-Mostafa） | 加州理工机器学习理论入门课，围绕可学习性、VC 维与偏差方差权衡展开 | https://work.caltech.edu/telecourse.html |
| CS4780 机器学习 | Cornell（Kilian Weinberger） | 康奈尔机器学习课程，讲解直观、推导清晰，提供完整课堂录像与讲义 | http://www.cs.cornell.edu/courses/cs4780/2018fa/page18/index.html |
| CS329S 机器学习系统设计 | Stanford（Chip Huyen） | 讲解机器学习系统从数据工程、特征、训练到部署与监控的全流程设计 | https://stanford-cs329s.github.io/ |
| Machine Learning Zoomcamp | DataTalksClub | 免费的实战型机器学习工程课程，从回归、分类到模型部署与 Kubernetes 服务化 | https://github.com/DataTalksClub/machine-learning-zoomcamp |
| MLOps Zoomcamp | DataTalksClub | 免费的 MLOps 实战课程，涵盖实验追踪、工作流编排、模型部署与监控 | https://github.com/DataTalksClub/mlops-zoomcamp |
| Made With ML | Goku Mohandas | 系统讲解生产级机器学习应用的设计、开发、部署与迭代，强调工程实践 | https://github.com/GokuMohandas/Made-With-ML |
| scikit-learn MOOC | Inria | scikit-learn 核心开发团队推出的免费机器学习课程，配套 Jupyter 练习 | https://github.com/INRIA/scikit-learn-mooc |
| Rules of Machine Learning | Google（Martin Zinkevich） | Google 总结的机器学习工程最佳实践，以 43 条规则覆盖从起步到优化的全过程 | https://developers.google.com/machine-learning/guides/rules-of-ml |

### 经典算法速览

| 算法 | 适用场景 | 描述 | 链接 |
|------|------|------|------|
| 线性回归 / 逻辑回归 | 回归、分类 | 最基础的线性模型，结合 L1、L2 正则化可作为可解释性良好的强基线 | https://scikit-learn.org/stable/modules/linear_model.html |
| 决策树 | 分类、回归 | 按特征阈值递归划分样本，规则直观易解释，是随机森林与 GBDT 的基础 | https://scikit-learn.org/stable/modules/tree.html |
| 随机森林与集成学习 | 分类、回归 | 通过 Bagging、随机森林、AdaBoost、Stacking 等方式组合多个模型以提升泛化能力 | https://scikit-learn.org/stable/modules/ensemble.html |
| 梯度提升（XGBoost/LightGBM） | 表格数据、竞赛 | 逐轮拟合残差的梯度提升树算法，是结构化数据建模与数据竞赛的主力方案 | https://xgboost.readthedocs.io/ |
| 支持向量机（SVM） | 分类、回归 | 以最大化分类间隔为目标并借助核函数处理非线性问题，适合中小规模高维数据 | https://scikit-learn.org/stable/modules/svm.html |
| K 近邻（KNN） | 分类、回归 | 根据距离度量选取最近邻样本投票或平均，无需显式训练，原理简单直观 | https://scikit-learn.org/stable/modules/neighbors.html |
| 朴素贝叶斯 | 文本分类 | 基于贝叶斯定理与特征条件独立假设的概率分类器，训练快，常用于文本与垃圾邮件分类 | https://scikit-learn.org/stable/modules/naive_bayes.html |
| K-Means 等聚类算法 | 无监督聚类 | 涵盖 K-Means、DBSCAN、层次聚类与谱聚类等方法，用于用户分群与数据探索 | https://scikit-learn.org/stable/modules/clustering.html |
| 主成分分析（PCA） | 降维 | 通过正交变换保留方差最大的方向，用于降维、去噪与数据可视化 | https://scikit-learn.org/stable/modules/decomposition.html |
| 高斯混合模型（GMM） | 密度估计、软聚类 | 以多个高斯分布的加权和刻画数据分布，用 EM 算法估计参数并给出软聚类结果 | https://scikit-learn.org/stable/modules/mixture.html |
| t-SNE 与流形学习 | 非线性降维、可视化 | 包括 t-SNE、Isomap、LLE 等方法，将高维数据映射到低维空间以揭示流形结构 | https://scikit-learn.org/stable/modules/manifold.html |
| 孤立森林与异常检测 | 异常检测 | 涵盖孤立森林、局部离群因子（LOF）与 One-Class SVM 等离群点与新奇点检测方法 | https://scikit-learn.org/stable/modules/outlier_detection.html |
| 多层感知机（MLP） | 分类、回归 | 由全连接层与非线性激活函数构成的前馈神经网络，是通往深度学习的起点 | https://scikit-learn.org/stable/modules/neural_networks_supervised.html |

### 机器学习库

| 名称 | 描述 | 链接 |
|------|------|------|
| scikit-learn | Python 机器学习标准库，以统一 API 提供分类、回归、聚类、降维、模型选择与预处理工具 | https://scikit-learn.org/ |
| XGBoost | 可扩展的分布式梯度提升库，支持 GPU 训练与多语言接口，广泛用于工业界与数据竞赛 | https://github.com/dmlc/xgboost |
| LightGBM | 源自微软的高效梯度提升框架，基于直方图算法与按叶生长策略，训练快且内存占用低 | https://lightgbm.readthedocs.io/ |
| CatBoost | Yandex 开源的梯度提升库，原生支持类别特征并以有序提升减少过拟合 | https://github.com/catboost/catboost |
| statsmodels | Python 统计建模与计量经济学库，提供回归、假设检验、时间序列分析与统计推断 | https://github.com/statsmodels/statsmodels |
| imbalanced-learn | 与 scikit-learn 兼容的不平衡数据处理库，提供 SMOTE 等过采样与欠采样方法 | https://github.com/scikit-learn-contrib/imbalanced-learn |
| cuML | NVIDIA RAPIDS 生态的 GPU 机器学习库，以接近 scikit-learn 的 API 加速经典算法 | https://github.com/NVIDIA/cuml |
| Spark MLlib | Apache Spark 的分布式机器学习库，适合在大规模集群上训练与部署经典模型 | https://spark.apache.org/mllib/ |
| H2O-3 | 开源分布式内存机器学习平台，支持 GBM、GLM、深度学习与 AutoML | https://github.com/h2oai/h2o-3 |
| PyOD | Python 异常检测库，集成数十种经典与深度异常检测算法并提供统一接口 | https://github.com/yzhao062/pyod |
| UMAP | 基于流形学习与拓扑数据分析的非线性降维算法，速度快且能较好保留全局结构 | https://github.com/lmcinnes/umap |
| mlxtend | Sebastian Raschka 维护的机器学习扩展库，提供堆叠集成、特征选择与频繁模式挖掘 | https://github.com/rasbt/mlxtend |
| River | Python 在线机器学习库，支持在数据流上增量训练模型并检测概念漂移 | https://github.com/online-ml/river |
| Recommenders | 源自微软、现由 LF AI & Data 基金会托管的推荐系统算法与最佳实践示例库 | https://github.com/recommenders-team/recommenders |

### 时间序列与表格数据

| 名称 | 描述 | 链接 |
|------|------|------|
| Prophet | Meta 开源的时间序列预测库，基于可加模型刻画趋势、季节性与节假日效应 | https://github.com/meta/prophet |
| sktime | 统一接口的时间序列机器学习框架，覆盖预测、分类、回归、聚类与异常检测 | https://github.com/sktime/sktime |
| Darts | 易用的时间序列预测与异常检测库，以统一 API 封装从 ARIMA 到深度学习的多种模型 | https://github.com/unit8co/darts |
| StatsForecast | Nixtla 开源的统计预测库，以 Numba 加速 ARIMA、ETS 等模型的大规模预测 | https://github.com/Nixtla/statsforecast |
| NeuralForecast | Nixtla 开源的神经网络预测库，实现 N-BEATS、NHITS、TFT 等深度预测模型 | https://github.com/Nixtla/neuralforecast |
| TimesFM | Google Research 开源的时间序列基础模型，最新版本为 TimesFM 3.0，支持零样本预测 | https://github.com/google-research/timesfm |
| Chronos | Amazon 开源的预训练时间序列预测模型系列，Chronos-2 支持多变量与协变量零样本预测 | https://github.com/amazon-science/chronos-forecasting |
| Moirai（uni2ts） | Salesforce 开源的通用时间序列预测基础模型 Moirai 及其统一训练框架 | https://github.com/SalesforceAIResearch/uni2ts |
| Time-Series-Library | 清华大学 THUML 开源的深度时间序列模型库，覆盖预测、插补、分类与异常检测 | https://github.com/thuml/Time-Series-Library |
| GluonTS | Amazon 开源的概率时间序列建模工具包，提供 DeepAR 等深度概率预测模型 | https://github.com/awslabs/gluonts |
| TimeGPT（Nixtla） | Nixtla 的时间序列基础模型服务及 Python SDK，支持零样本预测与异常检测 | https://github.com/Nixtla/nixtla |
| tsfresh | 从时间序列中自动提取并筛选大量统计特征的 Python 库 | https://github.com/blue-yonder/tsfresh |
| TabPFN | Prior Labs 开源的表格数据基础模型，借助上下文学习无需训练即可完成分类与回归 | https://github.com/PriorLabs/TabPFN |
| Featuretools | 基于深度特征合成（DFS）的自动化特征工程库，适合多表关系型数据 | https://github.com/alteryx/featuretools |

### AutoML 与超参优化

| 名称 | 描述 | 链接 |
|------|------|------|
| AutoGluon | Amazon 开源的 AutoML 工具包，几行代码即可完成表格、时间序列与多模态数据建模 | https://github.com/autogluon/autogluon |
| Optuna | 采用 define-by-run 风格的超参数优化框架，支持剪枝、分布式优化与可视化面板 | https://github.com/optuna/optuna |
| FLAML | 微软开源的轻量级 AutoML 与超参调优库，以较低计算成本自动选择模型与超参 | https://github.com/microsoft/FLAML |
| Ray Tune | Ray 生态的分布式超参数调优库，集成 ASHA、PBT 等调度算法与多种搜索后端 | https://docs.ray.io/en/latest/tune/index.html |
| Hyperopt | 基于 TPE 等算法的分布式异步超参数优化库 | https://github.com/hyperopt/hyperopt |
| PyCaret | 低代码机器学习库，用少量代码完成数据预处理、模型比较、调参与部署 | https://github.com/pycaret/pycaret |
| TPOT | 利用遗传编程自动搜索并优化机器学习流水线的 AutoML 工具 | https://github.com/EpistasisLab/tpot |
| auto-sklearn | 基于 scikit-learn 的 AutoML 工具，结合贝叶斯优化、元学习与集成构建 | https://github.com/automl/auto-sklearn |
| AutoKeras | 基于 Keras 的深度学习 AutoML 库，自动搜索神经网络结构与超参数 | https://github.com/keras-team/autokeras |
| SMAC3 | 德国 AutoML 研究团队开源的贝叶斯优化超参配置工具，也是 auto-sklearn 的优化后端 | https://github.com/automl/SMAC3 |
| Ax | Meta 开源的自适应实验平台，基于 BoTorch 实现贝叶斯优化与多目标调参 | https://github.com/meta/Ax |
| NNI | 微软开源的 AutoML 工具包，支持超参优化、神经架构搜索与模型压缩（已归档） | https://github.com/microsoft/nni |

### 模型可解释性

| 名称 | 描述 | 链接 |
|------|------|------|
| SHAP | 基于博弈论 Shapley 值解释任意机器学习模型输出的库，提供丰富的可视化图表 | https://github.com/shap/shap |
| LIME | 在样本邻域拟合局部线性代理模型，以解释任意分类器的单次预测 | https://github.com/marcotcr/lime |
| InterpretML | 微软开源的可解释机器学习工具包，提供可解释提升机（EBM）与黑盒解释方法 | https://github.com/interpretml/interpret |
| Captum | PyTorch 官方模型可解释性库，实现积分梯度、DeepLIFT 等特征归因算法 | https://github.com/meta-pytorch/captum |
| Alibi | Seldon 开源的模型解释算法库，支持锚点解释、反事实解释与累积局部效应 | https://github.com/SeldonIO/alibi |
| ELI5 | 以统一接口检查和解释 scikit-learn、XGBoost 等模型的权重与预测结果 | https://github.com/TeamHG-Memex/eli5 |
| AIX360 | IBM 开源的 AI 可解释性工具集，涵盖面向数据与模型的多种解释算法 | https://github.com/Trusted-AI/AIX360 |
| What-If Tool | Google PAIR 推出的交互式模型探查工具，可在 Notebook 中分析模型行为与公平性 | https://github.com/PAIR-code/what-if-tool |
| dtreeviz | 决策树可视化与模型解释库，支持 scikit-learn、XGBoost、LightGBM 等框架 | https://github.com/parrt/dtreeviz |

### MLOps 与实验管理

| 名称 | 描述 | 链接 |
|------|------|------|
| MLflow | 开源机器学习生命周期平台，覆盖实验追踪、模型注册与部署，并扩展到 LLM 与 Agent 的追踪评估 | https://github.com/mlflow/mlflow |
| Weights & Biases | 实验追踪与可视化平台，支持超参扫描、模型与数据版本管理及团队协作 | https://github.com/wandb/wandb |
| DVC | 类 Git 的数据与模型版本管理工具，可定义可复现的机器学习流水线与实验 | https://github.com/treeverse/dvc |
| ClearML | 开源 MLOps 平台，集实验管理、数据管理、流水线编排与模型服务于一体 | https://github.com/clearml/clearml |
| Kubeflow | 基于 Kubernetes 的云原生机器学习平台，提供 Pipelines、分布式训练与 Notebook 等组件 | https://github.com/kubeflow/kubeflow |
| Metaflow | Netflix 开源的机器学习与 AI 系统构建框架，用 Python 定义工作流并扩展到云端 | https://github.com/Netflix/metaflow |
| ZenML | 可移植的 MLOps 流水线框架，将机器学习与 LLM 工作流对接到多种基础设施 | https://github.com/zenml-io/zenml |
| Kedro | 将软件工程最佳实践引入数据科学项目的模块化、可复现流水线框架 | https://github.com/kedro-org/kedro |
| Flyte | 基于 Kubernetes 的类型安全工作流编排平台，用于数据处理、机器学习流水线与推理 | https://github.com/flyteorg/flyte |
| Feast | 开源特征存储，统一管理离线训练与在线推理所用的特征数据 | https://github.com/feast-dev/feast |
| Evidently | 机器学习与 LLM 系统的评估与监控框架，可检测数据漂移与模型质量变化 | https://github.com/evidentlyai/evidently |
| Aim | 开源自托管实验追踪工具，可高效对比与检索大量训练运行的指标 | https://github.com/aimhubio/aim |

---

## 🧠 深度学习

> 深度学习是现代 AI 的核心驱动力，本节收录主流课程、框架、训练工具库、图神经网络与可视化调试工具

### 学习资源

| 名称 | 机构/讲者 | 描述 | 链接 |
|------|------|------|------|
| Deep Learning Specialization | 吴恩达（DeepLearning.AI） | 五门课组成的深度学习专项课程，系统讲解神经网络、优化方法、CNN 与序列模型，中英文字幕齐全 | https://www.coursera.org/specializations/deep-learning |
| Practical Deep Learning for Coders | fast.ai（Jeremy Howard） | 自顶向下、代码优先的免费深度学习课程，适合有编程基础的初学者快速上手 | https://course.fast.ai/ |
| fast.ai | fast.ai | fast.ai 官网，汇集实用深度学习课程、fastai 库与技术博客文章 | https://www.fast.ai/ |
| 动手学深度学习 v2 课程 | 李沐 | 李沐主讲的动手学深度学习 PyTorch 版课程，提供课程视频、幻灯片与代码 | https://c.d2l.ai/zh-v2/ |
| MIT 6.S191 深度学习导论 | MIT（Alexander Amini） | MIT 每年更新的深度学习入门课，涵盖 CNN、序列模型、生成模型与大模型并配有实验 | http://introtodeeplearning.com/ |
| CS230 深度学习 | Stanford（吴恩达、Kian Katanforoosh） | 斯坦福深度学习课程，结合 Coursera 专项课讲解深度学习项目实践与调优策略 | https://cs230.stanford.edu/ |
| 11-785 深度学习导论 | CMU（Bhiksha Raj） | 卡内基梅隆大学深度学习课程，作业要求从零实现神经网络库，理论与工程并重 | http://deeplearning.cs.cmu.edu/ |
| NYU Deep Learning | NYU（Yann LeCun、Alfredo Canziani） | 纽约大学深度学习课程，涵盖能量模型与自监督学习等主题，提供讲义、视频与 Notebook | https://github.com/Atcold/NYU-DLSP21 |
| UvA 深度学习教程 | 阿姆斯特丹大学（Phillip Lippe） | 阿姆斯特丹大学深度学习课程的配套 Notebook 教程，同时提供 PyTorch 与 JAX 实现 | https://github.com/phlippe/uvadlc_notebooks |
| Deep Learning Systems | CMU（陈天奇、Zico Kolter） | 从零实现深度学习框架 Needle，讲解自动微分、硬件加速与系统设计 | https://dlsyscourse.org/ |
| MIT 6.5940 高效深度学习 | MIT（韩松） | 讲解模型剪枝、量化、神经架构搜索、知识蒸馏与大模型高效部署 | https://hanlab.mit.edu/courses/2023-fall-65940 |
| CS224W 图机器学习 | Stanford（Jure Leskovec） | 斯坦福图机器学习课程，讲解图表示学习、图神经网络与知识图谱推理 | https://web.stanford.edu/class/cs224w/ |
| Full Stack Deep Learning | Full Stack Deep Learning | 面向工程师的深度学习全栈课程，涵盖数据管理、实验管理、部署与监控 | https://fullstackdeeplearning.com/ |
| Neural Networks: Zero to Hero | Andrej Karpathy | 从零手写反向传播与语言模型直至复现 GPT 的视频课程及配套代码 | https://github.com/karpathy/nn-zero-to-hero |
| Deep Learning Tuning Playbook | Google Research | Google 研究员总结的深度学习模型系统化调参方法与实践经验 | https://github.com/google-research/tuning_playbook |
| PyTorch 官方教程 | PyTorch | 从张量、自动微分到模型训练、部署与分布式的 PyTorch 官方教程合集 | https://pytorch.org/tutorials/ |

### 深度学习框架

| 名称 | 描述 | 链接 |
|------|------|------|
| PyTorch | Meta 开源、现由 PyTorch 基金会托管的深度学习框架，动态图易于调试，是学术研究与大模型训练的主流选择 | https://pytorch.org/ |
| TensorFlow | Google 开源的端到端机器学习平台，生态覆盖 TFX、LiteRT、TF.js 等生产部署工具 | https://www.tensorflow.org/ |
| Keras 3 | 高层深度学习 API，同一份代码可在 JAX、TensorFlow 或 PyTorch 后端上运行 | https://github.com/keras-team/keras |
| JAX | Google 开源的可组合函数变换库，提供自动微分、JIT 编译与自动向量化，适合高性能科研与大规模训练 | https://github.com/jax-ml/jax |
| Flax | Google 基于 JAX 的神经网络库，新版 NNX API 支持更直观的面向对象建模 | https://github.com/google/flax |
| Equinox | 基于 JAX 的轻量神经网络与科学计算库，以 PyTree 形式定义模型 | https://github.com/patrick-kidger/equinox |
| PaddlePaddle（飞桨） | 百度开源的产业级深度学习平台，中文文档完善并配有丰富的产业模型库 | https://www.paddlepaddle.org.cn/ |
| MindSpore（昇思） | 华为开源的全场景 AI 计算框架，深度适配昇腾硬件并支持端边云协同 | https://www.mindspore.cn/ |
| OneFlow | 一流科技开源的深度学习框架，以 SBP 抽象简化分布式训练并兼容 PyTorch 接口 | https://github.com/Oneflow-Inc/oneflow |
| Jittor（计图） | 清华大学开源的即时编译深度学习框架，基于元算子与统一计算图设计 | https://github.com/Jittor/jittor |
| MegEngine（天元） | 旷视开源的训练推理一体化深度学习框架，支持动静态图（2024 年后更新较少） | https://github.com/MegEngine/MegEngine |
| tinygrad | 极简深度学习框架，以少量核心算子与惰性计算支持多种硬件后端 | https://github.com/tinygrad/tinygrad |
| Burn | Rust 编写的深度学习框架，兼顾灵活性、性能与跨平台部署 | https://github.com/tracel-ai/burn |
| Candle | Hugging Face 开源的 Rust 极简机器学习框架，侧重轻量推理并支持 GPU | https://github.com/huggingface/candle |
| TensorFlow.js | 在浏览器与 Node.js 中训练和部署机器学习模型的 JavaScript 库 | https://github.com/tensorflow/tfjs |
| Deeplearning4j | 运行在 JVM 上的深度学习工具套件，支持用 Java、Scala 等语言训练与部署模型 | https://github.com/deeplearning4j/deeplearning4j |
| DJL | Amazon 开源的引擎无关 Java 深度学习框架，可调用 PyTorch、ONNX Runtime 等引擎 | https://github.com/deepjavalibrary/djl |
| Flux.jl | Julia 语言的机器学习库，纯 Julia 实现并与可微编程生态深度集成 | https://github.com/FluxML/Flux.jl |
| MXNet | Apache 分布式深度学习框架，《动手学深度学习》早期版本即基于它编写（已归档） | https://github.com/apache/mxnet |
| Caffe | 伯克利开源的早期经典深度学习框架，推动了 CNN 在学术界与工业界的普及 | https://github.com/BVLC/caffe |

### 训练与模型工具库

| 名称 | 描述 | 链接 |
|------|------|------|
| Hugging Face Transformers | 预训练模型定义与使用框架，统一支持文本、视觉、语音与多模态模型的推理和训练 | https://github.com/huggingface/transformers |
| PyTorch Lightning | 将 PyTorch 训练代码结构化的高层框架，可轻松扩展到多 GPU、多节点与混合精度 | https://github.com/Lightning-AI/pytorch-lightning |
| fastai | 基于 PyTorch 的高层深度学习库，与 fast.ai 课程配套，少量代码即可训练常见任务 | https://github.com/fastai/fastai |
| einops | 用可读的爱因斯坦式记法完成张量重排、归约与重复，支持多种深度学习框架 | https://github.com/arogozhnikov/einops |
| safetensors | Hugging Face 推出的安全张量存储格式，规避 pickle 反序列化风险并支持零拷贝加载 | https://github.com/safetensors/safetensors |
| ONNX | 开放的机器学习模型交换格式标准，便于在不同框架与推理引擎之间转换模型 | https://github.com/onnx/onnx |
| KerasHub | Keras 3 官方预训练模型库，提供 Gemma、Llama 等模型的多后端实现 | https://github.com/keras-team/keras-hub |
| TorchMetrics | Lightning 团队开源的 PyTorch 评估指标库，支持在分布式训练中正确累积计算指标 | https://github.com/Lightning-AI/torchmetrics |
| PyTorch Ignite | PyTorch 生态的高层训练库，以事件驱动引擎灵活组织训练与评估流程 | https://github.com/pytorch/ignite |
| skorch | 兼容 scikit-learn API 的 PyTorch 神经网络封装库，可直接用于网格搜索与流水线 | https://github.com/skorch-dev/skorch |
| Optax | Google DeepMind 开源的 JAX 梯度处理与优化器库，可灵活组合各类优化算法 | https://github.com/google-deepmind/optax |
| Schedule-Free | Meta 开源的免学习率调度优化器实现，无需预先设定训练总步数 | https://github.com/facebookresearch/schedule_free |

### 图神经网络

| 名称 | 描述 | 链接 |
|------|------|------|
| PyTorch Geometric（PyG） | 基于 PyTorch 的图神经网络库，提供丰富的 GNN 层、图数据集与可扩展的小批量训练 | https://pytorch-geometric.readthedocs.io/ |
| DGL | 与框架无关的图深度学习库，支持 PyTorch 等后端与大规模图训练 | https://github.com/dmlc/dgl |
| PyTorch Geometric Temporal | PyG 的时空图神经网络扩展库，适用于交通流量等动态图预测任务 | https://github.com/benedekrozemberczki/pytorch_geometric_temporal |
| TF-GNN | Google 开源的 TensorFlow 图神经网络库，原生支持异构图建模 | https://github.com/tensorflow/gnn |
| GCN | 图卷积网络（GCN）论文作者 Thomas Kipf 的原始 TensorFlow 实现 | https://github.com/tkipf/gcn |
| GAT | 图注意力网络（GAT）论文作者 Petar Veličković 的原始实现 | https://github.com/PetarV-/GAT |
| GraphSAGE | 斯坦福提出的归纳式图表示学习方法 GraphSAGE 的官方实现，可泛化到未见节点 | https://github.com/williamleif/GraphSAGE |
| Graphormer | 微软开源的图 Transformer 模型，可用于分子建模等通用图学习任务 | https://github.com/microsoft/Graphormer |
| NetworkX | Python 图与复杂网络分析标准库，常用于构建图数据与运行经典图算法 | https://github.com/networkx/networkx |
| GraphScope | 阿里巴巴开源的一站式大规模图计算系统，集图分析、图查询与图学习于一体 | https://github.com/alibaba/GraphScope |

### 可视化与调试

| 名称 | 描述 | 链接 |
|------|------|------|
| TensorBoard | TensorFlow 官方训练可视化工具，可展示损失曲线、计算图与嵌入投影，也支持 PyTorch | https://github.com/tensorflow/tensorboard |
| Netron | 神经网络模型结构查看器，支持 ONNX、PyTorch、TensorFlow Lite、safetensors 等多种格式 | https://github.com/lutzroeder/netron |
| torchinfo | 以表格形式打印 PyTorch 模型各层输出形状与参数量 | https://github.com/TylerYep/torchinfo |
| torchview | 将 PyTorch 模型的前向计算过程可视化为结构图 | https://github.com/mert-kurttutan/torchview |
| PyTorchViz | 生成 PyTorch 自动求导计算图的可视化小工具 | https://github.com/szagoruyko/pytorchviz |
| Model Explorer | Google AI Edge 推出的模型计算图可视化与调试工具，可流畅浏览大型模型结构 | https://github.com/google-ai-edge/model-explorer |
| CNN Explainer | 佐治亚理工 Polo Club 推出的交互式可视化工具，在浏览器中直观演示 CNN 工作原理 | https://github.com/poloclub/cnn-explainer |
| Transformer Explainer | 佐治亚理工 Polo Club 推出的交互式工具，在浏览器中运行 GPT-2 演示 Transformer 内部计算 | https://github.com/poloclub/transformer-explainer |
| TensorFlow Playground | 在浏览器中交互式训练小型神经网络，直观理解激活函数、正则化与决策边界 | https://github.com/tensorflow/playground |
| LLM Visualization | 以 3D 动画逐步展示 GPT 类模型推理计算过程的交互式可视化 | https://github.com/bbycroft/llm-viz |
| PlotNeuralNet | 用 LaTeX 代码绘制论文级神经网络结构示意图 | https://github.com/HarisIqbal88/PlotNeuralNet |
| NN-SVG | 在线生成全连接网络、LeNet 与 AlexNet 风格的出版级网络结构示意图 | https://github.com/alexlenail/NN-SVG |
| pytorch-grad-cam | 面向 CNN 与 Vision Transformer 的 Grad-CAM 等类激活图可视化库 | https://github.com/jacobgil/pytorch-grad-cam |
| Visdom | 源自 Meta、现由 FOSSASIA 维护的实时可视化工具，用于监控训练过程与实验数据 | https://github.com/fossasia/visdom |
| nvitop | 交互式 NVIDIA GPU 进程监控工具，可查看显存、利用率与各进程资源占用 | https://github.com/XuehaiPan/nvitop |

---

## 👀 计算机视觉

> 从经典图像处理到检测分割、视觉基础模型、OCR、姿态跟踪与三维重建，覆盖计算机视觉的核心课程与开源工具

### 学习资源

| 名称 | 机构/讲者 | 描述 | 链接 |
|------|------|------|------|
| CS231n 视觉识别中的深度学习 | Stanford（李飞飞等） | 斯坦福计算机视觉经典课程，系统讲解 CNN、视觉 Transformer、检测分割与生成模型 | https://cs231n.stanford.edu/ |
| CS231A 计算机视觉：从 3D 重建到识别 | Stanford | 斯坦福计算机视觉课程，侧重相机模型、多视图几何、三维重建与场景理解 | http://web.stanford.edu/class/cs231a/ |
| EECS 498 计算机视觉中的深度学习 | 密歇根大学（Justin Johnson） | CS231n 前主讲人在密歇根大学开设的深度学习视觉课程，配有完整录像与作业 | https://web.eecs.umich.edu/~justincj/teaching/eecs498/FA2019/ |
| MIT 6.8300 计算机视觉进展 | MIT（Vincent Sitzmann 等） | MIT 计算机视觉课程，涵盖视觉表示学习、神经渲染与三维场景表示 | https://www.scenerepresentations.org/courses/2025/spring/advances-in-cv/ |
| 图宾根大学计算机视觉 | 图宾根大学（Andreas Geiger） | 讲解相机几何、立体匹配、光流、三维重建与识别等经典视觉方法 | https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/autonomous-vision/lectures/computer-vision/ |
| Hugging Face 计算机视觉课程 | Hugging Face 社区 | 社区共建的免费计算机视觉课程，覆盖 CNN、视觉 Transformer、多模态与三维视觉 | https://huggingface.co/learn/computer-vision-course |
| OpenCV-Python 官方教程 | OpenCV | OpenCV 官方 Python 教程，涵盖图像处理、特征检测、视频分析与相机标定 | https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html |
| LearnOpenCV | Satya Mallick | LearnOpenCV 博客的配套代码库，提供大量 C++ 与 Python 计算机视觉实战示例 | https://github.com/spmallick/learnopencv |

### 基础库与工具

| 名称 | 描述 | 链接 |
|------|------|------|
| OpenCV | 开源计算机视觉基础库，提供图像处理、特征提取、相机标定与 DNN 推理等大量经典算法 | https://github.com/opencv/opencv |
| torchvision | PyTorch 官方视觉库，提供常用数据集、图像变换与预训练分类、检测和分割模型 | https://github.com/pytorch/vision |
| timm | Hugging Face 维护的 PyTorch 图像模型库，收录大量预训练视觉骨干网络与训练脚本 | https://github.com/huggingface/pytorch-image-models |
| Kornia | 基于 PyTorch 的可微分计算机视觉库，提供几何变换、特征匹配与数据增强 | https://github.com/kornia/kornia |
| Albumentations | 快速灵活的图像增强库，支持检测框、关键点与掩码同步变换，后续由 AlbumentationsX 接续（已归档） | https://github.com/albumentations-team/albumentations |
| scikit-image | Python 科学图像处理库，提供滤波、分割、形态学与特征提取等经典算法 | https://github.com/scikit-image/scikit-image |
| Pillow | Python 图像处理基础库（PIL 的维护分支），负责图像读写、格式转换与基础编辑 | https://github.com/python-pillow/Pillow |
| supervision | Roboflow 开源的视觉工具库，提供检测结果可视化、目标计数、区域统计与跟踪等通用组件 | https://github.com/roboflow/supervision |
| dlib | 经典 C++ 机器学习与视觉工具包，提供 HOG 人脸检测、人脸关键点定位与人脸识别模型 | https://github.com/davisking/dlib |
| MediaPipe | Google 开源的跨平台端侧机器学习方案，提供人脸、手势、姿态检测等即用视觉任务 | https://github.com/google-ai-edge/mediapipe |
| MMCV | OpenMMLab 计算机视觉基础库，为 MMDetection 等工具箱提供算子与训练引擎 | https://github.com/open-mmlab/mmcv |
| MMPretrain | OpenMMLab 预训练与图像分类工具箱，支持多种骨干网络与自监督学习方法 | https://github.com/open-mmlab/mmpretrain |

### 目标检测与分割

| 名称 | 描述 | 链接 |
|------|------|------|
| Ultralytics YOLO | Ultralytics 维护的 YOLO 框架，最新 YOLO26 支持检测、分割、姿态、旋转框与分类任务 | https://github.com/ultralytics/ultralytics |
| YOLOv5 | Ultralytics 早期推出的 PyTorch 版 YOLO 实现，工程化完善，在工业界部署广泛 | https://github.com/ultralytics/yolov5 |
| YOLOX | 旷视开源的无锚框 YOLO 检测器，采用解耦检测头与 SimOTA 标签分配 | https://github.com/Megvii-BaseDetection/YOLOX |
| YOLOv10 | 清华大学提出的免 NMS 端到端实时目标检测器（NeurIPS 2024） | https://github.com/THU-MIG/yolov10 |
| RT-DETR | 百度提出的实时检测 Transformer，以高效混合编码器实现无需 NMS 的端到端实时检测 | https://github.com/lyuwenyu/RT-DETR |
| D-FINE | 将 DETR 边框回归重构为细粒度分布优化的实时目标检测器（ICLR 2025） | https://github.com/Peterande/D-FINE |
| RF-DETR | Roboflow 开源的实时检测与实例分割模型，基于 DINOv2 骨干并便于微调到自定义数据 | https://github.com/roboflow/rf-detr |
| DETR | Meta 提出的基于 Transformer 的端到端目标检测开山之作，摆脱了锚框与 NMS（已归档） | https://github.com/facebookresearch/detr |
| Detectron2 | Meta 开源的目标检测与分割平台，实现 Mask R-CNN 等经典模型 | https://github.com/facebookresearch/detectron2 |
| MMDetection | OpenMMLab 目标检测工具箱，以模块化方式实现大量检测与实例分割算法 | https://github.com/open-mmlab/mmdetection |
| MMSegmentation | OpenMMLab 语义分割工具箱，提供统一的训练评测流程与丰富的分割模型实现 | https://github.com/open-mmlab/mmsegmentation |
| segmentation_models.pytorch | 基于 PyTorch 的语义分割模型库，提供 U-Net、FPN、DeepLabV3+ 等结构并可搭配大量预训练骨干 | https://github.com/qubvel-org/segmentation_models.pytorch |
| PaddleDetection | 百度飞桨目标检测开发套件，提供 PP-YOLOE 等产业级检测模型与部署方案 | https://github.com/PaddlePaddle/PaddleDetection |
| YOLO-World | 腾讯 AI Lab 提出的实时开放词汇目标检测器，可按文本提示检测任意类别 | https://github.com/AILab-CVC/YOLO-World |
| Grounding DINO | IDEA 研究院提出的开放集目标检测模型，可根据自然语言描述定位物体 | https://github.com/IDEA-Research/GroundingDINO |
| Grounded-SAM | 组合 Grounding DINO 与 SAM，实现由文本提示驱动的开放世界检测与分割 | https://github.com/IDEA-Research/Grounded-Segment-Anything |
| YOLOE | 清华大学提出的实时开放提示检测与分割模型，支持文本提示、视觉提示与无提示模式 | https://github.com/THU-MIG/yoloe |

### 视觉基础模型

| 模型 | 机构 | 描述 | 链接 |
|------|------|------|------|
| SAM 3 | Meta | 支持文本与示例提示的可提示概念分割模型，可在图像和视频中分割并跟踪所有匹配实例，已更新至 SAM 3.1 | https://github.com/facebookresearch/sam3 |
| SAM 2 | Meta | 将可提示分割扩展到视频的分割一切模型，以流式记忆实现视频目标分割与跟踪 | https://github.com/facebookresearch/sam2 |
| Segment Anything（SAM） | Meta | 开创可提示图像分割范式的分割一切模型，配套发布 SA-1B 大规模分割数据集 | https://github.com/facebookresearch/segment-anything |
| CLIP | OpenAI | 通过图文对比学习对齐图像与文本表示，开启零样本图像分类与多模态预训练 | https://github.com/openai/CLIP |
| OpenCLIP | ML Foundations、LAION | CLIP 的开源复现与扩展，提供在 LAION 等公开数据集上训练的多种规模模型 | https://github.com/mlfoundations/open_clip |
| SigLIP（big_vision） | Google | Google 视觉研究代码库，包含 SigLIP 与 SigLIP 2 图文模型及 ViT、MLP-Mixer 等官方实现 | https://github.com/google-research/big_vision |
| DINOv3 | Meta | 第三代自监督视觉基础模型，在海量无标注图像上训练，可提供高质量稠密特征 | https://github.com/facebookresearch/dinov3 |
| DINOv2 | Meta | 无需标注数据训练的自监督视觉特征模型，可直接用于分类、分割与深度估计 | https://github.com/facebookresearch/dinov2 |
| Depth Anything 3 | 字节跳动 Seed | 从任意视角图像预测空间一致几何的视觉模型，统一单目深度估计与多视图重建 | https://github.com/ByteDance-Seed/Depth-Anything-3 |
| Depth Anything V2 | 港大、字节跳动 | 单目深度估计基础模型，在细节刻画与鲁棒性上较初版显著提升（NeurIPS 2024） | https://github.com/DepthAnything/Depth-Anything-V2 |
| Vision Transformer（ViT） | Google | 将 Transformer 直接用于图像块序列的视觉模型官方实现，开创视觉 Transformer 路线 | https://github.com/google-research/vision_transformer |
| ConvNeXt | Meta | 借鉴 Transformer 设计理念改造的纯卷积网络，证明了 CNN 依然具备竞争力（已归档） | https://github.com/facebookresearch/ConvNeXt |
| Swin Transformer | 微软亚洲研究院 | 基于移位窗口的层级式视觉 Transformer，获 ICCV 2021 最佳论文（已归档） | https://github.com/microsoft/Swin-Transformer |

### OCR 与文字识别

| 名称 | 描述 | 链接 |
|------|------|------|
| Tesseract | 最初由 HP 开发、后由 Google 维护的经典开源 OCR 引擎，基于 LSTM 并支持一百多种语言 | https://github.com/tesseract-ocr/tesseract |
| EasyOCR | 开箱即用的 PyTorch OCR 库，支持中文在内的 80 多种语言 | https://github.com/JaidedAI/EasyOCR |
| RapidOCR | 基于 ONNX Runtime、OpenVINO 等推理引擎的跨平台 OCR 工具，便于部署 PaddleOCR 模型 | https://github.com/RapidAI/RapidOCR |
| Umi-OCR | 免费离线的桌面 OCR 软件，支持截图、批量图片与 PDF 识别以及二维码处理 | https://github.com/hiroi-sora/Umi-OCR |
| docTR | Mindee 开源的端到端文档文字检测与识别库，提供多种预训练检测与识别模型 | https://github.com/mindee/doctr |
| MMOCR | OpenMMLab 文字检测、识别与关键信息抽取工具箱 | https://github.com/open-mmlab/mmocr |
| CnOCR | 基于 PyTorch 的中英文 OCR 工具包，提供多种预训练文字识别模型 | https://github.com/breezedeus/CnOCR |
| Pix2Text | 可识别版面、表格、数学公式与文字的开源工具，可将图片与 PDF 转为 Markdown | https://github.com/breezedeus/Pix2Text |
| LaTeX-OCR（pix2tex） | 使用 ViT 将数学公式图片转换为 LaTeX 代码的识别工具 | https://github.com/lukas-blecher/LaTeX-OCR |

### 人脸、姿态与跟踪

| 名称 | 描述 | 链接 |
|------|------|------|
| InsightFace | 开源 2D 与 3D 人脸分析项目，提供 ArcFace、RetinaFace 等人脸检测、识别与对齐模型 | https://github.com/deepinsight/insightface |
| DeepFace | 轻量级 Python 人脸识别与属性分析框架，集成多种识别模型并可分析年龄、性别与情绪 | https://github.com/serengil/deepface |
| face_recognition | 基于 dlib 的简洁人脸识别 Python 库与命令行工具 | https://github.com/ageitgey/face_recognition |
| OpenPose | CMU 开源的实时多人关键点检测库，可同时估计身体、手部、面部与脚部关键点 | https://github.com/CMU-Perceptual-Computing-Lab/openpose |
| MMPose | OpenMMLab 姿态估计工具箱，提供 RTMPose 等高效的人体、手部与全身关键点模型 | https://github.com/open-mmlab/mmpose |
| ViTPose | 基于纯视觉 Transformer 的人体姿态估计基线模型（NeurIPS 2022） | https://github.com/ViTAE-Transformer/ViTPose |
| DWPose | IDEA 研究院提出的两阶段蒸馏全身姿态估计模型，常用作 ControlNet 的姿态预处理器 | https://github.com/IDEA-Research/DWPose |
| Sapiens | Meta 面向人体视觉任务的高分辨率基础模型，支持姿态、身体部位分割、深度与法线估计 | https://github.com/facebookresearch/sapiens |
| AlphaPose | 上海交通大学开源的实时全身多人姿态估计与跟踪系统 | https://github.com/MVIG-SJTU/AlphaPose |
| ByteTrack | 关联每一个检测框（含低分框）的简洁高效多目标跟踪方法（ECCV 2022） | https://github.com/FoundationVision/ByteTrack |
| BoxMOT | 可插拔的多目标跟踪模块合集，集成 ByteTrack、BoT-SORT 等算法并适配主流检测器 | https://github.com/mikel-brostrom/boxmot |
| SAMURAI | 基于 SAM 2 的零样本视觉目标跟踪方法，引入运动感知的记忆选择机制 | https://github.com/yangchris11/samurai |
| CoTracker | Meta 开源的视频任意点跟踪模型，可联合跟踪大量像素点的运动轨迹 | https://github.com/facebookresearch/co-tracker |

### 3D 视觉与神经渲染

| 名称 | 描述 | 链接 |
|------|------|------|
| COLMAP | 通用的运动恢复结构（SfM）与多视图立体（MVS）重建工具，是 NeRF 与 3DGS 数据准备的常用工具 | https://github.com/colmap/colmap |
| Open3D | 现代三维数据处理库，支持点云与网格处理、配准、重建与可视化 | https://github.com/isl-org/Open3D |
| PyTorch3D | Meta 开源的三维深度学习组件库，提供可微渲染器与三维数据结构 | https://github.com/facebookresearch/pytorch3d |
| PCL | 经典的 C++ 点云处理库，提供滤波、分割、配准与表面重建等算法 | https://github.com/PointCloudLibrary/pcl |
| 3D Gaussian Splatting | 3D 高斯泼溅的原始参考实现，以显式高斯表示实现高质量实时辐射场渲染 | https://github.com/graphdeco-inria/gaussian-splatting |
| gsplat | Nerfstudio 团队开源的 CUDA 加速高斯泼溅光栅化库 | https://github.com/nerfstudio-project/gsplat |
| Nerfstudio | 模块化的 NeRF 开发框架，集成多种神经辐射场方法并提供交互式查看器 | https://github.com/nerfstudio-project/nerfstudio |
| NeRF | 神经辐射场论文的原始代码，开创以神经网络隐式表示三维场景的新视角合成方法 | https://github.com/bmild/nerf |
| Instant-NGP | NVIDIA 提出的多分辨率哈希编码方法，可在极短时间内训练 NeRF 等神经图形基元 | https://github.com/NVlabs/instant-ngp |
| VGGT | 牛津大学与 Meta 提出的前馈三维重建模型，一次推理即可预测相机参数、深度与点云（CVPR 2025 最佳论文） | https://github.com/facebookresearch/vggt |
| DUSt3R | NAVER LABS 提出的免标定稠密三维重建方法，直接从图像对回归点图 | https://github.com/naver/dust3r |
| MASt3R | 在 DUSt3R 基础上增加稠密局部特征的三维图像匹配与重建方法 | https://github.com/naver/mast3r |
| MapAnything | Meta 提出的通用前馈式度量三维重建模型，可灵活接收图像、相机参数等多种输入 | https://github.com/facebookresearch/map-anything |
| ORB-SLAM3 | 支持单目、双目、RGB-D 与视觉惯性传感器的经典开源视觉 SLAM 库 | https://github.com/UZ-SLAMLab/ORB_SLAM3 |

---

## 📝 自然语言处理

> 收录自然语言处理的课程、经典与中文工具库、分词器、预训练语言模型、信息抽取与机器翻译资源

### 学习资源

| 课程 | 机构/讲者 | 描述 | 链接 |
|------|------|------|------|
| CS224N：NLP with Deep Learning | 斯坦福 / Christopher Manning | 斯坦福 NLP 深度学习经典课程，涵盖词向量、RNN、Transformer 与预训练模型 | https://web.stanford.edu/class/cs224n/ |
| CS224U：Natural Language Understanding | 斯坦福 / Christopher Potts | 斯坦福自然语言理解课程的官方代码与作业，侧重语义表示、检索与评测方法 | https://github.com/cgpotts/cs224u |
| CMU 11-711 Advanced NLP | CMU / Graham Neubig | 卡内基梅隆大学高级 NLP 课程，系统讲解现代神经 NLP 与大模型方法 | https://phontron.com/class/anlp2024/ |
| NLP Course For You | Lena Voita | 图文并茂的交互式 NLP 课程，直观讲解词向量、Seq2Seq 与注意力机制等核心概念 | https://lena-voita.github.io/nlp_course.html |
| YSDA NLP Course | Yandex 数据分析学院 | Yandex 数据分析学院 NLP 课程，提供讲义、视频与 Jupyter 实验作业并持续更新 | https://github.com/yandexdataschool/nlp_course |
| Oxford Deep NLP 2017 | 牛津大学 / DeepMind | 牛津大学与 DeepMind 联合开设的深度学习 NLP 课程，含讲义幻灯片与视频 | https://github.com/oxford-cs-deepnlp-2017/lectures |
| Natural Language Processing Specialization | DeepLearning.AI | Coursera 上的 NLP 专项课程，从情感分析、词向量循序渐进到注意力模型 | https://www.coursera.org/specializations/natural-language-processing |
| Advanced NLP with spaCy | Explosion / Ines Montani | spaCy 官方免费交互式课程，学习构建实体识别与文本处理流水线 | https://course.spacy.io/ |
| nlp-tutorial | Tae Hwan Jung | 用少量 PyTorch 代码实现 Word2Vec、Seq2Seq、Transformer 与 BERT 等经典模型的教程 | https://github.com/graykode/nlp-tutorial |
| NLP-progress | Sebastian Ruder | 按任务整理常见 NLP 任务的数据集与历史最优结果，便于梳理研究脉络 | https://github.com/sebastianruder/NLP-progress |

### 经典 NLP 工具库

| 名称 | 描述 | 链接 |
|------|------|------|
| spaCy | 工业级 Python NLP 库，提供分词、词性、依存句法与实体识别流水线，支持 70 多种语言 | https://github.com/explosion/spaCy |
| NLTK | 经典 Python 自然语言处理工具包，附带丰富语料与教学资源，广泛用于教学 | https://github.com/nltk/nltk |
| Stanza | 斯坦福 NLP 组的 Python 工具包，为数十种语言提供分词、句法分析与实体识别 | https://github.com/stanfordnlp/stanza |
| Stanford CoreNLP | 斯坦福经典 Java NLP 工具套件，涵盖分词、命名实体识别、句法分析与共指消解 | https://github.com/stanfordnlp/CoreNLP |
| Gensim | 面向主题建模与词向量训练的 Python 库，内置 LDA、Word2Vec 与 Doc2Vec 等算法 | https://github.com/piskvorky/gensim |
| fastText | Meta 开源的高效词向量与文本分类库，提供 157 种语言的预训练词向量（已归档） | https://github.com/facebookresearch/fastText |
| Flair | 基于 PyTorch 的简洁 NLP 框架，以上下文字符串嵌入和序列标注见长 | https://github.com/flairNLP/flair |
| Spark NLP | 基于 Apache Spark 的分布式 NLP 库，提供大量预训练流水线与模型 | https://github.com/JohnSnowLabs/spark-nlp |
| TextBlob | 简单易用的 Python 文本处理库，支持情感分析、词性标注与名词短语抽取 | https://github.com/sloria/TextBlob |
| AllenNLP | 艾伦人工智能研究所基于 PyTorch 的 NLP 研究库，曾广泛用于学术复现（已归档） | https://github.com/allenai/allennlp |
| BERTopic | 结合 Transformer 嵌入与 c-TF-IDF 的主题建模库，生成的主题可解释性强 | https://github.com/MaartenGr/BERTopic |
| KeyBERT | 基于 BERT 嵌入相似度的轻量关键词与关键短语抽取工具 | https://github.com/MaartenGr/KeyBERT |
| SetFit | Hugging Face 的少样本文本分类框架，基于 Sentence Transformers 对比微调 | https://github.com/huggingface/setfit |

### 中文 NLP 工具

| 名称 | 描述 | 链接 |
|------|------|------|
| jieba | 流行的 Python 中文分词组件，支持精确、全模式、搜索引擎模式与自定义词典 | https://github.com/fxsjy/jieba |
| HanLP | 面向生产环境的多语种 NLP 工具包，覆盖中文分词、句法分析、语义角色标注与拼音简繁转换 | https://github.com/hankcs/HanLP |
| LTP | 哈工大社会计算与信息检索研究中心的语言技术平台，提供分词、词性、句法与语义分析 | https://github.com/HIT-SCIR/ltp |
| PaddleNLP | 百度飞桨的 NLP 与大模型开发库，提供模型库及训练、精调与推理全流程工具 | https://github.com/PaddlePaddle/PaddleNLP |
| THULAC | 清华大学推出的高效中文词法分析工具包，提供分词与词性标注 | https://github.com/thunlp/THULAC-Python |
| pkuseg | 北京大学推出的多领域中文分词工具，可按新闻、医药、网络等领域选择模型 | https://github.com/lancopku/pkuseg-python |
| LAC | 百度联合词法分析工具，可同时完成中文分词、词性标注与专名识别 | https://github.com/baidu/lac |
| SnowNLP | 受 TextBlob 启发的中文文本处理库，支持分词、情感分析与文本摘要 | https://github.com/isnowfy/snownlp |
| OpenCC | 开源中文简繁转换项目，支持词汇级转换及大陆、台湾、香港地区用词差异 | https://github.com/BYVoid/OpenCC |
| pypinyin | 将汉字转换为拼音的 Python 库，支持多音字智能匹配与多种拼音风格 | https://github.com/mozillazg/python-pinyin |
| pycorrector | 中文文本纠错工具包，集成 Kenlm、MacBERT、T5 及大模型等多种纠错方法 | https://github.com/shibing624/pycorrector |
| JioNLP | 中文 NLP 预处理与解析工具包，提供文本清洗、时间地址解析与数据增强等功能 | https://github.com/dongrixinyu/JioNLP |

### 分词与 Tokenizer

| 名称 | 描述 | 链接 |
|------|------|------|
| Hugging Face Tokenizers | 用 Rust 实现的高性能分词器库，支持 BPE、WordPiece 与 Unigram 的训练和推理 | https://github.com/huggingface/tokenizers |
| tiktoken | OpenAI 开源的快速 BPE 分词器，用于 OpenAI 模型的文本编码与 token 计数 | https://github.com/openai/tiktoken |
| SentencePiece | Google 开源的无监督子词分词器，可直接基于原始文本训练 BPE 与 Unigram 模型 | https://github.com/google/sentencepiece |
| subword-nmt | Sennrich 等提出 BPE 子词切分时发布的参考实现，广泛用于神经机器翻译 | https://github.com/rsennrich/subword-nmt |
| BlingFire | 微软开源的基于有限状态机的高速分词与句子切分库，兼容 BERT 等模型词表 | https://github.com/microsoft/BlingFire |
| Tiktokenizer | 在线可视化查看文本在不同模型分词器下的切分结果与 token 数的工具 | https://github.com/dqbd/tiktokenizer |
| BLT（Byte Latent Transformer） | Meta 提出的无分词器字节级架构，按下一字节熵动态将字节分组为补丁 | https://github.com/facebookresearch/blt |
| H-Net | 以动态分块替代固定分词器的层次化端到端字节级语言模型架构 | https://github.com/goombalab/hnet |

### 预训练语言模型

> 按影响力收录编码器时代的代表性预训练模型与经典词向量，大语言模型见大语言模型章节

| 模型 | 机构 | 描述 | 链接 |
|------|------|------|------|
| BERT | Google | 基于双向 Transformer 编码器与掩码语言建模的里程碑预训练模型（已归档） | https://github.com/google-research/bert |
| GPT-2 | OpenAI | 15 亿参数的自回归语言模型，展示了大规模无监督预训练的零样本能力（已归档） | https://github.com/openai/gpt-2 |
| RoBERTa | Meta | 以更多数据、更长训练与动态掩码优化 BERT 预训练，代码位于 fairseq（已归档） | https://github.com/facebookresearch/fairseq/tree/main/examples/roberta |
| T5 | Google | 将各类 NLP 任务统一为文本到文本格式的编码器-解码器预训练模型 | https://github.com/google-research/text-to-text-transfer-transformer |
| BART | Meta | 结合双向编码器与自回归解码器的去噪序列到序列预训练模型，代码位于 fairseq（已归档） | https://github.com/facebookresearch/fairseq/tree/main/examples/bart |
| XLNet | CMU / Google | 采用排列语言建模并融合 Transformer-XL 的广义自回归预训练模型 | https://github.com/zihangdai/xlnet |
| ALBERT | Google | 通过跨层参数共享与嵌入分解大幅减少参数量的轻量 BERT（已归档） | https://github.com/google-research/albert |
| ELECTRA | Google / 斯坦福 | 以替换词检测代替掩码预测的判别式预训练方法，训练效率更高（已归档） | https://github.com/google-research/electra |
| DeBERTa | 微软 | 引入解耦注意力与增强掩码解码器的 BERT 改进模型，含 DeBERTaV3 | https://github.com/microsoft/DeBERTa |
| ModernBERT | Answer.AI / LightOn | 引入旋转位置编码、长上下文等现代架构改进的新一代 BERT 式编码器 | https://github.com/AnswerDotAI/ModernBERT |
| ERNIE（经典版） | 百度 | 百度提出的知识增强预训练语义理解模型，早期 ERNIE 系列代码保留在 legacy 分支 | https://github.com/PaddlePaddle/ERNIE/tree/legacy/develop |
| Chinese-BERT-wwm | 哈工大讯飞联合实验室 | 采用全词掩码策略训练的中文 BERT、RoBERTa 系列预训练模型 | https://github.com/ymcui/Chinese-BERT-wwm |
| ELMo | AllenAI | 基于双向 LSTM 语言模型的上下文相关词表示，推动了上下文词向量的发展 | https://github.com/allenai/bilm-tf |
| GloVe | 斯坦福 | 基于全局词共现统计训练的经典词向量模型，提供多种预训练向量 | https://github.com/stanfordnlp/GloVe |
| word2vec | Google / Tomas Mikolov | 提出 CBOW 与 Skip-gram 模型的经典词向量工具原始实现 | https://github.com/tmikolov/word2vec |
| Chinese-Word-Vectors | 北京师范大学 / 中国人民大学 | 基于多种语料与上下文特征训练的上百种中文预训练词向量 | https://github.com/Embedding/Chinese-Word-Vectors |

### 信息抽取与知识图谱

| 名称 | 描述 | 链接 |
|------|------|------|
| LangExtract | Google 开源的 Python 库，借助大模型从非结构化文本中抽取带原文定位的结构化信息 | https://github.com/google/langextract |
| DeepKE | 浙江大学开源的知识图谱抽取与构建工具包，支持低资源、长篇章与多模态场景 | https://github.com/zjunlp/DeepKE |
| GLiNER | 轻量级通用命名实体识别模型，可按任意自定义实体类型抽取，适合 CPU 部署 | https://github.com/urchade/GLiNER |
| GLiNER2 | Fastino 推出的基于模式的统一信息抽取模型，单模型支持实体、分类与结构化抽取 | https://github.com/fastino-ai/GLiNER2 |
| UIE | 将实体、关系、事件与情感抽取统一为结构生成的通用信息抽取框架 | https://github.com/universal-ie/UIE |
| OpenSPG | 蚂蚁集团与 OpenKG 联合研发的知识图谱引擎，基于 SPG 语义框架构建 | https://github.com/OpenSPG/openspg |
| OpenNRE | 清华大学开源的神经关系抽取工具包，提供多种关系抽取模型与预训练权重 | https://github.com/thunlp/OpenNRE |
| OpenKE | 清华大学开源的知识表示学习工具包，实现 TransE、TransH 等知识图谱嵌入模型 | https://github.com/thunlp/OpenKE |
| PyKEEN | 用于训练与评估知识图谱嵌入模型的 Python 库，内置大量模型与评测流程 | https://github.com/pykeen/pykeen |
| Neo4j | 使用 Cypher 查询语言的主流图数据库，常用于存储与查询知识图谱 | https://github.com/neo4j/neo4j |
| NebulaGraph | 开源分布式图数据库，支持水平扩展，适合超大规模知识图谱存储与查询 | https://github.com/vesoft-inc/nebula |

### 机器翻译

| 名称 | 描述 | 链接 |
|------|------|------|
| fairseq | Meta 开源的序列建模工具包，提供 Transformer 翻译及多种预训练模型实现（已归档） | https://github.com/facebookresearch/fairseq |
| NLLB | Meta「不让任何语言掉队」项目，开源支持 200 种语言互译的翻译模型（已归档） | https://github.com/facebookresearch/fairseq/tree/nllb |
| SeamlessM4T | Meta 开源的多语言多模态翻译模型系列，支持语音与文本互译及流式翻译 | https://github.com/facebookresearch/seamless_communication |
| Hy-MT2 | 腾讯混元翻译模型系列，含 1.8B、7B 与 30B-A3B 规模，支持 33 种语言互译并遵循翻译指令 | https://github.com/Tencent-Hunyuan/Hy-MT2 |
| OpenNMT-py | 由哈佛 NLP 组与 SYSTRAN 发起的开源神经机器翻译框架，现已支持大语言模型 | https://github.com/OpenNMT/OpenNMT-py |
| Marian | 主要由微软翻译团队开发的高效纯 C++ 神经机器翻译框架 | https://github.com/marian-nmt/marian |
| Opus-MT | 赫尔辛基大学基于 Marian 训练的开源翻译模型集合，覆盖大量语言对 | https://github.com/Helsinki-NLP/Opus-MT |
| LibreTranslate | 可自托管、支持离线运行的开源机器翻译 API，基于 Argos Translate | https://github.com/LibreTranslate/LibreTranslate |
| Argos Translate | 基于 OpenNMT 的 Python 离线翻译库，可安装语言包并支持经中间语言转译 | https://github.com/argosopentech/argos-translate |
| Tensor2Tensor | Google Brain 开源的深度学习模型库，包含 Transformer 的原始实现（已归档） | https://github.com/tensorflow/tensor2tensor |

---

## 🎧 语音与音频

> 收录语音识别、语音合成、声音克隆、音频理解与音乐生成领域的重要模型和工具

### 语音识别

| 名称 | 描述 | 链接 |
|------|------|------|
| Whisper | OpenAI 开源的多语言语音识别与翻译模型，具备较强的跨场景鲁棒性 | https://github.com/openai/whisper |
| FunASR | 阿里达摩院开源的工业级语音识别工具包，覆盖实时转写与标点恢复 | https://github.com/modelscope/FunASR |
| WeNet | 面向工业落地的端到端语音识别工具包，支持流式与非流式模型 | https://github.com/wenet-e2e/wenet |
| sherpa-onnx | 基于 ONNX Runtime 的离线语音识别与合成工具，覆盖多种终端平台 | https://github.com/k2-fsa/sherpa-onnx |

### 语音合成与声音克隆

| 名称 | 描述 | 链接 |
|------|------|------|
| GPT-SoVITS | 少样本语音克隆与跨语言文本转语音项目，配套完整 Web 工具链 | https://github.com/RVC-Boss/GPT-SoVITS |
| CosyVoice | 阿里通义实验室开源的多语言语音生成模型，支持零样本声音克隆 | https://github.com/QwenAudio/CosyVoice |
| F5-TTS | 基于流匹配的高质量文本转语音模型，支持自然韵律与声音克隆 | https://github.com/SWivid/F5-TTS |
| Fish Speech | 面向多语言高质量语音生成的开源模型与推理训练工具链 | https://github.com/fishaudio/fish-speech |
| ChatTTS | 针对对话场景优化的文本转语音模型，支持细粒度韵律控制 | https://github.com/2noise/ChatTTS |
| Kokoro | 轻量级开放权重文本转语音模型，适合本地与低成本部署 | https://github.com/hexgrad/kokoro |

### 音频与音乐生成

| 名称 | 描述 | 链接 |
|------|------|------|
| AudioCraft | Meta 开源的音频生成研究工具箱，包含 MusicGen 与 AudioGen | https://github.com/facebookresearch/audiocraft |
| Stable Audio Tools | Stability AI 开源的音频生成训练与推理工具，支持长音频生成 | https://github.com/Stability-AI/stable-audio-tools |
| Amphion | 覆盖语音、歌声与音乐生成的统一音频工具箱，提供训练和评测流程 | https://github.com/open-mmlab/Amphion |
| MuseScore Studio | 开源乐谱创作与播放软件，可用于 AI 音乐工作流中的编曲和编辑 | https://github.com/musescore/MuseScore |

---

## 🎮 强化学习

> 收录强化学习算法库、训练环境、多智能体框架与高质量学习资源

### 算法与训练框架

| 名称 | 描述 | 链接 |
|------|------|------|
| Stable-Baselines3 | 基于 PyTorch 的可靠强化学习算法实现，接口统一且文档完善 | https://github.com/DLR-RM/stable-baselines3 |
| CleanRL | 以单文件实现主流强化学习算法，便于阅读、复现与实验对照 | https://github.com/vwxyzjn/cleanrl |
| Tianshou | 面向研究与工程的模块化强化学习库，支持离线和多智能体算法 | https://github.com/thu-ml/tianshou |
| Ray RLlib | 面向分布式训练的强化学习库，可扩展至多机和多智能体场景 | https://github.com/ray-project/ray |
| AgileRL | 面向大规模训练与进化超参数优化的强化学习框架 | https://github.com/AgileRL/AgileRL |

### 环境与仿真

| 名称 | 描述 | 链接 |
|------|------|------|
| Gymnasium | Farama 基金会维护的标准强化学习环境接口与基准集合 | https://github.com/Farama-Foundation/Gymnasium |
| PettingZoo | 为多智能体强化学习提供统一接口和丰富的标准测试环境 | https://github.com/Farama-Foundation/PettingZoo |
| Unity ML-Agents | 在 Unity 场景中训练智能体的官方工具包，支持复杂三维环境 | https://github.com/Unity-Technologies/ml-agents |
| MiniGrid | 轻量可组合的网格世界环境，适合探索、记忆与泛化研究 | https://github.com/Farama-Foundation/Minigrid |

### 学习资源

| 名称 | 类型 | 描述 | 链接 |
|------|------|------|------|
| Spinning Up in Deep RL | 教程 | OpenAI 编写的深度强化学习理论、算法实现与实验指南 | https://spinningup.openai.com/ |
| Deep RL Course | 课程 | Hugging Face 提供的免费深度强化学习课程与实践项目 | https://huggingface.co/learn/deep-rl-course/ |
| Reinforcement Learning: An Introduction | 教材 | Sutton 与 Barto 编写的强化学习经典教材开放版本 | http://incompleteideas.net/book/the-book-2nd.html |
| Berkeley CS285 | 课程 | 加州大学伯克利分校深度强化学习课程与公开讲义 | https://rail.eecs.berkeley.edu/deeprlcourse/ |

<!-- parts:end -->

---

<div align="center">

**[⬅️ 上一篇：🌱 入门与基础](01-getting-started.md) · [🏠 返回首页](../README.md) · [下一篇：🌟 大模型与智能体 ➡️](03-llm-and-agents.md)**

</div>
