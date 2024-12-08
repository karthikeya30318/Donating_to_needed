import React from 'react';
import './NavBar.css';
import {Link,Outlet} from 'react-router-dom'
const NavBar = () => {
  return (<div> 
    <nav className="navbar">
      <div className="logo">
        <a href="/">DNTN</a>
      </div>
      <ul className="nav-links">
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
    <Outlet/></div>
  );
};

export default NavBar;
