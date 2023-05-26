export class FormValidator {
  constructor(data, forms) {
    this._forms = forms;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
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
  _enableValidation() {
    this._setEventListeners();
    this._toggleButtonState(this._cardImputs, this._buttomCard);
    this._toggleButtonState(this._profileImputs, this._buttomProfile);
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
    this._forms.forEach((form) => {
      form.addEventListener("click", (evt) => {
        evt.preventDefault();
      });
      form.addEventListener("keydown", (evt) => {
        if (evt.key === "Enter") {
          evt.preventDefault();
        }
      });
    });
    this._cardImputs.forEach((imput) => {
      imput.addEventListener("keyup", () => {
        this._isValid(this._formCard, imput);
        this._toggleButtonState(this._cardImputs, this._buttomCard);
      });
    });

    this._profileImputs.forEach((imput) => {
      imput.addEventListener("keyup", () => {
        this._isValid(this._formProfile, imput);
        this._toggleButtonState(this._profileImputs, this._buttomProfile);
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
