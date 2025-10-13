import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const letters = gsap.utils.toArray(".hero-letter");

    letters.forEach((letter) => {
      const speed = parseFloat(letter.dataset.speed);

      gsap.to(letter, {
        y: () => -2050 * speed,
        x: () => (Math.random() - 0.5) * 60,
        rotation: () => (Math.random() - 0.5) * 30,
        ease: "none",
        scrollTrigger: {
          trigger: "hero-sect-wrapper",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          markers: false,
        },
      });
    });
  }, []);

  const text = "Make a difference with design.";

  return (
    <div className="hero-main-div" id="hero">
        <div className="hero-sect-wrapper">
            <h1 className="hero-text">
                {text.split(" ").map((word, i) => (
                <span key={i} className="hero-word">
                    {word.split("").map((char, j) => (
                    <span
                        key={j}
                        className="hero-letter"
                        data-speed={(Math.random() * 1.2 + 0.8).toFixed(2)}
                    >
                        {char}
                    </span>
                    ))}
                    &nbsp;
                </span>
                ))}
            </h1>
        </div>
    </div>
  );
}

export default Hero;
