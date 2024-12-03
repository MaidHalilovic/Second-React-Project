import React from "react";
import "./services.css";
import ServicesHeader from "../../components/ServicesHeader/ServicesHeader";
import Image1 from "../../images/Service-content.png";
import ServicesFooter from "../../components/ServicesFooter/ServicesFooter";

function Services() {
  return (
    <div className='MainContainer'>
      <ServicesHeader />
      <div className='NavBar'>
        <img src={Image1} alt='img' />
      </div>
      <ServicesFooter />
    </div>
  );
}

export default Services;
