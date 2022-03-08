import React, { useState } from "react";

import "./Card.scss";

const Card = ({ name, role }) => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count) setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const getCardClass = () => {
    let updatedCardClass = "card card--green";
    if (count > 4) {
      updatedCardClass = count > 9 ? "card card--red" : "card card--orange";
    }
    return updatedCardClass;
  };

  const classNameVar = getCardClass();

  return (
    <div className={classNameVar}>
      <div className="card__text">
        <p className="card__title">{name}</p>
        <p className="card__role">{role}</p>
      </div>
      <div className="card__counter">
        <p className="card__button" onClick={decrementCount}>
          -
        </p>
        <p className="card__number">{count}</p>
        <p className="card__button" onClick={incrementCount}>
          +
        </p>
      </div>
    </div>
  );
};

export default Card;
