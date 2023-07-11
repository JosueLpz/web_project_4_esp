import Popup from "./Popup.js";
import UserInfo from "./UserInfo.js";
export default class PopupWithForm extends Popup {
  constructor({ elementSelector, handleFormSubmit, buttonSelector }) {
    super(elementSelector);
    this._elementSelector = elementSelector;
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSelector = buttonSelector;
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
  setEventListeners() {
    super.setEventListeners();
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
