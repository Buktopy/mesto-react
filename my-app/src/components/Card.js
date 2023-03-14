function Card({ name, link, likes }) {
  return (
    <article className="card">
      <img
        className="card__image"
        alt={name}
        style={{ backgroundImage: `url(${link})` }}
      />
      <div className="card__group">
        <h2 className="card__title">{name}</h2>
        <div className="card__container">
          <button
            type="button"
            className="card__like"
            aria-label="Нравится"
          ></button>
          <p className="card__like-counter">{likes.length}</p>
        </div>
      </div>
      <button
        type="button"
        aria-label="Удалить элемент"
        className="card__trash-button"
      ></button>
    </article>
  );
}

export default Card;
