import React, { useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";


function Cards() {
  const [cardItems, setCardItems] = useState([
    { src: "/images/img-1.jpg", name: "Cassidy", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Catherin", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Cherry", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Danielle", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Destiny", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Dorothy", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Agatha", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Abigail", birth: "16/07/07", successPeriod: "5", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Agnes", birth: "16/07/07", successPeriod: "10", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Bailey", birth: "16/07/07", successPeriod: "15", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Briana", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Brooke", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Emily", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Emma", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Erica", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Faith", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Florence", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Frances", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Gabrielle", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Gaby", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Gertrude", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Haley", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Heather", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Helen", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Jacqueline", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Jennife", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
    { src: "/images/img-1.jpg", name: "Jessica", birth: "16/07/07", successPeriod: "25", totalPeriod: "25", path: "/dash" },
  ]);

  return (
    <div className="cards-container">
      <ul>
        {cardItems.map((card, index) => (
          <li key={index}>
            <CardItem src={card.src} name={card.name} successPeriod={card.successPeriod} totalPeriod={card.totalPeriod} path={card.path} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;