// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.



// function camelize(str) {
//     let newArr = str.split('-');
//     let result = newArr[0];

//     for (let index = 1; index < newArr.length; index++) {
//         let item = newArr[index];
//         item = item[0].toUpperCase() + item.slice(1);
//         result += item;
//     }
//     return result;
// };

// // function camelize(str) {
// //     return str
// //         .split('-')
// //         .map((item, index) => index == 0 ? item : (item[0].toUpperCase() + item.slice(1)))
// //         .join('');

// // }


// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));