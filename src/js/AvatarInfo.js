import api from "./Api";
export default class AvatarInfo {
  constructor({ avatar }) {
    this._avatar = avatar;
    console.log("🚀 ~ file: AvatarInfo.js:5 ~ AvatarInfo ~ constructor ~ this._avatar:", this._avatar);
  }
  getUserInfo() {
    return { avatar: this._avatar };
  }
  setUserInfo() {
    const userInfo = this.getUserInfo();
    api
      .postAvatarUser(
        "users/me",
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
        result.avatar;
        const avatar = document.querySelector(".profile__img");
        avatar.src = result.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
