import React from "react";

import "./Card.scss";
const Card = ({ name, role }) => {
  return (
    <div className="card">
      <p className="card__title">{name}</p>
      <p className="card__role">{role}</p>
      <div className="card__counter">
        <p className="card__button">-</p>
        <p className="card__number">0</p>
        {/* <p className="card__number">{ticketsToDo}</p> */}
        <p className="card__button">+</p>
      </div>
    </div>
  );
};

export default Card;
