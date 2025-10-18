import React from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";

import velvetDesktop from "../assets/images/velvet-desktop.png";
import velvetTablet from "../assets/images/velvet-tablet.png";
import velvetMobile from "../assets/images/velvet-mobile.png";

function VelvetFM() {
  return (
    <ProjectsTemplate
      title="Velvet FM"
      client="Velvet FM is an indie rock band that came to us looking to establish a cohesive online presence. They needed more than a simple artist page — they wanted a dynamic website that reflected their identity, connected with their audience, and provided a seamless way to sell merchandise. Their vision centered around merging storytelling, music, and commerce into one unified brand experience."
      description="We built Velvet FM’s website from the ground up, complete with a full e-commerce solution powered by WooCommerce. The site integrates with a print-on-demand vendor to automate merch fulfillment, allowing the band to focus entirely on their music and fan engagement. From design and branding to third-party integrations, every element was built to capture the energy of their sound while making the experience frictionless for their fans."
      services="Branding. Web Design. WooCommerce Setup. Third-Party Integrations."
      desktopImg={velvetDesktop}
      tabletImg={velvetTablet}
      mobileImg={velvetMobile}
    />
  );
}

export default VelvetFM;
