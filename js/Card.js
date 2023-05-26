import { buttonsClosed } from "./utils.js";
export class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element__article").cloneNode(true);
    this._cardElement = cardElement;
    return this._cardElement;
  }
  _setEventListeners() {
    this._cardElement.querySelector(".element__article_row_like").addEventListener("click", () => {
      this._likeCard();
    });
    this._cardElement.querySelector(".element__article_delete").addEventListener("click", () => {
      this._deleteCard();
    });
    this._cardElement.querySelector(".element__article_img_button").addEventListener("click", () => {
      this._openPopCard();
      setTimeout(() => {
        this._closedPopGlobalCard(buttonsClosed);
      }, 500);
    });
    document.querySelector(".zoom__button-closed").addEventListener("click", () => {
      this._closedPopCard();
    });
  }

  _likeCard() {
    this._cardElement.querySelector(".element__article_row_like").classList.toggle("element__article_row_like_active");
  }
  _deleteCard() {
    this._cardElement.closest(".element__article").remove();
  }
  _openPopCard() {
    document.querySelector(".zoom").classList.add("root__windos_fadeon");
    document.querySelector(".zoom").style.display = "block";
    document.querySelector(".page").classList.add("page__opacity_active");
    document.querySelector(".zoom__img").src = this._cardElement.querySelector(".element__article_img").src;
    document.querySelector(".zoom__text").textContent = this._cardElement.querySelector(".element__article_row_title").textContent;
  }
  _closedPopCard() {
    document.querySelector(".zoom").classList.add("root__windos_fadeoff");
    setTimeout(function () {
      document.querySelector(".zoom").style.display = "";
      document.querySelector(".zoom").classList.remove("root__windos_fadeoff");
      document.querySelector(".page").classList.remove("page__opacity_active");
    }, 500);
  }
  _closedPopGlobalCard = (buttons) => {
    let isPreest = false;
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        isPreest = true;
      });
    });
    const closedPop = (evt) => {
      if (evt.target !== document.querySelector(".zoom") && !document.querySelector(".zoom").contains(evt.target)) {
        document.querySelector(".zoom").style.display = "";
        document.querySelector(".page").classList.remove("page__opacity_active");
        document.removeEventListener("click", closedPop);
        document.removeEventListener("keydown", escapePop);
      }
      if (isPreest === true) {
        document.removeEventListener("click", closedPop);
        document.removeEventListener("keydown", escapePop);
      }
    };
    const escapePop = (evt) => {
      if (evt.key === "Escape") {
        document.querySelector(".zoom").style.display = "";
        document.querySelector(".page").classList.remove("page__opacity_active");
        document.removeEventListener("click", closedPop);
        document.removeEventListener("keydown", escapePop);
      }
    };
    document.addEventListener("keydown", escapePop);
    document.addEventListener("click", closedPop);
  };
}
