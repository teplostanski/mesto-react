import React from "react";

function Card({ card, onCardClick }) {
  return (
    <li className="card">
      <button type="button" className="card__delete-button button"></button>
      <img
        className="card__img"
        src={card.link}
        alt={card.name}
        onClick={() => {
          onCardClick(card);
        }}
      />
      <div className="card__items">
        <h2 className="card__capture">{card.name}</h2>
        <button type="button" className="card__like-button button"></button>
        <p className="card__like-counter">{card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;