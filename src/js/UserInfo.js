import Api from "./Api";
export default class UserInfo {
  constructor({ title, hobby }) {
    this._title = title;
    this._hobby = hobby;
  }
  getUserInfo() {
    return { title: this._title, hobby: this._hobby };
  }
  setUserInfo() {
    const userInfo = this.getUserInfo();

    const api = new Api({
      method: "PATCH",
      baseUrl: "https://around.nomoreparties.co/v1",
      headers: {
        authorization: "a1e6aa2e-20ff-4c9e-8a8e-2b23e3b6a743",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInfo.title,
        about: userInfo.hobby,
      }),
    });
    api
      .postProfileUser()
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        const inputName = document.querySelector(".form__container-name");
        const inputHobby = document.querySelector(".form__container-hobby");
        const profileName = document.querySelector(".profile__row-name");
        const profileHobby = document.querySelector(".profile__hobbie");
        inputName.value = result.name;
        inputHobby.value = result.about;
        profileName.textContent = result.name;
        profileHobby.textContent = result.about;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
