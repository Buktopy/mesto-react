import image from "../images/profile__image.jpg";

function Main({ onChangeAvatar, onEditProfile, onAddCard }) {
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={image} alt="true" />
        <button
          onClick={() => {
            onChangeAvatar(true);
          }}
          type="button"
          className="profile__avatar-edit"
          aria-label="Сменить аватар"
        ></button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            onClick={() => {
              onEditProfile(true);
            }}
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать"
          ></button>
          <h2 className="profile__about">Исследователь океана</h2>
        </div>
        <button
          onClick={() => {
            onAddCard(true);
          }}
          type="button"
          className="profile__add-button"
          aria-label="Добавить"
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
