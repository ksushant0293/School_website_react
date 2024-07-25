import React from "react";
import Header from "../../components/Header/Header";
import CardOne from "../../components/card/CardOne";
import male from "../../assets/male.jpg";
import Footer from "../../components/footer/Footer"
import AOS from "aos";
import "aos/dist/aos.css";
import classroom from "../../assets/classroom.jpg"
import sportsday from "../../assets/sportsday.jpg"
import cultural from "../../assets/cultural.jpg"
import science from "../../assets/sciencEx.jpg"
import library from "../../assets/library.jpg"
import './Gallery.css'
const Faculty = () => {

  const cardOneData = [
    {
      imgSrc: classroom,
      desc: "A glimpse of our interactive classrooms."
    },
    {
      imgSrc: sportsday,
      desc:  "Students participating in various sports events." 
    },
    {
      imgSrc: cultural,
      desc:  "Pompous celebration of cultural events." 
    },
    {
      imgSrc: science,
      desc:  "Students presenting their science projects."
    },
    {
      imgSrc: library,
      desc:  "Students reading and studying in the school library."
    }
  ]



  return (
    <div className="bg-green-100">
      <Header />
      <div>
      <h1 className="text-center text-4xl backCol font-semibold underline p-4">All Round Hollistic Development </h1>
      </div>
      <div className="schoolFunctions">
      {
        cardOneData.map((elem,index) =>(
          <div className="schoolCard">
            <img src={elem.imgSrc} alt={elem.imgSrc} />
            <h5 >{elem.desc}</h5>
          </div>
        ))
      }
      </div>
      <Footer />
    </div>
  );
};

export default Faculty;
