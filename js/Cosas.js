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
//     if (evt.target !== document.querySelector(".zoom") && !document.querySelector(".zoom").contains(evt.target)) {
//       document.querySelector(".zoom").style.display = "";
//       document.querySelector(".page").classList.remove("page__opacity_active");
//       document.removeEventListener("click", closedPop);
//       document.removeEventListener("keydown", escapePop);
//     }
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

//!Queria un acoplamiento mas debil de la clase card! queda para preguntar a Horacio!
// const cardSection = new Section(
//   {
//     data: dataCards,
//     renderer: (item) => {
//       const card = new Card("#template__article");
//       cardElement = card.generateCard();
//       cardElement.querySelector(".element__article_img").src = item.link;
//       cardElement.querySelector(".element__article_row_title").textContent = item.name;
//       cardSection.addItem(cardElement);
//     },
//   },
//   mainCardsList
// );
