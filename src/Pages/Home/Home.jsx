
import childImg from '../../assets/child.jpeg'
import school from '../../assets/school.jpeg'
import sports from '../../assets/sports.jpeg'
import Header from '../../components/Header/Header'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
const Home = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  


  const carouselData = [
    {
      imgSrc : childImg,
      headingText : "Annual Sports Day",
      quoteText : "Celebrating Excellence in Sports"
    },
    {
      imgSrc : school,
      headingText : "Annual Sports Day",
      quoteText : "Celebrating Excellence in Sports"
    },
    {
      imgSrc : sports,
      headingText : "Annual Sports Day",
      quoteText : "Celebrating Excellence in Sports"
    },

  ]
  return (
    <div>
    <Header />
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
        {
          carouselData.map((elem,index)=>(
          <div className='carouselDiv'>
          <img src={elem.imgSrc} alt={elem.imgSrc} />
          <div className='carouselDivInner'>
          <h3 className='text-7xl font-semibold text-center mb-4'>{elem.headingText}</h3>
          <p className='text-4xl font-medium text-center'>{elem.quoteText}</p>
          </div>
          
          </div>
          
        ))
        }
      </Slider>
    </div>
    <div className='bg-amber-300' >
    <h1>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h1>
    </div>


    </div>
  )
}

export default Home
