// DOM<>
let page = document.querySelector(".page")
let profile = document.querySelector(".profile");
let profile_Title = profile.querySelector(".profile__title");
let profile_Subtitle = profile.querySelector(".profile__subtitle");
let profile_Button = profile.querySelector(".profile__button")
let profile_FormContainer = document.querySelector(".profile__form_container");
let profile_FormTitle = document.querySelector(".profile__form_title")
let profile_FormSubtitle = document.querySelector(".profile__form_subtitle");
let profile_ClosedButon = document.querySelector(".profile__form_button-closed")
let profile_AddButton = document.querySelector(".profile__form_button");
let element = document.querySelector(".main__element_container")
let like = element.querySelectorAll(".element__like");


// Efecto Button Like
like.forEach(function(item) {
  item.addEventListener("click", function() {
    item.classList.toggle("element__like_black");
  });
});


// Abrir y Cerrar FORM <>
  profile_Button.addEventListener("click", function() {
  profile_FormContainer.classList.add("form_container_active");
  page.classList.add("page__opacity")
});

profile_ClosedButon.addEventListener("click", function(){
  profile_FormContainer.classList.remove("form_container_active")
  page.classList.remove("page__opacity")
})

// Valores de Input y FORM <>
profile_FormTitle.value = "Jacques Cousteau"
profile_FormSubtitle.value = "Explorador"

profile_Title.insertAdjacentText("afterbegin", `${profile_FormTitle.value}`);
profile_Subtitle.insertAdjacentText("afterbegin", `${profile_FormSubtitle.value}`);
// Valores de Input y FORM <>

// GUARDAR LA INFORMACION <>
function handleProfileFormSubmit (evt){
  evt.preventDefault()
  profile_Title.textContent = profile_FormTitle.value
  profile_Subtitle.textContent = profile_FormSubtitle.value
  profile_FormContainer.classList.remove("form_container_active")
  page.classList.remove("page__opacity")
}

profile_AddButton.addEventListener("click", handleProfileFormSubmit)