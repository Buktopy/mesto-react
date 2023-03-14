import React from "react";
import PopupWithForm from "./PopupWithForm";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

function App() {
  const [popupEditProfileVisibility, setPopupEditProfileVisibility] =
    React.useState(false);
  const [popupChangeAvatarVisibility, setPopupChangeAvatarVisibility] =
    React.useState(false);
  const [popupAddCardVisibility, setPopupAddCardVisibility] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setPopupEditProfileVisibility(false);
    setPopupChangeAvatarVisibility(false);
    setPopupAddCardVisibility(false);
    setSelectedCard({});
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={setPopupEditProfileVisibility}
        onChangeAvatar={setPopupChangeAvatarVisibility}
        onAddCard={setPopupAddCardVisibility}
        onCardClick={setSelectedCard}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpened={popupEditProfileVisibility}
        onClose={closeAllPopups}
      >
        <input
          autoComplete="off"
          required
          name="name"
          id="name-input"
          type="text"
          className="popup__input popup__input_type_name"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
        />
        <span className="name-input-error popup__input-error"></span>
        <input
          autoComplete="off"
          required
          name="about"
          id="about-input"
          type="text"
          className="popup__input popup__input_type_about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
        />
        <span className="about-input-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpened={popupChangeAvatarVisibility}
        onClose={closeAllPopups}
      >
        <input
          autoComplete="off"
          required
          name="avatar"
          id="url-input-avatar"
          type="url"
          className="popup__input popup__input_type_image-src"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__input-error url-input-avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-element"
        title="Новое место"
        isOpened={popupAddCardVisibility}
        onClose={closeAllPopups}
      >
        <input
          autoComplete="off"
          required
          name="name"
          id="text-input"
          type="text"
          className="popup__input popup__input_type_title"
          placeholder="Название"
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error text-input-error"></span>
        <input
          autoComplete="off"
          required
          name="link"
          id="url-input"
          type="url"
          className="popup__input popup__input_type_image-src"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__input-error url-input-error"></span>
      </PopupWithForm>
    </>
  );
}

export default App;
