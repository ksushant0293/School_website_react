import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import male from "../../assets/male.jpg"
import girlPass from "../../assets/girlPass.jpg"
import boyPass from "../../assets/boyPass.jpg"
import tech from "../../assets/tech.jpg"
import secc from "../../assets/secc.jpg"
import pres from "../../assets/pres.jpg"
import vice from "../../assets/vice.jpg"

const Students = () => {
  return (
    <div>
      <Header/>
      <div className='studentDiv text-center'>
        <h1 className='text-center text-4xl backCol font-semibold underline p-4'>Life at Springdale:</h1>
        <p className='p-5'>Extracurricular Activities:"Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"</p>
        <p className='pb-5'>Clubs and Societies: "Literary Society, Environmental Club, Astronomy Club, Coding Club"</p>
      </div>
      <div className=''>
      <h1 className='text-center text-4xl backCol font-semibold underline p-4 '>Achievements:</h1>
      <div className='flex justify-evenly py-10'>
        <Card photo={boyPass}
            name="John Smith"
            description="National Level Math Olympiad Winner"/>
        <Card photo={girlPass}
            name="Sarah Lee"
            description="Gold Medalist in State Swimming Championship"/>
        <Card photo={tech}
            name="Tech Innovators Club"
            description="Winners of Inter-School Robotics Competition"/>
      </div>
      </div>
      <div>
      <h1 className='text-center text-4xl backCol font-semibold underline p-4'>Student Council:</h1>
        <div className='flex justify-evenly py-10'>
        <Card photo={pres}
            name="President:"
            description="Amy Parker, Grade 12"/>
        <Card photo={vice}
            name="Vice President:"
            description=" Rajiv Mehta, Grade 11"/>
        <Card photo={secc}
            name="Secretary: "
            description="Lisa Wong, Grade 10"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Students
