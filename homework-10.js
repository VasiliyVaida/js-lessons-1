/*
// Задача 1
// Создайте асинхронную функцию getTasks(), которая возвращает массив объектов категорий.
// Данные получать по ссылке https://test-todoist.herokuapp.com/api/tasks
// Необходимо вывести имена и описание этих задач на странице в виде списка
 */
let url = 'https://test-todoist.herokuapp.com/api/tasks';

let getTasks = async (url) => {
  let dataResult = await fetch(url).then((data) => {
    return data.json();
  });
  console.log(dataResult);

  let mainTag = document.querySelector('main');
  let tasksList = document.createElement('ul');
  let res = dataResult.map((item) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${item.id}: ${item.description}`;
    tasksList.append(listItem);
  });
  mainTag.append(tasksList);
};

getTasks(url);

// Задача 2
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей github
// запрашивает у github информацию о них и возвращает массив объектов-пользователей
// информация о пользователе github с логином USERNAME доступна по ссылке https://api.github.com/users/USERNAME
let userNames = ['serprok9694', 'chapski-dev', 'EvgeniSasim'];
let getUsers = async (names) => {
  let url = 'https://api.github.com/users/';

  let resultsArr = await Promise.all(
    names.map(async (item) => {
      let userData = await fetch(url + item).then((data) => data.json());
      console.log(userData);
      return userData;
    })
  );
  console.log('zzzzzz', resultsArr);
};

getUsers(userNames);

/*
/*
Необходимо создать страницу
На страниøе должен выводитьсā:
- список категорий, полученных по ÿтому GET запросу:
https://test-todoist.herokuapp.com/api/categories
- кнопка добавить категори. (POST запрос -
https://test-todoist.herokuapp.com/api/categories) - после успешной отправки этого
запроса - добавленнаā категориā поāвлāетсā в списке категорий
 */
let url = 'https://test-todoist.herokuapp.com/api/categories';

let manageCategories = async (url1, url2) => {
  let dataResult = await fetch(url1).then((data) => data.json());
  let mainTag = document.querySelector('main');
  let categoriesList = document.createElement('ul');
  mainTag.append(categoriesList);
  dataResult.map((item) => {
    let categoriesItem = document.createElement('li');
    categoriesItem.innerHTML = `${item.id}: ${item.name}`;
    categoriesList.append(categoriesItem);
  });
  console.log(dataResult);
  let addCategory = document.createElement('button');
  addCategory.innerHTML = 'Add the new category';
  mainTag.prepend(addCategory);
  let user = {
    id: 0,
    name: 'string',
  };
  addCategory.addEventListener('click', async () => {
    let addResult = await fetch(url1, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    }).then((data) => data.json());
    let addItem = document.createElement('li');
    addItem.innerHTML = `${addResult.id}: ${addResult.name}`;
    categoriesList.append(addItem);
  });
};

manageCategories(url);
