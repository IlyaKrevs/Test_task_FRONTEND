// Поиск элементов
// важность: 4
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.



let first_task = document.querySelector('#age-table');
let second_task = first_task.querySelectorAll('label');
let third_task = first_task.querySelector('td');
let fourth_task = document.getElementsByName('search');
let fiveth_task = fourth_task.querySelector('input');
let sixth_task = fourth_task.querySelectorAll('input');
let last_elem = sixth_task[sixth_task.length - 1];
