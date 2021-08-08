// * 1
// todo: Найти гипотенузу прямоугольного треугольника по теореме Пифагора.

let calculateHypotenuse = (leg1, leg2) => {
  let hypotinuseSquared = leg1 ** 2 + leg2 ** 2;
  return Math.sqrt(hypotinuseSquared);
};

console.log(calculateHypotenuse(3, 4));

// * 2
// todo: Написать функцию, которая возвращает меньшее из чисел.
let numFirst = prompt('Enter the first number');
let numSecond = prompt('Enter the second number');
let findMin = (numFirst, numSecond) => {
  if (+numFirst < +numSecond) {
    return +numFirst;
  } else if (isNaN(numFirst) && isNaN(numSecond)) {
    return 'You enter aren`t numbers';
  } else if ((numFirst === null && numSecond === null) || (numFirst === '' && numSecond === '') || (numFirst === '' && numSecond === null) || (numFirst === null && numSecond === '')) {
    return 'Sorry, you didn`t enter anything';
  } else if (+numFirst === +numSecond) {
    return 'Sorry, it is equal numbers';
  } else {
    return +numSecond;
  }
};
// Math.min
alert(`Your smaller number is: ${findMin(numFirst, numSecond)}`);

// * 3
// todo: Написать функцию, которая возвращает чётное ли число.

let number = prompt('Enter a number');
let isEven = (number) => {
  if (number === null || number === '') {
    return 'Sorry, you didn`t enter anything';
  } else if (isNaN(number)) {
    return 'You enter isn`t a number';
  } else if (+number % 2 === 0) {
    return 'That number is even';
  } else {
    return 'That number isn`t even';
  }
};
alert(isEven(number));

// * 4
// todo: Написать функцию, которая удаляет первый и последний элемент строки.
let userString = prompt('Enter a word or sentence');
let deleteChar = (userString) => {
  return userString.slice(1, -1);
};

alert(deleteChar(userString));

// * 5
// todo: Написать функцию, которая делает первый символ строки заглавным, а остальные строчными.
let userStr = prompt('Enter a word or sentence');
let capitalize = (userStr) => {
  return userStr[0].toUpperCase() + userStr.slice(1);
};
console.log(capitalize(userStr));

// * 6
// todo: Напишите if..else, соответствующий следующему switch:

/*switch (browser) {
  case 'IE':
    alert('О, да у вас IE!');
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Да, и эти браузеры мы поддерживаем');
    break;
  default:
    alert('Мы надеемся, что и в вашем браузере все ок!');
}*/

let browser = prompt('Enter your browser');
if (browser === 'IE') {
  alert('O, you have IE!');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert('Yes, we hope that we support that browsers too');
} else {
  alert('We hope, that your browser is fine too');
}

/*Задание 0
Лизе нужно написать функцию sayHello(name), которая возвращает
приветствие для пользователя. Тем не менее, она влюблена в пользователя
с именем “Mark”, и хотела бы поприветствовать его немного иначе.
Помогите ей)
Пример вызовов:
sayHello(“Oleg”); // Hello, Oleg!
sayHello(“Viktor”); // Hello, Viktor!
sayHello(“Mark”); // Hi, Mark! */

let userName = prompt('Enter your name');
function sayHello(userName) {
  if (userName.toUpperCase() === 'MARK') {
    alert('Hi, Mark!');
  } else {
    alert(`Hello, ${userName[0].toUpperCase() + userName.slice(1)}`);
  }
}
sayHello(userName);

/*Задание 1
Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
Пример вызовов:
min(2, 5)
min(3, -1)
min(1, 1) */

let a = prompt('Enter the number A');
let b = prompt('Enter the number B');

function getNum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Comparsion isn`t possible';
  } else if (+a > +b) {
    return b;
  } else if (+a < +b) {
    return a;
  } else if (+a === +b) {
    return 'That numbers are equal';
  }
}

console.log(getNum(a, b));

/*Задание 2
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе
говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1
P.S. В этой задаче функция обязана поддерживать только натуральные
значения n, т.е. целые от 1 и выше. */

let x = +prompt('enter the number x');
let n = +prompt('enter the power of n');

function pow(x, n) {
  if (Number.isNaN(x) || Number.isNaN(n)) {
    return 'Calculation isn`t possible';
  } else {
    x = Math.round(x);
    n = Math.round(n);
    return Math.round(x) ** Math.round(n);
  }
}

console.log(pow(x, n));

/*Задание 5 “Этажи”
Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж,
и нет 13-го этажа (суеверия).
Напишите функцию convertFloor(floor), которая получает американский этаж
(передается как целое число), и возвращает реальный.
Кроме того, ваша функция должна работать и на подвальных этажах.
convertFloor(-1) // -1
convertFloor(2) // 3
convertFloor(2) // 3
convertFloor(0) // 1
convertFloor(12) // 13
convertFloor(14) // 14 */
let floorUSA = +prompt('Enter a floor');
function convertFloor(floorUSA) {
  let floorOriginal;
  if (floorUSA < 13) {
    floorOriginal = floorUSA + 1;
    return floorOriginal;
  } else if (floorUSA > 13) {
    floorOriginal = floorUSA;
    return floorOriginal;
  } else if (floorUSA === 13) {
    return 'Sorry, there is no 13 floor in the USA';
  } else {
    return 'Sorry, you`ve entered the incorrect number';
  }
}

console.log(convertFloor(floorUSA));

/*
Задание 6
Перепишите функцию
- заменив if else на конструкцию switch (convertType1)
- через Function Expression (convertType2)
- с помощью стрелочного синтаксиса (convertType3)

function convertType(value, toType) {
    if (toType === 'boolean') {
    return Boolean(value);
  } else if (toType === 'string') {
    return String(value);
  } else if (toType === 'number') {
    return Number(value);
  }
}
*/

function convertType1(value, toType) {
  switch (toType) {
    case 'boolean':
      return Boolean(value);
      break;
    case 'string':
      return String(value);
      break;
    case 'number':
      return Number(value);
      break;
  }
}

let convertType2 = function (value, toType) {
  if (toType === 'boolean') {
    return Boolean(value);
  } else if (toType === 'string') {
    return String(value);
  } else if (toType === 'number') {
    return Number(value);
  }
};

let convertType3 = (value, toType) => {
  if (toType === 'boolean') {
    return Boolean(value);
  } else if (toType === 'string') {
    return String(value);
  } else if (toType === 'number') {
    return Number(value);
  }
};

/*
Задание 7*
Написать функцию transformArray(arr, index1, index2, adding), принимающий
в качестве аргументов:
1) arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
2) index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно
поменять между собой местами (fpos и clfw нужно поменять местами)
3) adding - строка, которую необходимо дописать в конец к каждому элементу массива
и возвращающую массив с учетом указанных трансформаций.
Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно
вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]
*/
let arr = ['fngp', 'kgei', 'fpos', 'clfw'];
let adding = 'green';
let transformArray = (arr, index1, index2, adding) => {
  let result = [];
  for (let item of arr) {
    item = item + adding;
    result.push(item);
  }
  [result[index1], result[index2]] = [result[index2], result[index1]];
  return result;
};

console.log(transformArray(arr, 2, 3, adding));

/*Задание 8*
Нужно написать функцию, в которую мы передаем число, суммируем цифры
данного числа до тех пор, пока не останется одна цифра, вот так: */

let number = +prompt('Enter a number');

function summNumParts(number) {
  let transformNumber = String(number);
  let summParts = 0;
  for (let i = 0; i <= transformNumber.length - 1; i++) {
    summParts = summParts + +transformNumber[i];
  }
  return summParts;
}

console.log(summNumParts(number));
