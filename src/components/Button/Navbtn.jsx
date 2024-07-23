import React from 'react'
import { Link } from 'react-router-dom'

const Navbtn = ({btntext, linkto}) => {
  return (
    <div>
      <button><Link to={linkto} >{btntext}</Link> </button>
    </div>
  )
}

export default Navbtn
