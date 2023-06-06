export default class Card {
  constructor(item, cardSelector, popup, zoom) {
    this._cardSelector = cardSelector;
    this._name = item.name;
    this._link = item.link;
    this._popup = popup;
    this._zoom = zoom;
  }
  _getTemplate() {
    this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".element__article").cloneNode(true);
    return this._cardElement;
  }
  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".element__article_img").src = this._link;
    this._cardElement.querySelector(".element__article_row_title").textContent = this._name;
    return this._cardElement;
  }
  _likeCard() {
    this._cardElement.querySelector(".element__article_row_like").classList.toggle("element__article_row_like_active");
  }
  _deleteCard() {
    this._cardElement.closest(".element__article").remove();
  }
  _handleCardClick() {
    this._popup.data(this._link, this._name);
    this._zoom.open();
  }
  _setEventListeners() {
    this._cardElement.querySelector(".element__article_row_like").addEventListener("click", () => {
      this._likeCard();
    });
    this._cardElement.querySelector(".element__article_delete").addEventListener("click", () => {
      this._deleteCard();
    });
    this._cardElement.querySelector(".element__article_img_button").addEventListener("click", () => {
      this._handleCardClick();
    });
  }
}
