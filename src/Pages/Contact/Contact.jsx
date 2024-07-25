import React from 'react'
import Header from '../../components/Header/Header'
import ContactForm from '../../components/form/ContactForm'
import logo from '../../assets/slogo.png'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Header/>
      <div className="contactInner">
      <div className='flex'>
      <div className="contactLeft w-1/2">
      <ContactForm/>
      </div>


      <div className="contactRight">
      <div className='flex flex-col items-center '>
      <img src= {logo} alt='school_logo' className='w-40 h-40 '/>
      <h4 className='text-3xl text-center'>Contact Us</h4>
        <p className='text-center'>
        SPRINGDALE PUBLIC SCHOOL<br/>
        123 Education Lane, Cityville<br/>
        DISTT. bangalore- 560037 <br />
        Phone: +1 (123) 456-7890 <br />
        Email: info@springdale.edu
        </p>
      </div>

      <div className="schoolMap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3911.932567030852!2d77.1734851!3d11.3396361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8e1f3ebb72e25%3A0x8c997f5696c4db91!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1721848148293!5m2!1sen!2sin" width="600" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      

      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
