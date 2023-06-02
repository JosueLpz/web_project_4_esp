import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ data, sendInfo }, elementSelector) {
    super(elementSelector);
    this._data = data;
    this._sendInfo = sendInfo;
  }
}
