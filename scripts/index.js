// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки


// @todo: Вывести карточки на страницу


const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');

function createCard(item, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardDelete = cardElement.querySelector('.card__delete-button')
    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__title').textContent = item.name;
    deleteCard(cardElement);
    return cardElement;
}

function deleteCard(item) {
    const cardDelete = item.querySelector('.card__delete-button')
    cardDelete.addEventListener('click', function() {
        item.remove();
    });
}

initialCards.forEach(item => {
    const card = createCard(item, deleteCard);
    cardContainer.append(card);
});
