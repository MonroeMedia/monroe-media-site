import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Hero from "./components/Hero";
import Services from "./components/Services";
import LatestClient from "./components/LatestClient";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ProjectsPortfolio from "./components/ProjectsPortfolio";

import EnviousGardens from "./pages/EnviousGardens";
import TysTouch from "./pages/TysTouch";
import CBD from "./pages/CBD";
import Projects from "./pages/Projects";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import H2OsLandscaping from "./pages/H2OsLandscaping";
import Wilsons from "./pages/Wilsons";
import VelvetFM from "./pages/VelvetFM";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.1;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      cursor.style.transform = `translate3d(${cursorX - 18}px, ${cursorY - 18}px, 0)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // 👇 Smooth scroll to #projects when navigating back
  useEffect(() => {
    if (location.hash === "#projects") {
      const section = document.querySelector("#projects");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300); // slight delay to ensure homepage renders first
      }
    }
  }, [location]);

  const HomePage = () => (
    <section className="home-page">
      <Header />
      <Hero />
      <LatestClient />
      <Services />
      <ProjectsPortfolio />
      <Contact />
    </section>
  );

  return (
    <div id="container">
      <div className="custom-cursor"></div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/envious-gardens" element={<EnviousGardens />} />
        <Route path="/tys-touch" element={<TysTouch />} />
        <Route path="/carolina-bud-dispensary" element={<CBD />} />
        <Route path="/h2os-landscaping" element={<H2OsLandscaping />} />
        <Route path="/wilsons" element={<Wilsons />} />
        <Route path="/velvet-fm" element={<VelvetFM />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
