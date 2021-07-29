import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';



function App() {

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [imageOpened, setImageOpened] = React.useState(false);

  function handleCardClick(item) {
    setImageOpened(!imageOpened);
    setSelectedCard(item)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(false);
    setImageOpened(false);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main isAddPlacePopupOpen={handleAddPlaceClick} isEditProfilePopupOpen={handleEditProfileClick} isEditAvatarPopupOpen={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer />

        <PopupWithForm name = "add" title= "Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
            <div className = "popup__section">
                <input className = "popup__input popup__item popup__item_card_name" type = "text" id = "name-place" name = "name" placeholder="Название" autoComplete="off" minLength = "2" maxLength = "30" required/>
                <span className = "popup__input-type-error name-place-error"></span>
            </div>
            <div className = "popup__section">
                <input className = "popup__input popup__item popup__item_card_link" type = "url" id = "link" name = "link" placeholder="Cсылка на картинку" autoComplete="off" required/>
                <span className = "popup__input-type-error link-error"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm name = "edit" title ="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
            <div className = "popup__section">
                <input className = "popup__input popup__item popup__item_type_name" type = "text"  id = "name" name = "name" placeholder="Ваше имя" autoComplete="off" minLength = "2" maxLength = "40" required/>
                <span className = "popup__input-type-error name-error"></span>
            </div>
            <div className = "popup__section">
                <input className = "popup__input popup__item popup__item_type_caption" type = "text" id = "caption" name = "caption" placeholder="О себе" autoComplete="off" minLength = "2" maxLength = "200" required/>
                <span className = "popup__input-type-error caption-error"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm name= "update" title ="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
            <div className = "popup__section">
              <input className = "popup__input popup__item popup__item_avatar_link" type = "url" id = "avatar" name = "avatar" placeholder="Cсылка на картинку" autoComplete="off" required/>
              <span className = "popup__input-type-error avatar-error"></span>
            </div>
        </PopupWithForm >
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={imageOpened}/>
 

      </div>
    </div>
  );
}

export default App;
