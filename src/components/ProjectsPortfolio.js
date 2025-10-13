import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

// Import your images
import cbd from "../assets/images/cbd-screenshot.png";
import eg from "../assets/images/eg-screenshot.png";
import h2os from "../assets/images/h2os-screenshot.png";
import tt from "../assets/images/tt-screenshot.png";
import velvet from "../assets/images/velvet-screenshot.png";
import velvet2 from "../assets/images/velvet2-screenshot.png";
import wilsons from "../assets/images/wilsons-screenshot.png";

function ProjectsPortfolio() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".projects-row.top", {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".projects-row.bottom", {
      xPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const projects = [
    { class: "cbd", img: cbd, name: "Carolina Bud Dispensary", link: "#" },
    { class: "eg", img: eg, name: "Envious Gardens", link: "#" },
    { class: "h2os", img: h2os, name: "H2O's Landscaping", link: "#" },
    { class: "tt", img: tt, name: "Ty's Touch", link: "#" },
    { class: "velvet", img: velvet, name: "Velvet FM Band", link: "#" },
    { class: "velvet2", img: velvet2, name: "Velvet FM Film", link: "#" },
    { class: "wilsons", img: wilsons, name: "Wilson's Wholesale", link: "#" },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-row top">
        {projects.slice(0, 4).map((proj) => (
          <div key={proj.name} className={`project-card ${proj.class}`}>
            <img src={proj.img} alt={`${proj.name} Project Screenshot`} />
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-btn">
              {proj.name}
            </a>
          </div>
        ))}
      </div>

      <div className="projects-row bottom">
        {projects.slice(4).map((proj) => (
          <div key={proj.name} className={`project-card ${proj.class}`}>
            <img src={proj.img} alt={`${proj.name} Project Screenshot`} />
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-btn">
              {proj.name}
            </a>
          </div>
        ))}
      </div>

      <div className="projects-btn-wrapper">
        <a href="/projects" className="projects-btn">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default ProjectsPortfolio;
