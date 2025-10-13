import React, { useEffect, useRef } from "react";
import "../App.css";

const Services = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  // Fade-in animation on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Magnetic effect
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
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
    <section ref={sectionRef} className="services" id="services">
      <div className="services-row">
        <span className="service-item">Web Design.</span>
        <span className="service-item">Digital Marketing.</span>
        <span className="service-item">Branding.</span>
      </div>

      <div className="circle-wrapper">
        <a
          href="https://forms.gle/mxzKKYU8DwUYLU5z6"
          target="_blank"
          rel="noopener noreferrer"
          className="about-circle-btn"
          ref={buttonRef}
        >
          <div className="circle-text">
            Let’s build
            <br />
            something
          </div>
        </a>
      </div>


      <div className="divider" />
    </section>
  );
};

export default Services;
