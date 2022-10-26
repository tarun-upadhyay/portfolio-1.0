import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name"> Tarun </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: "none"}}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        
        </div>
        <div>
         <span>toggle</span>
         </div>
      </div>
    </div>
  );
};

export default Navbar;
