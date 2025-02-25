import { enhanceTwoslash } from 'E:/CCCCOOH.github.io/node_modules/.pnpm/@vuepress-plume+plugin-shik_468251aaf0882cf22e0593adc45d84ac/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/twoslash.js'
import { useCopyCode } from 'E:/CCCCOOH.github.io/node_modules/.pnpm/@vuepress-plume+plugin-shik_468251aaf0882cf22e0593adc45d84ac/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'E:/CCCCOOH.github.io/node_modules/.pnpm/@vuepress-plume+plugin-shik_468251aaf0882cf22e0593adc45d84ac/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  enhance({ app }) {
    enhanceTwoslash(app)
  },
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
