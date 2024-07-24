import React from "react";
import Header from "../../components/Header/Header";
const Academics = () => {
  return (
    <div className="bg-green-50">
      <Header />
      <div className="text-center" >
        <h2 className="text-center text-4xl bg-green-200 p-4">Curriculum</h2>
        <h4 className="text-2xl">Primary (Grades 1-5):</h4>
        <p> English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        <h4 className="text-2xl">Secondary (Grades 6-10):</h4>
        <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        <h4 className="text-2xl">Senior Secondary (Grades 11-12):</h4>
        <h6 className="text-xl">Science Stream:</h6>
        <p> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
        <h6 className="text-xl">Commerce Stream:</h6>
        <p>Accountancy, Business Studies, Economics, Mathematics, English</p>
        {/* <ul className="flex flex-col">
          <li>
            Primary (Grades 1-5): English, Mathematics, Science, Social Studies,
            Art, Physical Education
          </li>
          <li>
            Secondary (Grades 6-10): English, Mathematics, Science (Physics,
            Chemistry, Biology), Social Studies, Computer Science, Physical
            Education, Art
          </li>
          <li>
            Senior Secondary (Grades 11-12):
            <ul className="flex flex-col">
              <li>
                Science Stream: Physics, Chemistry, Biology, Mathematics,
                Computer Science, English
              </li>
              <li>
                Commerce Stream: Accountancy, Business Studies, Economics,
                Mathematics, English
              </li>
            </ul>
          </li>
        </ul> */}
      </div>
      <div className="text-center">
        <h2 className="text-center text-4xl bg-green-200 p-4">Teaching Methodologies</h2>
        <p>
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-center text-4xl bg-green-200 p-4">Educational Resources</h2>
        <p >
          Digital classrooms, interactive learning modules, and access to online
          educational platforms.
        </p>
      </div>
    </div>
  );
};

export default Academics;
