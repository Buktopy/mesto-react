import React, { useEffect } from "react";
import image from "../images/profile__image.jpg";
import api from "../utilis/Api";
import Card from "./Card";

function Main({ onChangeAvatar, onEditProfile, onAddCard }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((profileInfo) => {
        setUserName(profileInfo.name);
        setUserDescription(profileInfo.about);
        setUserAvatar(profileInfo.avatar);
      })
      .catch((err) => console.log(err));

    api
      .getCard()
      .then((cardsData) => {
        setCards(
          cardsData.map((data) => ({
            cardId: data._id,
            name: data.name,
            link: data.link,
            likes: data.likes,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
          alt=""
        />
        <button
          onClick={() => {
            onChangeAvatar(true);
          }}
          type="button"
          className="profile__avatar-edit"
          aria-label="Сменить аватар"
        ></button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={() => {
              onEditProfile(true);
            }}
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать"
          ></button>
          <h2 className="profile__about">{userDescription}</h2>
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
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card.cardId}
            name={card.name}
            link={card.link}
            likes={card.likes}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
