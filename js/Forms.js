export class Forms {
  constructor(formAddProfile, formAddCard) {
    this._formAddProfile = formAddProfile;
    this._formAddCard = formAddCard;
  }
  _getForm() {
    const formProfile = document.querySelector(this._formAddProfile);
    const formCard = document.querySelector(this._formAddCard);
    this._formProfile = formProfile;
    this._formCard = formCard;
    return [this._formProfile, this._formCard];
  }
  _openForm(formElement) {
    formElement.style.display = "block";
    formElement.classList.add("root__windos_fadeon");
    document.querySelector(".page").classList.add("page__opacity_active");
  }
  _closedForm(formElement) {
    formElement.classList.add("root__windos_fadeoff");
    setTimeout(function () {
      formElement.style.display = "";
      formElement.classList.remove("root__windos_fadeoff");
      document.querySelector(".page").classList.remove("page__opacity_active");
    }, 500);
  }
  _setEventListeners() {
    document.querySelector(".profile__row-edit").addEventListener("click", () => {
      this._openForm(this._formProfile);
    });
    document.querySelector(".profile__button").addEventListener("click", () => {
      this._openForm(this._formCard);
    });
    document.querySelector(".form__container-closed").addEventListener("click", () => {
      this._closedForm(this._formProfile);
    });
    document.querySelector(".card__element-button-closed").addEventListener("click", () => {
      this._closedForm(this._formCard);
    });
  }
}
