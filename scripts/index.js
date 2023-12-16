// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки


// @todo: Вывести карточки на страницу


const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(item, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardDelete = cardElement.querySelector('.card__delete-button')
    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__title').textContent = item.name;
    switch(item.name) {
        case 'Архыз': cardElement.querySelector('.card__image').alt = 'Горы архыза';
            break;
        case 'Челябинская область': cardElement.querySelector('.card__image').alt = 'Озеро Челябинской области';
            break;
        case 'Иваново': cardElement.querySelector('.card__image').alt = 'Панельные дома Иваново';
            break;
        case 'Камчатка': cardElement.querySelector('.card__image').alt = 'Виды Камчатки';
            break;
        case 'Холмогорский район': cardElement.querySelector('.card__image').alt = 'Железная дорога Холмогорского района';
            break;
        case 'Байкал': cardElement.querySelector('.card__image').alt = 'Вид озера Байкал';
            break;
    }
    cardDelete.addEventListener('click', function() {
        deleteCard(cardElement);
    });
    return cardElement;
}

function deleteCard(item) {
    item.remove();
}

initialCards.forEach(item => {
    const card = createCard(item, deleteCard);
    cardContainer.append(card);
});
