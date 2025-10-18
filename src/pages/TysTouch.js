import React from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";
import tyDesktop from "../assets/images/ty-desktop.png";
import tyTablet from "../assets/images/ty-tablet.png";
import tyMobile from "../assets/images/ty-mobile.png";

function TysTouch() {
  return (
    <ProjectsTemplate
      title="Ty’s Touch"
      client="Ty’s Touch came to us with a simple goal — to finally have a website that reflected the quality and care behind her work. Her previous site, built by a family member, didn’t do her justice. It lacked the structure, design, and personality that make her business shine. Ty wanted something modern, clean, and trustworthy — a site that could grow with her brand and feel like home for both new and returning clients. Our objective was to capture the warmth and professionalism of her studio while giving her the functionality and polish she deserved."
      description="Working closely with Ty, we rebuilt her digital foundation from the ground up. The new site integrates seamlessly with a third-party vendor system that’s widely used in the hairstylist industry, allowing her to manage bookings and showcase services effortlessly. We refined the layout for clarity, improved mobile responsiveness, and implemented SEO best practices to help her stand out in a competitive market. The finished product is an elegant and intuitive experience that mirrors the artistry of her work — a digital reflection of her craft, ready to attract and retain loyal clients for years to come."
      services="Web Design. SEO. Third-Party Integration. Digital Optimization."
      desktopImg={tyDesktop}
      tabletImg={tyTablet}
      mobileImg={tyMobile}
    />
  );
}

export default TysTouch;
