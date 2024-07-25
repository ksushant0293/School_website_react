import React from 'react'
import Header from '../../components/Header/Header'
import "./Admission.css"
import Footer from '../../components/footer/Footer'
const Admission = () => {
  return (
    <div className=' bg-green-50'>
    <Header/>
      <h1 className='text-4xl text-center p-4 visionText backCol font-semibold underline '>Admission</h1>
      <div className='text-center'>
        <h2 className='text-2xl ourText p-2'>Process</h2>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl ourText p-2'>Criteria</h2>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      </div>
      <div className='text-center pb-7'>
        <h2 className='text-2xl ourText p-2 list-none'>Important Dates:</h2>
        <p>Admission Form Availability: March 1st</p>
        <p>Last Date for Submission: March 31st</p>
        <p>Announcement of Results: April 30th</p>
        <p>Entrance Test: April 15th</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Admission
