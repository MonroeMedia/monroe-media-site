import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "../App.css";

// Import your images
import cbd from "../assets/images/cbd-screenshot.png";
import eg from "../assets/images/eg-screenshot.png";
import h2os from "../assets/images/h2os-screenshot.png";
import tt from "../assets/images/tt-screenshot.png";

import velvet2 from "../assets/images/velvet2-screenshot.png";
import wilsons from "../assets/images/wilsons-screenshot.png";

function ProjectsPortfolio() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateRow = (selector, from, to, scrollLength) => {
      gsap.fromTo(
        selector,
        { xPercent: from },
        {
          xPercent: to,
          ease: "none",
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top bottom",
            end: `bottom top`, // 👈 keeps your scroll distance
            scrub: 1.5, // 👈 keeps your smooth sync
          },
        }
      );
    };

    // Always three rows: left → right → left
    animateRow(".projects-row.top", 10, -45, 2000);
    animateRow(".projects-row.middle", -10, 45, 2000);
    animateRow(".projects-row.bottom", 10, -45, 2000);
  }, []);

  const projects = [
    { class: "cbd", img: cbd, name: "Carolina Bud Dispensary", link: "/carolina-bud-dispensary", internal: true },
    { class: "eg", img: eg, name: "Envious Gardens", link: "/envious-gardens", internal: true },
    { class: "h2os", img: h2os, name: "H2O's Landscaping", link: "/h2os-landscaping", internal: true },
    { class: "tt", img: tt, name: "Ty's Touch", link: "/tys-touch", internal: true },
    { class: "velvet2", img: velvet2, name: "E-commerce Stores", link: "/velvet-fm", internal: true },
    { class: "wilsons", img: wilsons, name: "Wilson's Wholesale", link: "/wilsons", internal: true },
    { class: "cbd", img: cbd, name: "Carolina Bud Dispensary", link: "/carolina-bud-dispensary", internal: true },
  ];

  // Helper: duplicate a slice for seamless looping
  const duplicate = (arr) => [...arr];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-btn-wrapper">
        <h3 className="projects-btn">Click a project to view</h3>
      </div>
      {/* --- ROW 1 --- */}
      <div className="projects-row top">
        {duplicate(projects.slice(0, 3)).map((proj, i) => (
          <Link
            key={`${proj.name}-top-${i}`}
            to={proj.link}
            className={`project-card ${proj.class}`}
          >
            <img src={proj.img} alt={`${proj.name} Project Screenshot`} />
            <div className="project-btn">{proj.name}</div>
          </Link>
        ))}
      </div>

      {/* --- ROW 2 --- */}
      <div className="projects-row middle">
        {duplicate(projects.slice(2, 5)).map((proj, i) => (
          <Link
            key={`${proj.name}-middle-${i}`}
            to={proj.link}
            className={`project-card ${proj.class}`}
          >
            <img src={proj.img} alt={`${proj.name} Project Screenshot`} />
            <div className="project-btn">{proj.name}</div>
          </Link>
        ))}
      </div>

      {/* --- ROW 3 --- */}
      <div className="projects-row bottom">
        {duplicate(projects.slice(4)).map((proj, i) => (
          <Link
            key={`${proj.name}-bottom-${i}`}
            to={proj.link}
            className={`project-card ${proj.class}`}
          >
            <img src={proj.img} alt={`${proj.name} Project Screenshot`} />
            <div className="project-btn">{proj.name}</div>
          </Link>
        ))}
      </div>
      <div className="view-all-projects-wrapper">
        <a href="/projects" className="view-all-projects-btn">View all projects</a>
      </div>

    </section>
  );
}

export default ProjectsPortfolio;
