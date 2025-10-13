import React, { useEffect, useRef } from "react";
import "../App.css";

function About() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
    };

    const reset = () => {
      btn.style.transform = "translate(0, 0) scale(1)";
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className="about-section">
      <a href="/contact" className="about-circle-btn" ref={buttonRef}>
        <div className="circle-text">
          Let’s Build
          <br />
          Something
        </div>
      </a>
    </section>
  );
}

export default About;
