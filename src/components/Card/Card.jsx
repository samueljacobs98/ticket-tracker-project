import React, { useState } from "react";

import "./Card.scss";

const Card = ({
  id,
  name,
  role,
  count,
  classNameVar,
  incrementCount,
  decrementCount,
}) => {
  const index = id - 1;

  return (
    <div className={classNameVar}>
      <div className="card__text">
        <p className="card__title">{name}</p>
        <p className="card__role">{role}</p>
      </div>
      <div className="card__counter">
        <p
          className={`card__button card__button--${index}`}
          onClick={decrementCount}
        >
          -
        </p>
        <p className="card__number">{count}</p>
        <p
          className={`card__button card__button--${index}`}
          onClick={incrementCount}
        >
          +
        </p>
      </div>
    </div>
  );
};

export default Card;
