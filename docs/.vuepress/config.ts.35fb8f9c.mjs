// docs/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Sy_blogSite",
  description: "A Simple Codder",
  head: [
    // 配置站点图标
    ["link", { rel: "icon", type: "image/png", href: "https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/icon.png" }]
  ],
  bundler: viteBundler(),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    profile: {
      name: "CCCCOOH",
      description: "A simple codder",
      avatar: "https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250223211846991.png",
      // location: '您的位置',
      // organization: '您的组织',
      circle: true,
      // 是否为圆形头像
      layout: "right"
      // 个人信息在左侧还是右侧，'left' | 'right'
    },
    // 社交链接
    social: [
      { icon: "github", link: "https://github.com/CCCCOOH" }
      // ... more
    ],
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: "https://shenying.online",
    /* 文档仓库配置，用于 editLink */
    docsRepo: "CCCCOOH/CCCCOOH.github.io",
    docsDir: "docs",
    docsBranch: "main",
    /* 页内信息 */
    editLink: true,
    // lastUpdated: true,
    contributors: true,
    // changelog: {
    //   maxCount: 10,
    //   repoUrl: 'https://github.com/CCCCOOH/CCCCOOH.github.io',
    //   commitUrlPattern: ':repo/commit/:hash',
    //   issueUrlPattern: ':repo/issues/:issue',
    //   tagUrlPattern: ':repo/releases/tag/:tag'
    // },
    copyright: false,
    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },
    /* 博客文章页面链接前缀 */
    article: "/article/",
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },
    plugins: {
      // git: true,
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ["shell", "bash", "typescript", "javascript", "vue", "stylus", "python", "c#", "html", "css"],
        twoslash: true,
        // 启用 twoslash
        whitespace: true,
        // 启用 空格/Tab 高亮
        lineNumbers: true
        // 启用行号
      },
      /* 本地搜索, 默认启用 */
      // search: true,
      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },
      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,
      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        // pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
        //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
        //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
        //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
        //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
        //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
        //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
        //   icons: true,        // 启用内置图标语法  :[icon-name]:
        //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
        //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
        //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
        //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
        //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
        //   demo: true,         // 启用 demo 容器  ::: demo
        //   repl: {             // 启用 代码演示容器
        //     go: true,         // ::: go-repl
        //     rust: true,       // ::: rust-repl
        //     kotlin: true,     // ::: kotlin-repl
        //   },
        //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      },
      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,
      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },
      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,
      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: "Giscus",
        // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: "CCCCOOH/comment-system",
        repoId: "R_kgDONgxrhg",
        category: "Announcements",
        categoryId: "DIC_kwDONgxrhs4CnSFB",
        mapping: "pathname",
        reactionsEnabled: true,
        inputPosition: "top"
      }
    }
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
    // git: process.env.NODE_ENV === 'production'
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3N5L2NvZGVzL0NDQ0NPT0guZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc3kvY29kZXMvQ0NDQ09PSC5naXRodWIuaW8vZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zeS9jb2Rlcy9DQ0NDT09ILmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnXG5pbXBvcnQgeyBwbHVtZVRoZW1lIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiAnLycsXG4gIGxhbmc6ICd6aC1DTicsXG4gIHRpdGxlOiAnU3lfYmxvZ1NpdGUnLFxuICBkZXNjcmlwdGlvbjogJ0EgU2ltcGxlIENvZGRlcicsXG5cbiAgaGVhZDogW1xuICAgIC8vIFx1OTE0RFx1N0Y2RVx1N0FEOVx1NzBCOVx1NTZGRVx1NjgwN1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiAnaHR0cHM6Ly9jY2Njb29oLm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20vaW1nL2ljb24ucG5nJyB9XSxcbiAgXSxcblxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsIC8vIFx1N0FEOVx1NzBCOVx1OEY4M1x1NTkyN1x1RkYwQ1x1OTg3NVx1OTc2Mlx1NjU3MFx1OTFDRlx1OEY4M1x1NTkxQVx1NjVGNlx1RkYwQ1x1NEUwRFx1NUVGQVx1OEJBRVx1NTQyRlx1NzUyOFxuXG4gIHRoZW1lOiBwbHVtZVRoZW1lKHtcbiAgICBwcm9maWxlOiB7XG4gICAgICBuYW1lOiAnQ0NDQ09PSCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Egc2ltcGxlIGNvZGRlcicsXG4gICAgICBhdmF0YXI6ICdodHRwczovL2NjY2Nvb2gub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9pbWcvMjAyNTAyMjMyMTE4NDY5OTEucG5nJyxcbiAgICAgIC8vIGxvY2F0aW9uOiAnXHU2MEE4XHU3Njg0XHU0RjREXHU3RjZFJyxcbiAgICAgIC8vIG9yZ2FuaXphdGlvbjogJ1x1NjBBOFx1NzY4NFx1N0VDNFx1N0VDNycsXG4gICAgICBjaXJjbGU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NEUzQVx1NTcwNlx1NUY2Mlx1NTkzNFx1NTBDRlxuICAgICAgbGF5b3V0OiAncmlnaHQnLCAvLyBcdTRFMkFcdTRFQkFcdTRGRTFcdTYwNkZcdTU3MjhcdTVERTZcdTRGQTdcdThGRDhcdTY2MkZcdTUzRjNcdTRGQTdcdUZGMEMnbGVmdCcgfCAncmlnaHQnXG4gICAgfSxcbiAgICAvLyBcdTc5M0VcdTRFQTRcdTk0RkVcdTYzQTVcbiAgICBzb2NpYWw6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vQ0NDQ09PSCcgfSxcbiAgICAgIC8vIC4uLiBtb3JlXG4gICAgXSxcbiAgICAvKiBcdTZERkJcdTUyQTBcdTYwQThcdTc2ODRcdTkwRThcdTdGNzJcdTU3REZcdTU0MEQsIFx1NjcwOVx1NTJBOVx1NEU4RSBTRU8sIFx1NzUxRlx1NjIxMCBzaXRlbWFwICovXG4gICAgaG9zdG5hbWU6ICdodHRwczovL3NoZW55aW5nLm9ubGluZScsXG5cbiAgICAvKiBcdTY1ODdcdTY4NjNcdTRFRDNcdTVFOTNcdTkxNERcdTdGNkVcdUZGMENcdTc1MjhcdTRFOEUgZWRpdExpbmsgKi9cbiAgICBkb2NzUmVwbzogJ0NDQ0NPT0gvQ0NDQ09PSC5naXRodWIuaW8nLFxuICAgIGRvY3NEaXI6ICdkb2NzJyxcbiAgICBkb2NzQnJhbmNoOiAnbWFpbicsXG5cbiAgICAvKiBcdTk4NzVcdTUxODVcdTRGRTFcdTYwNkYgKi9cbiAgICBlZGl0TGluazogdHJ1ZSxcbiAgICAvLyBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgICBjb250cmlidXRvcnM6IHRydWUsXG4gICAgLy8gY2hhbmdlbG9nOiB7XG4gICAgLy8gICBtYXhDb3VudDogMTAsXG4gICAgLy8gICByZXBvVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL0NDQ0NPT0gvQ0NDQ09PSC5naXRodWIuaW8nLFxuICAgIC8vICAgY29tbWl0VXJsUGF0dGVybjogJzpyZXBvL2NvbW1pdC86aGFzaCcsXG4gICAgLy8gICBpc3N1ZVVybFBhdHRlcm46ICc6cmVwby9pc3N1ZXMvOmlzc3VlJyxcbiAgICAvLyAgIHRhZ1VybFBhdHRlcm46ICc6cmVwby9yZWxlYXNlcy90YWcvOnRhZydcbiAgICAvLyB9LFxuICAgIGNvcHlyaWdodDogZmFsc2UsXG4gICAgLyoqXG4gICAgICogXHU1MzVBXHU1QkEyXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9iYXNpYy8jYmxvZ1xuICAgICAqL1xuICAgIC8vIGJsb2c6IGZhbHNlLCAvLyBcdTc5ODFcdTc1MjhcdTUzNUFcdTVCQTJcbiAgICAvLyBibG9nOiB7XG4gICAgLy8gICBwb3N0TGlzdDogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU2NTg3XHU3QUUwXHU1MjE3XHU4ODY4XHU5ODc1XG4gICAgLy8gICB0YWdzOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTY4MDdcdTdCN0VcdTk4NzVcbiAgICAvLyAgIGFyY2hpdmVzOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTVGNTJcdTY4NjNcdTk4NzVcbiAgICAvLyAgIGNhdGVnb3JpZXM6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NTIwNlx1N0M3Qlx1OTg3NVxuICAgIC8vICAgcG9zdENvdmVyOiAncmlnaHQnLCAvLyBcdTY1ODdcdTdBRTBcdTVDMDFcdTk3NjJcdTRGNERcdTdGNkVcbiAgICAvLyAgIHBhZ2luYXRpb246IDE1LCAvLyBcdTZCQ0ZcdTk4NzVcdTY2M0VcdTc5M0FcdTY1ODdcdTdBRTBcdTY1NzBcdTkxQ0ZcbiAgICAvLyB9LFxuXG4gICAgLyogXHU1MzVBXHU1QkEyXHU2NTg3XHU3QUUwXHU5ODc1XHU5NzYyXHU5NEZFXHU2M0E1XHU1MjREXHU3RjAwICovXG4gICAgYXJ0aWNsZTogJy9hcnRpY2xlLycsXG5cbiAgICAvKipcbiAgICAgKiBcdTdGMTZcdThCRDFcdTdGMTNcdTVCNThcdUZGMENcdTUyQTBcdTVGRUJcdTdGMTZcdThCRDFcdTkwMUZcdTVFQTZcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNjYWNoZVxuICAgICAqL1xuICAgIGNhY2hlOiAnZmlsZXN5c3RlbScsXG5cbiAgICAvKipcbiAgICAgKiBcdTRFM0EgbWFya2Rvd24gXHU2NTg3XHU0RUY2XHU4MUVBXHU1MkE4XHU2REZCXHU1MkEwIGZyb250bWF0dGVyIFx1OTE0RFx1N0Y2RVxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvYmFzaWMvI2F1dG9mcm9udG1hdHRlclxuICAgICAqL1xuICAgIC8vIGF1dG9Gcm9udG1hdHRlcjoge1xuICAgIC8vICAgcGVybWFsaW5rOiB0cnVlLCAgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU2QzM4XHU0RTQ1XHU5NEZFXHU2M0E1XG4gICAgLy8gICBjcmVhdGVUaW1lOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTUyMUJcdTVFRkFcdTY1RjZcdTk1RjRcbiAgICAvLyAgIHRpdGxlOiB0cnVlLCAgICAgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NjgwN1x1OTg5OFxuICAgIC8vIH0sXG5cbiAgICBwbHVnaW5zOiB7XG4gICAgICAvLyBnaXQ6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqIFNoaWtpIFx1NEVFM1x1NzgwMVx1OUFEOFx1NEVBRVxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL2NvZGUtaGlnaGxpZ2h0L1xuICAgICAgICovXG4gICAgICBzaGlraToge1xuICAgICAgICAvLyBcdTVGM0FcdTcwQzhcdTVFRkFcdThCQUVcdTk4ODRcdThCQkVcdTRFRTNcdTc4MDFcdTU3NTdcdTlBRDhcdTRFQUVcdThCRURcdThBMDBcdUZGMENcdTYzRDJcdTRFRjZcdTlFRDhcdThCQTRcdTUyQTBcdThGN0RcdTYyNDBcdTY3MDlcdThCRURcdThBMDBcdTRGMUFcdTRFQTdcdTc1MUZcdTRFMERcdTVGQzVcdTg5ODFcdTc2ODRcdTY1RjZcdTk1RjRcdTVGMDBcdTk1MDBcbiAgICAgICAgbGFuZ3VhZ2VzOiBbJ3NoZWxsJywgJ2Jhc2gnLCAndHlwZXNjcmlwdCcsICdqYXZhc2NyaXB0JywgJ3Z1ZScsICdzdHlsdXMnLCAncHl0aG9uJywgJ2MjJywgJ2h0bWwnLCAnY3NzJ10sXG4gICAgICAgIHR3b3NsYXNoOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggdHdvc2xhc2hcbiAgICAgICAgd2hpdGVzcGFjZTogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4IFx1N0E3QVx1NjgzQy9UYWIgXHU5QUQ4XHU0RUFFXG4gICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTg4NENcdTUzRjdcbiAgICAgIH0sXG5cbiAgICAgIC8qIFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMiwgXHU5RUQ4XHU4QkE0XHU1NDJGXHU3NTI4ICovXG4gICAgICAvLyBzZWFyY2g6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogQWxnb2xpYSBEb2NTZWFyY2hcbiAgICAgICAqIFx1NTQyRlx1NzUyOFx1NkI2NFx1NjQxQ1x1N0QyMlx1OTcwMFx1ODk4MVx1NUMwNiBcdTY3MkNcdTU3MzBcdTY0MUNcdTdEMjIgc2VhcmNoIFx1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZVxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL3NlYXJjaC8jYWxnb2xpYS1kb2NzZWFyY2hcbiAgICAgICAqL1xuICAgICAgLy8gZG9jc2VhcmNoOiB7XG4gICAgICAvLyAgIGFwcElkOiAnJyxcbiAgICAgIC8vICAgYXBpS2V5OiAnJyxcbiAgICAgIC8vICAgaW5kZXhOYW1lOiAnJyxcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8qIFx1NjU4N1x1N0FFMFx1NUI1N1x1NjU3MFx1N0VERlx1OEJBMVx1MzAwMVx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFx1RkYwQ1x1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZSBcdTUyMTlcdTc5ODFcdTc1MjggKi9cbiAgICAgIC8vIHJlYWRpbmdUaW1lOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIG1hcmtkb3duIGVuaGFuY2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2lucy9tYXJrZG93bi1lbmhhbmNlL1xuICAgICAgICovXG4gICAgICAvLyBtYXJrZG93bkVuaGFuY2U6IHtcbiAgICAgIC8vICAgY2hhcnRqczogdHJ1ZSxcbiAgICAgIC8vICAgZWNoYXJ0czogdHJ1ZSxcbiAgICAgIC8vICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIC8vICAgZmxvd2NoYXJ0OiB0cnVlLFxuICAgICAgLy8gfSxcblxuICAgICAgLyoqXG4gICAgICAgKiAgbWFya2Rvd24gcG93ZXJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2luL21hcmtkb3duLXBvd2VyL1xuICAgICAgICovXG4gICAgICBtYXJrZG93blBvd2VyOiB7XG4gICAgICAgIC8vIHBkZjogdHJ1ZSwgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IFBERiBcdTVENENcdTUxNjUgQFtwZGZdKC94eHgucGRmKVxuICAgICAgLy8gICBjYW5pdXNlOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBjYW5pdXNlIFx1OEJFRFx1NkNENSAgQFtjYW5pdXNlXShmZWF0dXJlX25hbWUpXG4gICAgICAvLyAgIHBsb3Q6IHRydWUsICAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU5NjkwXHU3OUQ4XHU2NTg3XHU2NzJDXHU4QkVEXHU2Q0Q1ICEheHh4eCEhXG4gICAgICAvLyAgIGJpbGliaWxpOiB0cnVlLCAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGJpbGliaWxpXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW2JpbGliaWxpXShiaWQpXG4gICAgICAvLyAgIHlvdXR1YmU6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IHlvdXR1YmVcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbeW91dHViZV0odmlkZW9faWQpXG4gICAgICAvLyAgIGFydFBsYXllcjogdHJ1ZSwgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGFydFBsYXllciBcdTY3MkNcdTU3MzBcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYXJ0UGxheWVyXSh1cmwpXG4gICAgICAvLyAgIGF1ZGlvUmVhZGVyOiB0cnVlLCAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1XHU5N0YzXHU5ODkxXHU2NzE3XHU4QkZCXHU1MjlGXHU4MEZEIFx1OEJFRFx1NkNENSBAW2F1ZGlvUmVhZGVyXSh1cmwpXG4gICAgICAvLyAgIGljb25zOiB0cnVlLCAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XHU4QkVEXHU2Q0Q1ICA6W2ljb24tbmFtZV06XG4gICAgICAvLyAgIGNvZGVwZW46IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGNvZGVwZW4gXHU4QkVEXHU2Q0Q1IEBbY29kZXBlbl0odXNlci9zbGFzaClcbiAgICAgIC8vICAgcmVwbGl0OiB0cnVlLCAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgcmVwbGl0IFx1OEJFRFx1NkNENSBAW3JlcGxpdF0odXNlci9yZXBsLW5hbWUpXG4gICAgICAvLyAgIGNvZGVTYW5kYm94OiB0cnVlLCAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGNvZGVTYW5kYm94IFx1OEJFRFx1NkNENSBAW2NvZGVTYW5kYm94XShpZClcbiAgICAgIC8vICAganNmaWRkbGU6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUganNmaWRkbGUgXHU4QkVEXHU2Q0Q1IEBbanNmaWRkbGVdKHVzZXIvaWQpXG4gICAgICAvLyAgIG5wbVRvOiB0cnVlLCAgICAgICAgLy8gXHU1NDJGXHU3NTI4IG5wbS10byBcdTVCQjlcdTU2NjggIDo6OiBucG0tdG9cbiAgICAgIC8vICAgZGVtbzogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjggZGVtbyBcdTVCQjlcdTU2NjggIDo6OiBkZW1vXG4gICAgICAvLyAgIHJlcGw6IHsgICAgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IFx1NEVFM1x1NzgwMVx1NkYxNFx1NzkzQVx1NUJCOVx1NTY2OFxuICAgICAgLy8gICAgIGdvOiB0cnVlLCAgICAgICAgIC8vIDo6OiBnby1yZXBsXG4gICAgICAvLyAgICAgcnVzdDogdHJ1ZSwgICAgICAgLy8gOjo6IHJ1c3QtcmVwbFxuICAgICAgLy8gICAgIGtvdGxpbjogdHJ1ZSwgICAgIC8vIDo6OiBrb3RsaW4tcmVwbFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBpbWFnZVNpemU6ICdsb2NhbCcsIC8vIFx1NTQyRlx1NzUyOCBcdTgxRUFcdTUyQThcdTU4NkJcdTUxNDUgXHU1NkZFXHU3MjQ3XHU1QkJEXHU5QUQ4XHU1QzVFXHU2MDI3XHVGRjBDXHU5MDdGXHU1MTREXHU5ODc1XHU5NzYyXHU2Mjk2XHU1MkE4XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1NTcyOCBNYXJrZG93biBcdTY1ODdcdTRFRjZcdTRFMkRcdTVCRkNcdTUxNjVcdTUxNzZcdTRFRDYgbWFya2Rvd24gXHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5XHUzMDAyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvbWFya2Rvd24vaW5jbHVkZS9cbiAgICAgICAqL1xuICAgICAgLy8gbWFya2Rvd25JbmNsdWRlOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIE1hcmtkb3duIFx1NjU3MFx1NUI2Nlx1NTE2Q1x1NUYwRlxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL21hcmtkb3duLW1hdGgvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duTWF0aDoge1xuICAgICAgLy8gICB0eXBlOiAna2F0ZXgnLFxuICAgICAgLy8gfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBcdTZDMzRcdTUzNzBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy93YXRlcm1hcmsvXG4gICAgICAgKi9cbiAgICAgIC8vIHdhdGVybWFyazogdHJ1ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBcdThCQzRcdThCQkEgY29tbWVudHNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9jb21tZW50cy9cbiAgICAgICAqL1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwcm92aWRlcjogJ0dpc2N1cycsIC8vIFwiQXJ0YWxrXCIgfCBcIkdpc2N1c1wiIHwgXCJUd2lrb29cIiB8IFwiV2FsaW5lXCJcbiAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgcmVwbzogJ0NDQ0NPT0gvY29tbWVudC1zeXN0ZW0nLFxuICAgICAgICByZXBvSWQ6ICdSX2tnRE9OZ3hyaGcnLFxuICAgICAgICBjYXRlZ29yeTogJ0Fubm91bmNlbWVudHMnLFxuICAgICAgICBjYXRlZ29yeUlkOiAnRElDX2t3RE9OZ3hyaHM0Q25TRkInLFxuICAgICAgICBtYXBwaW5nOiAncGF0aG5hbWUnLFxuICAgICAgICByZWFjdGlvbnNFbmFibGVkOiB0cnVlLFxuICAgICAgICBpbnB1dFBvc2l0aW9uOiAndG9wJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFx1NTJBMFx1NUJDNlx1NTI5Rlx1ODBGRFxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9lbmNyeXB0aW9uL1xuICAgICAqL1xuICAgIC8vIGVuY3J5cHQ6IHt9LFxuICAgIC8vIGdpdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICB9KSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdULFNBQVMsbUJBQW1CO0FBQ3BWLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsa0JBQWtCO0FBRTNCLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBRWIsTUFBTTtBQUFBO0FBQUEsSUFFSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxhQUFhLE1BQU0sNERBQTRELENBQUM7QUFBQSxFQUNoSDtBQUFBLEVBRUEsU0FBUyxZQUFZO0FBQUEsRUFDckIsZ0JBQWdCO0FBQUE7QUFBQSxFQUVoQixPQUFPLFdBQVc7QUFBQSxJQUNoQixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUE7QUFBQTtBQUFBLE1BR1IsUUFBUTtBQUFBO0FBQUEsTUFDUixRQUFRO0FBQUE7QUFBQSxJQUNWO0FBQUE7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxVQUFVLE1BQU0sNkJBQTZCO0FBQUE7QUFBQSxJQUV2RDtBQUFBO0FBQUEsSUFFQSxVQUFVO0FBQUE7QUFBQSxJQUdWLFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQTtBQUFBLElBR1osVUFBVTtBQUFBO0FBQUEsSUFFVixjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFkLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFnQlgsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNVCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFZUCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVAsT0FBTztBQUFBO0FBQUEsUUFFTCxXQUFXLENBQUMsU0FBUyxRQUFRLGNBQWMsY0FBYyxPQUFPLFVBQVUsVUFBVSxNQUFNLFFBQVEsS0FBSztBQUFBLFFBQ3ZHLFVBQVU7QUFBQTtBQUFBLFFBQ1YsWUFBWTtBQUFBO0FBQUEsUUFDWixhQUFhO0FBQUE7QUFBQSxNQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWtDQSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcUJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEwQkEsU0FBUztBQUFBLFFBQ1AsVUFBVTtBQUFBO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsUUFDWixTQUFTO0FBQUEsUUFDVCxrQkFBa0I7QUFBQSxRQUNsQixlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRRixDQUFDO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
