// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.



function printNumbers(from, to) {
    if (from <= to) {
        console.log(from++);
        setTimeout(printNumbers, 1000, from, to);
    }
};


function printNumbers(from, to) {
    let clock = setInterval(() => {
        console.log(from++)

        if (from > to) {
            clearInterval(clock);
        }
    }, 1000);

}




// printNumbers(5, 11);


