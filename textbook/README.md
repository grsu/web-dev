# Ресурсы для самостоятельного изучения

## Первая веха: реализация сервера

Первым шагом предлагается реализация сервера приложения используя только модуль `http`, т.е. не применяя фреймворки для маршрутизации, например hapi.js или express.

- [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
- [Node.js v5.7.0 Documentation](https://nodejs.org/dist/latest-v5.x/docs/api/)

Познав основы, и критически осмыслив получившеесе решение, можно переходить к express, hapi.js или любому другому серверному фреймворку.

- http://expressjs.com/, в первую очередь нас интересуют разделы _Getting started_ и _Guide_.
- http://hapijs.com/tutorials
  - https://github.com/dwyl/learn-hapi возможно ещё лучше для начала изучения

Хорошим источников для анализа различий этих двух фреймворков будет презентация создателя hapi.js от 2013 года - [_Eran Hammer of WalMart Labs presents hapi_](https://www.youtube.com/watch?v=Recv7vR8ZlA).

## JavaScript

За основу для изучения языка можно взять одну из книг:

- http://eloquentjavascript.net/ с интерактивным обучением прямо по тексту
- http://speakingjs.com/ от введения до ES5
- http://exploringjs.com/ переходим к ES6

Язык не стоит на месте.

- https://github.com/lukehoban/es6features краткий обзор новых возможностей
- http://es6katas.org/ учите ES6 практикуя его, до момента пока тест не станет зелёным
- https://babeljs.io/ изучите этот инструмент

## Публикация кода в GitHub

Работая в команде, важно чтоб работа над приложением могла вестись параллельно различными людими на разных окружениях. Для этого стоит использовать систему контроля версий, например Git.

Опубликованный код должен быть готов для работы на новых окружениям. Это значит что его зависимости от окружения и других пакетов должны быть явно прописаны в формате понятном принятым инструментарием. В случае Node.js проекта, этим инструментом будет `npm`, а форматом `package.json`.

- [npm init](https://docs.npmjs.com/cli/init)
- https://docs.npmjs.com/files/package.json
  - https://docs.npmjs.com/files/package.json#dependencies для задания зависимостей
  - https://docs.npmjs.com/files/package.json#scripts для задания команды запуска (среди прочего)

## Тестирование сервера

Нужно ли говорить о необходимости автоматического тестирования?

- https://github.com/visionmedia/supertest для express
  - hapi.js тоже можно тестировать этим методом, но у них есть и своё решение
- https://github.com/dwyl/learn-hapi#testing-with-lab для hapi.js

## Контроль качества кода

- JSCS
- ESLint

Найдите эти инструменты и научитесь ими пользоваться.

Пример:
- https://github.com/grsu/web-dev/issues/85#issuecomment-192405633
- https://github.com/Stelmashenko-A/Timetable/pull/8

## Вторая веха: скоро...
