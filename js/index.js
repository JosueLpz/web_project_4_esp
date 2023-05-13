// DOM
// Page
const page = document.querySelector(".page");
// Profile
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__row-name");
const profileHobbie = profile.querySelector(".profile__hobbie");
const profileButtonEdit = profile.querySelector(".profile__row-edit")
const profileButtonCardAdd = document.querySelector(".profile__button")
// Form
const formUp = document.querySelector(".form");
const formClosedButon = document.querySelector(".form__container-closed")
const formInfoName = document.querySelector(".form__container-name")
const formInfoHobbie = document.querySelector(".form__container-hobby");
const formAddButton = document.querySelector(".form__container-button");
// FormElement
const formElement = document.querySelector(".card")
const formCardAdd = document.querySelector(".card__element-name-card");
const formImgAdd = document.querySelector(".card__element-link-img");
const formElementButtom = document.querySelector(".card__element-button-add");
const Formtest = document.querySelector(".card__element");
const buttonClosedElement = document.querySelector(".card__element-button-closed");
const templateElement = document.querySelector("#template__article");
const templateCard = templateElement.querySelector(".element__article");
const element = document.querySelector(".element");
const zommContainer = document.querySelector(".zoom")
const buttonClosedZoom = document.querySelector(".zoom__button-closed");





const buttons =[buttonClosedElement, formClosedButon, buttonClosedZoom, formAddButton, formElementButtom]

function closedPopGlobal(form, buttons){ 
  let isPreest = false
  buttons.forEach((button) =>{
    button.addEventListener("click", ()=>{
      isPreest = true
    });
  });
    
  const closedPop = (evt) =>{
    if(evt.target !== form && !form.contains(evt.target)){
      form.classList.remove("form__container_open_active_e");
      page.classList.remove("page__opacity_active");
      document.removeEventListener("click", closedPop);
      document.removeEventListener("keydown", escapePop);
    }else if(isPreest === true){
      document.removeEventListener("click", closedPop);
      document.removeEventListener("keydown", escapePop);
    }
  };
  
  const escapePop = (evt) =>{
    if(evt.key === "Escape"){
      form.classList.remove("form__container_open_active_e");
      page.classList.remove("page__opacity_active");
      document.removeEventListener("click", closedPop);
      document.removeEventListener("keydown", escapePop);
    }
  };

  document.addEventListener("click", closedPop);
  document.addEventListener("keydown", escapePop);
}

// Open Closed FORM
function openPop(buttom, form) {
  buttom.addEventListener("click", function () {
    form.classList.add("root__windos_fadeon")
    form.classList.add("form__container_open_active_e");
    page.classList.add("page__opacity_active")
    
    setTimeout(function() {
      closedPopGlobal(form, buttons)
    }, 500);
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
  // evt.preventDefault()

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


closedPop(buttonClosedZoom, zommContainer)


function openPopImg(templateCard) {
  const buttomZoom = templateCard.querySelector(".element__article_img_button");
  const zommContainer = document.querySelector(".zoom")
  buttomZoom.addEventListener("click", function(){
    zommContainer.classList.add("root__windos_fadeon")
    zommContainer.classList.add("form__container_open_active_e");
    page.classList.add("page__opacity_active")
    setTimeout(function() {
      closedPopGlobal(zommContainer, buttons)
    }, 500);
  });
}

function imgZoom(templateCard) {
  const imgElementZoom = document.querySelector(".zoom__img");
  const elementImg = templateCard.querySelector(".element__article_img");
  const buttomZoom = templateCard.querySelector(".element__article_img_button");
  const textZoomContainer = document.querySelector(".zoom__text")
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
  // evt.preventDefault()

  const templateCard = addCard();
  likeCard(templateCard);
  deleteCard(templateCard);
  imgZoom(templateCard);
  openPopImg(templateCard)
  formElement.classList.remove("form__container_open_active_e")
  page.classList.remove("page__opacity_active")
});