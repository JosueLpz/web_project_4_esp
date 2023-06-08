import Card from "./Card.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import { mainCardsList, dataCards, popupElements } from "./utils.js";

const [cardForm, profileForm, zoomContainer] = popupElements;

const popupWithImage = new PopupWithImage();
const popupImg = new Popup(zoomContainer);

const cardSection = new Section(
  {
    data: dataCards,
    renderer: (item) => {
      const card = new Card(item, "#template__article", popupWithImage, popupImg);
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  mainCardsList
);
cardSection.renderItems();

const formCard = new PopupWithForm({
  elementSelector: cardForm,
  handleFormSubmit: (item) => {
    const newCard = new Card(item, "#template__article", popupWithImage, popupImg);
    const addNewCard = newCard.generateCard();
    mainCardsList.prepend(addNewCard);
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
formProfile.showInfoValue();
formProfile.setEventListeners();
