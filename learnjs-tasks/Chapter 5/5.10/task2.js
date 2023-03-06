// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(arg) {
//     let maxName = null;
//     let maxGold = 0;
//     for (const [key, value] of Object.entries(arg)) {
//         if (maxGold < value) {
//             maxGold = value;
//             maxName = key;
//         }
//     };
//     return { maxName, maxGold }
// };

// console.log(topSalary(salaries));z