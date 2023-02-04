// Задача 1
// Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 
// Пример:
// «Москва, Санкт-Петербург, Воронеж.» 


const myArray = ['1', '2', '3', '4', '5'];

console.log(myArray);

function Task1(array) {
    let result = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (index < array.length - 1) {
            result += element + ', ';
        }
        else {
            result += element + '.';
        }
    }
    return result;
}

console.log(Task1(myArray));

// 5 минут, может 10





// Задача 2
// Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
// Пример:
// 27 => 25, 27.8 => 30, 41.7 => 40.

const myNumber = Math.random() * 100;
console.log(myNumber);

function Task2(floatNumber) {


    let count = 0;
    while (count < floatNumber - 5) {
        count += 5;
    }
    if ((floatNumber % 5) >= 2.5) {
        count += 5;
    }
    return count;
}

console.log(Task2(myNumber));

// 10min





// Задача 3
// Написать метод / функцию, который / которая на вход принимает число(int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству.Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

const myIntNumber = 1048;

function Task3(intNumber) {
    if (intNumber % 10 === 1) {
        console.log(`${intNumber} компьютер`);
    }
    else if (intNumber % 10 > 4 || intNumber % 10 === 0) {
        console.log(`${intNumber} компьютеров`);
    }
    else {
        console.log(`${intNumber} компьютера`);
    }
}

Task3(myIntNumber);

// 5-7min





// Задача 4
// Написать метод / функцию, который / которая на вход принимает целое число, а на выходе возвращает то, является ли число простым(не имеет делителей кроме 1 и самого себя).


const checkThisNumber = 13;

function Task4(check) {
    let count = 0;
    for (let i = 2; i <= check; i++) {
        if (check % i === 0) {
            count++;
        }
    }
    if (count === 1) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}

Task4(checkThisNumber);

// 15-20min





// Задача 5
// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов(= в двух и более, причем в каждом).На вход подаются два массива.На выходе массив с необходимыми совпадениями.
//     Пример:
// [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе[1, 17]

const firstArray = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const secondArray = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function Task5(arr) {
    let matchNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                matchNumbers.push(arr[i]);
            }
        }
    }
    for (let i = 0; i < matchNumbers.length; i++) {
        for (let j = 0; j < i; j++) {
            if (matchNumbers[i] === matchNumbers[j]) {
                delete matchNumbers[i];
            }
        }
    }
    return matchNumbers;
}

const newArray = [...Task5(firstArray), ...Task5(secondArray)];
const newClearArray = newArray.filter(e => e !== undefined);

console.log(newClearArray);
console.log(Task5(newClearArray));


// 20-25min





// Задача 6
// Написать метод, который в консоль выводит таблицу умножения.На вход метод получает число, до которого выводит таблицу умножения.В консоли должна появиться таблица.Например, если на вход пришло число 5, то получим:

// Важно:
// В последней строке между числами ровно по одному пробелу должно выводиться.
// В каждом столбце числа должны быть выровнены по правому краю.


const tableSize = 11;

function countOfDigits(sizeNumber) {
    let item = sizeNumber ** 2;
    let count = 1;
    while (item / 10 > 1) {
        item /= 10;
        count++;
    }
    return count;
}

function digitsInNumber(number) {
    let count = 1;
    while (number / 10 >= 1) {
        number /= 10;
        count++;
    }
    return count;
}

console.log(countOfDigits(tableSize));


function Task6(size) {
    let multiplicationTable = [];
    for (let i = 1; i < size + 1; i++) {
        let tableString = [];
        for (let j = 1; j < size + 1; j++) {

            tableString.push('' + i * j);
        }
        multiplicationTable.push(tableString);
    }
    return multiplicationTable;
}

console.log(Task6(tableSize));

function printTable(params) {
    for (let i = 0; i < params.length; i++) {
        let result = '';
        for (let j = 0; j < params[i].length; j++) {
            let emptyString = '';
            if (countOfDigits(tableSize) !== digitsInNumber(params[i][j])) {
                let missingDigits = countOfDigits(tableSize) - digitsInNumber(params[i][j]);
                while (missingDigits > 0) {
                    missingDigits -= 1;
                    emptyString += ' ';
                }
            }
            result += emptyString + ' ' + params[i][j];
        }
        console.log(result);
    }

}

printTable(Task6(tableSize));

// час +-