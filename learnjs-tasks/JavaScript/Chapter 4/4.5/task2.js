// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function Calculator() {
//     this.read = () => {
//         this.a = +prompt('a?');
//         this.b = +prompt('b?');
//     }

//     this.sum = () => this.a + this.b;

//     this.mul = () => this.a * this.b;
// };

// let myCalc = new Calculator();

// myCalc.read();
// console.log(myCalc.sum());
// console.log(myCalc.mul());
// console.log(myCalc);