// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// // P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.



// function makeCounter() {

//     function counter() {
//         return ++counter.count;
//     };

//     counter.count = 0;

//     counter.set = function (value) {
//         return counter.count = value;
//     }

//     counter.decrease = function () {
//         return --counter.count;
//     }

//     return counter;
// }


// console.log(makeCounter()());
// console.log(makeCounter()());
// console.log(makeCounter().decrease());


// let myitem = makeCounter();

// console.log(myitem());
// console.log(myitem());
// console.log(myitem());


// console.log(myitem.set(55))
// console.log(myitem.decrease());
// console.log(myitem.decrease());
