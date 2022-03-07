import React, { useState } from "react";

import "./Card.scss";

const Card = ({ name, role }) => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((previousCount) => previousCount - 1);
  };
  const incrementCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div className="card">
      <p className="card__title">{name}</p>
      <p className="card__role">{role}</p>
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
