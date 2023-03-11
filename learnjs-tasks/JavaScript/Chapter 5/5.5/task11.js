// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// // function getAverageAge(users) {
// //     let myLenght = users.length;
// //     let count = 0;

// //     users.map((item) => {
// //         count += item.age;
// //     })
// //     return count / myLenght;
// // }


// function getAverageAge(users) {
//     return users.reduce((count, item) => count + item.age, 0) / users.length;
// }

// console.log(getAverageAge(arr));