let myForm = document.querySelector('.form__container');
let answersContainer = document.querySelector('.answers');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    while (document.querySelector('.item')) {
        document.querySelector('.item').remove();
    }

    let myURL = new URL('https://api.github.com/search/repositories');

    let myQuery = document.querySelector('.search_row');
    let queryText = myQuery.value;


    myURL.searchParams.set('q', queryText);
    myURL.searchParams.set('per_page', '10');

    fetch(myURL)
        .then(item => item.json())
        .then(mainObj => element = mainObj.items)
        .then(arrItem => {
            if (arrItem.length == 0) {
                answersContainer.append(createEmpty());
            } else {
                arrItem.forEach(element => {
                    answersContainer.append(createItem(element));
                })
            }
        })
        .catch(err => {
            answersContainer.append(createEmpty());
        })
}
);


function createItem(obj) {
    let myItem = document.createElement('div');
    myItem.classList.add('item');

    let itemHead = document.createElement('h2');
    itemHead.classList.add('item__link');

    let itemLink = document.createElement('a');
    itemLink.setAttribute('target', '_blank');
    itemLink.href = obj.html_url;
    itemLink.textContent = obj.name;

    let itemDescription = document.createElement('p');
    itemDescription.classList.add('item__description')
    itemDescription.textContent = obj.description;

    itemHead.append(itemLink);

    myItem.append(itemHead);
    myItem.append(itemDescription);

    return myItem
}


function createEmpty() {
    let myItem = document.createElement('div');
    myItem.classList.add('item');

    let itemHead = document.createElement('h2');
    itemHead.classList.add('item__link');

    let itemLink = document.createElement('a');
    itemLink.setAttribute('target', '_blank');
    itemLink.href = '#';
    itemLink.textContent = "Nothind / Error";

    let itemDescription = document.createElement('p');
    itemDescription.classList.add('item__description')
    itemDescription.textContent = 'You make bad query, please try again';

    itemHead.append(itemLink);

    myItem.append(itemHead);
    myItem.append(itemDescription);

    return myItem
}