function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }

  return (
    <article className="card">
      <img
        onClick={handleCardClick}
        className="card__image"
        alt={card.name}
        src={card.link}
      />
      <div className="card__group">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__container">
          <button
            type="button"
            className="card__like"
            aria-label="Нравится"
          ></button>
          <p className="card__like-counter">{card.likes.length}</p>
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
