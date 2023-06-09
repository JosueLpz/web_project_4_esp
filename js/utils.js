const mainCardsList = document.querySelector(".element");
const page = document.querySelector(".page");

const buttonClosedElement = document.querySelector(".card__element-button-closed");
const formClosedButon = document.querySelector(".form__container-closed");
const buttonClosedZoom = document.querySelector(".zoom__button-closed");

const formAddButton = document.querySelector(".form__container-button");
const formElementButtom = document.querySelector(".card__element-button-add");

const template = document.querySelector("#template__article");

const profileButtonEdit = document.querySelector(".profile__row-edit");
const profileButtonCardAdd = document.querySelector(".profile__button");

const zoomContainer = document.querySelector(".zoom");
const formElement = document.querySelector(".card");
const formUp = document.querySelector(".form");

const forms = [formElement, formUp];

const popupElements = [formElement, formUp, zoomContainer];

const buttons = [buttonClosedElement, formClosedButon, buttonClosedZoom, formAddButton, formElementButtom];

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

//

export { mainCardsList, popupElements, dataCards, forms };
