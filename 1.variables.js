console.log("Hello World!")
// let - обьявление переменной
// important: имя переменной может содержать только буквы, цифры и символы($ и _)
// important: 1 символ не должен быть цифрой, нельзя исп. зарезерв. слова
let age;
let myAge123;
let $age;
let _color;

// error: Неверное определение переменной
// let 123age;
// let let;
// let my-age#;
// let break;

// * const
// Обьявление констант
const myAge = 15;
// camelCase - горбатый ругистр:
//каждое новое слово кроме первой буквы пишется с большой буквы.

let myName
let myLifeStyle

//Присваивание
let myFullName = 'IvanovIvan';
let hisFullName
hisFullName = 'PetrovPetr'
let myFakeAge = 555;
myFakeAge = 26;

//Область видимости переменной 
//important: Область видимости переменной находится в пределах блока инструкциeй {}

function showMyAge() {              // блок инструкций
    let myAge = 18;                 // переменная определена внутри блока
    console.log(myAge);             // возвращает 18
}

console.log(myAge);                  // Ошибка age is not definned

//warning: Если переменная внутри и снаружи блока имеют одно название, они работают отдельно друг от друга

let myAgeReal = 22;  //переменная обьявлена за пределами блока-инструкции
function showMyAge() {
    let myAge = 18; //Переменная обьявлена внутри блока инструкции, область видимости ограничена
    console.log(myAge);
}
console.log(myAgeReal);

let admin;
let adminName = 'Fedor';
admin = adminName;
console.log(admin)
