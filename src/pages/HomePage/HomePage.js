import React from "react";
import "./homePage.css";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import HomePageFooter from "../../components/HomePageFooter/HomePageFooter";
import Image2 from "../../images/Rectangle 3.jpg";
import Image3 from "../../images/Rectangle 4.png";
import Image4 from "../../images/Rectangle 5.png";
import Image5 from "../../images/Rectangle 6.png";
import Image6 from "../../images/Rectangle 7.png";
import Image7 from "../../images/Rectangle 8.jpg";
import Image8 from "../../images/Rectangle 9.png";
import Image9 from "../../images/Rectangle 9 (1).png";
import Image10 from "../../images/Rectangle 9 (2).png";
import Image11 from "../../images/Rectangle 9 (3).png";
import Image12 from "../../images/Rectangle 9 (4).png";
import Image13 from "../../images/Rectangle 9 (5).png";

function HomePage() {
  return (
    <div className='MainContainer'>
      <HomePageHeader />

      <div className='NavBar'>
        <h3>FEATURED PRODUCTS</h3>
        <button>View All</button>
        <div className='cards'>
          <div className='card'>
            <img src={Image2} alt='img' />
            <h3>Travel Hoodie</h3>
            <h3>$ 699</h3>
          </div>
          <div className='card'>
            <img src={Image3} alt='img' />
            <h3>Terracotta Overshirt</h3>
            <h3>$ 699</h3>
          </div>
          <div className='card'>
            <img src={Image4} alt='img' />
            <h3>Roxie Red Overshirt</h3>
            <h3>$699</h3>
          </div>
          <div className='card'>
            <img src={Image5} alt='img' />
            <h3>Checked Formalshirt</h3>
            <h3>$699</h3>
          </div>
          <div className='card'>
            <img src={Image6} alt='img' />
            <h3>Marron Overshirt</h3>
            <h3>$699</h3>
          </div>
          <div className='Image'>
            <img src={Image7} alt='img' />
            <h1>Made-To-Order</h1>
            <button>LEARN MORE</button>
          </div>
        </div>

        <div className='ShopCollection'>
          <div className='images'>
            <img src={Image8} alt='img' />
            <button>Suits & Vests</button>
          </div>
          <div className='images'>
            <img src={Image9} alt='img' />
            <button>Casual Wear</button>
          </div>
          <div className='images'>
            <img src={Image10} alt='img' />
            <button>Tuxedos</button>
          </div>
          <div className='images'>
            <img src={Image11} alt='img' />
            <button>Formal Shirts</button>
          </div>
          <div className='images'>
            <img src={Image12} alt='img' />
            <button>Pants & Trousers</button>
          </div>
          <div className='images'>
            <img src={Image13} alt='img' />
            <button>Coats & Blazers</button>
          </div>
        </div>
      </div>
      <HomePageFooter />
    </div>
  );
}

export default HomePage;
