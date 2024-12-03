import React from "react";
import { IoMdPerson } from "react-icons/io";
import { TbShoppingCartFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import Logo from "../../images/logo (1).png";
import { useNavigate } from "react-router-dom";

function ShopPageHeader() {
  const navigate = useNavigate();
  return (
    <div className='Header'>
      <div className='Header-1'>
        <h3>MEGA SALE</h3>
        <p>Take 10% OFF</p>
      </div>
      <div className='Header-2'>
        <img src={Logo} alt='logo' />
        <h3 onClick={() => navigate("/")}>PRODUCTS</h3>
        <h3 onClick={() => navigate("/Shop")}>SHOP</h3>
        <h3 onClick={() => navigate("/Weddings")}>WEDDINGS</h3>
        <h3 onClick={() => navigate("/Services")}>SERVICES</h3>
        <h3 onClick={() => navigate("/Contact")}>CONTACT</h3>
        <div className='icons'>
          <IoMdPerson />
          <TbShoppingCartFilled />
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default ShopPageHeader;
