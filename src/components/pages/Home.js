import React from "react";
import "../../App.css";

import Search from "../Search";
import Cards from "../Cards";

export default function Home() {
  return (
    <>
      <div className="home">

        <div className="flex-item-1"></div>

        <div className="flex-item-1">
          <div className="flex-item-center">
            <Search />
          </div>
        </div>

        <div className="flex-item-1"></div>

        <div className="flex-item-7"><Cards /></div>

        <div className="flex-item-1"></div>
      </div>
    </>
  );
}
