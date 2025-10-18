import React from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";

import wilsonsDesktop from "../assets/images/wilsons-desktop.png";
import wilsonsTablet from "../assets/images/wilsons-tablet.png";
import wilsonsMobile from "../assets/images/wilsons-mobile.png";

function Wilsons() {
  return (
    <ProjectsTemplate
      title="Wilson’s Nursery"
      client="Wilson’s Nursery has been a trusted name in the community for over three decades, known for their deep horticultural knowledge and commitment to quality. Despite their strong reputation, their digital presence hadn’t evolved with the times. They needed a professional, updated website that reflected their legacy while making it easier for customers to explore services, seasonal products, and contact information."
      description="We designed and developed a website that brought Wilson’s heritage online—clean, mobile-friendly, and optimized for both new and returning customers. Alongside the redesign, we handled SEO implementation to improve search visibility and structured their social media presence to help connect with younger audiences and returning clients alike. While the social campaign was launched primarily to establish their digital footprint, the foundations remain in place to support future growth and engagement."
      services="Web Design. SEO. Social Media Setup."
      desktopImg={wilsonsDesktop}
      tabletImg={wilsonsTablet}
      mobileImg={wilsonsMobile}
    />
  );
}

export default Wilsons;
