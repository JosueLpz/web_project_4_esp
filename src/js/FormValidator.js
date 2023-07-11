export default class FormValidator {
  constructor(form, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
    this._form = form;
    console.log("🚀 ~ file: FormValidator.js:4 ~ FormValidator ~ constructor ~ this._form:", this._form);
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }
  _getFormElements() {
    this._form;
    this._imputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  _enableValidation() {
    this._getFormElements();
    this._setEventListeners();
    this._toggleButtonState(this._form, this._imputs, this._button);
  }
  _setEventListeners() {
    this._imputs.forEach((imput) => {
      imput.addEventListener("keyup", () => {
        this._isValid(this._form, imput);
        this._toggleButtonState(this._form, this._imputs, this._button);
      });
    });
  }
  _isValid(forms, inputs) {
    if (!inputs.validity.valid) {
      this._showInputError(forms, inputs, inputs.validationMessage);
    } else {
      this._hideInputError(forms, inputs);
    }
  }
  _showInputError(forms, inputs, errorMesagge) {
    forms.querySelector(`.${inputs.id}-error`);

    inputs.classList.add(this._inputErrorClass);
    forms.querySelector(`.${inputs.id}-error`).classList.add(this._errorClass);
    forms.querySelector(`.${inputs.id}-error`).textContent = errorMesagge;
  }
  _hideInputError(forms, inputs) {
    forms.querySelector(`.${inputs.id}-error`);
    inputs.classList.remove(this._inputErrorClass);
    forms.querySelector(`.${inputs.id}-error`).classList.remove(this._errorClass);
    forms.querySelector(`.${inputs.id}-error`).textContent = "";
  }
  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }
  _evtKey(evt) {
    if (evt.key === "Enter") {
      evt.preventDefault();
    }
  }

  _toggleButtonState(form, inputs, button) {
    if (this._hasInvalidInput(inputs)) {
      button.classList.add(this._inactiveButtonClass);
      form.addEventListener("keydown", this._evtKey);
    } else {
      button.classList.remove(this._inactiveButtonClass);
      form.removeEventListener("keydown", this._evtKey);
    }
  }
}
