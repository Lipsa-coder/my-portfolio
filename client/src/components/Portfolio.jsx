import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Task Manager App",
      description: "A MERN stack web app for managing daily tasks with authentication.",
      link: "https://your-task-manager.com",
    },
    {
      title: "React E-Commerce",
      description: "An online shopping website built using React, Redux, and Node.js.",
      link: "https://your-ecommerce-site.com",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform with login and CRUD functionality.",
      link: "https://your-blog-platform.com",
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="portfolio-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
