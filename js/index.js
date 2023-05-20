import { Card } from "./Card.js";
import { mainCardsList } from "./utils.js";

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

    this._element.querySelector(".element__article_img").src = this._img;
    this._element.querySelector(".element__article_row_title").textContent = this._name;

    return this._element;
  }
}

dataCards.forEach((data) => {
  const card = new mainCard(data, "#template__article");
  const cardElement = card.generateCard();
  mainCardsList.append(cardElement);
});
