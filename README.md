# Sy-blog-site

The Site is generated using [vuepress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## Install

```sh
pnpm i
```

## Usage

```sh
# start dev server
pnpm docs:dev
# build for production
pnpm docs:build
# preview production build in local
pnpm docs:preview
# update vuepress and theme
pnpm vp-update
```

## Documents

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)

## 抛弃本地直接拉远端

```sh
git branch     查看自己 所在分支
git fetch --all  下载远程仓库最新代码  不做合并处理
git reset --hard origin/当前分支       #把head指针指向刚刚下载的最新代码，撤销本地、暂存区的修改，用版本库(github上面的新代码替代)**加粗样式**
```
