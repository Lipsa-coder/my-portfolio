import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Project One",
    description: "A MERN stack web app for task management.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "E-commerce site with React and Node.js.",
    link: "#",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
