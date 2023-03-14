function Card({ name, link, likes }) {
  return (
    <article className="element">
      <img
        className="element__image"
        alt={name}
        style={{ backgroundImage: `url(${link})` }}
      />
      <div className="element__group">
        <h2 className="element__title">{name}</h2>
        <div className="element__container">
          <button
            type="button"
            className="element__like"
            aria-label="Нравится"
          ></button>
          <p className="element__like-counter">{likes.length}</p>
        </div>
      </div>
      <button
        type="button"
        aria-label="Удалить элемент"
        className="element__trash-button"
      ></button>
    </article>
  );
}

export default Card;
