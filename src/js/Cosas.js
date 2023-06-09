//!Logica Que abre y cierra los form de la clase card
// _openPopCard() {
//   document.querySelector(".zoom").classList.add("root__windos_fadeon");
//   document.querySelector(".zoom").style.display = "block";
//   document.querySelector(".page").classList.add("page__opacity_active");
//   document.querySelector(".zoom__img").src = this._cardElement.querySelector(".element__article_img").src;
//   document.querySelector(".zoom__text").textContent = this._cardElement.querySelector(".element__article_row_title").textContent;
// }
// _closedPopCard() {
//   document.querySelector(".zoom").classList.add("root__windos_fadeoff");
//   setTimeout(function () {
//     document.querySelector(".zoom").style.display = "";
//     document.querySelector(".zoom").classList.remove("root__windos_fadeoff");
//     document.querySelector(".page").classList.remove("page__opacity_active");
//   }, 500);
// }
// _closedPopGlobalCard = (buttons) => {
//   let isPreest = false;
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       isPreest = true;
//     });
//   });
//   const closedPop = (evt) => {
// if (evt.target !== document.querySelector(".zoom") && !document.querySelector(".zoom").contains(evt.target)) {
//   document.querySelector(".zoom").style.display = "";
//   document.querySelector(".page").classList.remove("page__opacity_active");
//   document.removeEventListener("click", closedPop);
//   document.removeEventListener("keydown", escapePop);
// }
//     if (isPreest === true) {
//       document.removeEventListener("click", closedPop);
//       document.removeEventListener("keydown", escapePop);
//     }
//   };
//   const escapePop = (evt) => {
//     if (evt.key === "Escape") {
//       document.querySelector(".zoom").style.display = "";
//       document.querySelector(".page").classList.remove("page__opacity_active");
//       document.removeEventListener("click", closedPop);
//       document.removeEventListener("keydown", escapePop);
//     }
//   };
//   document.addEventListener("keydown", escapePop);
//   document.addEventListener("click", closedPop);
// };

//!Eventos de la clase card! vamos a añadirlos despues xD
// this._cardElement.querySelector(".element__article_img_button").addEventListener("click", () => {
//   this._openPopCard();
//   setTimeout(() => {
//     this._closedPopGlobalCard(buttonsClosed);
//   }, 500);
// });
// document.querySelector(".zoom__button-closed").addEventListener("click", () => {
//   this._closedPopCard();
// });

//!new

const profileDfault = () => {
  const profileName = document.querySelector(".profile__row-name");
  const profileHobbie = document.querySelector(".profile__hobbie");
  const imputName = document.querySelector(".form__container-name");
  const imputHobbie = document.querySelector(".form__container-hobby");

  imputName.value = "Marco Aurelio";
  imputHobbie.value = "Filosofo Emperador Romano";
  profileName.textContent = imputName.value;
  profileHobbie.textContent = imputHobbie.value;
};

// const closedPopGlobalActive = () => {
//   profileButtonEdit.addEventListener("click", () => {
//     setTimeout(() => {
//       closedPopGlobal(formUp, buttonsClosed);
//     }, 500);
//   });
//   profileButtonCardAdd.addEventListener("click", () => {
//     setTimeout(() => {
//       closedPopGlobal(formElement, buttonsClosed);
//     }, 500);
//   });

//   function closedPopGlobal(form, buttons) {
//     let isPreest = false;
//     buttons.forEach((button) => {
//       button.addEventListener("click", () => {
//         isPreest = true;
//       });
//     });

//     const closedPop = (evt) => {
//       if (evt.target !== form && !form.contains(evt.target)) {
//         form.style.display = "";
//         page.classList.remove("page__opacity_active");
//         document.removeEventListener("click", closedPop);
//         document.removeEventListener("keydown", escapePop);
//       }
//       if (isPreest === true) {
//         document.removeEventListener("click", closedPop);
//         document.removeEventListener("keydown", escapePop);
//       }
//     };

//     const escapePop = (evt) => {
//       if (evt.key === "Escape") {
//         form.style.display = "";
//         page.classList.remove("page__opacity_active");
//         document.removeEventListener("click", closedPop);
//         document.removeEventListener("keydown", escapePop);
//       }
//     };
//     document.addEventListener("keydown", escapePop);
//     document.addEventListener("click", closedPop);
//   }
//
