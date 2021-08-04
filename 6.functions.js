// Обьявление функций(function declaration)
//important!: Вызвать такую функцию можно как до так и после обьявления самой функции!!!
//function(параметр, параметр, ...) {тело функции}

function showMessage(myName, myMessage) {
  //Обьявление функции
  console.log(`${myName}, ${myMessage} my friend`); //вывод приветствия
}

showMessage('Lora', 'Hello'); //вызов функции
//Warning!: Переменная обьявленная внутри функции обьявляется локальной, за пределом функции не видна

function showAge() {
  let myAge = 22; // обьявление локальной переменной
}
console.log(myAge); //Ошибка "myAge is not defined"

//* Директива return
// important: директива return используется для вывода результата работы функции. Когда код встречает return, функция возвращает результат и код дальше не выполняется

//* Функциональные выражения(Function Expression)
//important: Вызвать такую функцию можно только после important
const showAge = function (age) {
  console.log(`My age is ${age}`);
};

showAge(18);

// Arrow(стрелочная функция)

//const имя переменной = (параметр, параметр, ...) => тело функции
const showMessage = (myName, myMessage) => `${myName} ${myMessage} my friend`;
console.log(showMessage('Waydi', 'Hello'));
// Для многострочной функции нужны фигурные {} скобки
const showMessage = (myName, myMessage) => {
  return `${myName}, ${myMessage} my friend`;
};

console.log(showMessage('Waydi', 'Hello'));
