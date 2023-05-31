import React from "react";
import "./List.css";
import ListCards from "./ListCards";
import { Items } from "./Items";

function List() {
  return (
    <div className="list-container">
      <ul>
        {Items.map((card, index) => (
          <li key={index}>
            <ListCards src={card.src} name={card.name} successPeriod={card.successPeriod} totalPeriod={card.totalPeriod} path={`/dash/${index}`}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
