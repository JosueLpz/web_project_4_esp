export default class Popup {
  constructor(elementSelector) {
    this._elementSelector = elementSelector;
  }
  open() {
    this._elementSelector.style.display = "block";
    this._elementSelector.classList.add("root__windos_fadeon");
    document.querySelector(".page").classList.add("page__opacity_active");
  }
  closed() {
    this._elementSelector.classList.add("root__windos_fadeoff");
    setTimeout(function () {
      this._elementSelector.style.display = "";
      this._elementSelector.classList.remove("root__windos_fadeoff");
      document.querySelector(".page").classList.remove("page__opacity_active");
    }, 500);
  }
  _handleEscClose() {
    //!La logica esta en utuls solo tengo que adactarla! dejare esra tarea para el final seguire con la creacion de clases
    //!que a mi parecer es lo mas  complicado!
  }
}
