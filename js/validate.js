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

const setEventListeners = function (formA, formB) {
  
  const buttonA = document.querySelector(".popup__button");
  const buttonB = document.querySelector(".popup__button_card")
  formA.forEach(function (form) {
    const inputlistA = Array.from(form.querySelectorAll(".popup__input"));
    inputlistA.forEach(function (input) {
      input.addEventListener("keyup", function () {
        isValid(form, input);
        toggleButtonState(inputlistA, buttonA);
      });
    });
  });
  
  formB.forEach(function(form){
    const inputlistB = Array.from(form.querySelectorAll(".popup__input_card"));
    inputlistB.forEach(function (input){
      input.addEventListener("keyup", function () {
        isValid(form, input);
        toggleButtonState(inputlistB, buttonB);
      });
    });
  });
};

const hasInvalidInput = function (inputs) { 
  return inputs.some(input=>{
    return !input.validity.valid
  })  
};

const toggleButtonState = function (inputs, button) {
  if (hasInvalidInput(inputs)) {
      button.classList.add("popup__button_disabled");
    } else {
      button.classList.remove("popup__button_disabled");
    }
};

function enableValidation(element) {
  const formA = Array.from(document.querySelectorAll(element.formSelector));
  const inputListA = Array.from(document.querySelectorAll(element.inputSelector));
  const buttonA = document.querySelector(element.submitButtonSelector);
  
  const formB = Array.from(document.querySelectorAll(element.formSelectorCard));
  const inputListB = Array.from(document.querySelectorAll(element.inputSelectorCard));
  const buttonB = document.querySelectorAll(element.submitButtonSelectorCard);
  
  setEventListeners(formA, formB);
  toggleButtonState(inputListA, buttonA);
  // toggleButtonState(inputListB, buttonB);
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
