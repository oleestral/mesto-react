import { ApiData } from "./constants";

class Api {
    constructor({address , token}) {
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
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            }
        })
        .then(this._getResponseData)
    }
    //edit user profile
    editUserProfile(info) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                about: info.caption
            })
        })
        .then(this._getResponseData)
    }
    //get Initial Cards
    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            }
        })
        .then(this._getResponseData)
    }
    //add user's cards
    addUserCards(info) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                link: info.link
            })
        })
        .then(this._getResponseData)
    }
    //remove user's card
    removeUserCards(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then(this._getResponseData)
    }
    //like post
    like(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
        .then(this._getResponseData)
    }
    //remove like
    removeLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then(this._getResponseData)
    }
    //update user avatar
    updateUserAvatar(info) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar: info.avatar
            })
        })
        .then(this._getResponseData)
    }
}
export const api = new Api(ApiData);