import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Projects() {
  const projectLinks = [
    { name: "Carolina Bud Dispensary", path: "/carolina-bud-dispensary" },
    { name: "Envious Gardens", path: "/envious-gardens" },
    { name: "H2O's Landscaping", path: "/h2os-landscaping" },
    { name: "Ty's Touch", path: "/tys-touch" },
    { name: "Velvet FM", path: "/velvet-fm" },
    { name: "Wilson's Wholesale", path: "/wilsons" },
  ];

  return (
    <section className="projects-page">
      <div className="projects-back-wrapper">
        <Link to="/#projects" className="project-back-btn">
          ← Back to Home
        </Link>
      </div>

      <h1 className="projects-title">Recent Projects</h1>

      <div className="projects-list">
        {projectLinks.map((proj, index) => (
          <Link
            key={proj.path}
            to={proj.path}
            className="project-link"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {proj.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
