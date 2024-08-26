import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XybLauncher",
  description: "Best way to manage all your Fortnite Builds",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/downloadpage' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BeRightBack0' },
      { icon: 'discord', link: 'https://github.com/BeRightBack0' }
    ],

    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2024-Present XybLauncher Team'
    }
  }
})
