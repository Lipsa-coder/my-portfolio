import React from "react";
import "./About.css";
import profileImg from "../components/assets/profile.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About <span className="highlight">Me</span></h2>
          <p>
            I am <strong>Lipsa Das</strong>, a passionate Full Stack Developer skilled in the MERN stack.
            I love crafting responsive and interactive web applications that provide a great user experience.
          </p>
          <p>
            I specialize in React, Node.js, MongoDB, and Express. My goal is to bring ideas to life with clean, efficient code and beautiful UI.
          </p>
          <a href="/Lipsa_Resume.pdf" download className="download-btn">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;
