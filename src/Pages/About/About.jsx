import React from "react";
import motto from "../../assets/motto.png";
import Header from "../../components/Header/Header";
const About = () => {
  return (
    <div>
    <Header/>
      <div>
        <h2>Principal's Message</h2>
        <p>
          At Springdale Public School, we believe that learning should be
          joyful. Remember, knowledge is infinite and joy is there where there
          is spontaneity and self initiative. Alexander Pope has rightly said,
          “All value of education rests in respect for the physical,
          intellectual and moral will of the child and if education is always to
          be conceived along the same antiquated lines of mere transmission of
          knowledge, there is little to be hoped from it in bettering of man’s
          future.” For what is the use of transmitting knowledge if the
          individual’s total development lags behind. So we, at DPS
          Vindhyanagar, with calibrated efforts, inculcate much needed values
          and enhance academic acumen along with opportunities for personality
          development through various sports and co-curricular activities.
        </p>
      </div>
      <div>
        <h2>History</h2>
        <p>
          Springdale Public School, CBSE Affiliation No. 1030032 set among the
          sylvan environs, is one of the premier co-educational public schools
          in CBSE Bhopal Region. It is a highly acclaimed as a trendsetter and
          is known as a progressive institution. The school was instituted on
          7th August, 1986 and now it has earmarked excellence for itself in all
          fronts - Sports, Cultural Activity and Scholastic Achievements,
          Professional and competitive examinations. Not to adhere only to the
          elite, Springdale Public School caters Quality Education to the
          underprivileged and unreached sect of the society.
        </p>
      </div>
      <div>
        <img src={motto} alt="motto-img" />
        <div>
          <h2>Vision & Motto</h2>
          <div>
            <h4>Vision</h4>
            <p>
              Serving the Nation Making each child value-instilled & a
              Responsible Global Citizen to surge ahead conquering new horizons.
            </p>
          </div>
          <div>
            <h4>Motto</h4>
            <p>
              "To empower students with the knowledge, skills, and values needed
              to thrive in a dynamic world."
            </p>
          </div>
        </div>
        <div>
            <ul>Infrastructure and Facilities:</ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </div>
      </div>
    </div>
  );
};

export default About;
