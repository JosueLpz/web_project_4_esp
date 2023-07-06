import Popup from "./Popup.js";
import api from "./Api.js";
export default class PopupWithForm extends Popup {
  constructor({ elementSelector, handleFormSubmit, buttonSelector }) {
    super(elementSelector);
    this._elementSelector = elementSelector;
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSelector = buttonSelector;
    console.log("🚀 ~ file: PopupWithForm.js:9 ~ PopupWithForm ~ constructor ~ this._buttonSelector:", this._buttonSelector);
  }
  open() {
    super.open();
  }
  closed() {
    super.closed();
  }
  _handleEscClose(evt) {
    super._handleEscClose(evt);
  }
  _handleClicClose(evt) {
    super._handleClicClose(evt);
  }
  closedSend() {
    this._elementSelector.style.display = "none";
    this._elementSelector.classList.remove("root__windos_fadeoff");
    document.querySelector(".page").classList.remove("page__opacity_active");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
    document.removeEventListener("click", this._handleClicClose);
  }
  _getInputValues() {
    this._inputList = this._elementSelector.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  showInfoValue() {
    api
      .getProfileUser("users/me")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        const inputName = document.querySelector(".form__container-name");
        const inputHobby = document.querySelector(".form__container-hobby");
        const profileName = document.querySelector(".profile__row-name");
        const profileHobby = document.querySelector(".profile__hobbie");
        const avatar = document.querySelector(".profile__img");
        avatar.src = result.avatar;
        inputName.value = result.name;
        inputHobby.value = result.about;
        profileName.textContent = result.name;
        profileHobby.textContent = result.about;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
  setEventListeners() {
    super.setEventListeners();
    this.showInfoValue();
    this._elementSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closedSend();
      document.removeEventListener("keydown", this._handleEscClose.bind(this));
      document.removeEventListener("click", this._handleClicClose);
    });
    document.querySelector(this._buttonSelector).addEventListener("click", () => {
      this.open();
    });
  }
}
