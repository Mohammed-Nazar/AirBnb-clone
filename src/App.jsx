import React from "react";
import { ReactDOM } from "react-dom/client";
import Navbar from "./components/navbar/navbar";
import MainCon from "./components/main/main-con";
import Card from "./components/card/card";
import Data from "./data.js";

function App() {
  const cardsData = Data.map((cardData) => (
    <Card
      spots={cardData.openSpots}
      key={cardData.id}
      title={cardData.title}
      img={cardData.coverImg}
      rate={cardData.stats.rating}
      revCount={cardData.stats.reviewCount}
      price={cardData.price}
      reg={cardData.location}
    />
  ));
  return (
    <>
      <Navbar />
      <MainCon/>
      <div className="Card">{cardsData}</div>
    </>
  );
}

export default App;
