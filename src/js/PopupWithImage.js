import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  data(img, text) {
    document.querySelector(".zoom__img").src = img;
    document.querySelector(".zoom__text").textContent = text;
  }
}
