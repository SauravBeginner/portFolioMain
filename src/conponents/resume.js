import React from "react";
import { useEffect } from "react";
const Resume = () => {
  useEffect(() => {
    let list = document.querySelectorAll(".left a");
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active-link";
      };
    }
  }, []);

  return (
    <div id="resume" className="resume-section">
      <h2>Resume</h2>

      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="main-resume">
        <div className="left">
          <a href="#first" className="active-link">
            <b></b>
            <b></b>
            <i className="fa-solid fa-graduation-cap"></i> Education
          </a>
          <a href="#second">
            <b></b>
            <b></b>
            <i className="fa-solid fa-laptop"></i> Programing Skills
          </a>
          <a href="#third">
            <b></b>
            <b></b>
            <i className="fa-solid fa-chart-column"></i> Project
          </a>
          <a href="#forth">
            <b></b>
            <b></b>
            <i className="fa-solid fa-clock-rotate-left"></i> Work History
          </a>
        </div>
        <div className="right">
          <div id="first">
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> MERN Stack
                  Developer
                </p>
                <p className="time">2022-2023</p>
              </div>
              <p className="type">Coding Shuttle</p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> Web Development
                </p>
                <p className="time">2022-2022</p>
              </div>
              <p className="type">Internshala Trainings</p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> B.Tech
                </p>
                <p className="time">2015-2019</p>
              </div>
              <p className="type">
                B.P. Poddar Institute Of ManageMent & Technology
              </p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> Higher Secondary
                </p>
                <p className="time">2017-2019</p>
              </div>
              <p className="type">WBCHSE</p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> Secondary
                </p>
                <p className="time">2017</p>
              </div>
              <p className="type">WBBSE</p>
            </div>
          </div>
          <div id="second">
            <div className="skill">
              <p>
                <i className="fa-solid fa-circle-dot"></i> React
              </p>
              <div className="p-bar">
                <div style={{ width: "90%" }} className="react"></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i className="fa-solid fa-circle-dot"></i> Javascript
              </p>
              <div className="p-bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i className="fa-solid fa-circle-dot"></i> Css
              </p>
              <div className="p-bar">
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i className="fa-solid fa-circle-dot"></i> Html
              </p>
              <div className="p-bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i className="fa-solid fa-circle-dot"></i> Node Js
              </p>
              <div className="p-bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
          <div id="third">
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> React Portfollio
                  Website
                </p>
                <p className="time">2022</p>
              </div>
              <p className="type">React Js, Html, Css, Js</p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> E-commerce website
                  with cart feature
                </p>
                <p className="time">2022</p>
              </div>
              <p className="type">
                React Js (Redux, Router, Hooks), Html, Css, Js
              </p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> weather app using
                  Api
                </p>
                <p className="time">2022</p>
              </div>
              <p className="type">React Js, API, HTml, Css, Js</p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i> Food delivery
                  website with React Router
                </p>
                <p className="time">2022</p>
              </div>
              <p className="type">React Router, Html, Css, Js</p>
            </div>
          </div>
          <div id="forth">
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i>Software Engineer
                </p>
                <p className="time">2021-2022</p>
              </div>
              <p className="type">Rupeek Fintech</p>
            </div>
            <div className="edu">
              <div className="edu-name">
                <p>
                  <i className="fa-solid fa-circle-dot"></i>Software Engineer
                </p>
                <p className="time">2022-Present</p>
              </div>
              <p className="type">Oracle India Pvt Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
