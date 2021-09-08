/** 
// * 1
// 1. Найти в документе элемент с id “my-first-elem”
2. Найти все элементы с классом “container”
3. Найти первый элемент с классом “wrapper”
4. Найти первые 2 элемента с классом “element”
 */

const firstElem = document.getElementById('my-first-elem');
console.log(firstElem);
const container = document.querySelectorAll('.container');
console.log(container);
const firstWrapper = document.querySelector('.wrapper');
console.log(firstWrapper);
const elems = document.querySelectorAll('.element');
const firstTwoElemsArr = Array.from(elems).filter((item, index) => index <= 1);
console.log(firstTwoElemsArr);

/** 
// * 2
Задание 1
Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”,
после него вставьте div с классом “alert” и с текстом “А это сообщение об
ошибке” с красным фоном, белым текстом и полями (padding) размером 20px
 */

let textDiv = document.createElement('p');
textDiv.classList.add('text');
textDiv.innerHTML = 'Это всего лишь текст';
let tagMain = document.querySelector('main');
tagMain.append(textDiv);
let alertDiv = document.createElement('div');
alertDiv.classList.add('alert');
alertDiv.innerHTML = 'А это сообщение об ошибке';
alertDiv.style.backgroundColor = 'red';
alertDiv.style.color = 'white';
alertDiv.style.padding = '20px';
textDiv.after(alertDiv);

/** 
// * 3
Создать список элементов с помощью тега <ol> со значениями из массива
строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
"Sergey", "Ivan", "Alan"]
Каждый четный элемент должен иметь css класс “even” и иметь зеленый
фон, а нечетный - “odd” и иметь синий фон.
*Если это пользователь, у которого в имени встречаются минимум 2
одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста
должен стать белым.
 */

let usersArr = ['Viktor', 'Tatiana', 'Eduard', 'Michael', 'Denis', 'Peter', 'Ann', 'Dmitry', 'Sergey', 'Ivan', 'Alan'];

function makeList(array) {
  let mainTag = document.querySelector('main');
  let usersList = document.createElement('ol');
  usersList.classList.add('usersList');
  mainTag.prepend(usersList);
  array.forEach((item, index) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    if ((index + 1) % 2 === 0) {
      listItem.classList.add('even');
      listItem.style.backgroundColor = 'green';
    } else {
      listItem.classList.add('odd');
      listItem.style.backgroundColor = 'blue';
    }
    let itemSeparatedLettersArr = item.split('');
    let lowercaseFirstLetterArr = itemSeparatedLettersArr.map((item, index, array) => {
      return item.toUpperCase();
    });
    let setUsers = new Set(lowercaseFirstLetterArr);
    if (setUsers.size !== itemSeparatedLettersArr.length) {
      listItem.style.color = 'white';
    }
    usersList.append(listItem);
  });
}

makeList(usersArr);

/*
// *4
Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на
странице с указанными аргументами: текст сообщения, цвет фона сообщения, положение от
верхнего края страницы (css свойство top) и положение от левого края страницы (css свойство left)
Пример вызова функции: showMessage(“Всем привет”, ‘yellow’, 100, 50);
Примечание: Задать для .message позиционирование fixed, для корректного расчета положения сообщения
* Количество сообщений на странице не может быть больше 3-х. Если на странице 3 сообщения и
мы вызываем showMessage(), то 1 сообщение необходимо удалить, а 2,3 и 4 должны остаться.
** Необходимо проверить, есть ли у нас уже на странице сообщение в таких же координатах (такие
же и top, и left). Если есть - занять позицию +25px left и top. Если и в этот раз у нас имеется
сообщение в данной позиции - повторять процедуру, пока не найдем свободное место.
 */

let showMessage = (message, backgroundColor, positionTop, positionLeft) => {
  let mainTag = document.querySelector('main');
  let messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.innerHTML = `${message}`;
  messageDiv.style.backgroundColor = `${backgroundColor}`;
  messageDiv.style.position = 'fixed';
  messageDiv.style.left = `${positionLeft + 'px'}`;
  messageDiv.style.top = `${positionTop + 'px'}`;
  mainTag.append(messageDiv);
  let messages = document.querySelectorAll('.message');

  if (messages.length > 3) {
    messages[0].remove();
  }
  for (let i = 1; i < messages.length; i++) {
    if (messages[i].style.left === messages[i - 1].style.left && messages[i].style.top === messages[i - 1].style.top) {
      messages[i].style.left = `${parseInt(messages[i - 1].style.left) + 25 + 'px'}`;
      messages[i].style.top = `${parseInt(messages[i - 1].style.left) + 25 + 'px'}`;
    } else if (messages[i].style.left === messageDiv.style.left && messages[i].style.top === messageDiv.style.top) {
      messages[i].style.left = `${parseInt(messages[i - 1].style.left) + 25 + 'px'}`;
      messages[i].style.top = `${parseInt(messages[i - 1].style.left) + 25 + 'px'}`;
    }
  }
};

showMessage('Hello', 'red', 100, 100);
showMessage('Hello', 'red', 100, 100);
showMessage('Hello', 'red', 100, 100);
showMessage('Hello', 'red', 100, 100);

/** 
Задание 5
Динамическое создание списка
● Запрашивайте число у пользователя с помощью prompt.
● Создавайте элемент <li> и добавляйте его к <ul>.
● Каждый следующий элемент <li> списка должен должен иметь значение суммы всех предыдущих элементов +
введенного значения
● Процесс прерывается, когда пользователь нажимает Esc, вводит пустую строку или не числовое значение
Все элементы должны создаваться динамически.
 Например, пользователь ввел 3, затем 5, затем 9, затем 15, затем 1, а затем нажал esc (или ввели не число), тогда на
странице должно быть:
<ul>
 <li>3</li> 3
 <li>8</li> // 3 + 5
 <li>20</li> // 3 + 8 + 9
 <li>46</li> // 3 + 8 + 20 + 15
 <li>78</li> // 3 + 8 + 20 + 46 + 1
</ul>
 */
let numsArr = [];
for (let i = 0; ; i++) {
  let number = prompt('Enter a number');
  if (number === null || number === '' || isNaN(+number)) {
    break;
  } else {
    numsArr.push(+number);
  }
}

let makeList = (arr) => {
  let mainTag = document.querySelector('main');
  let numsList = document.createElement('ul');
  mainTag.prepend(numsList);
  let countedArr = [];
  let result = arr.reduce(function (sum, elem) {
    countedArr.push(sum + elem);
    return sum + elem;
  }, 0);
  console.log(countedArr);
  countedArr.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    numsList.append(listItem);
  });
};

makeList(numsArr);
