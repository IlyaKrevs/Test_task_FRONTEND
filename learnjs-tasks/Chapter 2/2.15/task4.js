// Функция pow(x, n)
// важность: 4
// Напишите функцию pow(x, n), которая возводит x в степень n и возвращает результат.

//     pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x, n).

// Запустить демо

// P.S.В этой задаче функция обязана поддерживать только натуральные значения n, т.е.целые от 1 и выше.



function pow(x, n) {
    return x ** n;
}

let number = prompt('Enter a number');
let exponent = Math.round(+prompt('Enter exponent for number'));

if (exponent < 1) {
    console.log('Wrong exponent');
}
else {
    console.log(pow(number, exponent));
}