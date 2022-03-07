import React from "react";
import bgLeft from "../../assets/svgs/bg-left.svg";
import bgRight from "../../assets/svgs/bg-right.svg";
import "./Background.scss";

const Background = () => {
  return (
    <>
      <img src={bgLeft} className="background__img background__img--left" />
      <img src={bgRight} className="background__img background__img--right" />
    </>
  );
};

export default Background;
