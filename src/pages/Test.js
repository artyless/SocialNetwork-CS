import React from 'react'

export function test() {
  return (
  <>
    <h1>Test page</h1>
    <h2>Короче сайт типа в разработке а это его временная тестовая страница</h2>
    <h3>В принципе я могу писать сюда что было сделано/исправлено:</h3>
    <h4>Коммит 18.03.2021</h4>
    <ul>
      <li>Исправлен некорректный перенос вакансии/резюме на 2 отдельные части при большом масштабировании</li>
      <li>Теперь на тестовой странице будет список проделанной работы на каждом коммите/деплое</li>
      <li>Вакансии: Сделаны циклы для вывода тегов и условий, поступающих с бэка</li>
      <li>Вакансии: Были написаны разные вакансии. Теперь происходит автоматическая генерация по шаблонам. Можно увидеть что будет при переполнении окна описания - появляется область прокрутки</li>
      <li>Вакансии: Добавлены изображения компании</li>
      <li>Вакансии: Исправлена вертикальная линия (разделитель)</li>
    </ul>
  </>
  )
}
