import React from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";

import h2osDesktop from "../assets/images/h2os-desktop.png";
import h2osTablet from "../assets/images/h2os-tablet.png";
import h2osMobile from "../assets/images/h2os-mobile.png";

function H2OsLandscaping() {
  return (
    <ProjectsTemplate
      title="H2OS"
      client="H2O’s Landscaping came to us needing the full digital build—from brand identity to a modern, conversion-focused website. They wanted a presence that felt trustworthy and skilled, something that could speak to homeowners and contractors alike while clarifying services and making it easy to book. Beyond the look and feel, they needed a system that could scale: clean information architecture, clear calls-to-action, and the right integrations to streamline operations as demand grew."
      description="We developed H2O’s end-to-end digital ecosystem: brand guidelines, a fast and responsive website, and an SEO framework designed to win local intent searches. We integrated third-party tools to handle quotes and scheduling, then layered on social content and PPC to drive qualified traffic. Today, we continue to manage a successful Google PPC campaign, refining keywords, ad creative, and landing page UX to improve lead quality and lower cost per acquisition over time."
      services="Web Design. SEO. Third-Party Integration. Social Media. PPC Management (Google Ads)."
      desktopImg={h2osDesktop}
      tabletImg={h2osTablet}
      mobileImg={h2osMobile}
    />
  );
}

export default H2OsLandscaping;
