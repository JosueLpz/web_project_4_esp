export default class FormValidator {
  constructor({ inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }, forms) {
    this._forms = forms;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }
  _getFormElements() {
    this._formCard = this._forms[0];
    this._formProfile = this._forms[1];
    const formButtons = Array.from(document.querySelectorAll(this._submitButtonSelector));
    this._buttomCard = formButtons[1];
    this._buttomProfile = formButtons[0];
    const imputsList = [];
    this._forms.forEach((form) => {
      const imputs = Array.from(form.querySelectorAll(this._inputSelector));
      imputsList.push(imputs);
    });
    this._cardImputs = imputsList[0];
    this._profileImputs = imputsList[1];
  }

  _enableValidation() {
    this._getFormElements();
    this._setEventListeners();
    this._toggleButtonState(this._formCard, this._cardImputs, this._buttomCard);
    this._toggleButtonState(this._formProfile, this._profileImputs, this._buttomProfile);
  }
  _setEventListeners() {
    this._cardImputs.forEach((imput) => {
      imput.addEventListener("keyup", () => {
        this._isValid(this._formCard, imput);
        this._toggleButtonState(this._formCard, this._cardImputs, this._buttomCard);
      });
    });

    this._profileImputs.forEach((imput) => {
      imput.addEventListener("keyup", () => {
        this._isValid(this._formProfile, imput);
        this._toggleButtonState(this._formProfile, this._profileImputs, this._buttomProfile);
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
