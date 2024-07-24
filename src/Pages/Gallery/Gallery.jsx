import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/card/Card'
import sklfun from "../../assets/sklfun.jpg"
const Gallery = () => {
  return (
    <div>
      <Header/>
      <h1 className='bg-green-200 p-3 text-center text-3xl mb-4'>Our Gallery</h1>
      <Card photo={sklfun}  description="Principal, M.Ed, 20 years of experience in educational administration."  />
    </div>
  )
}

export default Gallery
