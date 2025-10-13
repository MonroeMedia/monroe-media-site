import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const magneticRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    const strength = 1.5;

    const handleMove = (e, el) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    };

    const reset = (el) => {
      el.style.transform = "translate(0, 0)";
    };

    const elements = magneticRefs.current.filter(Boolean);

    elements.forEach((el) => {
      const moveHandler = (e) => handleMove(e, el);
      const leaveHandler = () => reset(el);
      el._moveHandler = moveHandler;
      el._leaveHandler = leaveHandler;
      el.addEventListener("mousemove", moveHandler);
      el.addEventListener("mouseleave", leaveHandler);
    });

    return () => {
      elements.forEach((el) => {
        if (!el) return;
        el.removeEventListener("mousemove", el._moveHandler);
        el.removeEventListener("mouseleave", el._leaveHandler);
      });
    };
  }, []);

  // Detect background brightness for menu button contrast
  useEffect(() => {
    const checkBackground = () => {
      const el = document.elementFromPoint(window.innerWidth - 50, 50);
      if (!el) return;
      const bg = window.getComputedStyle(el).backgroundColor;
      const rgb = bg.match(/\d+/g)?.map(Number);
      if (rgb) {
        const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        setIsDarkBg(brightness < 128);
      }
    };
    window.addEventListener("scroll", checkBackground);
    checkBackground();
    return () => window.removeEventListener("scroll", checkBackground);
  }, []);

  const menuItems = [
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header className="header">
      {/* Left Logo */}
      <div
        ref={(el) => (magneticRefs.current[0] = el)}
        className="nav-item magnetic-item logo"
      >
        <span className="logo-symbol">&lt;/&gt;</span> Monroe Media
      </div>

      {/* Desktop / Mobile Nav */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, i) => (
          <a
            key={item.name}
            ref={(el) => (magneticRefs.current[i + 1] = el)}
            href={item.href}
            className="nav-item magnetic-item"
          >
            {item.name}
          </a>
        ))}
        <a
          href="mailto:eddiemonroemedia@gmail.com?subject=Inquiry%20from%20Monroe%20Media%20Website"
          className="nav-item contact-link magnetic-item"
        >
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`menu-button ${isDarkBg ? "light" : "dark"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
      </button>
    </header>
  );
};

export default Header;
