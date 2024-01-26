const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function addCard(element, deleteCard) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__image').src = element.link;
    cardElement.querySelector('.card__image').alt = element.alt;
    cardElement.querySelector('.card__title').textContent = element.name;

    const buttonDelete = cardElement.querySelector('.card__delete-button');

    buttonDelete.addEventListener('click', deleteCard);

    cardList.append(cardElement);

    return cardElement;
}

function deleteCard(event) {
    event.target.parentNode.remove();
 }

initialCards.forEach ((item) => {
    addCard(item, deleteCard);
});

