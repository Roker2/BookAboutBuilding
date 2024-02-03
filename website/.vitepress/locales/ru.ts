import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const ConfigRu: LocaleSpecificConfig<DefaultTheme.Config> = {
    nav: [
        { text: 'Главная', link: '/' },
        { text: 'Приступить к изучению', link: '/Introduction' },
    ],

    editLink: {
        pattern: 'https://github.com/Roker2/BookAboutBuilding/edit/master/website/:path',
        text: 'Предложить изменения для данной страницы',
    },

    search: {
        provider: 'local',
        options: {
        translations: {
            button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
            },
            modal: {
            displayDetails: 'Отобразить подробный список',
            noResultsText: 'Ничего не нашли',
            resetButtonTitle: 'Сбросить поиск',
            footer: {
                selectText: 'для выбора',
                selectKeyAriaLabel: 'enter',
                navigateText: 'для навигации',
                navigateUpKeyAriaLabel: 'стрелка вверх',
                navigateDownKeyAriaLabel: 'стрелка вниз',
                closeText: 'закрыть',
                closeKeyAriaLabel: 'escape',
            },
            },
        },
        },
    },

    outline: {
        label: 'В этом параграфе',
        level: 'deep',
    },

    docFooter: {
        prev: 'Предыдущая страница',
        next: 'Следующая страница',
    },

    lastUpdated: {
        text: 'Обновлен в ',
        formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
        }
    },

    sidebar: [
        {
        text: "Введение",
        link: "/Introduction",
        },
        {
        text: 'Глава 1: Начало начал',
        items: [
            { text: 'Параграф 1: Выбор подходящей системы', link: '/Chapter1/c1p1' },
            { text: 'Параграф 2: Установка и настройка системы', link: '/Chapter1/c1p2' },
            { text: 'Параграф 3: Скачиваем исходники прошивки', link: '/Chapter1/c1p3' },
            { text: 'Параграф 4: Исходники устройства', link: '/Chapter1/c1p4' },
            { text: 'Параграф 5: Инициализация и сборка', link: '/Chapter1/c1p5' },
            { text: 'Параграф 6: В завершение', link: '/Chapter1/c1p6' },
        ]
        },
        {
        text: 'Глава 2: git, с чем его едят и зачем он',
        items: [
            { text: 'Введение', link: '/Chapter2/c2p0' },
            { text: 'Параграф 1: Создание аккаунта на GitHub и настройка git под свой аккаунт', link: '/Chapter2/c2p1' },
            { text: 'Параграф 2: Ходовые команды git’а', link: '/Chapter2/c2p2' },
        ]
        },
        {
        text: 'Глава 3: Изучение исходников устройства',
        items: [
            { text: 'Введение', link: '/Chapter3/c3p0' },
            { text: 'Параграф 1: Что есть что и для чего', link: '/Chapter3/c3p1' },
            { text: 'Параграф 2: Что такое дерево и сколько их должно быть', link: '/Chapter3/c3p2' },
            { text: 'Параграф 3: Что такое vendor и почему он имеет чужие библиотеки', link: '/Chapter3/c3p3' },
            { text: 'Параграф 4: Что такое Ядро', link: '/Chapter3/c3p4' },
            { text: 'Параграф 5: Адаптация исходников устройства', link: '/Chapter3/c3p5' },
        ]
        },
        {
        text: 'Глава 4: Обновление исходников самостоятельно',
        items: [
            { text: 'Введение', link: '/Chapter4/c4p0' },
            { text: 'Параграф 1: Дампы, vendor, proprietary-files.txt и обновление библиотек', link: '/Chapter4/c4p1' },
            { text: 'Параграф 5: Обновление и сборка ядра', link: '/Chapter4/c4p5' },
        ]
        },
        {
        text: 'Глава 5: Конфигурация Android Go',
        items: [
            { text: 'Параграф 1: Зачем нужен Android Go и что это такое', link: '/Chapter5/c5p1' },
            { text: 'Параграф 2: Начало', link: '/Chapter5/c5p2' },
            { text: 'Параграф 3: Отключаем лишнее', link: '/Chapter5/c5p3' },
            { text: 'Параграф 4: Тонкая настройка', link: '/Chapter5/c5p4' },
            { text: 'Параграф 5: Динамически доступные HAL', link: '/Chapter5/c5p5' },
        ]
        },
        {
        text: 'Глава 6: Дополнительный материал, который не вошел в основную часть',
        items: [
            { text: 'Параграф 1: Ошибки сборки (SELinux, нехватка пакетов, ресурсов и тд)', link: '/Chapter6/c6p1' },
            { text: 'Параграф 5: Список полезных утилит и приложений', link: '/Chapter6/c6p5' },
        ]
        },
        {
        text: "Ресурсы и источники",
        link: "/Resources",
        },
    ],
}

export const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "About Android Building",
    description: "Android Build from Source: A Comprehensive Guide",
    themeConfig: ConfigRu,
}
