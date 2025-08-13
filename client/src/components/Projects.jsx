import React from "react";
import "./Projects.css"; // Make sure this file exists and path is correct

function Projects() {
  const projectList = [
    {
      title: "E-Commerce Website",
      description: "A responsive e-commerce app built using React, Redux, and Node.js.",
      link: "https://your-ecommerce-site.com",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my projects and skills.",
      link: "https://your-portfolio.com",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog app using MERN stack with login & CRUD features.",
      link: "https://your-blog-platform.com",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
