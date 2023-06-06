import Card from "./Card.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import { mainCardsList, dataCards, popupElements, defaultProfileValue } from "./utils.js";

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

defaultProfileValue();

const formProfile = new PopupWithForm({
  elementSelector: profileForm,
  handleFormSubmit: (item) => {
    const profileName = document.querySelector(".profile__row-name");
    const profileHobby = document.querySelector(".profile__hobbie");

    profileName.textContent = item.name;
    profileHobby.textContent = item.hobby;
  },
  buttonSelector: ".profile__row-edit",
});
formProfile.setEventListeners();

const formCard = new PopupWithForm({ elementSelector: cardForm, handleFormSubmit: () => {}, buttonSelector: ".profile__button" });
formCard.setEventListeners();
