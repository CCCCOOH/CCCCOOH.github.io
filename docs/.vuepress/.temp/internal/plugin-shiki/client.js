import { enhanceTwoslash } from '/Users/sy/codes/CCCCOOH.github.io/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/twoslash.js'
import { useCopyCode } from '/Users/sy/codes/CCCCOOH.github.io/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from '/Users/sy/codes/CCCCOOH.github.io/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

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
