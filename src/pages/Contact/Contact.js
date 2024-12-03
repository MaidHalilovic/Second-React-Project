import React from "react";
import "./contact.css";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import Image1 from "../../images/tailoring-tailor-costume-apparel 1.png";
import ContactFooter from "../../components/ContactFooter/ContactFooter";

function Contact() {
  return (
    <div className='Maincontainer'>
      <ContactHeader />
      <div className='Navbar'>
        <div className='Navbar-1'>
          <img src={Image1} alt='img' />
          <h2>LODGE A INQUIRY</h2>
          <p>
            Where style meets convenience… Your tailor will meet you at your
            home, office, and/or on location. Our experience gives you full
            control of he design process in creating a unique garment tailored
            exclusively for you.
          </p>
        </div>
        <div className='Navbar-2'>
          <h3>Send a Message</h3>
          <button>Full Name</button>
          <button>Enter Mail id</button>
          <button>Mobile Number</button>
          <button>Message</button>
        </div>
        <div className='btn'>
          <button>Send Message </button>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

export default Contact;
