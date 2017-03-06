# Тема 2. Использование MVC архитектуры при разработке веб-приложений

## Проблема

Перед разработчиком стоят следующие проблемы:
- как структурировать код: на какие компоненты разбивать?

Желаемые качества
- повысить возможность повторного использования
- иметь возможность горизонтального масштабирования
- упростить разработку
- иметь возможность реализации новых требований

## Designing systems for change

Additional reading:

- [Using Design Pattern for Micro Level Software Design](http://www.delving.in/q4.pdf)

## Проблема, цель и назначение

- цель в отделении бизнес-логики (модели) от её визуализации (представления)
  - повышается возможность повторного использования ([Википедия][mvc-ru-wiki])
  - задачи
    -

## Основополагающие шаблоны проектирования

- Mediator
- Наблюдатель (Observer)
- Команда (Command)
- Стратегия
- Компоновщик
  - для возможности однотипного обращения с подобъектами сложно-составного иерархического вида
- Фабричный метод
  - позволит задать по умолчанию тип контроллера для соответствующего вида

## MVC (Model-View-Controller)

Это ...
- архитектура
- схема использования нескольких шаблонов проектирования ([Википедия][mvc-ru-wiki])
- шаблон проектирования ([RSDN][rsdn-mvc])
- концепция ([Википедия][mvc-ru-wiki])

Составляющие части:
- концепция
- идея
- элементы (Википедия) или компоненты?
  - роль каждого
  - конкретика связей между ними


## Модель (Model)

- данные приложения ([RSDN][rsdn-mvc])
  - объект
- предоставляет данные предметной области представлению
- реагирует на команды контроллера, изменяя свое состояние

Модификации
- пассивная модель
  - express реализует пассивную модель? см. _Наиболее частые ошибки_ в Википедии
- активная модель
  - классическая реализация

## Представление (View)

- пользовательский интерфейс ([RSDN][rsdn-mvc])
- отвечает за отображение данных предметной области (модели) пользователю, реагируя на изменения модели
- также именуется _вид_
- представление **выбирает** нужный контроллер
  - Стратегия
  - шаблок команда (Command)

## Контроллер (Controller)

- управляющая логика ([RSDN][rsdn-mvc])
- интерпретирует действия пользователя, оповещая модель о необходимости изменений
- controller _manipulates_ or _notifies_ model?

## JSP model 2 architecture

- https://en.wikipedia.org/wiki/JSP_model_2_architecture

## Model-View-ViewModel

## Model-View-Presenter

## Общие сведения о MVC-фрэймворках в node.js

* connect
* express
*   http://mcavage.me/node-restify/

    * https://github.com/mcavage/node-restify
    *

### Sails.js | Realtime MVC Framework for Node.js

### Adonis - Nodejs MVC Framework

### Locomotive - Powerful MVC web framework for Node.js

### Geddy | The original MVC Web framework for Node

- http://geddyjs.org/

### Sleek.js | MVC Framework for Node.js

### Matador

- https://github.com/Medium/matador

## Общие сведения о MVC-фреймворках для PHP

- Laravel

## Laravel

- https://en.wikipedia.org/wiki/Laravel
- http://laravelbook.com/laravel-architecture/
- https://laravel.com/docs/5.2/lifecycle and others from _Architecture Foundations_

---

[mvc-ru-wiki]: https://ru.wikipedia.org/wiki/Model-View-Controller
[rsdn-mvc]: http://rsdn.ru/?article/patterns/generic-mvc.xml

## Литература

- [Scaling Isomorphic Javascript Code](http://blog.nodejitsu.com/scaling-isomorphic-javascript-code/)
  - о недостатках MVC и о решениях к которым подталкивает JavaScript, как язык способный исполняться и на клиенте и на сервере.
- [Разделение визуализации и бизнес-логики][разделение-wikiversity]
  - рассматривается несостоятельность пассивной модели
- http://nodeframework.com/
  - ссылочно-справочный материал по фреймворкам для Node.js
- http://www.isa.ru/jitcs/images/stories/2009/02/44_50.pdf

[разделение-wikiversity]: https://ru.wikiversity.org/wiki/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2%D0%B8%D0%B7%D1%83%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8_%D0%B8_%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BB%D0%BE%D0%B3%D0%B8%D0%BA%D0%B8
