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
// FormElement
const formElement = document.querySelector(".form__container_card")
const formCardAdd = document.querySelector(".form__container_name_card");
const formImgAdd = document.querySelector(".form__container_link_img");
const formElementButtom = document.querySelector(".form__container_element_button");
const Formtest = document.querySelector(".form__element");
const buttonClosedElement = document.querySelector(".form__container_closed_element");
const templateElement = document.querySelector("#template__article");
const templateCard = templateElement.querySelector(".element__article");
const element = document.querySelector(".element");

// Valor de los Inpunts del form  START

// asignando el valor de los inputs y añadiendolos al  dom
formInfoName.value = "Marco Aurelio"
formInfoHobbie.value = "Filosofo Emperador Romano"
profileName.textContent = formInfoName.value
profileHobbie.textContent = formInfoHobbie.value

// Evento para cambiar los valores de el elemento html
formAddButton.addEventListener("click", function(evt){
evt.preventDefault()

// valores por defecto de el dom
profileName.textContent = formInfoName.value
profileHobbie.textContent = formInfoHobbie.value

// cambio de valores por los agregados por el usuario
formInfoName.value = profileName.textContent;
formInfoHobbie.value = profileHobbie.textContent;

// remover cambio de efectos
formUp.classList.remove("form__container_open_active_e")
page.classList.remove("page__opacity_active")
});

// Valor de los Inpunts del form END


// Array de objetos de cartas de element START

// array de objetos con las cartas para el dom element
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

// valores de los inputs de el form de element
formCardAdd.value = "Nombre del lugar"
formImgAdd.value = "Link de el lugar"

// iteracion de los objetos de el array con el metodo MAP y añadiendo las card
initialCards.map(function (item){

const templateElement = document.querySelector("#template__article").content;
const templateCard = templateElement.querySelector(".element__article").cloneNode(true);

templateCard.querySelector(".element__article_img").src = item.link
templateCard.querySelector(".element__article_row_title").textContent = item.name

element.append(templateCard);

return templateCard
});

// funcion de like
function likeCard(){
  const ButtonLike = document.querySelectorAll(".element__article_row_like")

  ButtonLike.forEach(function(item) {
    item.addEventListener("click", function() {
      item.classList.toggle("element__article_row_like_active"); 
    });
  });
  }
  likeCard()

// funcion para borrar las tarjetas
function deleteCard(){
  const buttonDelete = document.querySelectorAll(".element__article_delete");
  buttonDelete.forEach(function(button){
  button.addEventListener( "click", function(){
  const removeElement = button.closest(".element__article")
  removeElement.remove()
  });
  });
  };
  deleteCard()

  // añadir carta funcion
function addCard (){
  const templateElement = document.querySelector("#template__article").content;
  const templateCard = templateElement.querySelector(".element__article").cloneNode(true);

  templateCard.querySelector(".element__article_img").src = formImgAdd.value
  templateCard.querySelector(".element__article_row_title").textContent = formCardAdd.value
  
  element.prepend(templateCard);
  
  return templateCard


}


// funcion para agregar la tarjeta =D
formElementButtom.addEventListener("click", function(evt){
  evt.preventDefault()
  addCard();
  likeCard();
  deleteCard();
});


// Open Closed FORM
function openPop (buttom, form){
  buttom.addEventListener("click", function(e) {
    console.log(e.target)
    form.classList.add("form__container_open_active_e");
    page.classList.add("page__opacity_active")
  });
}
openPop(profileButtonEdit, formUp);

function closedPop(buttom, form){
  buttom.addEventListener("click", function(){
  form.classList.remove("form__container_open_active_e")
  page.classList.remove("page__opacity_active")
  });
}
closedPop(formClosedButon, formUp);

// Open Closed FORM Element
openPop(profileButtonCardAdd, formElement);
closedPop(buttonClosedElement, formElement);

