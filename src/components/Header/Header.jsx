import React from 'react'
import Navbtn from '../Button/Navbtn'
import slogo from "../../assets/slogo.png"
import "../../App.css"
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <header>
        <nav>
            <div className='linkContainer '>
                <img src={slogo} alt="school_logo" className='slogo-img' />
                <div>
                    <ul className='mainUl'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutUs" >About Us</Link></li>
                        <li><Link to="/academics">Academics</Link></li>
                        
                        <li><Link to="/faculty">Faculty</Link></li>
                        <li><Link to="/students">Students</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <Navbtn btntext = "PayOnline Fees"  />
                    <Navbtn btntext = "Admissions" linkto= "/admission" />
                </div>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
