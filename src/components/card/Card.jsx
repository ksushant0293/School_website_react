import React, { useEffect } from "react";
import "./Card.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Card = ({photo, name, description}) => {

  useEffect(()=>{
    AOS.init({duration:2000});
  },[])


  return (
    <div data-aos="fade-up" className="cardDiv">
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
