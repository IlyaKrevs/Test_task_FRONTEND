// Создайте дерево из объекта
// важность: 5
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };
// Синтаксис:

// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере
// Результат (дерево):


// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.


// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },

//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {}
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {}
//         }
//     }
// };




// function createTree(obj) {
//     if (!Object.keys(obj).length) {
//         return;
//     }
//     let ulElem = document.createElement('ul');

//     for (let key in obj) {
//         let liElem = document.createElement('li');
//         liElem.textContent = key;

//         let nextUlElem = createTree(obj[key]);
//         if (nextUlElem) {
//             liElem.append(nextUlElem);
//         }
//         ulElem.append(liElem);
//     }

//     return ulElem;
// }

// function createUlElem(container, obj) {
//     container.append(createTree(obj));
// }

// let myContainer = document.querySelector('.example');

// createUlElem(myContainer, data);

