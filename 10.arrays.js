// Обьявление массива
let newArray = newArray;
let newArray = [];
// important!: Заполняется массив через запятую
let newArray = [1, 2, 3];
let newArra = [1, 2, '3', true, false, function () {}];

// Получение значения

let newArray = [
  'Solo', //0я позиция
  'Dread', //1я позиция
  'Nexus', //2я позиция
  'NS', //3я позиция
];

console.log(newArray[0]); //Возвращает Solo
console.log(newArray[3]); //Возвращает NS
console.log(newArray[15]); //Возвращает undefined

// * Длина массива
// important!: Длина массива равна количеству элементов

let newArray = [
  'Solo', //0я позиция
  'Dread', //1я позиция
  'Nexus', //2я позиция
  'NS', //3я позиция
];

console.log(newArray.lenght); //Возвращает 4 (т.к 4 элемента)

// *Доступ к массиву

// **

const firstArray = [1, 2, 3, 4];

// warning: При присваивании массиву другой массив, копируется ссылка на него, а не его значение

const secondArray = firstArray; // присваивает ссылку на значение исходного массива. При изменении secondArray будет изменяться и firstArray

//important!: для того, что бы скопировать значение исходного массива, а не его ссылку, используется spread operator

const thirdArray = [...firstArray]; //spread - оператор. Копирует значение исходного массива firstArray

// Редактирование массива
//Изменение значений

let newArray = [
  'Solo', //0я позиция
  'Dread', //1я позиция
  'Nexus', //2я позиция
  'NS', //3я позиция
];

newArray[3] = 'Flash';
console.log(newArray); //возвращает ['Solo', 'Dread', 'Nexus', 'Flash']

//Добавление значений
newArray[4] = 'Хвост';
console.log(newArray); // ['Solo', 'Dread', 'Nexus', 'Flash', 'Хвост']

//Методы массивов
//push- добавление в массив
let party = ['Solo', 'Dread', 'Nexus'];
party.push('NS'); //возвращает ['Solo', 'Dread', 'Nexus', 'NS']
