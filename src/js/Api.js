export default class Api {
  constructor({ baseUrl, method, headers, body, _idCard }) {
    this._baseUrl = baseUrl;
    this._method = method;
    this._idCard = _idCard;
    this._headers = headers;
    this._body = body;
  }
  getProfileUser() {
    return fetch(`https://around.nomoreparties.co/v1/web_es_05/${this._baseUrl}`, { headers: this._headers });
  }
  postProfileUser() {
    return fetch(`https://around.nomoreparties.co/v1/web_es_05/${this._baseUrl}`, { method: this._method, headers: this._headers, body: this._body });
  }

  getInitialCards() {
    return fetch(`https://around.nomoreparties.co/v1//web_es_05/${this._baseUrl}`, { headers: this._headers });
  }
  postCreateCards() {
    return fetch(`https://around.nomoreparties.co/v1//web_es_05/${this._baseUrl}`, { method: this._method, headers: this._headers, body: this._body });
  }

  putLikesCard() {
    return fetch(`https://around.nomoreparties.co/v1//web_es_05/${this._baseUrl}`, { method: this._method, headers: this._headers });
  }
  deleteLikesCard() {
    return fetch(`https://around.nomoreparties.co/v1//web_es_05/${this._baseUrl}`, { method: this._method, headers: this._headers });
  }
}
