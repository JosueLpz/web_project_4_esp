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

// Open Closed FORM
function openPop(buttom, form) {
  buttom.addEventListener("click", function () {
    form.classList.add("root__windos_fadeon")
    form.classList.add("form__container_open_active_e");
    page.classList.add("page__opacity_active")
  });
}
openPop(profileButtonEdit, formUp);

function closedPop(buttom, form) {
  buttom.addEventListener("click", function () {
    form.classList.add("root__windos_fadeoff")
    setTimeout(function() {
      form.classList.remove("form__container_open_active_e");
      form.classList.remove("root__windos_fadeoff");
      page.classList.remove("page__opacity_active");
    }, 500);
  });
}
closedPop(formClosedButon, formUp);

// Open Closed FORM Element
openPop(profileButtonCardAdd, formElement);
closedPop(buttonClosedElement, formElement);


// asignando el valor de los inputs Profile
formInfoName.value = "Marco Aurelio"
formInfoHobbie.value = "Filosofo Emperador Romano"
profileName.textContent = formInfoName.value
profileHobbie.textContent = formInfoHobbie.value

// Form Profile closed saved
formAddButton.addEventListener("click", function (evt) {
  evt.preventDefault()

  profileName.textContent = formInfoName.value
  profileHobbie.textContent = formInfoHobbie.value

  formInfoName.value = profileName.textContent;
  formInfoHobbie.value = profileHobbie.textContent;

  formUp.classList.remove("form__container_open_active_e")
  page.classList.remove("page__opacity_active")
});



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


// iteracion de los objetos de el array con el metodo MAP y añadiendo las card
initialCards.map(function (item) {

  const templateElement = document.querySelector("#template__article").content;
  const templateCard = templateElement.querySelector(".element__article").cloneNode(true);

  templateCard.querySelector(".element__article_img").src = item.link
  templateCard.querySelector(".element__article_row_title").textContent = item.name

  element.append(templateCard);

  likeCard(templateCard);
  deleteCard(templateCard);
  openPopImg(templateCard);
  imgZoom(templateCard);
  return templateCard
});


function likeCard(templateCard) {
  const ButtonLike = templateCard.querySelector(".element__article_row_like")
  ButtonLike.addEventListener("click", function () {
    ButtonLike.classList.toggle("element__article_row_like_active"); 
  });
};

function deleteCard(templateCard) {
  const buttonDelete = templateCard.querySelector(".element__article_delete");
  buttonDelete.addEventListener("click", function () {
    const removeElement = buttonDelete.closest(".element__article")
    removeElement.remove()
  });
};


const zommContainer = document.querySelector(".img__container_zoom")
const buttonClosedZoom = document.querySelector(".img__container_zoom_button_closed");
closedPop(buttonClosedZoom, zommContainer)




function openPopImg(templateCard) {
  const buttomZoom = templateCard.querySelector(".element__article_img_button");
  const zommContainer = document.querySelector(".img__container_zoom")
  buttomZoom.addEventListener("click", function(){
    zommContainer.classList.add("root__windos_fadeon")
    zommContainer.classList.add("form__container_open_active_e");
    page.classList.add("page__opacity_active")
  });
}

function imgZoom(templateCard) {
  const imgElementZoom = document.querySelector(".img__container_zoom_img");
  const elementImg = templateCard.querySelector(".element__article_img");
  const buttomZoom = templateCard.querySelector(".element__article_img_button");
  const textZoomContainer = document.querySelector(".img__container_zoom_text")
  const textElement = templateCard.querySelector(".element__article_row_title")
  
  buttomZoom.addEventListener("click", function(){
    zommContainer.classList.add("form__container_open_active_e");
    page.classList.add("page__opacity_active")
    imgElementZoom.src = elementImg.src
    textZoomContainer.textContent = textElement.textContent
  });
}

//añadir carta funcion
function addCard() {

  const templateElement = document.querySelector("#template__article").content;
  const templateCard = templateElement.querySelector(".element__article").cloneNode(true);

  templateCard.querySelector(".element__article_img").src = formImgAdd.value
  templateCard.querySelector(".element__article_row_title").textContent = formCardAdd.value

  element.prepend(templateCard);

  return templateCard

}


// funcion para agregar la tarjeta =D
formElementButtom.addEventListener("click", function (evt) {
  evt.preventDefault()

  const templateCard = addCard();
  likeCard(templateCard);
  deleteCard(templateCard);
  imgZoom(templateCard);
  openPopImg(templateCard)
  formElement.classList.remove("form__container_open_active_e")
  page.classList.remove("page__opacity_active")
});