import React from "react";

import "./projects.css";

import JSL from "../assets/JSL-pic.png";
import SDF from "../assets/SDF-pic.png";

export default function Projects() {
  return (
    <section className="my-projects-div" id="my-projects-div">
      <div className="project-spacer" id="project-spacer"></div>
      <div>
        <h1 className="projects-title">Projects</h1>
        <div id="project-imgs-div">
          <div className="project-img-wrapper">
            <a
              href="https://github.com/Mathew-Ritchie/SDF_Portfolio_Piece_MATRIT24048_FTO1024_B_Mathew-Ritchie_SDF11"
              target="_blank"
            >
              <div className="container">
                <img
                  src={SDF}
                  alt="portfolio piece screen shot"
                  className="image"
                  // style="width: 100%"
                />
                <div className="middle">
                  <div className="text">Click to see my repo</div>
                </div>
              </div>
            </a>
            <p>
              <strong>Bank landing page</strong> <br />
              <br />
              HTML and CSS project
              <br />
              <br />
              This project was my first portfolio assignment at Codespace. It Showcases the use of
              HTML and CSS with the Tailwind framework.
            </p>
          </div>
          <div className="project-img-wrapper">
            <a
              href="https://github.com/Mathew-Ritchie/JSL_Portfolio_Piece_MATRIT24048_FTO2410_B_Mathew--Ritchie_JSL11"
              target="_blank"
            >
              <div className="container">
                <img
                  src={JSL}
                  alt="portfolio piece screen shot"
                  className="image"
                  // style="width: 100%"
                />
                <div className="middle">
                  <div className="text">Click to see my repo</div>
                </div>
              </div>
            </a>
            <p>
              <strong>Agile board app</strong> <br />
              <br />
              JavaScript project
              <br />
              <br />
              This project was my second portfolio assignment at Codespace. It Showcases the use of
              vanilla Javascript to manipulate the DOM, import data and store in on localstorage,
              and edit and delete tasks from the local storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
