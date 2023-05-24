export class FormValidator {
  constructor(data) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }
  _getFormElements() {
    const forms = Array.from(document.querySelectorAll(this._formSelector));
    this._forms = forms;
    this._imptus = [];
    this._buttons = [];
    this._forms.forEach((form) => {
      const imputs = Array.from(form.querySelectorAll(this._inputSelector));
      this._imptus.push(imputs);
      const button = Array.from(form.querySelectorAll(this._submitButtonSelector));
      this._buttons.push(button);
    });
  }
  _enableValidation() {
    this._setEventListeners();
    // this._toggleButtonState(this._imptus[0], this._buttons[0]);
    console.log("🚀 ~ file: FormValidator.js:26 ~ FormValidator ~ _enableValidation ~ this._buttons:", this._buttons);
    console.log("🚀 ~ file: FormValidator.js:26 ~ FormValidator ~ _enableValidation ~ this._buttons[1]:", this._buttons[1]);
    console.log("🚀 ~ file: FormValidator.js:15 ~ FormValidator ~ _getFormElements ~ this._buttons:", this._buttons[1][0]);
    this._toggleButtonState(this._imptus[1], this._buttons[1][0]);
  }
  _setEventListeners() {
    this._forms.forEach((form) => {
      form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });

      this._imptus[0].forEach((imput) => {
        imput.addEventListener("keyup", () => {
          this._isValid(this._forms[0], imput);
          // this._toggleButtonState(this._imptus[0], this._buttons[0]);
        });
      });
    });

    this._imptus[1].forEach((imput) => {
      imput.addEventListener("keyup", () => {
        this._isValid(this._forms[1], imput);
        // this._toggleButtonState(this._imptus[1], this._buttons[1]);
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

    inputs.classList.add("popup__input_type_error");
    forms.querySelector(`.${inputs.id}-error`).classList.add("popup__error_visible");
    forms.querySelector(`.${inputs.id}-error`).textContent = errorMesagge;
  }
  _hideInputError(forms, inputs) {
    forms.querySelector(`.${inputs.id}-error`);
    inputs.classList.remove("popup__input_type_error");
    forms.querySelector(`.${inputs.id}-error`).classList.remove("popup__error_visible");
    forms.querySelector(`.${inputs.id}-error`).textContent = "";
  }
  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }
  _toggleButtonState(inputs, button) {
    if (this._hasInvalidInput(inputs)) {
      button.classList.add("popup__button_disabled");
    } else {
      button.classList.remove("popup__button_disabled");
    }
  }
}
