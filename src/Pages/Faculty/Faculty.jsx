import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/card/Card";
import male from "../../assets/male.jpg";
import female from "../../assets/female.jpg"
import "./Faculty.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../components/footer/Footer";
const Faculty = () => {

  


  return (
    <div className="bg-green-100">
      <Header />
      <div>
        <h1 className="text-center text-4xl backCol font-semibold underline p-4">Our Faculty</h1>
      </div>
      <div className="flex flex-col gap-2 m-3 pb-8">
        <div className="flex justify-around py-8">
          <Card
            photo={male}
            name="Akash Shukla"
            description="Principal, M.Ed, 20 years of experience in educational administration."
          />
          <Card
            photo={male}
            name="Sushant Kumar"
            description="Vice Principal, M.Sc. in Physics, 15 years of teaching experience."
          />
          <Card
            photo={male}
            name="Prateek Kumar Jha"
            description="English Teacher, M.A. in English, 10 years of teaching experience."
          />
        </div>
        <div className="flex justify-around">
          <Card
            photo={male}
            name="Akash Patel"
            description="Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience."
          />
          <Card
            photo={female}
            name="Nidhi Srivastava"
            description="Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience."
          />
          <Card
            photo={female}
            name="Ankita Mishra"
            description=" Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculty;
