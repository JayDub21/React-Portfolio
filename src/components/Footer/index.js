import React from "react";
import "./style.css";

function Footer() {
  return (
    <div class="icons">
      <footer class="footer mt-auto py-3">
        <a href="https://github.com/JayDub21" aria-label="homepage">
          <img
            src={require("../../img/ghBlack.png")}
            className="site-logo"
            id="gh"
            alt="GitHub"
            height="30"
            width="30"
          />
        </a>
        <a
          href="https://www.instagram.com/justin_wofford/"
          aria-label="homepage"
        >
          <img
            src={require("../../img/insta.png")}
            className="site-logo"
            id="insta"
            alt="Instagram"
            height="30"
            width="30"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/justin-wofford-72863361/"
          aria-label="homepage"
        >
          <img
            src={require("../../img/linkedIn.png")}
            className="site-logo"
            id="li"
            alt="LinkedIn"
            height="30"
            width="30"
          />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
