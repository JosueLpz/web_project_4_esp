import api from "./Api.js";
export default class Card {
  constructor(item, cardSelector, popup, zoom) {
    this._cardSelector = cardSelector;
    this._name = item.name;
    this._link = item.link;
    this._idCard = item._id;
    this._idUser = item.owner._id;
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

    api
      .getProfileUser()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        this._userID = result._id;

        if (this._likes.some((like) => like._id === this._userID)) {
          this._cardElement.querySelector(".element__article_row_like").classList.add("element__article_row_like_active");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    return this._cardElement;
  }

  _likeCard() {
    const api = new Api({
      baseUrl: "users/me",
      headers: {
        authorization: "a1e6aa2e-20ff-4c9e-8a8e-2b23e3b6a743",
        "Content-Type": "application/json",
      },
    });
    api
      .getProfileUser()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        this._userID = result._id;

        if (this._likes.some((like) => like._id !== this._userID)) {
          const api = new Api({
            method: "PUT",
            baseUrl: `cards/likes/${this._idCard}`,
            headers: {
              authorization: "a1e6aa2e-20ff-4c9e-8a8e-2b23e3b6a743",
              "Content-Type": "application/json",
            },
          });
          return api
            .putLikesCard()
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject(`Error: ${res.status}`);
            })
            .then((res) => {
              console.log("🚀 ~ file: Card.js:90 ~ Card ~ .then ~ res:", res);
              this._likes = res.likes;
              this._cardElement.querySelector(".element__article_row_like_counter").textContent = this._likes.length;
              this._cardElement.querySelector(".element__article_row_like").classList.add("element__article_row_like_active");
            });
        } else if (this._likes.incledes(this._userID)) {
          const api = new Api({
            method: "DELETE",
            baseUrl: `cards/likes/${this._idCard}`,
            headers: {
              authorization: "a1e6aa2e-20ff-4c9e-8a8e-2b23e3b6a743",
              "Content-Type": "application/json",
            },
          });
          return api
            .deleteLikesCard()
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject(`Error: ${res.status}`);
            })
            .then((res) => {
              console.log("🚀 ~ file: Card.js:113 ~ Card ~ .then ~ res:", res);
              this._likes = res.likes;
              this._cardElement.querySelector(".element__article_row_like_counter").textContent = this._likes.length;
              this._cardElement.querySelector(".element__article_row_like").classList.remove("element__article_row_like_active");
            });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
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
// (this._likes.some((like) => like._id === this._userID)
