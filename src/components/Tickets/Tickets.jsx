import React from "react";
import Card from "../Card/Card";

import "./Tickets.scss";
const Tickets = ({ teamData }) => {
  const cardListJSX = teamData.map((ticket) => {
    return <Card name={ticket.name} role={ticket.role} />;
  });
  return <div className="tickets">{cardListJSX}</div>;
};

export default Tickets;
