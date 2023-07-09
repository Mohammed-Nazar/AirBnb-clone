import React from "react";
import "./card.css";

export default function Card(carddProps) {
  let badgeText
  if (carddProps.openSpots == 0) {
    badgeText = <p className="sold">SOLD OUT</p>
  } else if (carddProps.location == "Online"){
    badgeText = <p className="sold">Online</p>
  }


  return (
    <>
      <div className="Card--item">
        <div>
          {badgeText}
          <img
            className="card-img"
            src={`../../../images/${carddProps.coverImg}`}
            alt=""
          />

          <div className="rate">
            <img src="../../../images/star.png" alt="" />
            <p>
              {carddProps.stats.rating}{" "}
              <span>
                ({carddProps.stats.reviewCount}) · {carddProps.location}
              </span>
            </p>
          </div>
          <p>{carddProps.title}</p>
        </div>
        <div className="Card--info">
          <p>
            <span>From ${carddProps.price} /</span> person
          </p>
        </div>
      </div>
    </>
  );
}
