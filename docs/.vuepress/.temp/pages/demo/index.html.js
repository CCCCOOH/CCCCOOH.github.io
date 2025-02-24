import comp from "/Users/sy/codes/CCCCOOH.github.io/docs/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"我的笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的笔记\",\"createTime\":\"2025/02/23 19:17:08\",\"permalink\":\"/demo/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.34,\"words\":102},\"git\":{\"updatedTime\":1740402146000,\"contributors\":[{\"name\":\"sy\",\"username\":\"sy\",\"email\":\"c3156298376@163.com\",\"commits\":1,\"avatar\":\"https://avatars.githubusercontent.com/sy?v=4\",\"url\":\"https://github.com/sy\"}],\"changelog\":[{\"hash\":\"c9e5c6f1835b62711eaf7b1fb0512e53c92da026\",\"date\":1740402146000,\"email\":\"c3156298376@163.com\",\"author\":\"sy\",\"message\":\"update\",\"commitUrl\":\"https://github.com/CCCCOOH/CCCCOOH.github.io/commit/c9e5c6f1835b62711eaf7b1fb0512e53c92da026\"}]},\"filePathRelative\":\"notes/demo/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
