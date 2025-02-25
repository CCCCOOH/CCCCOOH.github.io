import comp from "E:/CCCCOOH.github.io/docs/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"我的笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的笔记\",\"createTime\":\"2025/02/23 19:17:08\",\"permalink\":\"/demo/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.34,\"words\":102},\"filePathRelative\":\"notes/demo/README.md\"}")
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
