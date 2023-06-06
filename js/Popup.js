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
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._elementSelector.style.display = "";
      document.querySelector(".page").classList.remove("page__opacity_active");
    }
  }
  _handleClicClose(evt) {
    if (evt.target !== this._elementSelector && !this._elementSelector.contains(evt.target)) {
      this._elementSelector.style.display = "";
      document.querySelector(".page").classList.remove("page__opacity_active");
    }
  }
  setEventListeners() {
    document.querySelector(".card__element-button-closed").addEventListener("click", () => {
      this.closed();
    });
  }
}
