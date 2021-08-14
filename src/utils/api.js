import { ApiData } from "./constants";

class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  //user information
  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  //edit user profile
  editUserProfile(name, about) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  //get Initial Cards
  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      method: "GET",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  //add user's cards
  addUserCards(name, link) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  //remove user's card
  removeUserCards(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  //like post
  like(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  //remove like
  removeLike(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  //update user avatar
  updateUserAvatar(info) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: info.avatar,
      }),
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
  changeLikeCardStatus(id, isLiked) {
    const method = isLiked ? "DELETE" : "PUT";
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: method,
      headers: {
        authorization: this._token,
      },
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
}

const api = new Api(ApiData);
export default api;
