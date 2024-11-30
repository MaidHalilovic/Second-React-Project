import React from "react";
import Logo from "../../images/logo (1).png";
import { IoMdPerson } from "react-icons/io";
import { TbShoppingCartFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import Image1 from "../../images/Hero-container.jpg";
import "./homePageHeader.css";

<head>
  <link
    href='https://fonts.googleapis.com/css2?family=Concert+One&family=Lexend:wght@100..900&family=Urbanist:ital,wght@0,700;1,700&display=swap'
    rel='stylesheet'
  ></link>
  ;
</head>;

function HomePageHeader() {
  return (
    <div className='MainContainer'>
      <div className='Header'>
        <div className='Header-1'>
          <h3>MEGA SALE</h3>
          <p>Take 10% OFF</p>
        </div>
        <div className='Header-2'>
          <img src={Logo} alt='logo' />

          <h3>PRODUCTS</h3>
          <h3>SHOP</h3>
          <h3>WEDDINGS</h3>
          <h3>SERVICES</h3>
          <h3>CONTACT</h3>
          <div className='icons'>
            <IoMdPerson />
            <TbShoppingCartFilled />
            <FaSearch />
          </div>
        </div>
        <div className='Header-3'>
          <img src={Image1} alt='img' />
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
