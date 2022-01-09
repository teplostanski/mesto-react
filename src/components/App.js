import React from 'react';
import { useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePop from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(undefined);

    const handleCardClick = (card) => {
      setSelectedCard(card);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);

    }
    const handleEditProfileClick = () =>  {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    const handleAddPlaceClick = () =>  {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    const handleConfirmationClick = () => {
      setIsConfirmationPopupOpen(!isConfirmationPopupOpen);
    }

    const closeAllPopups = () => {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsConfirmationPopupOpen(false);
      setSelectedCard(undefined);
    }

  return (
    <>
    <Header />
    <Main 
    onAddPlace={handleAddPlaceClick} 
    onEditAvatar={handleEditAvatarClick} 
    onEditProfile={handleEditProfileClick}
    onBinClick={handleConfirmationClick}
    onCardClick={handleCardClick}
     />
    <Footer />
    <ImagePop card={selectedCard} onClose={closeAllPopups}/>
    <PopupWithForm title="Редактировать профиль"  name="profile" popupid="popup-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <label>
        <input className="popup__input" type="text" name="name" id="popup-profile-title" placeholder="Ваше имя" defaultValue="" required maxLength="40" minLength="2" />
        <span className="popup__error-message popup-profile-title-error"></span>
      </label>
      <label>
        <input className="popup__input" type="text" name="about" id="popup-profile-description" placeholder="Расскажите о себе" defaultValue="" required maxLength="200" minLength="2" />
        <span className="popup__error-message popup-profile-description-error"></span>
      </label>
          <button className="popup__button button" type="submit" data-popupid="popup-profile">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm title="Новое место"  name="profileaddCard" popupid="popup-place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
      <label>
        <input className="popup__input" type="text" name="place" id="popup-place-name" placeholder="Название места" required maxLength="30" minLength="2" />
        <span className="popup__error-message popup-place-name-error"></span>
      </label>
      <label>
        <input className="popup__input" type="url" name="url" id="popup-place-url" placeholder="Ссылка на картинку" required />
        <span className="popup__error-message popup-place-url-error"></span>
      </label>
      <button className="popup__button button" type="submit" data-popupid="popup-place">Создать</button>
    </PopupWithForm>

    <PopupWithForm title="Вы уверены?"  name="confirmation" popupid="popup-confirmation">
      <button className="popup__button button" type="submit" data-popupid="popup-confirmation">Да</button>
    </PopupWithForm>

    <PopupWithForm title="Обновить аватар"  name="changeAvatar" popupid="popup-change-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
      <label>
          <input className="popup__input" type="url" name="avatar" id="popup-change-avatar-url" placeholder="Ссылка на картинку" required />
          <span className="popup__error-message popup-change-avatar-url-error"></span>
      </label>
      <button className="popup__button button" type="submit" data-popupid="popup-change-avatar">Сохранить</button>
    </PopupWithForm>
    </>
  )
    
}

export default App;