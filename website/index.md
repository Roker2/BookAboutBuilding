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

  actions:
    - theme: brand
      text: Введение
      link: /Introduction
    - theme: alt
      text: Оцените нас на GitHub
      link: https://github.com/Roker2/BookAboutBuilding

# &nbsp - пробел
features:

  - icon: 👉
    title: Глава 1:&nbspНачало начал
    details: Первоначальная настройка окружения и скачивание исходников
    link: /Chapter1/c1p1
    linkText: Приступить к чтению

  - icon: 💻
    title: Глава 2:&nbspgit, с чем его едят и зачем он
    details: Знакомство с инструментом для совместной работы в GitHub и не только
    link: /Chapter2/c2p0
    linkText: Приступить к чтению

  - icon: 🧑‍💻
    title: Глава 3:&nbspИзучение исходников устройства
    details: Изучение структуры исходников телефона и адаптации их для определенной прошивки
    link: /Chapter3/c3p0
    linkText: Приступить к чтению

  - icon: ✏️
    title: Глава 4:&nbspОбновление исходников самостоятельно
    details: Обновление исходников устройства для поддержания актуального состояния ПО на нем
    link: /Chapter4/c4p1
    linkText: Приступить к чтению

  - icon: 📱
    title: Глава 5:&nbspКонфигурация Android Go
    details: Получаем фишки Android Go на любых устройствах
    link: /Chapter5/c5p1
    linkText: Приступить к чтению

  - icon: 👀
    title: Глава 6:&nbspДополнительный материал, который не вошел в основную часть
    details: Допольнительный материал, ошибки, SEPolicy, утилиты
    link: /Chapter6/c6p1
    linkText: Приступить к чтению
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #00ffb1 30%, #00ff68);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import { telegram2 } from './icons'

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
      { icon: 'mastodon', link: 'https://pl.m0e.space/CakesTwix' },
      {
        icon: {
          svg: telegram2,
        },
        link: 'https://t.me/',
      }
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
      { 
        icon: {
          svg: telegram2,
        },
        link: 'https://t.me/daneo03'
      },
    ]
  },
  {
    avatar: 'https://www.github.com/Ultra119.png',
    name: 'Ultra119',
    title: 'Писатель',
    links: [
      { icon: 'github', link: 'https://github.com/Ultra119' },
      {
        icon: {
          svg: telegram2,
        },
        link: 'https://t.me/Ultra119',
      }
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
