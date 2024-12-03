import React from "react";
import "./weddings.css";
import WeddingsHeader from "../../components/WeddingsHeader/WeddingHeaders";
import Image30 from "../../images/Product-lists.png";
import Image31 from "../../images/Product-lists (1).png";
import WeddingFooter from "../../components/WeddingsFooter/WeddingsFooter";

function Weddings() {
  return (
    <div className='MainContainer'>
      <WeddingsHeader />

      <div className='NavBar'>
        <img src={Image30} alt='img' />
        <img src={Image30} alt='img' />
        <img src={Image31} alt='img' />
        <img src={Image31} alt='img' />
        <img src={Image31} alt='img' />
      </div>
      <WeddingFooter />
    </div>
  );
}

export default Weddings;
