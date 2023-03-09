// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?



// console.log(cycleMethod(100));
// console.log(recursionMethod(100));
// console.log(progressionMethod(100));


// function cycleMethod(params) {
//     let accum = 0;
//     for (let i = 0; i < params + 1; i++) {
//         accum += i;
//     }
//     return accum;
// };

// function recursionMethod(params) {
//     return (params == 0) ? params : params + recursionMethod(params - 1);
// };

// function progressionMethod(params) {
//     let start = 1;
//     let result = (start + params) / 2 * params;
//     return result;
// }
