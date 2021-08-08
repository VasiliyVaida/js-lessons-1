/*Задание 1:
Создайте массив, длиной в 6 элементов, каждый из которого больше предыдущего на 5, после
этого найдите среднее значение из этих чисел.*/
let numsArr = [7, 12, 17, 22, 27, 32];
let getAverageNum = (numsArr) => {
  let elemSumm = 0;
  for (let item of numsArr) {
    elemSumm += item;
  }
  return elemSumm / numsArr.length;
};

console.log(getAverageNum(numsArr));
/*Задание 2.
Есть массив с неизвестным кол-вом элементов. Как вывести последний элемент?*/

let arr = ['Alex', 23, true, null, { name: 'John', age: 30 }];
let getLastElem = function (arr) {
  return arr[arr.length - 1];
};

console.log(getLastElem(arr));
/*Задание 3
У нас снова массив с неизвестным кол-вом элементов.
Напишите код, в котором предпоследнему элементу задается значение “предпоследний элемент”.*/

let arr = ['Alex', 23, true, null, { name: 'John', age: 30 }];
let getLastElem = function (arr) {
  return arr[arr.length - 2];
};

console.log(getLastElem(arr));

/*Задание 1:
Существует массив из какого-то количества элементов строковых данных. Необходимо создать
новый массив из длин каждого из элементов исходного массива.*/

let arr = ['Chelsea', 'Barcelona', 'Real Madrid', 'Inter Milano', 'Bayern Munich', 'Liverpool'];

function testCallback(arr) {
  return arr.map((item) => {
    return item.length;
  });
}

function getElemLength(callback) {
  let lengthElemArr = callback(arr);
  return lengthElemArr;
}

console.log(getElemLength(testCallback));

/*Задание 2:
Существует цикл for, который перебирает массив со строковыми и числовыми данными[“Anna”,
12, “Sam”, 9, “Kate”, 10, “Ron”, 9] и выводит сначала строки, а затем числа:
Необходимо переписать данный цикл с помощью forEach() метода
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    console.log(arr[i] + ' - string value');
  } else {
    console.log(arr[i] + ' - number value');
  }
}
*/

let arr = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];
let getTypeOfElem = (array) => {
  array.forEach((item) => {
    if (typeof item === 'string') {
      console.log(item + ' - string value');
    } else {
      console.log(item + ' - number value');
    }
  });
};

getTypeOfElem(arr);

/*Задание 3:
Существует массив [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21] . Необходимо создать новый массив
из значений данного, которые больше 10.
*/

let numsArr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let getFilteredArr = (array) => {
  let result = array.filter((item) => {
    return item > 10;
  });
  return result;
};
console.log(getFilteredArr(numsArr));

/*Создайте калькулятор для введённых
значений Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт 15.
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива
*/

let userNumsArr = [];
for (let i = 0; ; i++) {
  let userNum = prompt('Enter a number');
  if (isNaN(userNum) || userNum === null || userNum === '') {
    alert('Incorrect number, please try again');
  } else if (+userNum === 15) {
    userNumsArr.push(+userNum);
    break;
  } else if (+userNum || +userNum === 0) {
    userNumsArr.push(+userNum);
  }
}

let getArrSumm = (array) => {
  let result = array.reduce((sum, item) => {
    return sum + item;
  });
  return result;
};

console.log(getArrSumm(userNumsArr));
