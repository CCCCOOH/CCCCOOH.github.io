import comp from "/Users/sy/codes/CCCCOOH.github.io/docs/.vuepress/.temp/pages/friends/index.html.vue"
const data = JSON.parse("{\"path\":\"/friends/\",\"title\":\"Friends\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Friends\",\"createTime\":\"2025/02/24 23:06:05\",\"permalink\":\"/friends/\",\"list\":[{\"name\":\"zcg\",\"link\":\"https://zcg555.github.io/\",\"avatar\":\"https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/7471738506555_.pic.jpg\",\"desc\":\"一个后端程序员🧑‍💻。\"},{\"name\":\"TobyKSKGD\",\"link\":\"https://tobykskgd.life/\",\"avatar\":\"http://tobykskgd.life/wp-content/uploads/2024/02/IMG_3007.jpg\",\"desc\":\"C’est comme ça\"}],\"gitInclude\":[],\"draft\":true,\"pageLayout\":\"friends\"},\"headers\":[],\"readingTime\":{\"minutes\":0.15,\"words\":44},\"filePathRelative\":\"friends.md\",\"type\":\"friends\"}")
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
