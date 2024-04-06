import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
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
      {children}
      <footer className="footer">
        <p>&copy; 2024 Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
