import React, { useState } from "react";

import "./Card.scss";

const Card = ({ id, name, role, count, classNameVar, alterCount }) => {
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
          onClick={alterCount}
        >
          -
        </p>
        <p className="card__number">{count}</p>
        <p
          className={`card__button card__button--${index}`}
          onClick={alterCount}
        >
          +
        </p>
      </div>
    </div>
  );
};

export default Card;
