export class Forms {
  constructor(formAddProfile, formAddCard) {
    this._formAddProfile = formAddProfile;
    this._formAddCard = formAddCard;
  }
  _getForm() {
    const formProfile = document.querySelector(this._formAddProfile).content.querySelector(".form__container").cloneNode(true);
    const formCard = document.querySelector(this._formAddCard).content.querySelector(".card__element").cloneNode(true);

    this._formProfile = formProfile;
    this._formCard = formCard;
    return [this._formProfile, this._formCard];
  }
}
