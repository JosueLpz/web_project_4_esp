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
    const inputlistB = Array.from(form.querySelectorAll(".popup__input-card"));
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
  const fieldest = document.querySelectorAll(element.fieldest);

  const formA = Array.from(document.querySelectorAll(element.formSelector));
  const inputListA = Array.from(document.querySelectorAll(element.inputSelector));
  const buttonA = document.querySelector(element.submitButtonSelector);

  const formB = Array.from(document.querySelectorAll(element.formSelectorCard));
  const inputListB = Array.from(document.querySelectorAll(element.inputSelectorCard));
  const buttonB = document.querySelector(element.submitButtonSelectorCard);



  fieldest.forEach(function(forms){
    forms.addEventListener("submit", function(evt){
      evt.preventDefault();
    })
  });
  
  toggleButtonState(inputListA, buttonA);
  toggleButtonState(inputListB, buttonB);
  setEventListeners(formA, formB);
}

enableValidation({
  fieldest: ".popup",

  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",

  formSelectorCard:".card__element",
  inputSelectorCard:".popup__input-card",
  submitButtonSelectorCard:".popup__button_card",

  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
