import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a href="/about" className="navbar-brand nameTag">
        Justin Wofford
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" ||
                window.location.pathname === "/React-Portfolio/"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </li>
          <Link
            to="/portfolio"
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
            style={{ textDecoration: "none", color: "white" }}
          >
            Portfolio
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
