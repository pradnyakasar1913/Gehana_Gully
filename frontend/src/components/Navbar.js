import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm py-3 px-4">
      <NavLink className="navbar-brand d-flex align-items-center" to="/home">
        <img
          src="/Images/logo.png"
          alt="Logo"
          height="40"
          className="logo-image me-2"
        />
        <span className="brand-logo">Gehana Gully</span>
      </NavLink>

      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-custom active-nav" : "nav-link nav-link-custom"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-custom active-nav" : "nav-link nav-link-custom"
              }
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-custom active-nav" : "nav-link nav-link-custom"
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-custom active-nav" : "nav-link nav-link-custom"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
