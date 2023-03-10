import React from "react";
import img from "../img/Website Creator-amico (1).png";

export const About = () => {
  return (
    <div className="about" id="about">
      <h2>About Me</h2>
      <p>Why Choose Me?</p>
      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="about-section">
        <div className="img-section">
          <img src={img} alt="" />
        </div>
        <div className="about-text">
          <div className="text-section">
            Full Stack Developer and UI & UX Developer with Letest Technology
            HTML, CSS, Javascript, Node js, Express Js, React Js (React-Redux,
            React-Router, Toolkit), along with a knack of building applications
            with utmost efficiency.
          </div>
          <div className="highlight">
            <ul>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Full Stack End Developer
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Intractive Webpage as per the Design
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                React all feature
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Redux for State Management
              </li>
            </ul>
          </div>
          <div className="about-btn">
            <a className="resume" href="images\SauravResume.pdf" download>
              Resume
            </a>
            <a href="#contact" className="hire-me">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
