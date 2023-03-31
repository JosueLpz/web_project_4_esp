// DOM

// Page
let page = document.querySelector(".page");
// Profile
let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__row_name");
let profileHobbie = profile.querySelector(".profile__hobbie");
let profileButtonEdit = profile.querySelector(".profile__row_edit")
// Form
let formUp = document.querySelector(".form__container");
let formClosedButon = document.querySelector(".form__container_closed")
let formInfoName = document.querySelector(".form__container_name")
let formInfoHobbie = document.querySelector(".form__container_hobby");
let formAddButton = document.querySelector(".form__container_button");
// Element
let element = document.querySelector(".element");
let ButtonLike = element.querySelectorAll(".element__article_row_like");


// Abrir y Cerrar FORM <>
  profileButtonEdit.addEventListener("click", function() {
    formUp.classList.add("form__container_open_active");
    page.classList.add("page__opacity_active")
  });
  
formClosedButon.addEventListener("click", function(){
  formUp.classList.remove("form__container_open_active")
  page.classList.remove("page__opacity_active")
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
  formUp.classList.remove("form__container_open_active")
  page.classList.remove("page__opacity_active")
}

formAddButton.addEventListener("click", handleProfileFormSubmit)


// Efecto Button Like
ButtonLike.forEach(function(item) {
  item.addEventListener("click", function() {
    item.classList.toggle("element__article_row_like_active");
  });
});