/*
// *1
Попробуйте назначить обработчик события на загрузку страницы.После - на скролл
 */

let mainTag = document.querySelector('main');
window.addEventListener('load', function () {
  console.log('Page has been successfully loaded');
});
let list = document.createElement('ol');
list.classList.add('list');
mainTag.prepend(list);
list.style.width = '100px';
list.style.height = '100px';
list.style.overflow = 'scroll';
for (let i = 1; i < 20; i++) {
  let listItem = document.createElement('ul');
  listItem.classList.add('listItem');
  listItem.innerHTML = 'Hello Test';
  list.append(listItem);
}
list.addEventListener('scroll', function () {
  console.log('User used the scroll bar');
});

/*
// *2
попробуем при помощи обработчика событий скрывать выпадающее меню при наведении на любой из элементов навигации (пункты меню).
 */
let menu = document.querySelector('.mmenuu');
let menuElem = document.querySelector('.ssubmenuu__item');
menuElem.addEventListener('mouseover', function () {
  menu.style.visibility = 'hidden';
});
console.log(menuElem);

/*3
Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько угодно раз. При нажатии кнопки удалить - удаляется последний добавленный элемент.
 */

let mainTag = document.querySelector('main');
for (let i = 0; i < 2; i++) {
  let btn = document.createElement('button');
  btn.classList.add('button');
  mainTag.append(btn);
}
let btnsCollection = document.querySelectorAll('.button');
btnsCollection[0].innerHTML = 'Добавить';
btnsCollection[0].classList.add('button__add');
btnsCollection[1].innerHTML = 'Удалить';
btnsCollection[1].classList.add('button__remove');
let btnAdd = document.querySelector('.button__add');
let btnRemove = document.querySelector('.button__remove');

let manageText = (text, button1, button2) => {
  button1.addEventListener('click', function () {
    let addedText = document.createElement('p');
    addedText.innerHTML = text;
    addedText.classList.add('some-text');
    mainTag.append(addedText);
  });
  button2.addEventListener('click', function () {
    let textCollection = document.getElementsByClassName('some-text');
    if (textCollection.length > 0) {
      textCollection[textCollection.length - 1].remove();
    }
  });
};

manageText('hello', btnAdd, btnRemove);

/*3
Создание геометрических фигур

Реализовать функцию drawFigure, которая принимает в качестве аргументов: название геометрической фигуры, цвет заливки, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши, например круг - Q, квадрат - W и тд
 
Пример использования: drawFigure(‘круг’, ‘red’, 100, 200, 40); // рисует красный круг с радиусом 40px и на расстоянии 100px от верхнего 200px от левого края 

 */

let mainTag = document.querySelector('main');

let drawFigure = (shape, backgroundColor, positionTop, positionLeft, circleRadius, squareSide, rectangleHeight, rectangleWidth) => {
  let elem = document.createElement('div');
  elem.style.backgroundColor = backgroundColor;
  elem.style.position = 'relative';
  elem.style.top = positionTop + 'px';
  elem.style.left = positionLeft + 'px';
  if (shape === 'circle') {
    elem.style.height = '100px';
    elem.style.width = '100px';
    elem.style.borderRadius = circleRadius + 'px';
    document.addEventListener('keydown', function (event) {
      if (event.code === 'KeyQ') {
        mainTag.append(elem);
      }
    });
  } else if (shape === 'square') {
    elem.style.height = squareSide + 'px';
    elem.style.width = squareSide + 'px';
    document.addEventListener('keydown', function (event) {
      if (event.code === 'KeyW') {
        mainTag.append(elem);
        console.log('pizdec');
      }
    });
  } else if (shape === 'rectangle') {
    elem.style.height = rectangleHeight + 'px';
    elem.style.width = rectangleWidth + 'px';
    document.addEventListener('keydown', function (event) {
      if (event.code === 'KeyR') {
        mainTag.append(elem);
      }
    });
  }
};

drawFigure('circle', 'red', 100, 200, 40);
drawFigure('square', 'red', 100, 200, 40, 100);
drawFigure('rectangle', 'red', 100, 200, 40, 100, 50, 100);
