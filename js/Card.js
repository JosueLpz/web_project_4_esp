export class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element__article").cloneNode(true);
    this._element = cardElement;
    return this.element;
  }
  _setEventListeners() {
    this._element.querySelector(".element__article_row_like").addEventListener("click", () => {
      this._LikeCard();
    });
  }
  _LikeCard() {
    this._element.querySelector(".element__article_row_like").classList.toggle("element__article_row_like_active");
  }
}
