function Main() {
  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src="<%=require('./images/profile__image.jpg')%>"
          alt="true"
        />
        <button
          type="button"
          className="profile__avatar-edit"
          aria-label="Сменить аватар"
        ></button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать"
          ></button>
          <h2 className="profile__about">Исследователь океана</h2>
        </div>
        <button
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
