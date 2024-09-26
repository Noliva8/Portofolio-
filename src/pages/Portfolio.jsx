import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'; // We'll use this file for custom CSS

const projects = [
  {
    title: 'Project One',
    imageUrl: 'path-to-project-one-thumbnail.jpg', // replace with actual image path or URL
    deployedLink: 'https://deployed-app-one.com',
    repoLink: 'https://github.com/username/project-one',
  },
  {
    title: 'Project Two',
    imageUrl: 'path-to-project-two-thumbnail.jpg',
    deployedLink: 'https://deployed-app-two.com',
    repoLink: 'https://github.com/username/project-two',
  },
  {
    title: 'Project Three',
    imageUrl: 'path-to-project-three-thumbnail.jpg',
    deployedLink: 'https://deployed-app-three.com',
    repoLink: 'https://github.com/username/project-three',
  },
  {
    title: 'Project Four',
    imageUrl: 'path-to-project-four-thumbnail.jpg',
    deployedLink: 'https://deployed-app-four.com',
    repoLink: 'https://github.com/username/project-four',
  },
  {
    title: 'Project Five',
    imageUrl: 'path-to-project-five-thumbnail.jpg',
    deployedLink: 'https://deployed-app-five.com',
    repoLink: 'https://github.com/username/project-five',
  },
  {
    title: 'Project Six',
    imageUrl: 'path-to-project-six-thumbnail.jpg',
    deployedLink: 'https://deployed-app-six.com',
    repoLink: 'https://github.com/username/project-six',
  },
];

export default function Portfolio() {
  return (
    <div>
      {/* Section 1: Background with animated text */}
      <section className="project-header" id="header">
        <div className="overlay">
          <h1 className="animated-text">Some of My Projects</h1>
        </div>
      </section>

      {/* Section 2: Projects with Cards */}
      <section className="container my-5">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-lg h-100">
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={`${project.title} thumbnail`}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">
                    <a
                      href={project.deployedLink}
                      className="btn btn-primary me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Deployed App
                    </a>
                    <a
                      href={project.repoLink}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
