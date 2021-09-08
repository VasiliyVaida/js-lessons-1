// * объект Date
// Он содержит дату и время, а также предоставляет методы управления ими.
// Даты хранятся в нем как количество миллисекунд, прошедших с полуночи 1 января 1970 г
// согласно универсальному временному коду (Universal Time Code, UTC).

// чтобы создать объект даты, используем оператор new с конструктором Date
let now = new Date();
// если конструктор Date вызывается без аргументов, создается объект с текущими значениями даты и времени

let date = new Date('2017-01-26');

// * Получение значений
getFullYear(); // получить год (4 цифры)
getMonth(); // получить месяц, от 0 до 11
getDate(); // получить день месяца, от 1 до 31
getHours(), getMinutes(), getSeconds(), getMilliseconds();
getDay(); // получить день недели от 0 (воскресенье) до 6 (суббота)

let now = Date.now(); // возвращает количество миллисекунд с 1 января 1970 года

// * Разбор строки с датой
Date.parse(str); // считвает дату из строки
// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ
// YYYY-MM-DD - это дата: год-месяц-день
// символ "Т" используется в качестве разделителя
// HH:mm:ss.sss - время: часы, минуты, секунды, миллисекунды
// необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0

// * JSON
// json - это формат данных
// json поддерживает значения трех типов
// Простые значения - строки, числа, логические значения и значения null можно предоставлять в JSON используя тот же синтаксис что и в JS
// Специальное значение undefined н поддерживается
// Объекты - первый сложный тип данных, служащий для хранения упорядоченных пар ключей и значений
// Массивы - второй сложный тип данных, который предоставляет упорядоченный список значений

// JSON легко использовать для обмена данных
// У объекта JSON есть два метода: stringify() и parse()
// в простых сценариях они просто сериализуют объект JS в строку json и преобразуют ее в значение JS соответственно
// JSON.stringify() для преобразования объектов в JSON
// JSON.parse() для преобразования JSON обратно в объект

let book = {
  title: 'Some title',
  authors: ['first', 'second'],
  edition: 3,
  year: 2017,
};
let jsonText = JSON.stringify(book); // возвращает "{"title":"Some title","authors":["first","second"],"edition":3,"year":2017}"
