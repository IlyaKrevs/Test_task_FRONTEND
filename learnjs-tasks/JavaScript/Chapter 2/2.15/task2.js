// Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:



// Используя оператор ?

let myAge = 15;

function checkAge(age) {
    return (age > 11) ? true : confirm('You sure?');
}

console.log(checkAge(myAge));



// Используя оператор ||

function checkAge2(age) {
    return (age > 121) || confirm('You sure?');
}

console.log(checkAge2(myAge));