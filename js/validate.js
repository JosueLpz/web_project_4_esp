const showInputError = function (forms, inputs, errorMesagge) {
  const errorElement = forms.querySelector(`.${inputs.id}-error`);
  inputs.classList.add("popup__input_type_error");
  errorElement.classList.add("popup__error_visible");
  errorElement.textContent = errorMesagge;
};

const hideInputError = function (forms, inputs) {
  const errorElement = forms.querySelector(`.${inputs.id}-error`);
  inputs.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
};

const isValid = function (forms, inputs) {
  if (!inputs.validity.valid) {
    showInputError(forms, inputs, inputs.validationMessage);
  } else {
    hideInputError(forms, inputs);
  }
};

const setEventListeners = function (formList) {

  const buttonList = Array.from(document.querySelectorAll(".popup__button"));

  formList.forEach(function (forms) {
    const inputList = Array.from(forms.querySelectorAll(".popup__input"));
    inputList.forEach(function (inputs) {
      inputs.addEventListener("keyup", function () {
        isValid(forms, inputs);
        toggleButtonState(inputList, buttonList);
      });
    });
  });
};

const hasInvalidInput = function (inputs) {

  return inputs.some(input=>{
    return !input.validity.valid
  })
  
};

const toggleButtonState = function (inputs, buttons) {
  buttons.forEach(function (buton) {
    if (hasInvalidInput(inputs)) {
      buton.classList.add("popup__button_disabled");
    } else {
      buton.classList.remove("popup__button_disabled");
    }
  });
};

function enableValidation(element) {
  const formList = Array.from(document.querySelectorAll(element.formSelector));
  const inputList = Array.from(document.querySelectorAll(element.inputSelector));
  const buttonList = Array.from(document.querySelectorAll(element.submitButtonSelector));

  toggleButtonState(inputList, buttonList);

  formList.forEach(function (forms) {
    forms.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formList);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",

  formSelectorCard:".popup__form_card",
  inputSelectorCard:".popup__input_card",
  submitButtonSelectorCard:".popup__button_card",

  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
