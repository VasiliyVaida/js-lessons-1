/*1. Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (var i = 1; i <= 3; i++) {
    console.log('Номер ' + i + '!');
}
 */
let i = 1;
while (i <= 3) {
  console.log('Номер' + i + '!');
  i++;
}

/*2. Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его в консоль.
Добавьте в начало значения «Рэп» и «Регги».
Ожидаемые результаты на каждом шаге:
['Джаз', 'Блюз']
['Джаз', 'Блюз', 'Рок-н-Ролл']
['Джаз', 'Классика', 'Рок-н-Ролл']
['Классика', 'Рок-н-Ролл']
['Рэп', 'Регги', 'Классика', 'Рок-н-Ролл']
 */

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
console.log(styles);
styles[styles.length - 2] = 'Классика';
console.log(styles);
let firstValue = styles.splice(0, 1);
console.log(styles);
console.log(firstValue);
styles.unshift('Рэп', 'Рэгги');
console.log(styles);

/*3. Написать функцию, которая возвращает последний элемент массива.
 */

let arr = [1, 2, 3, 4, 5, 6];

let lastElem = (arr) => {
  return arr[arr.length - 1];
};

console.log(lastElem(arr));

/*4. Напишите код, который запрашивает по очереди значения при помощи prompt и сохраняет их в массиве. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена». При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива.

 */

let userArr = [];

for (let i = 0; ; i++) {
  let userNum = prompt('Enter a number');
  if (userNum !== null && userNum !== '' && !isNaN(userNum)) {
    userArr.push(+userNum);
  } else {
    break;
  }
}
console.log(userArr);
let numbersSumm = 0;
for (let point of userArr) {
  numbersSumm += point;
}

console.log(numbersSumm);

/*5. Написать функцию, которая принимает массив из строчно-числовых значений. Возвращает массив, в котором строчные значения стали числовыми, а числовые строчными. */

let arr = [1, '1', 2, '2', 3, '3'];
let transformTypes = (arr) => {
  let transformedArr = [];
  for (let point of arr) {
    if (typeof point === 'number') {
      transformedArr.push(String(point));
    } else if (typeof point === 'string') {
      transformedArr.push(Number(point));
    }
  }
  return transformedArr;
};

console.log(transformTypes(arr));

/*6. Написать функцию, которая принимает два массива и возвращает один целый.(через spread) */
let arrFirst = ['Alex', 'Brandon', 'Hans'];
let arrSecond = [5, 10, 15];

let connectArrs = (arrFirst, arrSecond) => {
  let connectedArr = [...arrFirst, ...arrSecond];
  return connectedArr;
};
console.log(connectArrs(arrFirst, arrSecond));

/*7. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.*/
let num = '12345';
let numMultiply = (num) => {
  let numsArr = num.split('');
  let result = 1;
  for (let item of numsArr) {
    result *= +item;
  }
  return result;
};

console.log(numMultiply(num));
/*8. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC). Предполагается, что посетитель вводит не только числа.*/
for (let i = 0; ; i++) {
  let number = prompt('Enter a number');
  if (+number > 100) {
    console.log('Verification passed');
    break;
  } else if (number === null) {
    console.log('Verification cancelled');
    break;
  } else {
    console.log('Please repeat the input');
  }
}
