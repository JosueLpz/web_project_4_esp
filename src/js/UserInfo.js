import api from "./Api";
export default class UserInfo {
  constructor({ title, hobby }) {
    this._title = title;
    this._hobby = hobby;
  }
  getUserInfo() {
    return { title: this._title, hobby: this._hobby };
  }
  showInfoValue() {
    return new Promise((resolve, reject) => {
      api
        .getProfileUser("users/me")
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
          const avatar = document.querySelector(".profile__img");
          avatar.src = result.avatar;
          inputName.value = result.name;
          inputHobby.value = result.about;
          profileName.textContent = result.name;
          profileHobby.textContent = result.about;

          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
