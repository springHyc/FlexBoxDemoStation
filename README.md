# FlexBoxDemoStation

之前总是文档来看，记住了过不了多久就又忘了，这里使用网站的形式来记录 FlexBox 布局，这是一个 FlexBox 的演示。

## 启动

这是一个 react 项目，可以使用`yarn start`来启动

## 打包命令

npm run build

## 部署到 github.io 命令

### 强制添加 dist 文件夹，因为.gitignore 文件中定义了忽略该文件

git add -f build

### 提交到本地暂存区

git commit -m 'Initial the page of project'

### 部署 dist 目录下的代码

git subtree push --prefix build origin gh-pages
