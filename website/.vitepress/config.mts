import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { telegram } from '../../website/icons'

import { ruConfig } from './locales/ru'
import { uaConfig } from './locales/ua'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  scrollOffset: 'header',
  cleanUrls: true,

  title: "About Android Building",
  description: "Android Build from Source: A Comprehensive Guide",

  head: [
    [
      'link', 
      { 
        rel: 'icon',
        href: '/Android.png' 
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'lack-translucent',
      },
    ],
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  base: '/BookAboutBuilding/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/Android.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Roker2/BookAboutBuilding' },
      {
      icon: {
          svg: telegram,
      },
      link: 'https://t.me/BookAboutBuilding',
      },
  ],
  },
  
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      link: '/',
      ...ruConfig,
    },
    ua: {
      label: 'Українська',
      lang: 'ua',
      link: '/ua/',
      ...uaConfig,
    }
  },
})

