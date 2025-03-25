import { defineClientConfig } from 'vuepress/client'
import Tabs from 'E:/CCCCOOH.github.io/node_modules/.pnpm/vuepress-plugin-md-power@1._f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'E:/CCCCOOH.github.io/node_modules/.pnpm/vuepress-plugin-md-power@1._f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'E:/CCCCOOH.github.io/node_modules/.pnpm/vuepress-plugin-md-power@1._f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'E:/CCCCOOH.github.io/node_modules/.pnpm/vuepress-plugin-md-power@1._f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import 'E:/CCCCOOH.github.io/node_modules/.pnpm/vuepress-plugin-md-power@1._f3b87ef5de773427c2babfbf40a415c9/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
