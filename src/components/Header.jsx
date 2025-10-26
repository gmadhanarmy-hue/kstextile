import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <>

      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <h1>Kalai Textile</h1>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/address" className="nav-btn">📍 Address</Link>
            <Link to="/customercare" className="nav-btn">📞 Customer Care</Link>
            <Link to="/email" className="nav-btn">📧 Email</Link>
            <Link to="/whatsapp" className="nav-btn">💬 WhatsApp</Link>
            <Link to="/cart" className="nav-link cart-link">
              Cart ({cartCount})
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;