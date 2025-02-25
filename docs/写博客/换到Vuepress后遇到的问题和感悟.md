---
title: 换到Vuepress后遇到的问题和感悟
createTime: 2025/02/24 18:45:00
permalink: /article/2ke6oqe0/
---

## 1.前言

如你所见，博客小站现在已经迁移到了==Vuepress==框架。

用了一段时间的`Hexo`，最终还是离开了他。原因是在我自己开发过一段时间的`Hexo`主题后，我发现了`Hexo`目前存在的许多问题：
- `Hexo`是一个台湾大学生开发的，在框架上主要使用模版语言主题开发效率低。
- 主题虽多，功能有限，扩展性一般。
- 性能平庸。
- 文件管理实在鸡肋。

在官网阅读完==Vuepress-Plume==主题的文档后，我果断选择将博客迁移到了Vueperess框架。

`Plume`的文件管理方式实在吸引我，他其他的专业性功能也强到可怕。==Plume==自动解析并识别文件结构，而于此对应的`Hexo`居然只可以将所有的博客文件全部摊在一个`_posts`文件夹中，这是何等的悲哀。

`Vue`，一个==T0级别==的前端框架。基于Vue的Vuepress，提供的功能也非常多，其中杀手级功能数不胜数，我一个羸弱blogger在Plume面前完全没有任何抵抗力。可以说，`Plume`这种既面向文档又面向博客的框架，简直就是我这种简约风狂热者的梦中主题。

说个有意思的，我自己开发的主题居然和`Plume`在设计风格上相似度极高。

> 这我还开发个锤锤，人家都把我梦想中的主题开发好喂我嘴里了...

## 2.问题

在部署`Vuepress`的过程中，由于其设计的不同出现了些许问题。

之前部署Hexo我使用的是私有仓库存放源代码，Gitpage仓库存放静态打包📦资源的方式。本地推送代码到源码仓库后Gitactions将静态资源同步到Gitpage仓库。

而`Vuepress`中默认的方式是在Gitpage仓库中建立一个分支存放源码并将打包资源也放在本仓库中。

我一开始没意识到这个问题，仍然采用双仓库部署。结果复用文档的部署工作流代码时才发现部署到了源代码的仓库中。

第二个是权限的问题。

在发现了问题一后，我在Gitpage中用main分支来保管源码。在使用官方`workflows/docs.yml`时发现推送会报一个权限的错误：

![截屏](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/截屏.png)

查阅相关资料才发现，是仓库中权限没给够，去仓库的`Settings/Actions`中将权限拉高即可。

在这期间，我发现来到新疆之后网络🛜环境变得非常迷，有时候push到github非常慢，甚至时常失败告终。

在推送的过程中可以说是煎熬。

![截屏](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/截屏.png)

同时，在多设备写博客的过程中也发现了`Picgo`的一些问题，也算是小Bug吧。Vscode中的Picgo插件需要配置`data.json`的文件目录，但是频繁更换设备就会导致这个目录更换，更换设备后必须卸载再重新配置目录，否则容易出错。

回归正题，选择了单仓库多分枝的部署方式后，还存在一个问题。

在配置了域名后，必须在官方提供的workflow文件中加上一行配置CNAME域名的代码，否则就会出现page404，原因也是没有重新解析域名导致的。

因为这个时候无法访问域名，但是却可以正常访问username.github.io。

并且，如果手动在Gitpage配置CNAME，再次推送文件仍然会被覆盖，所以需要加上这行代码：

```yml :whitespace :collapsed-lines
name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          # 选择要使用的 pnpm 版本
          version: 10.4.1
          # 使用 pnpm 安装依赖
          run_install: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          # 选择要使用的 node 版本
          node-version: 20
          # 缓存 pnpm 依赖
          cache: pnpm

      # 运行构建脚本
      - name: Build VuePress site
        run: pnpm docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v4
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
          fqdn: shenying.online # [!code focus] [!code highlight]
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

> 顺便提一嘴，这是`Plume`提供的代码聚焦聚焦功能，是不是非常强大！
> 除此之外还有各种颜色的代码行高亮功能，代码块错误警告提示、词高亮、空白符号、代码块折叠等等，并且这些都是可供选择而非强制的！！

完成之后，基本就可以轻松撰写博客了，只需要推送到主要分枝GithubActions就会自动同步到分枝`gp-pages`，我们将Gitpage的渲染branch切换到这个分枝即可。

对了，我也发现Vscode的推送功能在博客LiveServer预览的时候时常会很慢。