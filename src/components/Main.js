import React from 'react';
import pencil from '../images/pencil.svg';
import closeIcon from '../images/CloseIcon.svg';
import avatar from '../images/image.png';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океанов');
    const [userAvatar, setUserAvatar] = React.useState(avatar);
      function getUserData(item) {
        setUserName(item.name);
        setUserDescription(item.about);
        setUserAvatar(item.avatar);
      }

    const [cards, getCards] = React.useState([]);

    React.useEffect(()=> {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        getUserData(userData);
        getCards(cardsData);
      }
      )
      .catch((err) => {
        console.log(err);
      })
    },[])
    
    return (
        <main className = "content">
          <section className = "profile">
            <img className = 'profile__avatar' src={userAvatar} alt="аватар"/>
            <img className = "profile__avatar-edit" src = {pencil} alt = "Редактировать профиль" onClick={props.isEditAvatarPopupOpen}/>
            <div className = "profile__info">
              <div className = "profile__info-items">
                <h1 className = "profile__info-name">{userName}</h1>
                <p className = "profile__info-self-description">{userDescription}</p>
              </div>
              <button type = "button" className = "profile__info-edit-button button" onClick={props.isEditProfilePopupOpen}></button>
            </div>
            <button type = "button" className = "profile__info-add-button button" onClick={props.isAddPlacePopupOpen}><img className = "profile__info-add-button-image" src = {closeIcon} alt = "Кнопка добавить"/></button>
          </section>
          <section className = "elements">
            {
              cards.map((item) => {
                return <Card key={item._id} card={item} onCardClick={props.onCardClick}/>
              })
            }
          </section>
        </main>
    )
}
export default Main;