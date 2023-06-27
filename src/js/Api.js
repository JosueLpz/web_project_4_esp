export default class Api {
  constructor({ baseUrl, method, headers, body }) {
    this._baseUrl = baseUrl;
    this._method = method;
    this._headers = headers;
    this._body = body;
  }
  getProfileUser() {
    return fetch(`${this._baseUrl}/web_es_05/users/me`, { headers: this._headers });
  }
  postProfileUser() {
    return fetch(`${this._baseUrl}/web_es_05/users/me`, { method: this._method, headers: this._headers, body: this._body });
  }

  getInitialCards() {}
}
