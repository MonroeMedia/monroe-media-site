import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Explore from "./pages/Explore";
import Clients from "./pages/Clients";
import Services from "./components/Services";
import LatestClient from "./components/LatestClient";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ProjectsPortfolio from "./components/ProjectsPortfolio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.1; // smaller number = more lag (0.06–0.08 is good “ghost” range)

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.transform = `translate3d(${cursorX - 18}px, ${cursorY - 18}px, 0)`; // 36px / 2 offset
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);


  return (
    <div id="container">
      <div className="custom-cursor"></div>

      <section className="home-page">
        <Header />
        <Hero />
        <LatestClient />
        <Services />
        <ProjectsPortfolio />
        <Contact />

      </section>
    </div>
  );
}

export default App;
