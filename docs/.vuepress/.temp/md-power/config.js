import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/sy/codes/VuePressSource/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass_f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/sy/codes/VuePressSource/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass_f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/sy/codes/VuePressSource/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass_f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/Users/sy/codes/VuePressSource/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass_f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import '/Users/sy/codes/VuePressSource/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.131_esbuild@0.25.0_less@4.2.2_markdown-it@14.1.0_sass_f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
