import './iconify.css'
export const icons = {"material-symbols:home":"vpi-ljta3lxn","skill-icons:vscode-dark":"vpi-bqfa81z8 bg","skill-icons:twitter":"vpi-mpli0v98 bg","vscode-icons:file-type-html":"vpi-7vx82cgl bg","vscode-icons:file-type-js-official":"vpi-hnqin5vw bg","vscode-icons:file-type-css":"vpi-voja1cs7 bg"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateIcons) {
    __VUE_HMR_RUNTIME__.updateIcons(icons)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ icons }) => {
    __VUE_HMR_RUNTIME__.updateIcons(icons)
  })
}
