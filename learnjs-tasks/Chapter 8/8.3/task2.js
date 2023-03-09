// Добавьте функциям декорирующий метод "defer()"
// важность: 4
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.



// function f(a, b) {
//     console.log(a + b);
// }


// Function.prototype.defer = function (ms) {
//     let saveThis = this

//     return function (...args) {
//         return setTimeout(() => saveThis.apply(this, args), ms)
//     }
// }


// f.defer(5000)(3, 5)
// f.defer(3000)(13, 21)