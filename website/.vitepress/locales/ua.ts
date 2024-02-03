import type { DefaultTheme, LocaleSpecificConfig, LocaleConfig} from 'vitepress'

export const configUa = {
    nav: [
        { text: 'Головна', link: '/ua/' },
        { text: 'Приступити до вивчення', link: '/ua/Introduction' },
    ],

    search: {
        options: {
          translations: {
            button: {
              buttonText: 'Пошук',
              buttonAriaLabel: 'Пошук'
            },
            modal: {
              displayDetails: 'Відобразити детальний список',
              noResultsText: 'Нічого не знайшли',
              resetButtonTitle: 'Скинути пошук',
              footer: {
                selectText: 'для вибору',
                selectKeyAriaLabel: 'enter',
                navigateText: 'для навігації',
                navigateUpKeyAriaLabel: 'стрілка вгору',
                navigateDownKeyAriaLabel: 'стрілка вниз',
                closeText: 'закрити',
                closeKeyAriaLabel: 'escape',
              },
            },
          },
        },
    },

    sidebar: [
        {
        text: "Вступ",
        link: "ua/Introduction",
        },
        {
          text: 'Розділ 1: Початок починань',
          items: [
            { text: 'Параграф 1: Вибір відповідної системи', link: '/ua/Chapter1/c1p1' },
            { text: 'Параграф 2: Встановлення та налаштування системи', link: '/ua/Chapter1/c1p2' },
            { text: 'Параграф 3: Завантажуємо вихідні коди прошивки', link: '/ua/Chapter1/c1p3' },
            { text: 'Параграф 4: Вихідні коди пристрою', link: '/ua/Chapter1/c1p4' },
            { text: 'Параграф 5: Ініціалізація та збірка', link: '/ua/Chapter1/c1p5' },
            { text: 'Параграф 6: На завершення', link: '/ua/Chapter1/c1p6' },
          ]
        },
        {
          text: 'Розділ 2: git, з чим його їдять і навіщо він',
          items: [
            { text: 'Введення', link: '/ua/Chapter2/c2p0' },
            { text: 'Параграф 1: Створення акаунта на GitHub і налаштування git під свій акаунт', link: '/ua/Chapter2/c2p1' },
            { text: "Параграф 2: Ходові команди git'у", link: '/ua/Chapter2/c2p2' },
          ]
        },
        {
          text: 'Розділ 3: Дослідження вихідних кодів пристрою',
          items: [
            { text: 'Введення', link: '/ua/Chapter3/c3p0' },
            { text: 'Параграф 1: Що є що і для чого', link: '/ua/Chapter3/c3p1' },
            { text: 'Параграф 2: Що таке дерево і скільки їх має бути', link: '/ua/Chapter3/c3p2' },
            { text: 'Параграф 3: Що таке vendor і чому він має чужі бібліотеки', link: '/ua/Chapter3/c3p3' },
            { text: 'Параграф 4: Що таке Ядро', link: '/ua/Chapter3/c3p4' },
            { text: 'Параграф 5: Адаптація вихідних текстів пристрою', link: '/ua/Chapter3/c3p5' },
          ]
        },
        {
          text: 'Розділ 4: Самостійне оновлення вихідних кодів',
          items: [
            { text: 'Введення', link: '/ua/Chapter4/c4p0' },
            { text: 'Параграф 1: Дампи, vendor, proprietary-files.txt і оновлення бібліотек', link: '/ua/Chapter4/c4p1' },
            { text: 'Параграф 5: Оновлення та складання ядра', link: '/ua/Chapter4/c4p5' },
          ]
        },
        {
          text: 'Розділ 5: Конфігурація Android Go',
          items: [
            { text: 'Параграф 1: Навіщо потрібен Android Go і що це таке', link: '/ua/Chapter5/c5p1' },
            { text: 'Параграф 2: Початок', link: '/ua/Chapter5/c5p2' },
            { text: 'Параграф 3: Відключаємо зайве', link: '/ua/Chapter5/c5p3' },
            { text: 'Параграф 4: Тонке налаштування', link: '/ua/Chapter5/c5p4' },
            { text: 'Параграф 5: Динамічно доступні HAL', link: '/ua/Chapter5/c5p5' },
          ]
        },
        {
          text: 'Розділ 6: Додатковий матеріал, який не ввійшов до основної частини',
          items: [
            { text: 'Параграф 1: Помилки збірки (SELinux, нестача пакетів, ресурсів і тд.)', link: '/ua/Chapter6/c6p1' },
            { text: 'Параграф 5: Список корисних утиліт і застосунків', link: '/ua/Chapter6/c6p5' },
          ]
        },
        {
        text: "Ресурси та джерела",
        link: "/ua/Resources",
        },
    ],

    outline: {
        label: 'У цьому параграфі',
        level: 'deep',
    },

    docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка страница',
    },

    lastUpdated: {
        text: 'Оновлено в',
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
        }
    },

    editLink: {
        pattern: 'https://github.com/Roker2/BookAboutBuilding/edit/master/website/:path',
        text: 'Запропонувати зміни для цієї сторінки',
      },
    
}

export const uaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "About Android Building",
    description: "Android Build from Source: A Comprehensive Guide",
    themeConfig: configUa,
}
