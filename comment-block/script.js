let userName = document.querySelector('.comment__name');
let submitButton = document.querySelector('.comment__button')
let create__block = document.querySelector('.create__block');
let areaText = create__block.querySelector('.comment__text');

let comment_container = document.querySelector('.comment_container');

userName.addEventListener('input', () => {
    if (!userName.value) {
        userName.classList.add('error');
    } else {
        userName.classList.remove('error');
    }
});

userName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})

areaText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})

submitButton.addEventListener('click', () => addComment());

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addComment();
    }
});


comment_container.addEventListener('click', (e) => {
    let target = e.target;
    let likeButton = target.closest('.comment_block .like_button');
    if (!likeButton) {
        return;
    }
    likeButton.classList.toggle('choseIt');

});

comment_container.addEventListener('click', (e) => {
    let target = e.target;
    let deleteButton = target.closest('.comment_block .delete_button');
    let thisComment = target.closest('.comment_block');
    if (!deleteButton) {
        return;
    }
    if (!thisComment.contains(deleteButton)) {
        return;
    }
    thisComment.remove();

});



function addComment() {
    if (!userName.value) {
        userName.classList.add('error');
    } else {
        create__block.before(createCommentBlock());
    }
}



function createCommentBlock() {
    let comment_block = document.createElement('div');
    comment_block.classList.add('comment_block');

    let create_block = document.querySelector('.create__block');


    let comment__name = document.createElement('h2');
    comment__name.classList.add('comment__name');
    let name_value = create_block.querySelector('.comment__name');
    comment__name.textContent = name_value.value;

    let comment__text = document.createElement('p');
    comment__text.classList.add('comment__text');
    let text_value = create_block.querySelector('.comment__text');
    comment__text.textContent = text_value.value;

    let button_container = document.createElement('div');
    button_container.classList.add('button_container');

    let comment__date = document.createElement('div');
    comment__date.classList.add('comment__date');
    let date_value = create_block.querySelector('.comment__date');


    let dateNow = new Date();
    let dateCreate = Date.parse(date_value.value);
    if (isNaN(dateCreate)) {
        dateCreate = dateNow;
    }



    let hoursNow = dateNow.getHours();
    let hourstext = '0' + hoursNow;

    let minutesNow = dateNow.getMinutes();
    let minutesText = '0' + minutesNow;

    if (dateNow == dateCreate || (dateCreate < dateNow && dateCreate + 86400e3 > dateNow)) {
        comment__date.textContent = 'Today ' + hourstext.slice(-2) + ':' + minutesText.slice(-2);
    } else if (dateCreate + 86400e3 > dateNow - 86400e3 && dateCreate < dateNow) {
        comment__date.textContent = 'Yesterday' + hourstext.slice(-2) + ':' + minutesText.slice(-2);
    } else {
        comment__date.textContent = date_value.value + " " + hourstext.slice(-2) + ':' + minutesText.slice(-2);
    }


    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let likeButton = document.createElement('input');
    likeButton.classList.add('reaction_button');
    likeButton.classList.add('like_button')
    likeButton.type = 'image';
    likeButton.src = 'img/like.svg';
    likeButton.alt = 'like';

    let deleteButton = document.createElement('input');
    deleteButton.classList.add('reaction_button');
    deleteButton.classList.add('delete_button')

    deleteButton.type = 'image';
    deleteButton.src = 'img/delete.svg';
    deleteButton.alt = 'delete';

    buttons.append(likeButton);
    buttons.append(deleteButton);


    button_container.append(comment__date);
    button_container.append(buttons);

    comment_block.append(comment__name);
    comment_block.append(comment__text);
    comment_block.append(button_container);

    return comment_block;
}