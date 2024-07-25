import React from "react";
import Header from "../../components/Header/Header";
import CardOne from "../../components/card/CardOne";
import male from "../../assets/male.jpg";
import Footer from "../../components/footer/Footer"
import AOS from "aos";
import "aos/dist/aos.css";
const Faculty = () => {
  return (
    <div className="bg-green-100">
      <Header />
      <div className="flex flex-col gap-2 m-3">
        <div className="flex justify-around">
          <CardOne
            photo={male}
            name="akash skula"
            description="Students participating in various sports events."
          />
          <CardOne
            photo={male}
            name="sushant kumar"
            description="Students presenting their science projects."
          />
          <CardOne
            photo={male}
            name="Prateek Kumar Jha"
            description= "Students performing in the cultural fest."
          />
        </div>
        <div className="flex justify-around">
          <CardOne
            photo={male}
            name="akash patel"
            description="A glimpse of our interactive classrooms."
          />
          <CardOne
            photo={male}
            name="nidhi Srivastava"
            description="Students reading and studying in the school library."
          />
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculty;
