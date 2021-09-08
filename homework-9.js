/*
// Задача 1
// Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд

 */

let printMessage = (n) => {
  setInterval(() => {
    console.log('Hello world');
  }, n * 1000);
};

printMessage(5);

/*
// Задача 2
// Напишите функцию, которая выводит через 5 секунд на экран сообщение "прошло 5 секунд"

 */

let timeCounter = (n) => {
  setTimeout(() => {
    alert(`Прошло ${n} секунд`);
  }, n * 1000);
};

timeCounter(5);

/*
// Задача 3
// Напишите функцию printNumbers(from, to) котоаря выводит число каждую секунду, начиная от from и заканчивая to
 */

let printNumbers = (from, to) => {
  let num = from;
  setTimeout(function process() {
    console.log(num);
    if (num < to) {
      setTimeout(process, 1000);
    }
    num++;
  }, 1000);
};

printNumbers(1, 5);

/*
// Задача 3
// Напишите функцию printNumbers(from, to) котоаря выводит число каждую секунду, начиная от from и заканчивая to
 */

let printNumbers = (from, to) => {
  for (let i = 1, k = from; k <= to; i++, k++) {
    setTimeout(() => {
      console.log(k);
    }, i * 1000);
  }
};

printNumbers(5, 10);
