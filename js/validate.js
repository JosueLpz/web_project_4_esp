const showInputError = function (forms, inputs, errorMesagge){
    const errorElement = forms.querySelector(`.${inputs.id}-error`);  
    console.log(errorElement)
    inputs.classList.add("popup__input_type_error");  
    errorElement.classList.add("popup__error_visible");
    errorElement.textContent = errorMesagge;
  }

const hideInputError = function (forms, inputs){
    const errorElement = forms.querySelector(`.${inputs.id}-error`);
    inputs.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__error_visible");
    errorElement.textContent = "";
  }

const isValid = function (forms, inputs){
    if (!inputs.validity.valid) {
      showInputError(forms, inputs, inputs.validationMessage);
    } else {
      hideInputError(forms, inputs)
    }
    }

const setEventListeners = function (formList){
  formList.forEach(function (forms){
    const inputList = Array.from(forms.querySelectorAll(".popup__input"));
  inputList.forEach(function (inputs){
    inputs.addEventListener("input", function (){
      isValid(forms, inputs)
    });
  }); 
});
};

function enableValidation(element){
    const formList = Array.from(document.querySelectorAll(element.formSelector));
    const inputList = Array.from(document.querySelectorAll(element.inputSelector));
    
    // const buttonList = document.querySelectorAll(element.submitButtonSelector);
    // const inputError = document.querySelector(element.inputErrorClass);
    
    formList.forEach(function (forms){  
      forms.addEventListener("submit", function (evt){
        evt.preventDefault();
      });
    
      setEventListeners(formList);
    });
  }

  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });