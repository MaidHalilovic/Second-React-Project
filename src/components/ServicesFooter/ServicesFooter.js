import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function ServicesFooter() {
  return (
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
  );
}
export default ServicesFooter;
