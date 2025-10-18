import React from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";
import cbdDesktop from "../assets/images/cbd-desktop.png";
import cbdTablet from "../assets/images/cbd-tablet.png";
import cbdMobile from "../assets/images/cbd-mobile.png";

function CBD() {
  return (
    <ProjectsTemplate
      title="Carolina Bud Dispensary"
      client="Carolina Bud Dispensary came to us facing a unique challenge in the digital space — as a dispensary, traditional social media advertising options were limited or outright unavailable. They needed a solution that not only showcased their brand but also helped them build and maintain direct relationships with their customers. The goal was to create a site that could communicate their professionalism and authenticity while remaining compliant with online marketing restrictions."
      description="We designed and developed a custom website focused on brand presentation, SEO optimization, and long-term scalability. To help them thrive without social media dependency, we implemented a client database system that allowed them to directly engage with their audience. Additionally, we structured the site with a clear path toward e-commerce integration, paving the way for Carolina Bud Dispensary to expand into online merchandise sales in the future."
      services="Web Design. SEO. E-Commerce Setup."
      desktopImg={cbdDesktop}
      tabletImg={cbdTablet}
      mobileImg={cbdMobile}
    />
  );
}

export default CBD;
