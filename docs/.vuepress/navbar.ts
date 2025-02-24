import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tags', link: '/blog/tags/' },
  { text: 'Archives', link: '/blog/archives/' },
  {
    text: 'Notes',
    link: '/notes/demo/'
    // items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
  { text: 'Links', link: '/friends/' },
])
