import React from "react";

import "./Card.scss";

const Card = ({ name, role }) => {
  let number = 0;

  const decrementNumber = () => {
    number++;
    console.log(number);
  };
  const incrementNumber = () => {
    number++;
    console.log(number);
  };

  return (
    <div className="card">
      <p className="card__title">{name}</p>
      <p className="card__role">{role}</p>
      <div className="card__counter">
        <p className="card__button" onClick={decrementNumber}>
          -
        </p>
        <p className="card__number">{number}</p>
        <p className="card__button" onClick={incrementNumber}>
          +
        </p>
      </div>
    </div>
  );
};

export default Card;
