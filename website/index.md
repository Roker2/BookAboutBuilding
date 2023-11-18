---
# https://vitepress.dev/reference/default-theme-home-page
title: About Android Building
layout: home

hero:
  name: "Все о сборке Android"
  tagline: "От строчки кода в исходниках до полноценной рабочей системы на вашем устройстве"
  
  image: 
      alt: Book Image
      light: /android_book.png
      dark: /android_book.png

features:
  - title: Понятные объяснения
    details: Говорим про сложное простыми словами
  - title: Примеры
    details: Предоставляем примеры кода и использования
  - title: На базе движка VitePress
    details: VitePress - это генератор статических сайтов (SSG), предназначенный для быстрого создания сайтов, ориентированных на контент.
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Roker2.png',
    name: 'Roker2',
    title: 'Создатель',
    links: [
      { icon: 'github', link: 'https://github.com/Roker2' },
    ]
  },
  {
    avatar: 'https://www.github.com/CakesTwix.png',
    name: 'CakesTwix',
    title: 'Создатель сайта',
    links: [
      { icon: 'github', link: 'https://github.com/CakesTwix' },
      { icon: 'mastodon', link: 'https://pl.m0e.space/CakesTwix' }
    ]
  },
  {
    avatar: 'https://www.github.com/acroreiser.png',
    name: 'acroreiser',
    title: 'Писатель',
    links: [
      { icon: 'github', link: 'https://github.com/acroreiser' },
    ]
  },
  {
    avatar: 'https://www.github.com/myslivets.png',
    name: 'Daniel Myslivets',
    title: 'Дизайнер обложки',
    links: [
      { icon: 'github', link: 'https://github.com/myslivets' },
      { icon: 'youtube', link: 'https://www.youtube.com/@DanielM' },
    ]
  },
  {
    avatar: 'https://www.github.com/Ultra119.png',
    name: 'Ultra119',
    title: 'Писатель',
    links: [
      { icon: 'github', link: 'https://github.com/Ultra119' },
    ]
  },
  {
    avatar: 'https://www.github.com/SanyaPilot.png',
    name: 'SanyaPilot',
    title: 'Исправления',
    links: [
      { icon: 'github', link: 'https://github.com/SanyaPilot' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Авторы
    </template>
    <template #lead>
      Те, кто писал, исправлял, добавлял информацию про сборку Android из исходного кода
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

