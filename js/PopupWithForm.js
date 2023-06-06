import Popup from "./Popup.js";

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
  _getInputValues() {
    this._inputList = this._elementSelector.querySelectorAll(".popup__input");
    this._formValues = {};
    console.log("🚀 ~ file: PopupWithForm.js:20 ~ PopupWithForm ~ _getInputValues ~ this._formValues:", this._formValues);
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setEventListeners() {
    // super.setEventListeners();
    this._elementSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      //this._elementSelector.reset();
    });
    document.querySelector(this._buttonSelector).addEventListener("click", () => {
      this.open();
    });
  }
}
