import React, { useEffect, useState, useContext } from "react";
import fakeDude from "../images/unknown-avatar.jpeg";
import api from "../utils/api.js";
import Card from "./Card";
import CurrentUserContext from "../context/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__img-wrapper" onClick={onEditAvatar}>
          <img
            className="profile__avatar"
            src={currentUser.avatar || fakeDude}
            alt="аватар"
          />
        </div>
        <div className="profile__info">
          <div className="profile__main-info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="cards-section">
        <ul className="cards">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;