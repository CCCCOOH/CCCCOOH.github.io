export const blogPostData = [{"path":"/article/2ke6oqe0/","title":"换到Vuepress后遇到的问题和感悟","categoryList":[{"id":"bc47aa","sort":10002,"name":"写博客"}],"createTime":"2025/02/24 18:45:00","lang":"zh-CN","excerpt":""},{"path":"/article/hmkal6hu/","title":"榨干你家的千兆宽带，Steam下载速度90Mb+","categoryList":[{"id":"0d98c7","sort":10001,"name":"其他"}],"createTime":"2025/02/23 21:49:58","lang":"zh-CN","excerpt":""},{"path":"/article/rxw8b0hx/","title":"mac终端工作流优化方案","categoryList":[{"id":"9587ef","sort":10003,"name":"WorkFlow"}],"createTime":"2025/02/23 21:46:30","lang":"zh-CN","excerpt":""},{"path":"/article/ddyrfd1v/","title":"速通Ollama本地部署DeepSeek-r1","categoryList":[{"id":"0d98c7","sort":10001,"name":"其他"}],"createTime":"2025/02/23 21:06:20","lang":"zh-CN","excerpt":""},{"path":"/article/3ghh2hbc/","title":"Hexo多端部署终极方案","categoryList":[{"id":"bc47aa","sort":10002,"name":"写博客"}],"createTime":"2025/02/23 21:05:00","lang":"zh-CN","excerpt":""},{"path":"/article/qswdig7b/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/02/23 19:17:08","lang":"zh-CN","excerpt":""},{"path":"/article/ubh3sea4/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/02/23 19:17:08","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
