import childImg from "../../assets/child.jpeg";
import school from "../../assets/school.jpeg";
import sports from "../../assets/sports.jpeg";
import motto from "../../assets/motto.png";
import Header from "../../components/Header/Header";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import ss from "../../assets/ss.png";
import About from "../About/About";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const carouselData = [
    {
      imgSrc: childImg,
      headingText: "Cultural Fest",
      quoteText: "Embracing Diversity and Creativity",
    },
    {
      imgSrc: sports,
      headingText: "Annual Sports Day",
      quoteText: "Celebrating Excellence in Sports",
    },
    {
      imgSrc: school,
      headingText: "Science Exhibition",
      quoteText: "Showcasing Student Innovations",
    },
  ];
  return (
    <div>
      <Header />
      <div className="IntroDiv">
        <h1 className="text-center text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          "Welcome to Springdale Public School, where we nurture young minds for
          a brighter future."
        </h1>
      </div>
      {/* {
        carouselData.map((elem,index)=>(
          <div>
          <img src={elem.imgSrc} alt={elem.imgSrc} />
          <h3>{elem.headingText}</h3>
          <p>{elem.quoteText}</p>
          </div>
          
        ))
      } */}

      <div className="slider-container">
        <Slider {...settings}>
          {carouselData.map((elem, index) => (
            <div className="carouselDiv">
              <img src={elem.imgSrc} alt={elem.imgSrc} />
              <div className="carouselDivInner">
                <h3 className="text-7xl font-semibold text-center mb-4">
                  {elem.headingText}
                </h3>
                <p className="text-4xl font-medium text-center">
                  {elem.quoteText}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="homeFooterDiv">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
