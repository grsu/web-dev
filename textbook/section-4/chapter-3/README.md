# Понятие REST

_Разделл 4. Тема 3._

* Описание архитектуры REST и её основных концепций.
* Понятие ресурса.
* Общие сведения о разработке REST API.

## Описание архитектуры REST и её основных концепций

* [Architectural Styles and the Design of Network-based Software Architectures][fielding]
* _The World Wide Web has succeeded in large part because its software architecture has been designed to meet the needs of an Internet-scale distributed hypermedia system. The Web has been iteratively developed over the past ten years through a series of modifications to the standards that define its architecture. In order to identify those aspects of the Web that needed improvement and avoid undesirable modifications, a model for the modern Web architecture was needed to guide its design, definition, and deployment._
* REST придаёт особое значение (см. _Abstract of the Dissertation_)
    * масштабируемости взаимодействий между компонентами (scalability of component interactions),
    * общности интерфейсов (generality of interfaces),
    * независимому размещению компонентов (independent deployment of components),
    * and intermediary components to reduce interaction latency, enforce security, and encapsulate legacy systems.
* Introduction
    * _[...] consider how often we see software projects begin with adoption of the latest fad in architectural design, and only later discover whether or not the system requirements call for such an architecture. Design-by-buzzword is a common occurrence. At least some of this behavior within the software industry is due to a lack of understanding of why **a given set of architectural constraints is useful**._

[fielding]: https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm

---

Книги по REST:

* [REST API Design Rulebook](http://shop.oreilly.com/product/0636920021575.do)

---

## SOA

* http://stackoverflow.com/questions/10105093/service-oriented-architecture-suggestions

## JSON API

* http://jsonapi.org/
