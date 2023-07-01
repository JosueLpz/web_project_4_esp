import "./index.css";
import Card from "../js/Card.js";
import Popup from "../js/Popup.js";
import PopupWithImage from "../js/PopupWithImage.js";
import PopupWithForm from "../js/PopupWithForm.js";
import UserInfo from "../js/UserInfo.js";
import FormValidator from "../js/FormValidator.js";
import Section from "../js/Section.js";
import api from "../js/Api.js";
import { mainCardsList, popupElements } from "../js/utils.js";

const [cardForm, profileForm, zoomContainer] = popupElements;

const popupWithImage = new PopupWithImage();
const popupImg = new Popup(zoomContainer);

api
  .getInitialCards("cards")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  })
  .then((data) => {
    api
      .getProfileUser("users/me")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((user) => {
        const cardSection = new Section(
          {
            data: data,
            renderer: (item) => {
              const card = new Card(item, "#template__article", popupWithImage, popupImg, user);
              const cardElement = card.generateCard();
              cardSection.addItem(cardElement);
            },
          },
          mainCardsList
        );
        cardSection.renderItems();
      });
  });

const formCard = new PopupWithForm({
  elementSelector: cardForm,
  handleFormSubmit: (item) => {
    api
      .postCreateCards(
        "cards",
        JSON.stringify({
          name: item.name,
          link: item.link,
        })
      )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((data) => {
        const newCard = new Card(data, "#template__article", popupWithImage, popupImg);
        const addNewCard = newCard.generateCard();
        mainCardsList.prepend(addNewCard);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  buttonSelector: ".profile__button",
});
formCard.setEventListeners();

const formProfile = new PopupWithForm({
  elementSelector: profileForm,
  handleFormSubmit: (item) => {
    const userInfo = new UserInfo({ title: item.title, hobby: item.hobby });
    userInfo.setUserInfo();
  },
  buttonSelector: ".profile__row-edit",
});
formProfile.setEventListeners();

// const formValidProffile = new FormValidator(profileForm, {
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// });
// formValidProffile._enableValidation();

// const formValidCard = new FormValidator(cardForm, {
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// });
// formValidCard._enableValidation();
