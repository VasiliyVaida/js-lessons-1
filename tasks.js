// Task 3
let password = +prompt('Введите пароль')
let currentPassword = 1234

if (password === currentPassword) {
    alert('Верный пароль')
} else if (password == null || password == '') {
    alert('Отменено')
}
 else if (password !== currentPassword) {
    alert('Пароль неверный')
}