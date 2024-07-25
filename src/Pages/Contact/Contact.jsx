import React from "react";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/form/ContactForm";
import logo from "../../assets/slogo.png";
import "./Contact.css";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="bg-green-50">
        <div className=" contactInner flex p-10">
          <div className="contactLeft w-1/2">
            <ContactForm />
          </div>

          <div className="contactRight w-1/2">
            <div className="flex flex-col items-center schoolContact ">
              <img src={logo} alt="school_logo" className="schoolLogo" />
              <h4 className="text-3xl font-medium text-center">Contact Us</h4>
              <p className="text-center">
                SPRINGDALE PUBLIC SCHOOL
                <br />
                123 Education Lane, Cityville
                <br />
                DISTT. bangalore- 560037 <br />
                Phone: +1 (123) 456-7890 <br />
                Email: info@springdale.edu
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default Contact;
