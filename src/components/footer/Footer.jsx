import React from 'react'
import "./Footer.css"
import slogo from '../../assets/slogo.png'
import "../../App.css"
const Footer = () => {
  return (
    <footer>
    <div className='flex justify-evenly'>
      <div>
      <div className='flex justify-center'>
        <img src={slogo} alt="" className='slogo-img' />
      </div >
        <h4 className='text-3xl text-center'>Contact Us</h4>
        <p className='text-center'>
        SPRINGDALE PUBLIC SCHOOL<br/>
        123 Education Lane, Cityville<br/>
        DISTT. bangalore- 560037 <br />
        Phone: +1 (123) 456-7890 <br />
        Email: info@springdale.edu
        </p>
      </div>
      <div className='flex flex-col'>
      <h5 className='text-3xl'>Quick Link</h5>
        <ul className='flex flex-col'>
            <li>Curriculum</li>
            <li>Examination Policy</li>
            <li>Rules</li>
            <li>Alumni Registration</li>
            <li>Mandatory Disclosure</li>
        </ul>
      </div>
      <div className='flex flex-col'>
        <h5 className='text-3xl'>Explore</h5>
        <ul className='flex flex-col'>
            <li>Campus</li>
            <li>Library</li>
            <li>Fee Structure</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className='text-3xl'>Maps</div>
    </div>
    </footer>
  )
}

export default Footer
