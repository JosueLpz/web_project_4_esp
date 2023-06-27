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
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
