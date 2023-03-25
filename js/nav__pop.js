// DOM<>
let profile = document.querySelector(".profile");
let profile_Title = profile.querySelector(".profile__title");
let profile_Subtitle = profile.querySelector(".profile__subtitle");
let profile_Button = profile.querySelector(".profile__button")
let profile_FormContainer = profile.querySelector(".profile__form_container");
let profile_FormTitle = profile.querySelector(".profile__form_title")
let profile_FormSubtitle = profile.querySelector(".profile__form_subtitle");
let profile_ClosedButon = profile.querySelector(".profile__form_button-closed")
let profile_AddButton = profile.querySelector(".profile__form_button");
// DOM</>

  // Abrir y Cerrar FORM <>
  profile_Button.addEventListener("click", function() {
  profile_FormContainer.classList.add("form_container_active");
});

profile_ClosedButon.addEventListener("click", function(){
  profile_FormContainer.classList.remove("form_container_active")
})
// Abrir y Cerrar FORM </>

  // Valores de Input y FORM <>
profile_FormTitle.value = "Jacques Cousteau"
profile_FormSubtitle.value = "Explorador"

profile_Title.insertAdjacentText("afterbegin", `${profile_FormTitle.value}`);
profile_Subtitle.insertAdjacentText("afterbegin", `${profile_FormSubtitle.value}`);
// Valores de Input y FORM <>


  // Edicion de Inpit y Form <>
profile_FormTitle.addEventListener("input", checkEventInput);
profile_FormSubtitle.addEventListener("input", checkEventInput);

function  checkEventInput (){
  profile_Title.textContent = profile_FormTitle.value
  profile_Subtitle.textContent = profile_FormSubtitle.value
}
  // Edicion de Inpit y Form </>

// GUARDAR LA INFORMACION <>
function handleProfileFormSubmit (evt){
  evt.handleProfileFormSubmit()
  profile_Title.textContent = profile_FormTitle.value
  profile_Subtitle.textContent = profile_FormSubtitle.value
}

profile_AddButton.addEventListener("click", handleProfileFormSubmit)
// GUARDAR LA INFORMACION </>





































// (OTRA FORMA DE HACERLO"Son Notas para mi Señor Revisor =)") function profileFormOpen() {
//   profile_FormContainer.classList.toggle("form_container_active");
//   return
// };

// profileFormOpen();

// profile_Button.addEventListener("click", profileFormOpen);