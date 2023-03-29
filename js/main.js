// DOM

// Page
let page = document.querySelector(".page")
// Profile
let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__name");
let profileHobbie = profile.querySelector(".profile__hobbie");
let profileButtonEdit = profile.querySelector(".profile__button_edit")
// Form
let formUp = document.querySelector(".form");
let formClosedButon = document.querySelector(".form__button_closed")
let formInfoName = document.querySelector(".form__info_name")
let formInfoHobbie = document.querySelector(".form__info_hobbie");
let formAddButton = document.querySelector(".form__button");
// Element
let element = document.querySelector(".element")
let ButtonLike = element.querySelectorAll(".element__like");


// Abrir y Cerrar FORM <>
  profileButtonEdit.addEventListener("click", function() {
    formUp.classList.add("form__open");
    page.classList.add("page__opacity")
  });
  
formClosedButon.addEventListener("click", function(){
  formUp.classList.remove("form__open")
  page.classList.remove("page__opacity")
})

// Valores de Input y FORM <>
formInfoName.value = "Jacques Cousteau"
formInfoHobbie.value = "Explorador"

profileName.insertAdjacentText("afterbegin", `${formInfoName.value}`);
profileHobbie.insertAdjacentText("afterbegin", `${formInfoHobbie.value}`);
// Valores de Input y FORM <>

// GUARDAR LA INFORMACION <>
function handleProfileFormSubmit (evt){
  evt.preventDefault()
  profileName.textContent = formInfoName.value
  profileHobbie.textContent = formInfoHobbie.value
  formUp.classList.remove("form__open")
  page.classList.remove("page__opacity")
}

formAddButton.addEventListener("click", handleProfileFormSubmit)


// Efecto Button Like
ButtonLike.forEach(function(item) {
  item.addEventListener("click", function() {
    item.classList.toggle("element__article__row__like__active");
  });
});