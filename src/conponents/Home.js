import React, { useEffect, useState } from "react";
import { ReactTypical } from "@deadcoder0904/react-typical";

const Home = () => {
  return (
    <div className="home" id="home">
      {/* <div className="blur"></div>
<div className="blur-2"></div> */}
      <div className="home-left">
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/SauravBeginner">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saurav-kundu-0b06211ba/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/7003789409?">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="name">
          <p>
            Hello, I'M <span>Saurav Kundu</span>
          </p>
        </div>
        <div className="text">
          <span>
            <h1>
              <ReactTypical
                steps={["React Developer", 500, "Full Stack Developer", 500]}
                loop={Infinity}
                wrapper="h5"
              />
            </h1>
          </span>
        </div>
        {/* <div className="home-btn"> */}
        <a className="resume" href="images\SauravResume.pdf" download>
          Resume
        </a>
        {/* </div> */}
      </div>
      <div className="home-right">
        <div className="pic">
          <img
            className="pro-pic"
            src="https://media.licdn.com/dms/image/C5603AQEpWuzEflDWDQ/profile-displayphoto-shrink_200_200/0/1616058627230?e=1678924800&v=beta&t=Ov0JvP0wCyQYW7N-fDxqRfn0TthqNnZSF-EDl_1O_gg"
            alt=""
          />
          <div className="circle">
            <span className="one">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355"
                alt=""
              />
            </span>
            <span className="two">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
                alt=""
              />
            </span>
            <span className="three">
              <img
                src="https://cdn.cdnlogo.com/logos/j/69/javascript.svg"
                alt=""
              />
            </span>
            <span className="four">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
