import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <body class="page">
      <header class="header">
        <div class="header__logo"></div>
      </header>
      <main class="content">
        <section class="profile">
          <img
            class="profile__avatar"
            src="<%=require('./images/profile__image.jpg')%>"
            alt="Фото профиля"
          />
          <button
            type="button"
            class="profile__avatar-edit"
            aria-label="Сменить аватар"
          ></button>
          <div class="profile__info">
            <h1 class="profile__name">Жак-Ив Кусто</h1>
            <button
              type="button"
              class="profile__edit-button"
              aria-label="Редактировать"
            ></button>
            <h2 class="profile__about">Исследователь океана</h2>
          </div>
          <button
            type="button"
            class="profile__add-button"
            aria-label="Добавить"
          ></button>
        </section>
        <section class="elements"></section>
      </main>
      <footer class="footer">
        <small class="footer__copyright">© 2020 Mesto Russia</small>
      </footer>
      <div class="popup popup_edit-avatar">
        <div class="popup__container">
          <button
            type="button"
            class="popup__close"
            aria-label="Закрыть"
          ></button>
          <h2 class="popup__text">Обновить аватар</h2>
          <form
            name="form"
            class="popup__form popup__form_edit-avatar"
            novalidate
          >
            <input
              autocomplete="off"
              required
              name="avatar"
              id="url-input-avatar"
              type="url"
              class="popup__input popup__input_type_image-src"
              placeholder="Ссылка на картинку"
            />
            <span class="popup__input-error url-input-avatar-error"></span>
            <button
              type="submit"
              name="submitForm"
              class="popup__button"
              aria-label="Подтвердить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_delete-card">
        <div class="popup__container">
          <button
            type="button"
            class="popup__close"
            aria-label="Закрыть"
          ></button>
          <h2 class="popup__text">Вы уверены?</h2>
          <button
            type="submit"
            name="submitForm"
            class="popup__button"
            aria-label="Подтвердить"
          >
            Да
          </button>
        </div>
      </div>
      <div class="popup popup_edit-profile">
        <div class="popup__container">
          <button
            type="button"
            class="popup__close"
            aria-label="Закрыть"
          ></button>
          <h2 class="popup__text">Редактировать профиль</h2>
          <form
            name="form"
            class="popup__form popup__form_edit-profile"
            novalidate
          >
            <input
              autocomplete="off"
              required
              name="name"
              id="name-input"
              type="text"
              class="popup__input popup__input_type_name"
              placeholder="Введите имя"
              minlength="2"
              maxlength="40"
            />
            <span class="name-input-error popup__input-error"></span>
            <input
              autocomplete="off"
              required
              name="about"
              id="about-input"
              type="text"
              class="popup__input popup__input_type_about"
              placeholder="О себе"
              minlength="2"
              maxlength="200"
            />
            <span class="about-input-error popup__input-error"></span>
            <button
              type="submit"
              name="submitForm"
              class="popup__button"
              aria-label="Подтвердить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_add-element">
        <div class="popup__container">
          <button
            type="button"
            class="popup__close"
            aria-label="Закрыть"
          ></button>
          <h2 class="popup__text">Новое место</h2>
          <form name="form" class="popup__form popup__form_add-card" novalidate>
            <input
              autocomplete="off"
              required
              name="name"
              id="text-input"
              type="text"
              class="popup__input popup__input_type_title"
              placeholder="Название"
              minlength="2"
              maxlength="30"
            />
            <span class="popup__input-error text-input-error"></span>
            <input
              autocomplete="off"
              required
              name="link"
              id="url-input"
              type="url"
              class="popup__input popup__input_type_image-src"
              placeholder="Ссылка на картинку"
            />
            <span class="popup__input-error url-input-error"></span>
            <button
              disabled
              type="submit"
              name="submitForm"
              class="popup__button popup__button_add-card popup__button_disabled"
              aria-label="Подтвердить"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_open-image">
        <figure class="popup__img-container">
          <button
            type="button"
            class="popup__close"
            aria-label="Закрыть"
          ></button>
          <img class="popup__image" alt />
          <figcaption class="popup__title"></figcaption>
        </figure>
      </div>
      <template id="card">
        <article class="element">
          <img class="element__image" alt />
          <div class="element__group">
            <h2 class="element__title"></h2>
            <div class="element__container">
              <button
                type="button"
                class="element__like"
                aria-label="Нравится"
              ></button>
              <p class="element__like-counter"></p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Удалить элемент"
            class="element__trash-button"
          ></button>
        </article>
      </template>
    </body>
  );
}

export default App;
