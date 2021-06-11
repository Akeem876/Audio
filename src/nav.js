import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
 return (
  <nav>
   <div className="left">
    <div className="hamburger">
     <div className="burger">
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
     </div>
    </div>
    <div className="title">
     <Link to="/">
      <h4>
       audio<span>mack</span>
      </h4>
     </Link>
     <div className="separator"></div>
     <div className="premium">
      <h4>premium</h4>
     </div>
    </div>
   </div>
   <div className="middle">
    <div className="search-bar">
     <input type="text" placeholder="Search for Albums, Artists and songs!" />
     <button type="submit">
      <i className="fas fa-search"></i>
     </button>
    </div>
   </div>
   <div className="right">
    <div className="user">
     <div className="name">
      cdsoftwaresja<i className="fas fa-caret-down"></i>
     </div>
     <div className="separator"></div>
     <div className="bell">
      <i className="fas fa-bell"></i>
     </div>
    </div>
    <div className="upload">
     <i className="fas fa-upload"></i>
     <Link to="/details">upload</Link>
    </div>
   </div>
  </nav>
 );
};
export default Nav;
