//* Strings - Что бы переменная вернула string, значение должно быть заключено в ковычки
// Warning! - Обратные ковычки позволяют встраивать строку в дополнительный функционал
let myName = 'Ivan';
let myAge = 22;
console.log(`Hello i am ${myName}, my age is ${myAge}`);
//Строковое преобразование: С помощью функции String()
let myAge = 22; // Number
let myTrue = true; // Boolean
console.log(myAge); // возвращает число
console.log(typeof myAge); // возвращает Number
console.log(myTrue); // возвращает True
console.log(typeof myTrue); // возвращает Boolean

myAge = String(myAge); // возвращает '22', строку
myTrue = String(myTrue); // возвращает 'True'. строку

//*Работа с символами строки
//*Свойство length - позволяет получить длину строки, возвращает количество символов
let parrot = '38 попугаев';
console.log(parrot.length); //Возвращает число 11(длину строки)

// Получение символа по индексу - индексация символов нначинается с 0!!!
let parrot = '38 попугаев';
console.log(parrot[3]);
// important!: Если нужно получить  последний символ произвольной строки
let parrot = '38 попугаев';
console.log(parrot[parrot.length - 1]); // возвращает 'в'

// Изменение регистра. toUpperCase() позволяет изменить регистр на верхний(большие буквы)
let parrot = '38 попугаев';
console.log(parrot.toUpperCase()); // возвращает '38 ПОПУГАЕВ'
// Изменение регистра. toLowerCase() позволяет изменить регистр на нижний( маленькие буквы)
let parrot = '38 ПоПуГаев';
console.log(parrot.toLowerCase()); // возвращает '38 попугаев'

// Поиск в строке - .IndexOf(substring, position).
// .IndexOf(текст подстроки, позиция). Возвращает -1 если совпадений не найдено.
let parrot = '38 попугаев';
console.log(parrot.indexOf('попуг')); // возвращает 3(позиция с которой начинается совпадение)
console.log(parrot.indexOf('попуг', 6)); // возвращает -1(Совпадений не найдено, так как мы начали искать с 6 позиции согласно второму аргументу(6))

// .includes(substing, position)
// .includes(текст подстроки, позиция) Возвращает true если есть совпадение, false- если нет совпадений

let parrot = '38 попугаев';
console.log(parrot.includes('попуг')); // возвр. true, есть совпадения
console.log(parrot.includes('попуг', 6)); // возвр false, нет совпадений т.к с 6 позиции искали

// Метод slice(start, end)- возвращает строку со start(включая) до end(не включая)
let parrot = '38 попугаев';
console.log(parrot.slice(3)); // возвращает 'попугаев'
console.log(parrot.slice(1, -1)); //возвращает '8 попугае'
