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

console.log(party); // возвращает ['Solo', 'Dread', 'Nexus', 'NS']

// ** shift - удаление первого элемента в массиве
// important: второй элемент становится первым
let party = ['Solo', 'Dread', 'Nexus'];
party.shift();
console.log(party); // возвращает ['Dread', 'Nexus']

// ** pop - удаление последнего элемента в массиве
let party = ['Solo', 'Dread', 'Nexus'];
party.pop();
console.log(party); // возвращает ['Solo', 'Dread']

// ** unshift - добавление элемента в начало массива
let party = ['Solo', 'Dread', 'Nexus'];
party.unshift('NS', 'Flesh');
console.log(party); // возвращает ['NS', 'Flesh', 'Solo', 'Dread', 'Nexus']

// Редактирование элементов массивов
// Метод Splice. Important!: Позволяет удалять добавлять и изменять элементы массива
//Warning! Метод splice изменяет исходный массив

//Удаление элемента
let party = ['Solo', 'Dread', 'Nexus'];
//party.splice(индекс, количество элементов)
//Начиная с первой позиции удаляет 1 элемент
console.log(party); //Возвращает массив ['Solo', 'Nexus']
//Warning: Так же можно использовать отрицательные значения метода splice
let party = ['Solo', 'Dread', 'Nexus'];
party.splice(-1, 1); //Начиная с первой позиции с конца

//Метод Slice. Important: Создает новый массив который дублирует часть изначального массива, либо весь массив

// Копирование части массива
// Party.slice(индекс начальной позиции, индекс конечной позиции не включая)
let newParty = party.slice(1, 2); //Копирует с 1 позиции до второй(не включая)
console.log(newParty); //Возвращает [Dread]
//Warning!: Можно использовать отрицательные значения, отсчет будет идти справа налево

let party = ['Solo', 'Dread', 'NS', 'Nexus'];
let newParty = party.slice(1, -1); // Копирует с первой до последней(не включая) позиции
console.log(newParty); // Возвращает ['Dread', 'NS']

let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.slice(); //Не принимая значений, копирует весь массив
console.log(newParty); // Возвращает ['Solo', 'Dread', 'Nexus']

// Метод Concat. Important!: Создает дубль массива, может дополнять новыми значениями
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.concat('Flash'); //Создает новый массив копируя все значения и добавляет новое в конец
console.log(newParty); //['Solo', 'Dread', 'Nexus', 'Flash']
// Important!: Аналогичный результат но с использованием Spread
let newParty = [...party, 'Flash'];
console.log(newParty); //['Solo', 'Dread', 'Nexus', 'Flash']

//Метод Sort. Important!: Сортирует массив меняя в нем порядок элементов
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
console.log(party.sort()); // Возвращает по алфавиту. [ 'Dread', 'NS', 'Nexus', 'Solo']

//warning!: Для сортировки можно использовать стрелочную функцию
let numberArr = [1, 4, 2, 5, 3];
console.log(numberArr.sort((a, b) => a - b)); // Стрелочная функция - теорема для метода Sort

//Метод reverse. Important!: Меняет порядок в массиве на обратный
let party = ['Solo', 'Dread', 'Nexus'];
console.log(party.reverse()); //Возвращает ['Nexus','Dread', 'Solo']

//Метод map. Imporant!: Вызывает функцию для каждого элемента массива и возвращает НОВЫЙ МАССИВ(и ничего больше) с результатом выполнентя функции
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
//party.map((элемент массива, индекс, сам массив) => {});
let newArray = party.map((item) => item[0]); // Возвращает 1(0 индекс) букву каждого элемента массива
console.log(newArray); // Возвращает ['S', 'D', 'N', 'N']

//Метод Split- преобразует строку в массив по заданному разделителю
let stringParty = 'Solo,Dread,Nexus'; // Строка из слов разделенная запятой
let arrayParty = stringParty.split(','); //Запятая является разделителем
console.log(arrayParty); //Возвращает массив ["Solo", "Dread", "Nexus"]

//Warning: Можно ограничить количество элементов, которые попадут в Массив

let stringParty = 'Solo, Dread, Nexus';
let arrayParty = stringParty.split(',', 2); // Запятая, является разделителемЮ 2 элемента попадут в новый массив
console.log(arrayParty); //Возвращает массив ["Solo", "Dread"]

let party = ['Solo', 'Dread', 'Nexus'];
let stringParty = arrayParty.join(';'); // Точка с запятой является разделителем
console.log(stringParty); //Возвращает строку 'Solo;Dread;Nexus'

//Проверка
//Warning: Массив не является отдельным типом данных, значит typeof выдаст тип object
//Important!: Проверить, что массив является массивов можно с помощью Array.isArray()
