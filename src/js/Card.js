import Api from "./Api.js";
export default class Card {
  constructor(item, cardSelector, popup, zoom) {
    this._cardSelector = cardSelector;
    this._name = item.name;
    this._link = item.link;
    this._idCard = item._id;
    this._likes = item.likes;
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
    this._cardElement.querySelector(".element__article_img").alt = this._name;
    this._cardElement.querySelector(".element__article_row_like_counter").textContent = this._likes.length;
    this._cardElement.querySelector(".element__article_row_title").textContent = this._name;
    return this._cardElement;
  }
  _likeCard() {
    const api = new Api({
      method: "PUT",
      baseUrl: `cards/likes/${this._idCard}`,
      headers: {
        authorization: "a1e6aa2e-20ff-4c9e-8a8e-2b23e3b6a743",
        "Content-Type": "application/json",
      },
    });
    api
      .putLikesCard()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((res) => {
        this._likes = res.likes;
        this._cardElement.querySelector(".element__article_row_like_counter").textContent = this._likes.length;
        this._cardElement.querySelector(".element__article_row_like").classList.add("element__article_row_like_active");
      });
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
    document.querySelector(".zoom__button-closed").addEventListener("click", () => {
      this._zoom.closed();
    });
  }
}
