// DOM
// Page
const page = document.querySelector(".page");
// Profile
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__row_name");
const profileHobbie = profile.querySelector(".profile__hobbie");
const profileButtonEdit = profile.querySelector(".profile__row_edit")
const profileButtonCardAdd = document.querySelector(".profile__button")
// Form
const formUp = document.querySelector(".form__container");
const formClosedButon = document.querySelector(".form__container_closed")
const formInfoName = document.querySelector(".form__container_name")
const formInfoHobbie = document.querySelector(".form__container_hobby");
const formAddButton = document.querySelector(".form__container_button");
const formCardAdd = document.querySelector(".form__container_name_card");
const formImgAdd = document.querySelector(".form__container_link_img");
// Element


// Valores Inputs Form profile
formCardAdd.value = "Hey"
formImgAdd.value = "Soy Yo"

// Valor de los Inpunts del form
function imfoValueForm (e){
formInfoName.value = "Marco Aurelio"
formInfoHobbie.value = "Filosofo Emperador Romano"
profileName.textContent = formInfoName.value;
profileHobbie.textContent = formInfoHobbie.value;
}
imfoValueForm ()

// Array de objetos de cartas de element
const initialCards = [
  {
    name: "Acrópolis Atenas",
    link: "https://i.postimg.cc/3xZNv8TW/acropolis-gracia.jpg"
  },
  {
    name: "Colosseum Rome",
    link: "https://i.postimg.cc/x8mYcf6V/Colosseum-Rome-Italy.jpg"
  },
  {
    name: "Forum Romanum",
    link: "https://i.postimg.cc/hP9cnGJ9/Forum-Romanum-Rome-Italy.jpg"
  },
  {
    name: "Atenas Grecia",
    link: "https://i.postimg.cc/nhpZht7N/la-acropolis-athenas-grecia.jpg"
  },
  {
    name: "Trevi Fountain",
    link: "https://i.postimg.cc/43FTP7MT/Trevi-Fountain-Roma-Italy.jpg"
    
  },
  {
    name: "Areopagitou Athens",
    link: "https://i.postimg.cc/HLLgb462/Odeon-of-Herodes-Atticus-Dionysiou-Areopagitou-Athens-Greece.jpg"
  },  
];
// TODO El ultmio elemento de CARD no se ve REVISAR LUEGO

initialCards.map(function (item){
  const templateElement = document.querySelector("#template__article").content;
  const templateCard = templateElement.querySelector(".element__article").cloneNode(true);
  const element = document.querySelector(".element")
  
  
  
  templateElement.querySelector(".element__article_img").src = item.link
  templateElement.querySelector(".element__article_row_title").textContent = item.name
  
  element.prepend(templateCard);
  
  return templateCard
  
});

// Open Closed FORM
function openPop (buttom){
  buttom.addEventListener("click", function() {
    formUp.classList.add("form__container_open_active");
    page.classList.add("page__opacity_active")
  });
}
openPop(profileButtonEdit);

function closedPop(buttom){
  buttom.addEventListener("click", function(){
  formUp.classList.remove("form__container_open_active")
  page.classList.remove("page__opacity_active")
  });
}
closedPop(formClosedButon);

// Open Closed FORM Element
openPop(profileButtonCardAdd);