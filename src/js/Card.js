import api from "./Api.js";
export default class Card {
  constructor(item, cardSelector, popup, zoom, user, cardDelete, isNew = false) {
    this._cardSelector = cardSelector;
    this._name = item.name;
    this._link = item.link;
    this._idCard = item._id;
    this._idUser = item.owner._id;
    this._likes = item.likes;
    this._popup = popup;
    this._zoom = zoom;
    this._meUserID = user._id;
    this._cardDelete = cardDelete;
    this._new = isNew;
  }

  _cloneTemplate() {
    this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".element__article").cloneNode(true);
    return this._cardElement;
  }
  generateCard() {
    this._cardElement = this._cloneTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".element__article_img").src = this._link;
    this._cardElement.querySelector(".element__article_img").alt = this._name;
    this._cardElement.querySelector(".element__article_row_like_counter").textContent = this._likes.length;
    this._cardElement.querySelector(".element__article_row_title").textContent = this._name;
    if (this._new) {
      this._cardElement.querySelector(".element__article_delete").style.display = "block";
    }
    if (this._idUser === this._meUserID) {
      this._cardElement.querySelector(".element__article_delete").style.display = "block";
    }
    if (this._likes.some((like) => like._id === this._meUserID)) {
      this._cardElement.querySelector(".element__article_row_like").classList.add("element__article_row_like_active");
    }
    return this._cardElement;
  }

  _likeCard() {
    if (this._likes.every((like) => like._id !== this._meUserID)) {
      return api.putLikesCard(`cards/likes/${this._idCard}`).then((res) => {
        this._likes = res.likes;
        this._cardElement.querySelector(".element__article_row_like_counter").textContent = this._likes.length;
        this._cardElement.querySelector(".element__article_row_like").classList.add("element__article_row_like_active");
      });
    } else {
      return api.deleteInfoServer(`cards/likes/${this._idCard}`).then((res) => {
        this._likes = res.likes;
        this._cardElement.querySelector(".element__article_row_like_counter").textContent = this._likes.length;
        this._cardElement.querySelector(".element__article_row_like").classList.remove("element__article_row_like_active");
      });
    }
  }
  _deleteCard() {
    document.querySelector(".confirm-delete").addEventListener("click", (event) => {
      event.preventDefault();
      api.deleteInfoServer(`cards/${this._idCard}`).then(() => {
        this._cardElement.closest(".element__article").remove();
        this._cardDelete.closed();
      });
    });
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
      this._cardDelete.open();
      this._deleteCard();
      this._cardDelete.setEventListeners();
    });
    this._cardElement.querySelector(".element__article_img_button").addEventListener("click", () => {
      this._handleCardClick();
    });
    document.querySelector(".zoom__button-closed").addEventListener("click", () => {
      this._zoom.closed();
    });
  }
}
