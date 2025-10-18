import React from "react";
import ProjectsTemplate from "../components/ProjectsTemplate";
import egDesktop from "../assets/images/eg-screenshot.png";
import egTablet from "../assets/images/eg-tablet-screenshot.png";
import egMobile from "../assets/images/eg-mobile-screenshot.png";

function EnviousGardens() {
  return (
    <ProjectsTemplate
      title="Envious Gardens"
      client="Envious Gardens came to life as more than just a vape brand — it was a vision to create an identity that felt elevated, immersive, and rooted in narrative. The founders wanted to stand out in an oversaturated market, not by shouting louder, but by building a brand that spoke through its design, tone, and story."
      description="In the end, Envious Gardens became more than a product line — it became a digital experience. The site serves as both a storefront and a storybook, blending the art of branding with the science of search, and setting the tone for what a modern lifestyle brand can feel like online."
      services="Web Design. Branding."
      desktopImg={egDesktop}
      tabletImg={egTablet}
      mobileImg={egMobile}
    />
  );
}

export default EnviousGardens;
