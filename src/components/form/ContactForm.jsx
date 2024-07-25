import React from 'react'
import letter from "../../assets/letter.svg"
import "./Form.css"
const ContactForm = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
    <img src={letter} alt="nlogo" className='w-20 h-20' />
      <h1 className='text-4xl font-bold '>Drop Us a Line</h1>
      <div>
      <div className='flex flex-col gap-5 '>
      <div className='flex gap-3'>
        <input className='conform pl-2'  type="text" placeholder='Your name*' />
        <input className='pl-2' type="email" placeholder='Email address*'/>
      </div>
        <input className='pl-2' type="text" placeholder='Subject' />
        <textarea className='pl-2 pt-3' name="" id="" placeholder='Message*'></textarea>
      </div>
      
      </div>
      <button className='bg-green-900 text-white rounded-md py-2 px-5 mt-3'>Send Message</button>
    
    
    </div>
  )
}

export default ContactForm