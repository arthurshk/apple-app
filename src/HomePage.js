import React from 'react';
import macbookImage from './macbook.jpg';
import iphoneImage from './iphone.jpg';
import ipadImage from './ipad.jpg';

function HomePage() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Apple</h1>
        <p>The home of innovation</p>
        <a href="#" className="cta">Learn More</a>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src={macbookImage} alt="MacBook"/>
            <h3>MacBook Pro</h3>
            <p>Power. Moves.</p>
            <a href="#" className="cta">Buy Now</a> 
          </div>
          <div className="product">
            <img src={iphoneImage} alt="iPhone"/>
            <h3>iPhone 13</h3>
            <p>A15 Bionic chip. Super Retina XDR display.</p>
            <a href="#" className="cta">Buy Now</a>
          </div>
          <div className="product">
            <img src={ipadImage} alt="iPad"/>
            <h3>iPad Air</h3>
            <p>Incredible power at an incredible value.</p>
            <a href="#" className="cta">Buy Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
