import { defineNavbarConfig } from 'vuepress-theme-plume'
/**
   * 支持 iconify 图标，直接使用 iconify name 即可自动加载
   *
   * @see https://icon-sets.iconify.design/
   */
export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/', icon: 'solar:home-2-bold' },
  { text: 'Blog', link: '/blog/', icon: 'solar:bill-list-bold' },
  { text: 'Tags', link: '/blog/tags/', icon: 'solar:tag-bold' },
  { text: 'Archives', link: '/blog/archives/', icon: 'solar:calendar-date-bold' },
  {
    text: 'Notes',
    link: '/notes/demo/',
    icon: 'solar:notebook-bold'
    // items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
  { text: 'Links', link: '/friends/', icon: 'solar:people-nearby-bold' },
])
