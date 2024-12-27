import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './BaseLayout.css'; // Import the CSS file

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center px-3">
        {/* Dropdown Menu */}
        <div className="dropdown me-3">
          <button
            className="btn btn-secondary"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="dropdown-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Header Title */}
        <h1 className="site-title mb-0">
          <Link className="text-decoration-none text-dark" to="/">
            The Meow Boutique
          </Link>
        </h1>

        <div className="flex-grow-1"></div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Donate Button */}
        <div className="me-3">
          <Link className="btn btn-primary" to="/donate">
            Donate
          </Link>
        </div>
      </header>

      <main id="content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and Contact Information */}
          <div className="footer-section">
            <div className="footer-logo">
              <h2>The Meow Boutique</h2>
            </div>
            <ul className="footer-contact">
              <li>
                📧 <a href="mailto:info@meowboutique.com">info@meowboutique.com</a>
              </li>
              <li>
                📞 <a href="tel:+8801749264189">+88 01749 264189</a>
              </li>
              <li>
                🏠 Siddeshwari, Dhaka
              </li>
              <li>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                  Check map
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-section">
            <h3>USEFUL LINKS</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Stay in Touch */}
          <div className="footer-section">
            <h3>STAY IN TOUCH</h3>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
