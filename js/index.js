import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import { mainCardsList, dataCards } from "./utils.js";

const cardSection = new Section(
  {
    data: dataCards,
    renderer: (item) => {
      const card = new Card(item, "#template__article");
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  mainCardsList
);
cardSection.renderItems();
