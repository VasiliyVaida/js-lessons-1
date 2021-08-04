// Task 3
let password = +prompt('Введите пароль');
let currentPassword = 1234;

if (password === currentPassword) {
  alert('Верный пароль');
} else if (password == null || password == '') {
  alert('Отменено');
} else if (password !== currentPassword) {
  alert('Пароль неверный');
}

let arr = [1, 2, 3, 4, 5];
let value = 4;
let findValue = function (arr, value) {
  for (let item of arr) {
    if (item === value) {
      alert(arr);
    } else {
      alert('- 1');
    }
  }
};
