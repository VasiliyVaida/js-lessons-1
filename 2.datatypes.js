undefined; //Неопределенный тип important: Переменная вернет undefined если она была обьявлена но не определена
null; //представляет собой ничего(или пустое место) important: Переменная возвращающая null определена но ее значение пустое. Тип данных null содержит только одно значение, это null. Warning: оператор typeof вщзвращает тип данных object
Boolean; // Boolean может принимать 2 значения: True-истина False-ложь. Логический тип. important: Можно использовать для проверки.
Number; // Числовой тип данных. important: Может принимать целые числа и числа с плавающей запятой.
BigInt; // числовой тип данных, может содержать числа произвольной длины
String; //Строковый тип данных. important: Что бы переменная вернула тип данных Stringб ее значение должно быть заключено в ковычки. Warning!: Одинарный и двойные ковычки являются простым. Между ними нет разницы в синтаксисе.
Symbol;
Object; // Обьект содержит более сложную структуру данных. important: Обьект может быть создан с помощью фигурных скобок и содержит набор необязательных свойств. Свойство состаит из пары ключ:значение, запятыми отделяются свойства между собой
Function;

let userName; // Переменная обьявлена, но не определена(не присвоено значение) Result = undefined
console.log(typeof userName); // Возвращает тип значения переменной

let trueOrFalse = 60 < 10;
console.log(trueOrFalse); //Возвращает False
let willYouMarryMe = true; // Переменная обьявлена
if (willYouMarryMe) {
  //Если условие выполняется, возвращается True
  console.log('Yes');
} else {
  console.log('No');
}

let myAge = 22;
let myHeigh = 1.79;
// warning: специальные значения infinity и -infinity
let getInfinity = 58 / 0;
let getMinusInfinity = -58 / 0;
console.log(getInfinity); //возвращает значение Infinity
console.log(typeof getInfinity); //возвращает number
//warning: Спец. значение NaN(not a number)
// результат неправильной математической оперции
let getNan = 'string' / 10; //деление строки на число
console.log(getNan); // возвращает Nan
console.log(typeof getNan); // возвращает number
//important: Nan уникальное значение и никогда не равно Nan
console.log(NaN === NaN); // возвращает False

let myName = 'Alex Ivanov'; // значение переменной заключено в одинарные ковычки
console.log(myName); // возвращает Alex Ivanov
console.log(typeof myName); // возвращает string
//warning!: Обратные ковычки позволяют встраивать в строку дополнительный функционал.
let myAge = 22;
let myName = 'Ivan';
console.log(`Hello, ${myName}! My age is ${myAge}`);

let myInfo = {
  name: 'Ivan',
  age: 22,
};
console.log(myInfo); // возвращает {name: 'Ivan', age: 22}
console.lof(typeof myInfo); //возвращает object

//* Преообразование типов
// important!: С помощью специальной функции string() можно изменить тип на строковую
let myAge = 22; // Числовой тип
let myTrue = true; // Boolean
console.log(myAge); // вернет 22 типа number
console.log(nyTrue); //вернет true, boolean
myAge = String(myAge); //Преобразование в string
myTrue = String(myTrue); // Преобразование в string
console.log(myAge); //вернет '22', string
console.log(myTrue); //вернет 'true', string

//* Численное преобразование
// Important!: С помощью функции Number() можно изменить тип данных на числовой

let myAge = '22'; //Тип данных string
console.log(myAge); // вернет '22', string
myAge = Number(myAge); //Преобразование в number
myAge = +myAge; // короткий вариант преобразование в number
//Warning!Если в строке нет чисел то результатом будет NaN
let myName = 'Ivan'; // Тип данных string
myName = +myName; //Преобразование в число
console.log(myName); //Возвращает NaN
console.log(typeof myName); //возвращает Number

//* Boolean
// important!: с помощью спец. функции Boolean() можно изменить тип данных на логический

let myAge = 22; //Числовой тип данных. Положительное число преобразуется в true
let myAge = 0; //0 возвращае False
let myAge = '0'; // строка вернет True
let myAge = ''; // пустая строка вернет False
let myAge = ' '; // Вернет True, так как строка не пустая
myAge = Boolean(myAge);
console.log(myAge);
let myAge = 0;
