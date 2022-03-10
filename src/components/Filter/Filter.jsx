import React from "react";
import "./Filter.scss";

const Filter = ({ handleClick }) => {
  return (
    <>
      <div className="filter-container">
        <h3 className="filter-container__heading">Filter by Colour</h3>
        <div className="filter-container__bars">
          <div
            className="filter-container__bar filter-container__bar--red"
            onClick={handleClick}
          ></div>
          <div
            className="filter-container__bar filter-container__bar--orange"
            onClick={handleClick}
          ></div>
          <div
            className="filter-container__bar filter-container__bar--green"
            onClick={handleClick}
          ></div>
        </div>
        <p className="filter-container__reset" onClick={handleClick}>
          reset
        </p>
      </div>
    </>
  );
};

export default Filter;
