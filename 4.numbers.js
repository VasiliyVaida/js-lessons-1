// Запись числа
// Тип данных Number может принимать целые числа и числа с плавающей запятой(Точкой)
let myAge = 22;
let myHeigh = 1.79;
//important!: Большие числа можно разделять подчеркиваением(нижним)
let num = 1_000_000;
console.log(num); // возвращает число 1000000
//* Округление чисел - Math.floor
//important!: Округляет число в меньшую сторону
let num1 = Math.floor(5.8); //вернет 5
let num2 = Math.floor(2.2); //вернет 2
let num3 = Math.floor(-2.2); //вернет -3
//**  Math.ceil - округляет число в большую сторону
let num1 = Math.ceil(5.8); //вернет 6
let num2 = Math.ceil(2.2); //вернет 3
let num3 = Math.ceil(-2.2); //вернет -2
//**  Math.round() округляет число до ближ целого
let num1 = Math.round(5.8); //вернет 6
let num2 = Math.round(2.2); //вернет 2
let num3 = Math.round(-2.2); //вернет -2
//** Метод toFixed(n) - округляетт число до n знаков после запятой, но возвращает СТРОКОВЫЙ!!! результат
let num1 = 5.845;
console.log(num1.toFixed(1)); //возвращает строку '5.8'
console.log(+num1.toFixed(1)); //возвращает число 5.8
//** Функция isNaN() - проверяет аргумент на значение NaN возвращает true или false
console.log(isNaN('38 + попугаев')); // Возвращает true
console.log(isNaN('Попугаев' + 38)); // Возвращает true
