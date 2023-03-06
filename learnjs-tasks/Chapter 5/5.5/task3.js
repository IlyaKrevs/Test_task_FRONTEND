// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]



// let array = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     for (let index = 0; index < arr.length; index++) {

//         if (arr[index] < a || arr[index] > b) {

//             arr.splice(index, 1);
//             index--;
//         }
//     }
// };

// filterRangeInPlace(array, 1, 4)
// console.log(array);