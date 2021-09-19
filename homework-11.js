/*
// Задача 1
// Создать функцию Dog, который наследует метод eat из объекта Animal
 */

function animal(name) {
  this.name = name;
  this.eat = function () {
    console.log('eat meat');
  };
}

let defineDog = () => {
  let dog = new animal('dog');
  dog.prototype = new animal();
  dog.eat();
  console.log(dog);
};

defineDog();

/*
Задача 2
Реализоватþ на основе прототипного наследованиā создание геометриùеских
фигур (например, базоваā функøиā фигура, от которой наследуĀтсā функøии
рисованиā круга, квадрата, прāмоуголþника) - у фигур должнý бýтþ свойства
øвета, размера, положениā на страниøе, методý нарисоватþ фигуру,
вýùислитþ плоûадþ фигурý
 */

function figure(color, width, height, top, left) {
  this.color = color;
  this.width = width;
  this.height = height;
  this.top = top;
  this.left = left;
  this.makeCircle = function () {
    let mainTag = document.querySelector('main');
    let circle = document.createElement('div');
    circle.classList.add('figure');
    circle.classList.add('figure__circle');
    mainTag.append(circle);
    circle.style.width = this.width + 'px';
    circle.style.height = this.height + 'px';
    circle.style.borderRadius = this.height / 2 + 'px';
    circle.style.backgroundColor = this.color;
    circle.style.position = 'relative';
    circle.style.top = this.top;
    circle.style.left = this.left;
  };
  this.makeSquare = function () {
    let mainTag = document.querySelector('main');
    let square = document.createElement('div');
    square.classList.add('figure');
    mainTag.append(square);
    square.style.width = this.width + 'px';
    square.style.height = this.height + 'px';
    square.style.backgroundColor = this.color;
    square.style.position = 'relative';
    square.style.top = this.top;
    square.style.left = this.left;
  };
  this.makeRectangle = function () {
    let mainTag = document.querySelector('main');
    let rectangle = document.createElement('div');
    rectangle.classList.add('figure');
    mainTag.append(rectangle);
    rectangle.style.width = this.width + 'px';
    rectangle.style.height = this.height + 'px';
    rectangle.style.backgroundColor = this.color;
    rectangle.style.position = 'relative';
    rectangle.style.top = this.top;
    rectangle.style.left = this.left;
  };
}

let circleDefiner = new figure('red', 150, 150, '100px', '100px');
let rectangleDefiner = new figure('green', 300, 300, '200px', '200px');
let squareDefiner = new figure('blue', 400, 200, '400px', '400px');
function circle() {
  this.calculateArea = function () {
    return Math.PI * (this.height / 2) * (this.height / 2);
  };
}
function rectangle() {
  this.calculateArea = function () {
    return this.height * this.width;
  };
}
function square() {
  this.calculateArea = function () {
    return this.height * this.width;
  };
}

circle.prototype = circleDefiner;
rectangle.prototype = rectangleDefiner;
square.prototype = squareDefiner;

let drawnCircle = new circle();
let drawnRectangle = new rectangle();
let drawnSquare = new square();
drawnCircle.makeCircle();
console.log(drawnCircle.calculateArea());
drawnRectangle.makeRectangle();
console.log(drawnRectangle.calculateArea());
drawnSquare.makeSquare();
console.log(drawnSquare.calculateArea());

/*
// Задача 1
// Переписать функцию-конструктор в виде класса:
function Car(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.changeColor = function(newColor) {
        this.color = newColor;
    };
};
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');
 */

class Car {
  constructor(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}

let audi = new Car('Audi', 2015, 'black');
console.log(audi);
audi.changeColor('red');
console.log(audi);

/*
// Задача 2
// Ваша задача реализовать класс Person
// Вы должны заполнить метод constructor, чтобы принять имя как строку и возраст как число
// реализовать метод getInfo получения информации, который должен вернуть, например Johns age 34
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `${this.name}s age: ${this.age}`;
  }
}

let peter = new Person('Peter', 34);
console.log(peter.getInfo());

/*
// Задача 3
// Ващща задача - реализовать класс Cat, который расширяет Animal, и заменить метод speak, чтобы вернуть имя кошки + мяу
// например "Mr Whiskers meows".
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} speaks`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} meows`;
  }
}

let kitty = new Cat('Mr Whiskers');
console.log(kitty.speak());

/*
// Задача 4
// Создать класс Person со стандартными свойствами (имя, возраст) и действиями (идти, разговаривать, есть) человека, от него 
// наследовать классы ребенок и взрослый со своими особенными методами и свойствами (например у ребенка - плакать, или ходить в школу)
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} eats`;
  }

  speak() {
    `${this.name} speaks`;
  }

  go() {
    `${this.name} goes`;
  }
}

class Child extends Person {
  constructor(name, age) {
    super(name, age);
  }

  eat() {
    return `${this.name} eats vegetables`;
  }

  speak() {
    return `${this.name} learning to talk`;
  }

  cry() {
    return `${this.name} cries`;
  }
}

class Adult extends Person {
  constructor(name, age) {
    super(name, age);
  }

  eat() {
    return `${this.name} eats meat`;
  }

  speak() {
    return `${this.name} speaks`;
  }

  go() {
    return `${this.name} goes to job`;
  }
}

let getPersonCharacter = (name, age) => {
  let person;
  if (age < 18) {
    person = new Child(name, age);
    console.log(person.cry());
  } else {
    person = new Adult(name, age);
    console.log(person.go());
  }
};

getPersonCharacter('Alex', 15);
getPersonCharacter('Peter', 25);

/*
// Задание 7
Создать класс Ball, тип которого regular, если аргумент не передан, super, если передан
аргумент “superBall”
ball1 = new Ball();
ball2 = new Ball("superBall");
ball1.ballType //=> "regular"
ball2.ballType //=> "superBall"
 */

class Ball {
  constructor(superball) {
    if (superball === undefined) {
      this.ballType = 'regular';
    } else {
      this.ballType = 'superBall';
    }
  }
}

let ball1 = new Ball();
let ball2 = new Ball('superBall');

console.log(ball1.ballType);
console.log(ball2.ballType);
