import React from "react";
import "./shop.css";
import ShopPageHeader from "../../components/ShopPageHeader/ShopPageHeader";
import Image16 from "../../images/product-1 (2).png";
import Image17 from "../../images/product-2 (3).png";
import Image18 from "../../images/product-3 (2).png";
import Image19 from "../../images/product-4 (3).png";
import Image20 from "../../images/product-1.png";
import Image21 from "../../images/product-2 (1).png";
import Image22 from "../../images/product-3.png";
import Image23 from "../../images/product-4 (1).png";
import Image24 from "../../images/product-1 (1).png";
import Image25 from "../../images/product-2 (2).png";
import Image26 from "../../images/product-3 (1).png";
import Image27 from "../../images/product-4 (2).png";
import ShopPageFooter from "../../components/ShopPageFooter/ShopPageFooter";

function Shop() {
  return (
    <div className='MainContainer'>
      <ShopPageHeader />
      <div className='navBar'>
        <div className='cards'>
          <img src={Image16} alt='img' />
          <img src={Image17} alt='img' />
          <img src={Image18} alt='img' />
          <img src={Image19} alt='img' />
          <img src={Image20} alt='img' />
          <img src={Image21} alt='img' />
          <img src={Image22} alt='img' />
          <img src={Image23} alt='img' />
          <img src={Image24} alt='img' />
          <img src={Image25} alt='img' />
          <img src={Image26} alt='img' />
          <img src={Image27} alt='img' />
        </div>
      </div>
      <ShopPageFooter />
    </div>
  );
}

export default Shop;
