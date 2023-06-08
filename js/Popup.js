export default class Popup {
  constructor(elementSelector) {
    this._elementSelector = elementSelector;
  }
  open() {
    document.addEventListener;
    this._elementSelector.style.display = "block";
    this._elementSelector.classList.add("root__windos_fadeon");
    document.querySelector(".page").classList.add("page__opacity_active");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    setTimeout(() => {
      document.addEventListener("click", this._handleClicClose);
    }, 1);
  }
  closed() {
    this._elementSelector.classList.add("root__windos_fadeoff");
    setTimeout(() => {
      this._elementSelector.style.display = "none";
      this._elementSelector.classList.remove("root__windos_fadeoff");
      document.querySelector(".page").classList.remove("page__opacity_active");
    }, 1);
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
    document.removeEventListener("click", this._handleClicClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._elementSelector.style.display = "none";
      document.querySelector(".page").classList.remove("page__opacity_active");
      document.removeEventListener("keydown", this._handleEscClose.bind(this));
      document.removeEventListener("click", this._handleClicClose);
    }
  }
  _handleClicClose = (evt) => {
    if (evt.target !== this._elementSelector && !this._elementSelector.contains(evt.target)) {
      this._elementSelector.style.display = "";
      document.querySelector(".page").classList.remove("page__opacity_active");
      document.removeEventListener("keydown", this._handleEscClose.bind(this));
      document.removeEventListener("click", this._handleClicClose);
    }
  };
  setEventListeners() {
    const listButton = document.querySelectorAll(".card__element-button-closed");
    listButton.forEach((button) => {
      button.addEventListener("click", () => {
        this.closed();
      });
    });
  }
}
