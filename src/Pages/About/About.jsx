import React from "react";
import motto from "../../assets/motto.png";
import Footer from "../../components/footer/Footer"
import "./About.css";
const About = () => {
  return (
    <div className="">
      <div>
        <div className="principalDiv ">
          <div className="principalinner text-white">
            <h2 className="font-bold text-4xl mb-4">Principal's Message</h2>
            <p className="font-medium mb-3">
              At Springdale Public School, we believe that learning should be
              joyful. Remember, knowledge is infinite and joy is there where
              there is spontaneity and self initiative. Alexander Pope has
              rightly said, “All value of education rests in respect for the
              physical, intellectual and moral will of the child and if
              education is always to be conceived along the same antiquated
              lines of mere transmission of knowledge, there is little to be
              hoped from it in bettering of man’s future.”
            </p>
            <h3 className="text-2xl font-medium">Dr. Akash Shukla</h3>
            <h4 className="font-medium">Principal</h4>
          </div>
        </div>
      </div>

      <div className="bg-green-50">
      <div className=" motoDiv flex justify-between ">
        <div className="w-1/2 p-20 m-10 bg-white motoimg rounded-3xl">
          <img src={motto} alt="motto-img" className="" />
          </div>
        <div className="w-1/2 p-20 m-10 bg-white rounded-3xl ">
          <h4 className="text-2xl font-medium ourText">Our</h4>
          <h2 className="text-4xl font-bold visionText mt-6">Vision & Motto</h2>
          <div className="">
            <h4 className="ourText">Vision</h4>
            <p className="visionText">
              Serving the Nation Making each child value-instilled & a
              Responsible Global Citizen to surge ahead conquering new horizons.
            </p>
          </div>
          <div>
            <h4 className="ourText">Motto</h4>
            <p className="visionText">
              "To empower students with the knowledge, skills, and values needed
              to thrive in a dynamic world."
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="historyDiv flex ">
        <div className="bg-yellow-100 w-1/2 p-20 m-10 rounded-3xl">
          <h2 className="text-3xl visionText">History</h2>
          <p>
            Springdale Public School, CBSE Affiliation No. 1030032 set among the
            sylvan environs, is one of the premier co-educational public schools
            in CBSE Bhopal Region. It is a highly acclaimed as a trendsetter and
            is known as a progressive institution. The school was instituted on
            7th August, 1986 and now it has earmarked excellence for itself in
            all fronts - Sports, Cultural Activity and Scholastic Achievements,
            Professional and competitive examinations. Not to adhere only to the
            elite, Springdale Public School caters Quality Education to the
            underprivileged and unreached sect of the society.
          </p>
        </div>
        <div className="bg-yellow-100 w-1/2 p-20 m-10 rounded-3xl">
          <ul className="text-3xl text-center visionText">Infrastructure and Facilities:</ul>
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
