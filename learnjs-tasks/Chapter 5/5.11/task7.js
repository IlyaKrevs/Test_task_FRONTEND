// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.



// function getSecondsToTomorrow() {
//     let dateNow = new Date();
//     return 86400 - (dateNow.getHours() * 60 + dateNow.getMinutes() * 60 + dateNow.getSeconds());
// }

// console.log(getSecondsToTomorrow());