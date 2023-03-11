// Создайте список
// важность: 4
// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.



// function myList() {
//     let myDiv = document.querySelector('.example');
//     let ulElem = document.createElement('ul');
//     myDiv.append(ulElem);


//     while (1) {
//         let userAnswer = prompt('Text for li-elem')

//         if (!userAnswer) {
//             break;
//         }

//         let liElem = document.createElement('li');
//         liElem.textContent = userAnswer;
//         ulElem.append(liElem);
//     }
// }

// myList();