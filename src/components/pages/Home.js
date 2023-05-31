import React from "react";
import "../../App.css";

import ListSearch from "../ListSearch";
import ListSet from "../ListSet";
import List from "../List";

export default function Home() {
  return (
    <div className="home">
      <div className="flex-item-1"></div>
      <div className="flex-item-1">
        <ListSearch />
      </div>
      <div className="flex-item-1">
        <ListSet/>
      </div>
      <div className="flex-item-7"> <List />
      </div>
      <div className="flex-item-1"></div>
    </div>
  );
}
