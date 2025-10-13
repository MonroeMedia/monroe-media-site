import React from 'react';

function Explore({ className }) {
  return (
    <div className={`explore-main-div ${className}`} id="explore">
      <div className="explore-headings">
        <h2 className="explore-clients-button sticky-clients">CLIENTS<sup>1</sup></h2>
        <h2 className="explore-services-button">SERVICES<sup>2</sup></h2>
        <h2 className="explore-about-button">ABOUT<sup>3</sup></h2>
        <h2 className="explore-contact-button">CONTACT<sup>4</sup></h2>
      </div>
    </div>
  );
}

export default Explore;
