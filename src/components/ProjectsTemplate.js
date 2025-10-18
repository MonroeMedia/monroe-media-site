import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ProjectsTemplate({
  title,
  client,
  description,
  services,
  desktopImg,
  tabletImg,
  mobileImg,
}) {
  return (
    <div className="project-page">
      <div className="project-grid">

        {/* --- Back Button --- */}

        {/* --- Left Column --- */}
        <div className="project-text">
          <div className="project-back-wrapper">
            <Link to="/projects" className="project-back-btn">
              ← Back to Projects
            </Link>
          </div>
          <h1 className="project-title">{title}</h1>

          <div className="project-description">
            <h2 className="project-the-client">The Client</h2>
            <p>{client}</p>

            <p>{description}</p>

            <div className="project-services-provided">
              <h2 className="project-services-provided-heading">
                Services Provided
              </h2>
              <p>{services}</p>
            </div>
          </div>
        </div>

        {/* --- Right Column --- */}
        <div className="project-visuals">
          <div className="project-desktop-row">
            <img
              src={desktopImg}
              alt={`${title} desktop preview`}
              className="project-desktop-screenshot"
            />
          </div>
          <div className="project-mobile-tablet-row">
            <img
              src={tabletImg}
              alt={`${title} tablet preview`}
              className="project-tablet-screenshot"
            />
            <img
              src={mobileImg}
              alt={`${title} mobile preview`}
              className="project-mobile-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTemplate;
