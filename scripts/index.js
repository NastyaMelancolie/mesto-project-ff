const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(element, deleteCard) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = element.link;
    cardImage.alt = element.alt;
    cardElement.querySelector('.card__title').textContent = element.name;

    const buttonDelete = cardElement.querySelector('.card__delete-button');

    buttonDelete.addEventListener('click', deleteCard);

    return cardElement;
}

function addCard(item, deleteCard) {
    const cardElement = createCard(item, deleteCard);
    cardList.append(cardElement);
}

function deleteCard(event) {
    event.target.closest('.card').remove();
 }

initialCards.forEach ((item) => {
    addCard(item, deleteCard);
});

