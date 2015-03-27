# Тема 1. Жизненный цикл и модель клиентской части веб-приложения.

*   Использование HTML, CSS и JavaScript для разработки клиентской части
    веб-приложения.
*   Общие сведения о вёрстке HTML.
*   CSS-фрэймворки.
*   DOM.
*   JavaScript-фрэймворки и библиотеки.
*   Валидация данных.
*   Интерактивное взаимодействие с пользователем.
*   Обработка ошибок.
*   Ненавязчивый JavaScript.

## Использование HTML, CSS и JavaScript для разработки клиентской части веб-приложения

Начать введение со среды, в которой работает клиентская часть. Объяснить суть подхода Mobile First.

<blockquote class="twitter-tweet" lang="en"><p>I tried to make an &quot;end credits&quot; slide w/ IE-only APIs not in Project Spartan that scrolls while I talk. The list was so long it crashed PPT</p>&mdash; Jacob Rossi (@jacobrossi) <a href="https://twitter.com/jacobrossi/status/580253880690208768">March 24, 2015</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p>Slides of my <a href="https://twitter.com/hashtag/mobilism?src=hash">#mobilism</a> presentation are online at <a href="http://t.co/5NfIO4bwrF">http://t.co/5NfIO4bwrF</a></p>&mdash; Peter-Paul Koch (@ppk) <a href="https://twitter.com/ppk/status/581400550417285120">March 27, 2015</a></blockquote>

## Общие сведения о вёрстке HTML

Рассмотреть различные подходы к вёрстке в исторической перспективе.

* табличная (используя структуру таблицы с рядами и ячейками, `<table>`, `<tr>`, `<td>`)
* блочная (с заданием структы через блоки и их взаимное позиционирование, `<div>`)
* flexbox
 
Структура таблицы проста в визуальном понимании. Позволяет быстро построить макет. Но имеет ряд недостатков:

* таблица отображается на экране только после разбора закрывающего тега `</table>`, что создаёт временную задержку в показе содержания
* сложный макет с перекрывающимися элементами нереализуем в табличной вёрстке
* таблица не позволяет произвести изменения визуальной компоновки в зависимости от размеров viewport
 
Для самостоятельно изучения прочитать http://learnlayout.com/.

Рассказать о viewport.

## Ресурсы для самостоятельного изучения

### Конспект по курсу 2013 года

* [Использование HTML, CSS и JavaScript для разработки клиентской части веб-приложения. Общие сведения о вёрстке HTML. CSS-фрэймворки](http://web.archive.org/web/20130613204421/http://milko.by/10-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81)
* [DOM. JavaScript-фрэймворки и библиотеки. Валидация данных. Интерактивное взаимодействие с пользователем. Обработка ошибок](http://web.archive.org/web/20130613233109/http://milko.by/11-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81)
* [Ненавязчивый JavaScript](http://web.archive.org/web/20130609231134/http://milko.by/12-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81)

### Mobile First

1. [Mobile - Table of contents](http://www.quirksmode.org/mobile/) by Peter-Paul Koch
2. [Mobile First book](http://www.lukew.com/resources/mobile_first.asp) by Luke Wroblewski (October 2011)

### Viewport

1. [Surveying the viewport][] article by George Gooding (October 2014)
2. [Configuring the Viewport][] section in Safari Web Content Guide (привет из июня 2005).
2. [Using the viewport meta tag to control layout on mobile browsers][] at MDN.
3. [Configure the Viewport][] in the PageSpeed Insights at Google Developers.
4. [Что такое Viewport, как он работает и для чего вообще нужен][viewport-frontender] на frontender.com.ua.
5. [Device Adaptation](https://msdn.microsoft.com/en-us/library/ie/hh869463(v=vs.85).aspx) section at MSDN.

[Surveying the viewport]: http://www.epinova.no/blog/george-gooding/dates/2014/10/surveying-the-viewport/
[Configuring the Viewport]: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html
[Using the viewport meta tag to control layout on mobile browsers]: https://developer.mozilla.org/en/docs/Mozilla/Mobile/Viewport_meta_tag
[Configure the Viewport]: https://developers.google.com/speed/docs/insights/ConfigureViewport
[viewport-frontender]: http://frontender.com.ua/mobile-web/wtf-viewport/

## Инструментарий

1. [http://htmlpreview.github.io/](https://github.com/htmlpreview/htmlpreview.github.com)
