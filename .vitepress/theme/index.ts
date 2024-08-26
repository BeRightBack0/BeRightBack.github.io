import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // You can customize layout slots here
    })
  },
  enhanceApp({ app }) {
    // Dynamically import and register the global component
    app.component('DownloadList', () => import('./Components/DownloadList.vue'))
  }
} satisfies Theme