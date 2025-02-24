export const sidebar = {"/":{"/demo":{"items":"auto","prefix":"/notes/demo/"}},"__auto__":{"/notes/demo/":[{"text":"JavaScript","items":[{"text":"ES6-Set-Map对象小记","link":"/demo/ab006aq5/"},{"text":"ES6函数、对象和面向对象扩展","link":"/demo/nxyiresv/"},{"text":"ES6异步编程中Promise与Proxy对象","link":"/demo/k2rykkmj/"},{"text":"JavaScript如何实现类型判断？","link":"/demo/5zki1i9m/"},{"text":"Javascript-ES6扩展写法","link":"/demo/d0p0ehmg/"},{"text":"Js扩展DOM、BOM、AJAX、事件、定时器","link":"/demo/49xtp2iv/"}],"collapsed":false},{"text":"Unity","items":[{"text":"Unity勇者传说学习手记","link":"/demo/yrys2r0c/"}],"collapsed":false},{"text":"Vim","items":[{"text":"Learn-Vim随笔","link":"/demo/9t7rprqt/"}],"collapsed":false},{"text":"WebSecurity","items":[{"text":"SQL注入入门笔记","link":"/demo/q9eeo7dd/"}],"collapsed":false},{"text":"Vue","items":[{"text":"Vue3重修笔记","link":"/demo/wjqdu2bf/"}],"collapsed":false}]},"__home__":{"/notes/demo/":"/demo/"}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
