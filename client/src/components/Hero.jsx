import React from "react";
import "./Hero.css";
import heroImg from "../components/assets/hero.jpg";
import "./Navbar.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Lipsa</span>
        </h1>
        <h2>Full Stack Developer MERN</h2>
        <p>
          I build modern web apps using React, Node.js, Express, and MongoDB.
        </p>
        <a href="#about" className="hero-btn">Explore More</a>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
