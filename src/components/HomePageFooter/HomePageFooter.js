import React from "react";
import "./homePageFooter.css";
import Image14 from "../../images/Sewing machine.png";
import Image15 from "../../images/Tailor.png";
import Image16 from "../../images/Sewing.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function HomePageFooter() {
  return (
    <div className='Footer'>
      <div className='Footer-1'>
        <div className='text'>
          <img src={Image14} alt='img' />
          <h3> Quality</h3>
          <p>
            Our objective is to design and tailor a made-to-measure suit with a
            guaranteed fit. We ensure nothing but comfort, style, and class
            whenever and wherever you are.
          </p>
        </div>

        <div className='text'>
          <img src={Image15} alt='img' />
          <h3>Customisability</h3>
          <p>
            There are many styles to select from when you browse through our
            gallery. Every detail identifies your style. At the collaboration,
            you have complete control over the design process.
          </p>
        </div>

        <div className='text'>
          <img src={Image16} alt='img' />
          <h3>Convenience</h3>
          <p>
            We bring our bespoke suit tailoring service directly to you at home,
            the office, or on location, so you have the minimum of interruptions
            during your busy schedule.
          </p>
        </div>
      </div>
      <div className='Footer-2'>
        <div className='text-1'>
          <h1>SIGN UP AND SAVE</h1>
          <h3>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </h3>
          <h3>Enter Your Email</h3>
          <div className='icons'>
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
        <div className='text-2'>
          <h3>LOCATION 007</h3>
          <h3>007,James bond street, London, England.</h3>
          <h3>Mon-Sat 10AM - 9PM</h3>
          <h3>Sun:Closed</h3>
        </div>
        <div className='text-3'>
          <h3>About</h3>
          <h3>FAQ</h3>
          <h3>Services</h3>
          <h3>Contact</h3>
          <h3>Start a Return or Exchange</h3>
        </div>
        <div className='text-4'>
          <h3>Tailoring</h3>
          <h3>Made-to-Measure</h3>
          <h3>Weddings</h3>
          <h3>Made-to-Order</h3>
        </div>
        <div className='text-5'>
          <h3>Orders</h3>
          <h3>Returns</h3>
          <h3>Terms and Conditions</h3>
          <h3>Privacy and policy</h3>
          <h3>Gifts</h3>
          <h3>Refund Policy</h3>
        </div>
      </div>
    </div>
  );
}

export default HomePageFooter;
