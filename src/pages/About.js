import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <img
              src={require("../img/self.jpg")}
              id="selfie"
              alt="Justin Selfie"
            />
          </div>

          <div className="col-md-12" id="aboutText">
            <h3>About Me:</h3>
            <hr />
            <p>
              Currently studying Web Development at the University of Texas.
              With six years of sales and management experience, I have enjoyed
              a wide array of team dynamics taking on many different challenges
              over the years. In my free time I enjoy hiking and photographing
              the Great Outdoors!
              <br />
              <br />
              Email: Justin.Wofford.21@gmail.com
              <br />
              Phone: (325)&nbsp;665-5622
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
