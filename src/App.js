import logo from './logo.svg';
import './App.css';
import macbookImage from './macbook.jpg';
import iphoneImage from './iphone.jpg';
import ipadImage from './ipad.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </nav>
      </header>
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
  );
}

export default App;
