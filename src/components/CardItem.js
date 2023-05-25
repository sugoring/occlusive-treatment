import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
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

        <div className="flex-item-1">
          <div className="flex-item-center">
            <div className="cardsitem-items-data">{props.data}</div>
          </div>
        </div>

        <div className="flex-item-1">
          <div className="flex-item-center">
            <div className="cardsitem-items-dataresult">{props.dataresult}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardItem;
