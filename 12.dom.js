//Dom(обьектная модель документа)
//Dom представляет документ как иерархическое дерево элементов позволяя добавлять удалять и изменять отдельные части страницы
<html>
  <head>
    <title>Simple page</title>
  </head>
  <body>
    <p> Hello </p>
  </body>
</html>;
// Обращение к элементам DOM представляется в JS c помощью глобального обьекта document
const originalTitle = document.title; // Возвращает simple page
// Задание заголовка документа

document.title = 'New page title'; //Новый заголовок страницы

// Получение полного url адреса

const url = document.url;

// Получение элементов
// Метод getElementById
// Принимает идентификатор элемента который нужно получить и возвращает этот элемент или null если его не существует

<div id="myDiv">some text</div>;

//Этот элемент можно получить следующим образом:
const div = document.getElementById('myDiv'); //Получение ссылки на div

// Метод querySelector
// Принимает Css запрос и возвращает первый соответствующий ему документ, Либо значение null если  таковой не найден

document.querySelector('div');
document.querySelector('.block');

//Метод querySelectorAll
//Принимает CSS запрос и возвращает массив со всеми свойствами

document.querySelectorAll('.block');

// Метод getElementsByClassName
// принимает строку с одним или несколькими именами классов и возвращает массив

document.getElementsByClassName('class');

// Свойство classList
// Это св-во специально для добавления, удаления либо замены имен классов
// У него есть дополнительные методы
// add - добавляет класс
// contains - указывает, есть ли  указанный класс в элементе
// remove - удаляет класс
// toggle - удаляет класс, если он уже есть, и добавляет, если отсутствует

const block = document.querySelector('.root');
block.classList.add('param');

// Стили и их изменение при помощи JS
// у любого html документа есть св-во style доступное с помощью js
// каждое css св-во можно определить либо переопределить при помощи обращения к св-ву style элемента
// св-ва которые в css пишутся через дефис, в js использутся через camelCase
// backgtound-color ==> backgroundColor

const block = document.quarySelector('.root');
block.style.color = 'red';
block.style.textTransform = 'uppercase';

//создание Элементов
// Элементы можно создавать с помощью метода document.createElement(), который принимает имя тега созданного элемента

const div = document.createElement('div');

// Добавление элемента
// Методы добавления

// block.append() - добавляет узлы или строки в конец block
// block.prepend() - вставляет узлы или строки в начало block
// block.before() - вставляет узлы или строки до блока
// block.after() - вставлеяет узлы или строки после блока
// block.replaceWith() - заменяет block заданными узлами

// Св-во innerHTML
// устанавливает или получает разметку дочерних элементов

block.innerHTML = '<p>Test</p>';

// Удаление узлов
block.remove();
gi;
