import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      
      <div className="cards-container">

        <ul className="cards-items"> <CardItem src="/images/points/points-1.png"  name="홍길동" text="010-0000-0000" path="/dash" /> </ul>
        <ul className="cards-items"> <CardItem src="/images/points/points-2.png" name="홍길동"  text="010-0000-0000" path="/dash" /> </ul>
        <ul className="cards-items"> <CardItem src="/images/points/points-3.png" name="홍길동" text="010-0000-0000" path="/dash" /> </ul>
        <ul className="cards-items"> <CardItem src="/images/points/points-4.png" name="홍길동" text="010-0000-0000" path="/dash" /> </ul>
        <ul className="cards-items"> <CardItem src="/images/points/points-5.png" name="홍길동"text="010-0000-0000" path="/dash" /> </ul> 
      </div>

    </div>
  );
}

export default Cards;
