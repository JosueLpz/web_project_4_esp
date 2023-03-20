let profile = document.querySelector(".profile");
let profile_Title = profile.querySelector(".profile__title");
let profile_Subtitle = profile.querySelector(".profile__subtitle");
let profile_Button = profile.querySelector(".profile__button")
let profile_FormContainer = profile.querySelector(".profile__form_container");
let profile_FormTitle = profile.querySelector(".profile__form_title")
let profile_FormSubtitle = profile.querySelector(".profile__form_subtitle");


let infoTitle = `Jacques Cousteau`
let infoSubtitle = `Explorador`

profile_Title.textContent = `${infoTitle}`;
profile_Subtitle.textContent = `${infoSubtitle}`;

// porque no funciona? 20/03/2023
profile_FormTitle.setAttribute = ("placeholder", "Hola");
profile_FormSubtitle.setAttribute = (`placeholder`,`adios`);

// (OTRA FORMA DE HACERLO"Son Notas para mi Señor Revisor =)") function profileFormOpen() {
//   profile_FormContainer.classList.toggle("form_container_active");
//   return
// };

// profileFormOpen();

// profile_Button.addEventListener("click", profileFormOpen);

profile_Button.addEventListener("click", function() {
  profile_FormContainer.classList.toggle("form_container_active");
});