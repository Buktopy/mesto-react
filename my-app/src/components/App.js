import React from "react";
import api from "../utilis/Api";
import logo from "../logo.svg";
import PopupWithForm from "./PopupWithForm";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [PopupEditProfileVisibility, setPopupEditProfileVisibility] =
    React.useState(false);
  const [PopupChangeAvatarVisibility, setPopupChangeAvatarVisibility] =
    React.useState(false);
  const [PopupAddCardVisibility, setPopupAddCardVisibility] =
    React.useState(false);

  function closeAllPopups() {
    setPopupEditProfileVisibility(false);
    setPopupChangeAvatarVisibility(false);
    setPopupAddCardVisibility(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={setPopupEditProfileVisibility}
        onChangeAvatar={setPopupChangeAvatarVisibility}
        onAddCard={setPopupAddCardVisibility}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpened={PopupEditProfileVisibility}
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
        isOpened={PopupChangeAvatarVisibility}
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
        isOpened={PopupAddCardVisibility}
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
      <div className="popup popup_delete-card">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>
          <h2 className="popup__text">Вы уверены?</h2>
          <button
            type="submit"
            name="submitForm"
            className="popup__button"
            aria-label="Подтвердить"
          >
            Да
          </button>
        </div>
      </div>
      <div className="popup popup_add-element">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
          ></button>
          <h2 className="popup__text">Новое место</h2>
          <form
            name="form"
            className="popup__form popup__form_add-card"
            noValidate
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
            <button
              disabled
              type="submit"
              name="submitForm"
              className="popup__button popup__button_add-card popup__button_disabled"
              aria-label="Подтвердить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <template id="card">
        <article className="element">
          <img className="element__image" alt="true" />
          <div className="element__group">
            <h2 className="element__title"></h2>
            <div className="element__container">
              <button
                type="button"
                className="element__like"
                aria-label="Нравится"
              ></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Удалить элемент"
            className="element__trash-button"
          ></button>
        </article>
      </template>
    </>
  );
}

export default App;
