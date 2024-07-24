import React from "react";
import "./Card.css"
const Card = ({photo, name, description}) => {
  return (
    <div className="cardDiv">
      <div className="imgdiv">
      <img src= {photo} className="cardPhoto"/>
      </div>
      <div className="card-content">
        <h2 className="card-name text-center ">{name}</h2>
        <p className="card-description text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
