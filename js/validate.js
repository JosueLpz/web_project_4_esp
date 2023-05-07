function enableValidation(element){
const formList = Array.from(document.querySelectorAll(element.formSelector));
console.log(formList)
const inputList = document.querySelectorAll(element.inputSelector);
const buttonList = document.querySelectorAll(element.submitButtonSelector);
const inputError = document.querySelector(element.inputErrorClass);

formList.forEach(function (forms){  
  forms.addEventListener("submit", function (evt){
    evt.preventDefault();
  });
});

setEventListeners(formList);
console.log(formList)
}

const setEventListeners = function (forms){
  const inputList = Array.from(forms.querySelectorAll(".popup__input"));  
  inputList.forEach(function (inputs){
    inputs.addEventListener("input", function (){
      isValid(forms, inputs)
      console.log(isValid(forms, inputs))
    });
  });
}

const isValid = function (forms, inputs){
  if (!inputs.validity.valid) {
    showInputError(forms, inputs, inputs.validationMessage);
  } else {
    hideInputError(forms, inputs)
  }
  }

  const showInputError = function (forms, inputs, errorMesagge){
    const errorElement = forms.querySelector(`.${inputs.id}-error`);  
    inputs.clasList.add("popup__input_type_error");  
    errorElement.textContent = errorMesagge;
    errorElement.clasList.add("popup__error_visible");
  }

  const hideInputError = function (forms, inputs){
    const errorElement = forms.querySelector(`.${inputs.id}-error`);
    inputs.clasList.remove("popup__input_type_error");
    errorElement.clasList.remove("popup__error_visible");
    errorElement.textContent = "";
  }

  enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});