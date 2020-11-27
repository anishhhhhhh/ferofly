import React from "react";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-links">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>ROOMS</p>
          <p>SERVICES</p>
          <p>GALLERY</p>
          <p>SEE & DO</p>
          <p>CONTACT</p>
          <button>Book A Room</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
