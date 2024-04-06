import React from 'react';
import './App.css';
import macbookImage from './macbook.jpg';
import iphoneImage from './iphone.jpg';
import ipadImage from './ipad.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import MacPage from './MacPage';
import Layout from './Layout';
import iPadPage from './iPadPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mac">Mac</Link></li>
              <li><Link to="/ipad">iPad</Link></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </nav>
        </header>
      
        <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<iPadPage />} />
        </Routes>
      </Layout>
      
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
        <footer className="footer">
          <p>&copy; 2024 Apple Inc. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
