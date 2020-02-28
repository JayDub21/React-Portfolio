import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img
              src={require("../img/wanderdog.png")}
              class="portPic"
              alt="Wanderdog"
            />
          </div>

          <div className="col-sm-12 col-lg-6 textBox">
            <p>
              This application draws from public information to obtain free
              trails, camp grounds, and parks for your 4-legged pooch! Also
              provides weather data for your location! As dog owners, we wanted
              to find areas in the US where we can camp/hike with our dogs
              off-leash, so that we can spend quality time with our dogs and
              allow them to explore nature. Clicking on a state will return
              results for locations near you.
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
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img
              src={require("../img/wuphf.png")}
              class="portPic"
              alt="Wanderdog"
            />
          </div>

          <div className="col-sm-12 col-lg-6 textBox">
            <p>
              This application will allow for the creation of a video library to
              house the class recordings for the web developer bootcamp. The
              admin (creator) will submit video links, video titles, and a few
              keywords of the key concepts that were discussed in that day’s
              recording. The non-admin user (student) will access the videos and
              will have the ability to post comments on the individual recording
              pages with questions, comments or helpful links on the subject
              matter. For an API, we are considering displaying Udemy courses or
              even just Google search results based on the keywords that are
              specific to each video.
              <br />
              <a
                href="https://github.com/JayDub21/Project2"
                aria-label="homepage"
              >
                Click here to visit the Repository
              </a>
              <br />
              <a
                href="https://thawing-cove-88374.herokuapp.com/"
                aria-label="homepage"
              >
                Click here to visit the Deployed Site
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
