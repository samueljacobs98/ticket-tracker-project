import React, { useState } from "react";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import "./Tickets.scss";

const Tickets = ({ teamData }) => {
  const dataWithCount = [...teamData];

  const calcMeanAverage = (dataArray) => {
    const dataLength = dataArray.length;
    let total = 0;
    dataArray.forEach((element) => {
      total += element.count;
    });
    const meanAverage = Math.ceil(total / dataLength);
    return meanAverage;
  };

  dataWithCount.forEach((currentData) => {
    currentData.count = 0;
    currentData.classNameVar = "card card--green";
    currentData.visible = true;
  });

  const [data, setData] = useState(dataWithCount);

  const getClass = (count) => {
    const meanAverage = calcMeanAverage(data);
    if (count === 0) return "card card--green";
    if (count > meanAverage * 1.5) return "card card--red";
    if (count < meanAverage * 0.5) return "card card--green";
    return "card card--orange";
  };

  const alterCount = (event) => {
    const operatorAdd = event.target.innerText === "+";
    const index = event.target.className.slice(27);
    setData(
      data.map(({ classNameVar, count, ...rest }, ticketIndex) => {
        return {
          ...rest,
          classNameVar:
            ticketIndex == index // Check if correct card to alter count
              ? operatorAdd // Check whether to increment or decrement
                ? getClass(count + 1) // If increment, add one to count and get relevent class
                : count > 0 // If decrement, check if count is 0 to avoid negatives
                ? getClass(count - 1)
                : getClass(count) // If count is 0, don't decrement or change class
              : getClass(count),
          count:
            ticketIndex == index
              ? operatorAdd
                ? count + 1
                : count > 0
                ? count - 1
                : count
              : count,
        };
      })
    );
  };

  const updateVisibility = (colour) => {
    if (colour === "reset") {
      setData(
        data.map(({ visible, ...rest }, ticketIndex) => {
          return {
            ...rest,
            visible: true,
          };
        })
      );
    }
    if (["red", "orange", "green"].includes(colour)) {
      setData(
        data.map(({ visible, classNameVar, ...rest }, ticketIndex) => {
          return {
            ...rest,
            classNameVar: classNameVar,
            visible: classNameVar.includes(colour) ? true : false,
          };
        })
      );
    }
  };

  const handleClick = (event) => {
    const colour = event.target.className.includes("reset")
      ? "reset"
      : event.target.className.slice(45);
    updateVisibility(colour);
  };

  const cardListJSX = data.map((ticket) => {
    {
      if (ticket.visible)
        return (
          <Card
            key={ticket.id}
            id={ticket.id}
            name={ticket.name}
            role={ticket.role}
            count={ticket.count}
            classNameVar={ticket.classNameVar}
            alterCount={alterCount}
          />
        );
    }
  });

  return (
    <div className="tickets">
      <Filter handleClick={handleClick} />
      {cardListJSX}
    </div>
  );
};

export default Tickets;
