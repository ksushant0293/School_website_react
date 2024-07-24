import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/card/Card";
import male from "../../assets/male.jpg";
const Faculty = () => {
  return (
    <div className="bg-green-100 h-screen">
      <Header />
      <div className="flex flex-col gap-2 m-3">
        <div className="flex justify-around">
          <Card
            photo={male}
            name="akash skula"
            description="Principal, M.Ed, 20 years of experience in educational administration."
          />
          <Card
            photo={male}
            name="sushant kumar"
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
            name="akash patel"
            description="Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience."
          />
          <Card
            photo={male}
            name="nidhi Srivastava"
            description="Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience."
          />
          <Card
            photo={male}
            name="ankita mishra"
            description=" Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience."
          />
        </div>
      </div>
    </div>
  );
};

export default Faculty;
