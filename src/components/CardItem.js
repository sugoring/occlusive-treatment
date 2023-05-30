import React from "react";
import { Link } from "react-router-dom";
import Set from "./Set";

function CardItem(props) {
  const ratio = props.successPeriod / props.totalPeriod;

  let status;
  let statusColor;

  if (ratio >= 0.8) {
    status = "GREEN";
    statusColor = "green";
  } else if (ratio >= 0.5) {
    status = "YELLOW";
    statusColor = "yellow";
  } else {
    status = "RED";
    statusColor = "red";
  }

  return (
    <Link className="cardsitem-container" to={props.path}>
      <div className="flex-item-1">
        <div className="flex-item-center">
          <img className="cardsitem-items-img" src={props.src} alt="이미지" />
        </div>
      </div>

      <div className="flex-item-1">
        <div className="flex-item-center">
          <div className="cardsitem-items-name">{props.name}</div>
        </div>
      </div>

      <div className="flex-item-3"></div>


      <>
        <div className="flex-item-1">
          <div className="flex-item-center">
            <div className={`cardsitem-items-data ${statusColor}`}>
              {props.successPeriod}/{props.totalPeriod}
            </div>
          </div>
        </div>

        <div className="flex-item-1">
          <div className="flex-item-center">
            <div className={`cardsitem-items-dataresult ${statusColor}`}>
              {status}
            </div>
          </div>
        </div>
      </>
    </Link>
  );
}

export default CardItem;
