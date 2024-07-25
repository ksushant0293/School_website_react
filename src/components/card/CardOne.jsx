import React, { useEffect } from "react";
import "./CardOne.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const CardOne = ({photo,description}) => {

  useEffect(()=>{
    AOS.init({duration:2000});
  },[])


  return (
    <div data-aos="fade-up" className="cardDiv">
      <div className="imgdiv">
      <img src= {photo} className="cardPhoto"/>
      </div>
      <div className="card-content">
        <p className="card-description text-center">{description}</p>
      </div>
    </div>
  );
};

export default CardOne;
