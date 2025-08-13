import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Frontend Development</h3>
          <p>I build beautiful, responsive UI with React.js and modern CSS.</p>
        </div>
        <div className="service-card">
          <h3>Backend Development</h3>
          <p>I develop RESTful APIs and server logic using Node.js & Express.</p>
        </div>
        <div className="service-card">
          <h3>Full Stack Projects</h3>
          <p>I create complete web applications using the MERN stack.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
