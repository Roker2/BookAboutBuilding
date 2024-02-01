---
# https://vitepress.dev/reference/default-theme-home-page
title: About Android Building
layout: home

hero:
  name: "Усе про збірку Android"
  tagline: "Від рядка коду у вихідних кодах до повноцінної робочої системи на вашому пристрої"
  
  image: 
      alt: Book Image
      light: android_book-ua.png
      dark: android_book-ua.png

  actions:
    - theme: brand
      text: Вступ
      link: /Introduction
    - theme: alt
      text: Оцініть нас на GitHub
      link: https://github.com/Roker2/BookAboutBuilding

features:
  - title: "👉 Розділ 1: Початок починань"
    details: Початкове налаштування оточення і скачування вихідних кодів
    link: /ua/Chapter1/c1p1
    linkText: Приступити до читання

  - title: "💻 Розділ 2: git, з чим його їдять і навіщо він"
    details: Знайомство з інструментом для спільної роботи в GitHub і не тільки
    link: /ua/Chapter2/c3p0
    linkText: Приступити до читання

  - title: "🧑‍💻 Розділ 3: Дослідження вихідних кодів пристрою"
    details: Вивчення структури вихідних кодів телефону й адаптації їх для певної прошивки
    link: /ua/Chapter3/c3p0
    linkText: Приступити до читання

  - title: "✏️ Розділ 4: Самостійне оновлення вихідних кодів"
    details: Оновлення вихідних кодів пристрою для підтримання актуального стану ПЗ на ньому
    link: /ua/Chapter4/c4p1
    linkText: Приступити до читання

  - title: "📱 Розділ 5: Конфігурація Android Go"
    details: Отримуємо фішки Android Go на будь-яких пристроях
    link: /ua/Chapter5/c5p1
    linkText: Приступити до читання

  - title: "👀 Розділ 6: Додатковий матеріал, який не ввійшов до основної частини"
    details: Додатковий матеріал, помилки, SEPolicy, утиліти, SEPolicy
    link: /ua/Chapter6/c6p1
    linkText: Приступити до читання
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

const members = [
  {
    avatar: 'https://www.github.com/Roker2.png',
    name: 'Roker2',
    title: 'Засновник',
    links: [
      { icon: 'github', link: 'https://github.com/Roker2' },
    ]
  },
  {
    avatar: 'https://www.github.com/CakesTwix.png',
    name: 'CakesTwix',
    title: 'Розробник сайту',
    links: [
      { icon: 'github', link: 'https://github.com/CakesTwix' },
      { icon: 'mastodon', link: 'https://pl.m0e.space/CakesTwix' }
    ]
  },
  {
    avatar: 'https://www.github.com/acroreiser.png',
    name: 'acroreiser',
    title: 'Писар',
    links: [
      { icon: 'github', link: 'https://github.com/acroreiser' },
    ]
  },
  {
    avatar: 'https://www.github.com/myslivets.png',
    name: 'Daniel Myslivets',
    title: 'Дизайнер обкладинки',
    links: [
      { icon: 'github', link: 'https://github.com/myslivets' },
      { icon: 'youtube', link: 'https://www.youtube.com/@DanielM' },
    ]
  },
  {
    avatar: 'https://www.github.com/Ultra119.png',
    name: 'Ultra119',
    title: 'Писар',
    links: [
      { icon: 'github', link: 'https://github.com/Ultra119' },
    ]
  },
  {
    avatar: 'https://www.github.com/SanyaPilot.png',
    name: 'SanyaPilot',
    title: 'Виправлення',
    links: [
      { icon: 'github', link: 'https://github.com/SanyaPilot' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Автори
    </template>
    <template #lead>
      Ті, хто писав, виправляв, додавав інформацію про збірку Android з вихідного коду
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

