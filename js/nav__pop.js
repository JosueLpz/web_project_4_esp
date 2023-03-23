let profile = document.querySelector(".profile");
let profile_Title = profile.querySelector(".profile__title");
let profile_Subtitle = profile.querySelector(".profile__subtitle");
let profile_Button = profile.querySelector(".profile__button")
let profile_FormContainer = profile.querySelector(".profile__form_container");
let profile_FormTitle = profile.querySelector(".profile__form_title")
let profile_FormSubtitle = profile.querySelector(".profile__form_subtitle");
let profile_AddButton = profile.querySelector(".profile__form_button");


profile_Button.addEventListener("click", function() {
  profile_FormContainer.classList.toggle("form_container_active");
});



let titleProfile = "Jacques Cousteau";
let subtitleProfile =  "Explorador";

profile_Title.insertAdjacentText("afterbegin", `${titleProfile}`);
profile_Subtitle.insertAdjacentText("afterbegin", `${subtitleProfile}`);


function  handleProfileFormSubmit (){

  profile_Title.insertAdjacentText("afterbegin", `${profile_FormTitle.value}`);
  profile_Subtitle.insertAdjacentText("afterbegin", `${profile_FormSubtitle.value}`);
  
}

profile_AddButton.addEventListener("submit", handleProfileFormSubmit)





































// (OTRA FORMA DE HACERLO"Son Notas para mi Señor Revisor =)") function profileFormOpen() {
//   profile_FormContainer.classList.toggle("form_container_active");
//   return
// };

// profileFormOpen();

// profile_Button.addEventListener("click", profileFormOpen);