import React from 'react';
import './Nav.css'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg px-3 custom-green-gradient bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/home">
          <img
            src="logo.webp"
            alt="Camp Nou Logo"
            width="60"
            height="60"
            className="rounded-circle logo-shadow"
          />
          <span className="fw-bold text-light fs-4">Camp Nou Arena</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/booking">Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/view">View Bookings</Link>
            </li>
          </ul>
          <span className="navbar-text text-light">
            Welcome to Camp Nou Arena
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
