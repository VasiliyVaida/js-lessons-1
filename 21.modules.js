// * Модули: Экспорт и импорт

// Модули - популярное средство организации JavaScript-приложений
// Каждый модуль поддерживает специфичную уникальную функциональность, является самодостаточным и отделен от других модулей
// Модуль - это просто файл: Один скрипт - это один модуль.

// Модули работают в собственном верхнеуровневом контексте выполнения и потому не могут засорить глобальный контекст выполнения,
// в который они импортируются
// По умолчанию все переменные, функции, классы и другие сущности, объявленные в модуле, закрыты в нем
// Чтобы сущность была доступна извне, нужно указать перед ней ключевое слово export

export const myObj = {};
export const hello = () => {};

// Этот модуль экспортирует объект myObj и функцию hello()
// Его можно использовать в любых других местах - на странице или в другом модуле

// Каждый модуль имеет свою собственную область видимости. Другими словами, переменные и функции, объявленные в модуле, не видны в других скриптах

// * Import

// file 1
export function cube(x) {
  return x * x * x;
}

// file 2
import { cube } from 'my-module';
console.log(cube(3));

// -------------------------

// file 1
export default function cube(x) {
  // export default может быть один в модуле
  return x * x * x;
}

// file 2
import cube from 'my-module';
console.log(cube(3));

// * Импорт "как"
// использовать as, чтобы импортировать под другими именами

import { sayHi as hi, sayBye as bye } from './say.js';
export { sayHi as hi, sayBye as bye };