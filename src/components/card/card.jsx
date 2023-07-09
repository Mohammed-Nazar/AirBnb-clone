import React from "react";
import "./card.css";

export default function Card(carddProps) {
  return (
    <>
        <div className="Card--item">
        {carddProps.spots == 0 && <p className="sold">SOLD OUT</p>}
        <img className="card-img" src={`../../../images/${carddProps.img}`} alt="" />
        
          <div className="rate">
            
            <img src="../../../images/star.png" alt="" />
            <p>
              {carddProps.rate} <span>({carddProps.revCount}) · {carddProps.reg}</span>
            </p>
          </div>
          <div className="Card--info">
            <p>{carddProps.title}</p>
            <p>
              <span>From ${carddProps.price} /</span> person
            </p>
          </div>
      </div>
    </>
  );
}
