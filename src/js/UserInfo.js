export default class UserInfo {
  constructor({ title = "Marco Aurelio", hobby = "Filosofo Emperador Romano" }) {
    this._title = title;
    this._hobby = hobby;
  }
  getUserInfo() {
    return { title: this._title, hobby: this._hobby };
  }
  setUserInfo() {
    const userInfo = this.getUserInfo();

    const inputName = document.querySelector(".form__container-name");
    const inputHobby = document.querySelector(".form__container-hobby");
    const profileName = document.querySelector(".profile__row-name");
    const profileHobby = document.querySelector(".profile__hobbie");

    inputName.value = userInfo.title;
    inputHobby.value = userInfo.hobby;

    profileName.textContent = userInfo.title;
    profileHobby.textContent = userInfo.hobby;
  }
}
