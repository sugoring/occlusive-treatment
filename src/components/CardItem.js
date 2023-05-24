import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <Link className="cardsitem__container" to={props.path}>

          <img className="cardsitem__img" src={props.src} />
          <p className="cardsitem__name">{props.name}</p>
          <p className="cardsitem__text">{props.text}</p>

      </Link>
    </>
  );
}

export default CardItem;
