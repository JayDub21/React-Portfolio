import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img
            src={require("../img/wanderdog.png")}
            class="portPic"
            alt="Wanderdog"
          />
        </div>

        <div className="col-sm-12 col-md-6 textBox"></div>
        <p>
          This application draws from public information to obtain free trails,
          camp grounds, and parks for your 4-legged pooch! Also provides weather
          data for your location! As dog owners, we wanted to find areas in the
          US where we can camp/hike with our dogs off-leash, so that we can
          spend quality time with our dogs and allow them to explore nature.
          Clicking on a state will return results for locations near you.
          <br />
          <a
            href="https://github.com/JayDub21/meanLeanFreakGoat"
            aria-label="homepage"
          >
            Click here to visit the Repository
          </a>
          <br />
          <a
            href="https://jaydub21.github.io/meanLeanFreakGoat/"
            aria-label="homepage"
          >
            Click here to visit the Deployed Site
          </a>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
