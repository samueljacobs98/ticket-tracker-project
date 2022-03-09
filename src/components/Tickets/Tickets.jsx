import React, { useState } from "react";
import team from "../../assets/data/team";
import Card from "../Card/Card";
import "./Tickets.scss";

const Tickets = ({ teamData }) => {
  const dataWithCount = [...teamData];

  const calcStandDev = (dataArray) => {
    const dataLength = dataArray.length;
    let total = 0;
    dataArray.forEach((element) => {
      total += element.count;
    });
    const meanAverage = total / dataLength;
    let numerator = 0;
    dataArray.forEach((element) => {
      numerator += (element.count - meanAverage) ** 2;
    });
    const standDev = Math.sqrt(numerator / dataLength);
    return [standDev, meanAverage];
  };

  dataWithCount.forEach((currentData) => {
    currentData.count = 0;
    currentData.classNameVar = "card card--orange";
  });

  const [data, setData] = useState(dataWithCount);

  const getClass = (count) => {
    const [standDev, meanAverage] = calcStandDev(data);
    if (count > meanAverage + standDev) return "card card--red";
    if (count < meanAverage - standDev) return "card card--green";
    return "card card--orange";
  };

  // Can be refactored to make decrementCount and incrementCount one function with an extra boolean input?

  const decrementCount = (event) => {
    const decrementIndex = event.target.className.slice(27);
    setData(
      data.map((ticket, ticketIndex) => {
        if (ticketIndex == decrementIndex && ticket.count > 0) {
          return {
            id: ticket.id,
            name: ticket.name,
            role: ticket.role,
            classNameVar: getClass(ticket.count - 1),
            count: ticket.count - 1,
          };
        } else {
          return {
            id: ticket.id,
            name: ticket.name,
            role: ticket.role,
            classNameVar: getClass(ticket.count),
            count: ticket.count,
          };
        }
      })
    );
  };
  const incrementCount = (event) => {
    const incrementIndex = event.target.className.slice(27);
    setData(
      data.map((ticket, ticketIndex) => {
        if (ticketIndex == incrementIndex) {
          return {
            id: ticket.id,
            name: ticket.name,
            role: ticket.role,
            classNameVar: getClass(ticket.count + 1),
            count: ticket.count + 1,
          };
        } else {
          return {
            id: ticket.id,
            name: ticket.name,
            role: ticket.role,
            classNameVar: getClass(ticket.count),
            count: ticket.count,
          };
        }
      })
    );
  };

  const cardListJSX = data.map((ticket) => {
    return (
      <Card
        key={ticket.id}
        id={ticket.id}
        name={ticket.name}
        role={ticket.role}
        count={ticket.count}
        classNameVar={ticket.classNameVar}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    );
  });
  return <div className="tickets">{cardListJSX}</div>;
};

export default Tickets;
