/*
1. Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит одно из сообщений:
"Значение больше нуля"
"Значение меньше нуля"
"Значение равно нулю"
 */

// First solution
let userValue = prompt('Enter a value');
let checkValue = Number(userValue);
console.log(checkValue);
if (checkValue > 0) {
  alert('The value is greater than zero');
} else if (isNaN(checkValue)) {
  alert('This value is not a number');
} else if (checkValue === 0) {
  alert('The value is zero');
} else {
  alert('The value is less than zero');
}

// Second Solution
let value = +prompt('Enter a value');
console.log(value);
if (isNaN(value)) {
  alert('This value is not a number');
} else {
  if (value > 0) {
    alert('The value is greater than zero');
  } else if (value === 0) {
    alert('The value is zero');
  } else {
    alert('The value is less than zero');
  }
}
/*2. Напишите код, который будет спрашивать логин (prompt). Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Пользователь не найден». Пароль проверять так: Если введён пароль «123456», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён». */
let userLogin = prompt('Enter your login');
let userPassword;
if (userLogin === 'Admin') {
  userPassword = prompt('Enter the password');
  if (userPassword == 123456) {
    alert('Welcome');
  } else if (userPassword === null) {
    alert('Entrance was cancelled');
  } else {
    alert('Incorrect password');
  }
} else if (userLogin === null) {
  alert('Entrance was cancelled');
} else {
  alert('User was not found');
}

/*3. Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно. «Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90. Переменную age запросить через prompt.*/
let userAge = +prompt('Enter your age');
if (userAge >= 14 && userAge <= 90) {
  alert(`User age is ${userAge}`);
} else {
  alert('User age is wrong');
}
