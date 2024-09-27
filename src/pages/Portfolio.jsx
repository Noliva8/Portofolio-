import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import monsterpic from '../assets/monsterpic.png';
import cmspic from '../assets/cmspic.png';
import note from '../assets/note.png';
import wheather from '../assets/wheather.png';
import gggg from '../assets/gggg.png';


const projects = [
  {
    title: 'the Stock-ness Monster',
    imageUrl:monsterpic,
    deployedLink: 'https://github.com/lindsay-terry/stock-ness-monster',
    repoLink: 'https://github.com/lindsay-terry/stock-ness-monster',
  },
  {
    title: 'CMS-style blog site similar to a Wordpress site',
    imageUrl: cmspic,
    deployedLink: 'https://cms-style-blog-site-xoig.onrender.com',
    repoLink: 'https://github.com/Noliva8/CMS-style-blog-site/tree/main',
  },

  {
    title: 'Note-Taker-Application',
    imageUrl: note,
    deployedLink: 'https://dashboard.render.com/web/srv-cq7l3ijv2p9s73c657rg',
    repoLink: 'https://github.com/Noliva8/Note-Taker-Application',
  },
  {
    title: 'weather-dashboard',
    imageUrl: wheather,
    deployedLink: 'https://noliva8.github.io/-weather-dashboard-/',
    repoLink: 'https://github.com/Noliva8/-weather-dashboard-?tab=readme-ov-file',
  },
  {
    title: 'Employee-Payroll-Tracker',
    imageUrl: gggg,
    deployedLink: 'https://noliva8.github.io/Employee-Payroll-Tracker/',
    repoLink: 'https://github.com/Noliva8/Employee-Payroll-Tracker/deployments',
  },
];

export default function Portfolio() {
  return (
    <div className='portfolio-container'>
      <section className="project-header portfolio-projects" id="header">
        <div className="overlay">
          <h1 className="animated-text">Some of My Projects</h1>
        </div>
      </section>

      {/* Section 2: Projects with Cards */}
      {/* ---------------------------- */}

      <section className="container my-5 projects">
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

      {/* Footer Section */}
     
    </div>
  );
}
