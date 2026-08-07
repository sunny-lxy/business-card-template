# 企业名片模板 · 业务展示页

一个基于 Vue 3 的企业/个人名片展示模板，适合中小微企业、个体户、工作室快速搭建线上品牌展示页。

## ✨ 核心功能

- **多页面结构**：首页 + 关于 + 服务 + 联系，符合企业官网基本逻辑
- **数据集中管理**：所有内容都在 `src/data/businessData.js`，修改即更新
- **深色/浅色主题**：支持一键切换，跟随系统偏好
- **响应式设计**：手机、平板、电脑全适配
- **固定顶部导航**：品牌名 + 页面菜单 + 主题切换

## 🛠️ 技术栈

| 工具 | 用途 |
|------|------|
| Vue 3 | 前端框架 |
| Vite | 构建工具 |
| Pinia | 状态管理（轻量） |
| Vue Router | 多页路由 |
| GitHub Pages | 免费部署托管 |

## 📁 项目结构
src/
├── data/
│ └── businessData.js ← 所有内容在这里修改
├── views/
│ ├── HomeView.vue ← 首页
│ ├── AboutView.vue ← 关于
│ ├── ServicesView.vue ← 服务
│ └── ContactView.vue ← 联系
├── router/
│ └── index.js ← 路由配置
├── App.vue ← 导航 + 布局
└── main.js ← 入口

text

## 🚀 快速开始

### 1. 克隆或下载本模板

```bash
git clone https://github.com/sunny-lxy/business-card-template.git
cd business-card-template
2. 安装依赖
bash
npm install
3. 本地运行
bash
npm run dev
浏览器访问 http://localhost:5173/ 即可预览。

4. 修改内容
打开 src/data/businessData.js，替换其中的品牌名、介绍、服务项目、联系方式等信息。

5. 构建并部署
bash
npm run build
npm run deploy
部署完成后，通过 https://sunny-lxy.github.io/business-card-template/ 访问。

📝 数据文件说明
src/data/businessData.js 中包含以下字段：

字段	说明
brandName	公司/品牌名称
brandSubtitle	一句话简介
brandDescription	品牌描述（首页展示）
stats	核心数据（年份、客户数等）
aboutText	公司简介（关于页面）
services	服务项目列表
contact	联系方式
footer	底部版权信息
👤 适用客户
中小企业

个体户 / 工作室

自由职业者

社团 / 组织

📄 许可证
MIT License

💬 联系
如有定制需求，可通过以下方式联系：

邮箱：contact@xxtech.com

电话：138-0000-8888

本模板由 [XX科技] 提供技术支持。
