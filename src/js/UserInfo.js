import api from "./Api";
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

    api
      .postProfileUser(
        "users/me",
        JSON.stringify({
          name: userInfo.title,
          about: userInfo.hobby,
        })
      )
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
