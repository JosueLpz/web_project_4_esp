export default class Card {
  constructor(item, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = item.name;
    this._link = item.link;
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
  _setEventListeners() {
    this._cardElement.querySelector(".element__article_row_like").addEventListener("click", () => {
      this._likeCard();
    });
    this._cardElement.querySelector(".element__article_delete").addEventListener("click", () => {
      this._deleteCard();
    });
  }
}
