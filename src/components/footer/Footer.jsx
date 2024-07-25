import React from 'react';
import "./Footer.css";
import slogo from '../../assets/slogo.png';
import "../../App.css";

const Footer = () => {
  return (
    <footer>
      <div className='footerDiv p-5'>
        <div className='flex flex-col lg:flex-row justify-evenly p-5 lg:p-10'>
          <div className='mb-8 lg:mb-0'>
            <div className='flex justify-center'>
              <img src={slogo} alt="" className='slogo-img' />
            </div >
            <h4 className='text-3xl text-center underline hover:underline-offset-4 p-3'>Address</h4>
            <p className='text-center'>
              SPRINGDALE PUBLIC SCHOOL<br />
              123 Education Lane, Cityville<br />
              DISTT. Bangalore- 560037 <br />
              Phone: +1 (123) 456-7890 <br />
              Email: info@springdale.edu
            </p>
          </div>
          <div className='flex flex-col mb-8 lg:mb-0'>
            <h5 className='text-3xl text-center underline hover:underline-offset-4 p-3'>Quick Link</h5>
            <ul className='flex flex-col items-center'>
              <li>Curriculum</li>
              <li>Examination Policy</li>
              <li>Rules</li>
              <li>Alumni Registration</li>
              <li>Mandatory Disclosure</li>
            </ul>
          </div>
          <div className='flex flex-col mb-8 lg:mb-0 ExDiv'>
            <h5 className='text-3xl text-center underline hover:underline-offset-4 p-3'>Explore</h5>
            <ul className='flex flex-col items-center'>
              <li>Campus</li>
              <li>Library</li>
              <li>Fee Structure</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className='text-3xl text-center underline hover:underline-offset-4 p-3'>Map</h5>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3911.932567030852!2d77.1734851!3d11.3396361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8e1f3ebb72e25%3A0x8c997f5696c4db91!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1721848148293!5m2!1sen!2sin"
                width="300" 
                height="200"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <h1 className='text-center mt-8'>Designed By: Sushant Kumar</h1>
      </div>
    </footer>
  );
}

export default Footer;
