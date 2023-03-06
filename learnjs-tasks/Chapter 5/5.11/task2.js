// Покажите день недели
// важность: 5
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"



// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getWeekDay(params) {
//     // let item = params.getDay();
//     // return (item == 0) ? 'Sun' :
//     //         (item == 1) ? 'Mon' :
//     //         (item == 2) ? 'Tue' :
//     //         (item == 3) ? 'Wed' :
//     //         (item == 4) ? 'Thu' :
//     //         (item == 5) ? 'Fri' :
//     //         'Sat';

//     let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return days[params.getDay()];
// }

// console.log(getWeekDay(date));