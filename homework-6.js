/*Создать объект selfGeneratedUser с методами: 
1) getInfo(), при вызове которого мы через prompt() поочередно получим данные об имени (name), емейле (email) и телефоне (phone) пользователя и запишем их в соответствующие свойства объекта. 
2) introduce(), при вызове которого мы поочередно выводим c помощью alert name, email и phone. Если поля нет - не выводим его, переходим к другому полю. */
let selfGeneratedUser = {
  getInfo: function () {
    this.name = prompt('Enter your name');
    this.email = prompt('Enter your email');
    this.phone = +prompt('Enter your phone number');
  },
  introduce: function () {
    if (this.name) {
      alert(this.name);
    }

    if (this.email) {
      alert(this.email);
    }

    if (this.phone) {
      alert(this.phone);
    }
  },
};

selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();

/** 1
// todo: Функция принимает МАССИВ пользователей. Возвращает ОБЪЕКТ, состоящий из МАССИВОВ women и men.
// todo: Поля firstName и lastName объеденить в одно fullName.
 */
const users = [
  {
    id: 1,
    firstName: 'Jeanette',
    lastName: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ipAddress: '26.58.193.2',
  },
  {
    id: 2,
    firstName: 'Petr',
    lastName: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ipAddress: '229.179.4.212',
  },
  {
    id: 3,
    firstName: 'Ivan',
    lastName: 'Petrov',
    email: 'jkjkhjkhkjk@senate.gov',
    gender: 'Male',
    ipAddress: '22.555.43.112',
  },
  {
    id: 4,
    firstName: 'Lisa',
    lastName: 'Alisson',
    email: 'fweghcxxcax@census.gov',
    gender: 'Female',
    ipAddress: '13.87.22.152',
  },
];

let tranformToObject = (array) => {
  array.forEach((item) => {
    item.fullName = item.firstName + ' ' + item.lastName;
    delete item.firstName;
    delete item.lastName;
  });
  let genderSortedOPersons = {};
  genderSortedOPersons.men = [];
  genderSortedOPersons.women = [];
  for (let item of array) {
    if (item.gender === 'Male') {
      genderSortedOPersons.men.push(item);
    } else {
      genderSortedOPersons.women.push(item);
    }
  }
  return genderSortedOPersons;
};

console.log(tranformToObject(users));

/** 
// * 2
// todo: Функция принимает массив объектов.
// todo: Возвращает массив пользователей, отсортированных по полю username в алфавитном порядке и возраст которых начинается от 21 года.
// todo: Количество пользователей может быть не ограничено.
 */
const initialData = [
  { username: 'Boris', age: 25 },
  { username: 'Alex', age: 21 },
  { username: 'Oleg', age: 14 },
  { username: 'Dmitriy', age: 35 },
  { username: 'Lida', age: 72 },
];

let sortArray = (array) => {
  let adultsArr = array.filter((item) => item.age >= 21);
  function sortObjects(a, b) {
    if (a.username > b.username) {
      return 1;
    } else if (b.username > a.username) {
      return -1;
    } else {
      return 0;
    }
  }
  return adultsArr.sort(sortObjects);
};
console.log(sortArray(initialData));
/** 
// * 3
// todo: Функция принимает массив объектов пользователей первым параметром, id пользователя вторым параметром.
// todo: Функция должна удалить всех пользователей с передаваемыми в неё id и вернуть массив с оствашимеся пользователями.

 */

const usersIdList = [
  { name: 'Nick', id: 1 },
  { name: 'Alex', id: 2 },
  { name: 'Oleg', id: 3 },
  { name: 'Dima', id: 4 },
  { name: 'Lida', id: 5 },
];

let deleteUser = (array, id) => {
  array.splice(id - 1, 1);
  return array;
};
console.log(deleteUser(usersIdList, 3));

/** 
// * 4
// todo: Функция принимает массив из числовых и строчных значений.
// todo: Результатом функции является новый массив объектов.
// todo: Каждый элемент нового массива должен сожержать поля значения, индекса, типа данных (number или string).


 */

let arr = [1, 'Alex', 2, 'Hello', 3, 'How are you'];

/** 
// * 4
// todo: Функция принимает массив из числовых и строчных значений.
// todo: Результатом функции является новый массив объектов.
// todo: Каждый элемент нового массива должен сожержать поля значения, индекса, типа данных (number или string).


 */

let arr = [1, 'Alex', 2, 'Hello', 3, 'How are you'];
function arrayItem(item, index) {
  this.item = item;
  this.index = index;
  this.type = typeof item;
}

let transformItemToObject = (array) => {
  let transformedArr = array.map((item, index) => new arrayItem(item, index));
  return transformedArr;
};

console.log(transformItemToObject(arr));

/** 
// * 6
// todo: Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }. Использовать функцию map.
 */

const newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: 'Bad Boys',
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

let cutArray = function (array) {
  let cuttedArray = array.map((item) => {
    let cuttedItem = {};
    cuttedItem.id = item.id;
    cuttedItem.title = item.title;
    return cuttedItem;
  });
  return cuttedArray;
};

console.log(cutArray(newReleases));

/** 
// * 7
// todo: Выведите массив с id для видео у которых рейтинг 5.0. 
// todo: В качестве входных данных используйте newReleases из предыдущего задания.
 */

const newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: 'Bad Boys',
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    url: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

let filterArr = function (array) {
  let filteredArr = array.filter((item) => item.rating[item.rating.length - 1] === 5.0);
  return filteredArr;
};

console.log(filterArr(newReleases));

/** 
// * 8
// todo: Преобразуйте массив в объект используя функцию reduce.
 */

const videos = [
  {
    id: 65432445,
    title: 'The Chamber',
  },
  {
    id: 675465,
    title: 'Fracture',
  },
  {
    id: 70111470,
    title: 'Die Hard',
  },
  {
    id: 654356453,
    title: 'Bad Boys',
  },
];

let tranformArrayToObj = (array) => {
  let targetObj = array.reduce((object, item, index) => {
    object[index] = item;
    return object;
  }, {});
  return targetObj;
};

console.log(tranformArrayToObj(videos));

/** 
// * 9
// todo: С помощью функций map, reduce, вывести url у которого самая большая площадь.
 */

const boxarts = [
  {
    width: 200,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
  },
  {
    width: 150,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
  },
  {
    width: 300,
    height: 200,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
  },
  {
    width: 425,
    height: 150,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg',
  },
];

let getBiggestUrl = (array) => {
  let biggestUrl = array
    .map((item) => {
      return {
        square: item.width * item.height,
        url: item.url,
      };
    })
    .reduce((a, b) => {
      if (a > b) {
        return a.url;
      } else {
        return b.url;
      }
    });
  console.log(biggestUrl);
};

getBiggestUrl(boxarts);
