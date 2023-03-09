// Декоратор debounce
// важность: 5
// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

// Например:

// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
// На практике debounce полезен для функций, которые получают/обновляют данные, и мы знаем, что повторный вызов в течение короткого промежутка времени не даст ничего нового. Так что лучше не тратить на него ресурсы.



// function sayHi(params) {
//     console.log(params);
// }

// function debounce(func, ms) {
//     let isCooldown = false;

//     return function wrapper() {
//         if (isCooldown) {
//             return;
//         }
//         isCooldown = true;
//         func.apply(this, arguments);

//         setTimeout(() => isCooldown = false, ms)
//     }
// }

// let myItem = debounce(sayHi, 5000);

// myItem('hello');
// myItem('hello2');
// myItem('hello3');
// myItem('hello4');


// setTimeout(() => myItem('hello5'), 5100);