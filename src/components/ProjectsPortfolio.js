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
    { class: "cbd", img: cbd, name: "Carolina Bud Dispensary", link: "https://shopcarolinabud.com/" },
    { class: "eg", img: eg, name: "Envious Gardens", link: "https://www.enviousgardens.com/" },
    { class: "h2os", img: h2os, name: "H2O's Landscaping", link: "https://www.h2oslandscaping.com/" },
    { class: "tt", img: tt, name: "Ty's Touch", link: "https://www.tystouchsc.com/" },
    { class: "velvet", img: velvet, name: "Velvet FM Band", link: "https://velvetfmband.com/" },
    { class: "velvet2", img: velvet2, name: "E-commerce Stores", link: "https://velvetfmband.com/apparel/" },
    { class: "wilsons", img: wilsons, name: "Wilson's Wholesale", link: "https://wilsonswholesalecola.com/" },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-row top">
        {projects.slice(0, 4).map((proj) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card ${proj.class}`}
          >
            <img src={proj.img} alt={`${proj.name} Project Screenshot`} />
            <div className="project-btn">{proj.name}</div>
          </a>
        ))}
      </div>

      <div className="projects-row bottom">
        {projects.slice(4).map((proj) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card ${proj.class}`}
          >
            <img src={proj.img} alt={`${proj.name} Project Screenshot`} />
            <div className="project-btn">{proj.name}</div>
          </a>
        ))}
      </div>

      <div className="projects-btn-wrapper">
        <h3 className="projects-btn">Click a project to view</h3>
      </div>
    </section>
  );
}

export default ProjectsPortfolio;
