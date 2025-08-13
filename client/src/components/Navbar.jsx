import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Lipsa</h1>
        <div className="nav-links">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/about" className={getLinkClass("/about")}>About</Link>
          <Link to="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link>
          <Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
