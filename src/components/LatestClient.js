import React from "react";
import EGVidForSite from "../assets/videos/EGVidForSite.mp4";
import "../App.css";

function LatestClient() {
  return (
    <section className="latest-client-section">
      <div className="latest-client-content">
        {/* Left Column: Video */}
        <div className="latest-client-video-wrapper">
          <video
            className="latest-client-video"
            src={EGVidForSite}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Right Column: Text */}
        <div className="latest-client-text">
        <h2 className="latest-client-heading">
          <span style={{ fontWeight: 400 }}>Latest Project:</span>{" "}
          <strong>Envious Gardens Vape Brand</strong>
        </h2>

          <div className="latest-client-divider"></div>
          <p className="latest-client-description">
            Envious Gardens is an independently owned THC vape pen brand known
            for its sleek design, premium oil quality, and commitment to creative
            expression in every detail.
          </p>
          <a
            href="/envious-gardens"
            target="_blank"
            rel="noopener noreferrer"
            className="latest-client-btn"
          >
            View full project
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestClient;
