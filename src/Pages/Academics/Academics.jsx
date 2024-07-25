import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import "./Academics.css"
const Academics = () => {
  return (
    <div className="bg-green-50">
      <Header />
      <div className="text-center" >
        <h2 className="text-center text-4xl backCol font-semibold underline p-4">Curriculum</h2>
        <h4 className="text-2xl pt-5 ourText font-semibold">Primary (Grades 1-5):</h4>
        <p> English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        <h4 className="text-2xl ourText font-semibold">Secondary (Grades 6-10):</h4>
        <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        <h4 className="text-2xl ourText font-semibold">Senior Secondary (Grades 11-12):</h4>
        <h6 className="text-xl font-medium">Science Stream:</h6>
        <p> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
        <h6 className="text-xl font-medium">Commerce Stream:</h6>
        <p className="pb-5">Accountancy, Business Studies, Economics, Mathematics, English</p>
      </div>
      <div className="text-center">
        <h2 className="text-center text-4xl backCol font-semibold underline p-4">Teaching Methodologies</h2>
        <p className="p-5 ">
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-center text-4xl backCol font-semibold underline p-4">Educational Resources</h2>
        <p className="p-5 ">
          Digital classrooms, interactive learning modules, and access to online
          educational platforms.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Academics;
