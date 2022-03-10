import React, { useState, useEffect } from "react";
import bgLeft from "../../assets/svgs/bg-left.svg";
import bgRight from "../../assets/svgs/bg-right.svg";
import "./Background.scss";

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <img
        src={bgLeft}
        className="background__img background__img--left"
        style={{ transform: `translateX(${-offsetY * 0.01}%)` }}
      />
      <img
        src={bgRight}
        className="background__img background__img--right"
        style={{ transform: `translateX(${offsetY * 0.01}%)` }}
      />
    </>
  );
};

export default Background;
