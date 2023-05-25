import { Card } from "./Card.js";
import { mainCardsList, closedPopGlobalActive, profileDfault } from "./utils.js";
import { Forms } from "./Forms.js";
import { FormValidator } from "./FormValidator.js";

const dataCards = [
  {
    name: "Acrópolis Atenas",
    link: "https://i.postimg.cc/3xZNv8TW/acropolis-gracia.jpg",
  },
  {
    name: "Colosseum Rome",
    link: "https://i.postimg.cc/x8mYcf6V/Colosseum-Rome-Italy.jpg",
  },
  {
    name: "Forum Romanum",
    link: "https://i.postimg.cc/hP9cnGJ9/Forum-Romanum-Rome-Italy.jpg",
  },
  {
    name: "Atenas Grecia",
    link: "https://i.postimg.cc/nhpZht7N/la-acropolis-athenas-grecia.jpg",
  },
  {
    name: "Trevi Fountain",
    link: "https://i.postimg.cc/43FTP7MT/Trevi-Fountain-Roma-Italy.jpg",
  },
  {
    name: "Areopagitou Athens",
    link: "https://i.postimg.cc/HLLgb462/Odeon-of-Herodes-Atticus-Dionysiou-Areopagitou-Athens-Greece.jpg",
  },
];

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

dataCards.forEach((data) => {
  const card = new mainCard(data, "#template__article");
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

class Form extends Forms {
  constructor(formAddProfile, formAddCard) {
    super(formAddProfile, formAddCard);
  }
  _getForm() {
    super._setEventListeners();
    super._getForm();
  }
}

const Formss = new Form(".form", ".card");
Formss._getForm();

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
  constructor(data) {
    super(data);
  }
  _enableValidation() {
    super._getFormElements();
    super._enableValidation();
  }
}

dataForms.forEach((data) => {
  const FormsVali = new FormsValid(data);
  FormsVali._enableValidation();
});

closedPopGlobalActive();
