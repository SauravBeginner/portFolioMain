import React from "react";

const Project = () => {
  return (
    <div id="project">
      <h2>Project</h2>
      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="m-project">
        <div className="project-box">
          <img src="images\20221225_125210_0000.png" alt="" />
          <p>Social Media React APP with Node</p>
          <div className="p-button">
            <a
              className="github"
              href="https://github.com/SauravBeginner/instaCLient"
            >
              Github
            </a>
            <a className="live" href="https://insta-client.netlify.app/">
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src="images\20221225_125708_0000.png" alt="" />
          <p>Live Weather app with API</p>
          <div className="p-button">
            <a
              className="github"
              href="https://github.com/SauravBeginner/weatherApp"
            >
              Github
            </a>
            <a className="live" href="https://weatheradunia.netlify.app/">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
