import api from "./Api";
export default class AvatarInfo {
  constructor({ avatar }) {
    this._avatar = avatar;
  }
  getUserInfo() {
    return { avatar: this._avatar };
  }
  setUserInfo() {
    const userInfo = this.getUserInfo();
    api
      .postAvatarUser(
        "users/me/avatar",
        JSON.stringify({
          avatar: userInfo.avatar,
        })
      )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log("🚀 ~ file: AvatarInfo.js:25 ~ AvatarInfo ~ .then ~ result:", result);
        const avatar = document.querySelector(".profile__img");
        avatar.src = result.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
