export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getProfileUser() {
    return fetch(`${this._baseUrl}/web_es_05/users/me`, { headers: this._headers });
  }

  getInitialCards() {
    // ...
  }
}
