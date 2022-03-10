import React from "react";
import "./Filter.scss";

const Filter = ({ handleClick }) => {
  return (
    <>
      <div className="filter-container">
        <h3 className="filter-container__heading">Filter by Colour</h3>
        <div className="filter-container__bars">
          <button
            className="filter-container__bar filter-container__bar--red"
            onClick={handleClick}
          ></button>
          <button
            className="filter-container__bar filter-container__bar--orange"
            onClick={handleClick}
          ></button>
          <button
            className="filter-container__bar filter-container__bar--green"
            onClick={handleClick}
          ></button>
        </div>
        <button className="filter-container__reset" onClick={handleClick}>
          reset
        </button>
      </div>
    </>
  );
};

export default Filter;
