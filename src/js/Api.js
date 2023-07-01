class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getProfileUser(url) {
    return fetch(`${this._baseUrl}${url}`, {
      headers: this._headers,
    });
  }
  postProfileUser(url, body) {
    return fetch(`${this._baseUrl}${url}`, {
      method: "POST",
      headers: this._headers,
      body: body,
    });
  }

  getInitialCards(url) {
    return fetch(`${this._baseUrl}${url}`, {
      headers: this._headers,
    });
  }
  postCreateCards(url, body) {
    return fetch(`${this._baseUrl}${url}`, {
      method: "POST",
      headers: this._headers,
      body: body,
    });
  }

  putLikesCard(url) {
    return fetch(`${this._baseUrl}${url}`, {
      method: "PUT",
      headers: this._headers,
    });
  }
  deleteLikesCard(url) {
    return fetch(`${this._baseUrl}${url}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

const api = new Api({
  baseUrl: `https://around.nomoreparties.co/v1//web_es_05/${url}`,
  headers: {
    authorization: "a1e6aa2e-20ff-4c9e-8a8e-2b23e3b6a743",
    "Content-Type": "application/json",
  },
});

export default api;
