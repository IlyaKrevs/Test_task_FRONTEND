// Декоратор-шпион
// важность: 5
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.



// function work(a, b) {
//     console.log(a + b); // произвольная функция или метод
// }


// function spyFunc(func) {
//     wrapper.spyArray = [];

//     function wrapper(...args) {
//         wrapper.spyArray.push(args);
//         return func.apply(this, args);
//     }

//     return wrapper;
// }


// let myFunc = spyFunc(work);

// myFunc(3, 11);
// myFunc(2, 3);


// // console.log(myFunc.spyArray)

// for (let args of myFunc.spyArray) {
//     console.log('call:' + args);
// }
