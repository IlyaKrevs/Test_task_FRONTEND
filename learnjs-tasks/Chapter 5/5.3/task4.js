// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true



function extractCurrencyValue(str) {
    let step = 0;
    let newStr;

    while (isNaN(parseInt(newStr))) {
        newStr = str.slice(step++);
    }
    return parseInt(newStr);
};

console.log(extractCurrencyValue('$##########11231231220'));