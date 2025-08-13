
<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=en">English</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=zh-CN">简体中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=zh-TW">繁體中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=it">Italiano</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=id">Bahasa Indonesia</a>
        | <a href="https://openaitx.github.io/view.html?user=Roker2&project=BookAboutBuilding&lang=as">অসমীয়া</
      </div>
    </div>
  </details>
</div>

<p align="center">
  <img src="website/public/icon.png" width="128"/>
  <p align="center"><b>BookAboutBuilding</b></p>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"/><br>
<img src="https://img.shields.io/badge/lineageos-167C80?style=for-the-badge&logo=lineageos&logoColor=white"/>
<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"/><br>
<img src="https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge"/>
<img src="https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white"/>
</p>

## Введение

Книга представляет собой исчерпывающее руководство по сборке операционной системы Android из исходного кода на Linux и разбору ее работы на низком уровне. Написанная в доступном и понятном стиле, она предоставляет читателям уникальную возможность углубиться во внутреннюю механику Android и получить полное представление о том, как функционирует эта популярная мобильная платформа.

# ❓ Я хочу что-то добавить/исправить, как мне это правильно сделать?

* Если вы контрибьютер данного репозитория, сделайте отдельную ветку с названием, которое подходит для ваших изменений, внесите изменения в нее и сделайте мерж реквест. 
* Если же вы не контрибьютер, для вас процедура такая же, только мерж реквест вы делаете из своего форка или другим способом.

# 🌎 I want translate, how I can do it?
Read [`TRANSLATIONS.md`](TRANSLATIONS.md) and make a translation according to those instructions and send us a Pull Request. We will check your translation and if it is correct, we will accept it

# 🔨 Сборка

Для генерации книжки, мы используем [VitePress](https://vitepress.dev/).
1. <b>🦀 Установка</b>

	```
	npm add -D vitepress
	npm i -D vitepress-plugin-tabs
	```
2. <b>🚀 Запуск</b>
	Чтобы посмотреть на результат, выполните эту команду. Утилита запустит локальный Web-сервер на localhost на 5173 порту.
	```
	npm run docs:dev
	```
