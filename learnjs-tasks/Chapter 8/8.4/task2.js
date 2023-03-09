// Разница между вызовами
// важность: 5
// Давайте создадим новый объект rabbit:

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   alert(this.name);
// };

// let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();



// Rabbit
// undefined
// undefined
// undefined