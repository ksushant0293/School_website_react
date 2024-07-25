import React from 'react'
import comm from "../../assets/comm.jpg"
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import "./Fees.css"
const Fees = () => {
  return (
    <div>
    <Header/>
    <div className='image-container'>
      <img src={comm} alt="" className='image'/>
    </div>
    <Footer/>
    </div>
  )
}

export default Fees
