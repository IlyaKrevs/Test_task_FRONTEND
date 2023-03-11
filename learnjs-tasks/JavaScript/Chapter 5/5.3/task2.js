// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false



// function checkSPAM(str) {
//     let newStr = str.toLowerCase();
//     let target1 = 'viagra'.toLowerCase();
//     let target2 = 'XXX'.toLowerCase();

//     return newStr.includes(target1) || newStr.includes(target2);
// };

// console.log(checkSPAM('buy ViAgRA now'));
// console.log(checkSPAM('free xxxxx'));
// console.log(checkSPAM("innocent rabbit"));