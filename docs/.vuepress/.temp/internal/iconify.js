import './iconify.css'
export const icons = {"material-symbols:home":"vpi-b5po4w9n","skill-icons:vscode-dark":"vpi-emyp5cso bg","skill-icons:twitter":"vpi-i2log6bc bg","vscode-icons:file-type-html":"vpi-hzlqhfz9 bg","vscode-icons:file-type-js-official":"vpi-ipcljjvb bg","vscode-icons:file-type-css":"vpi-72utaduk bg","logos:npm-icon":"vpi-sl3i5kkx bg","vscode-icons:file-type-light-pnpm":"vpi-5sehkc6g bg","vscode-icons:file-type-yarn":"vpi-chstl6mx bg","vscode-icons:file-type-vue":"vpi-1i3jw84v bg","vscode-icons:default-folder":"vpi-36u8za8k bg","vscode-icons:folder-type-library":"vpi-uz7f1ktv bg","vscode-icons:file-type-js":"vpi-a6iw7trc bg","vscode-icons:folder-type-component":"vpi-m0kdpqpi bg","vscode-icons:file-type-json":"vpi-jop6ni2l bg","solar:home-2-bold":"vpi-1uor69c1","solar:bill-list-bold":"vpi-ngv1h5he","solar:tag-bold":"vpi-46s1o1i5","solar:calendar-date-bold":"vpi-0odth4w8","solar:notebook-bold":"vpi-o7vp6945","solar:people-nearby-bold":"vpi-7rfu2c6s","vscode-icons:file-type-c":"vpi-tzr2g6po bg"}

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
