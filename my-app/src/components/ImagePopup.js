function ImagePopup() {
  return (
    <div className="popup popup_open-image">
      <figure className="popup__img-container">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
        ></button>
        <img className="popup__image" alt="true" />
        <figcaption className="popup__title"></figcaption>
      </figure>
    </div>
  );
}
