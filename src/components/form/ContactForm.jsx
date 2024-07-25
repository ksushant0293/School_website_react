import React from 'react'
import letter from "../../assets/letter.svg"
import "./Form.css"
const ContactForm = () => {
  return (
    <div className='flex flex-col'>
    <img src={letter} alt="nlogo" className='w-20 h-20' />
      <h1 className='text-4xl font-bold '>Drop Us a Line</h1>
      <div>
      <div className='flex flex-col gap-3 '>
      <div className='flex  '>
        <input className='conform'  type="text" placeholder='Your name*' />
        <input type="email" placeholder='Email address*'/>
      </div>
        <input type="text" placeholder='Subject' />
        <textarea name="" id="" placeholder='Message*'></textarea>
      </div>
      
      </div>
      <button className='bg-green-900 text-white py-2 mt-3'>Send Message</button>
    
    
    </div>
  )
}

export default ContactForm