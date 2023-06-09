export { Card } from "./Card.js";
import { mainCardsList, closedPopGlobalActive, profileDfault, forms, dataCards } from "./utils.js";
import { FormValidator } from "./FormValidator.js";

class mainCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._name = data.name;
    this._img = data.link;
  }
  generateCard() {
    super._getTemplate();
    super._setEventListeners();

    this._cardElement.querySelector(".element__article_img").src = this._img;
    this._cardElement.querySelector(".element__article_row_title").textContent = this._name;

    return this._cardElement;
  }
}

const card = new mainCard(data, "#template__article");
dataCards.forEach((data) => {
  const cardElement = card.generateCard();
  mainCardsList.append(cardElement);
});

profileDfault();

class cardAndProifle extends Card {
  constructor(cardSelector) {
    super(cardSelector);
  }
  _addProfile() {
    const profileName = document.querySelector(".profile__row-name");
    const profileHobbie = document.querySelector(".profile__hobbie");
    const imputName = document.querySelector(".form__container-name");
    const imputHobbie = document.querySelector(".form__container-hobby");

    profileName.textContent = imputName.value;
    profileHobbie.textContent = imputHobbie.value;

    imputName.value = profileName.textContent;
    imputHobbie.value = profileHobbie.textContent;
  }
  _addCard() {
    const cardCreate = super._getTemplate();
    const name = document.querySelector(".card__element-name-card").value;
    const link = document.querySelector(".card__element-link-img").value;

    cardCreate.querySelector(".element__article_row_title").textContent = name;
    cardCreate.querySelector(".element__article_img").src = link;
    mainCardsList.prepend(cardCreate);
    super._setEventListeners();

    return cardCreate;
  }
  setEventListeners() {
    document.querySelector(".card__element-button-add").addEventListener("click", (e) => {
      this._addCard();
      document.querySelector(".card").style.display = "";
      document.querySelector(".page").classList.remove("page__opacity_active");
    });
    document.querySelector(".form__container-button").addEventListener("click", (e) => {
      this._addProfile();
      document.querySelector(".form").style.display = "";
      document.querySelector(".page").classList.remove("page__opacity_active");
    });
  }
}

const profileAndCard = new cardAndProifle("#template__article");
profileAndCard.setEventListeners();

const dataForms = [
  {
    fieldest: ".popup",
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  },
];

class FormsValid extends FormValidator {
  constructor(data, forms) {
    super(data, forms);
  }
  _enableValidation() {
    super._getFormElements();
    super._enableValidation();
  }
}

dataForms.forEach((data) => {
  const FormsVali = new FormsValid(data, forms);
  FormsVali._enableValidation();
});

closedPopGlobalActive();
