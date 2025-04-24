import React from "react";
import "./nav-modal.css";
// import { Link } from "react-router-dom";

export default function NavModal({ isModalVisible, onHideModal }) {
  return (
    <nav className="nav-bar" id="nav-bar" style={{ display: isModalVisible ? "flex" : "none" }}>
      <div className="nav-bar-div">
        <a href="#intro-div" onClick={onHideModal}>
          <button className="nav-btn">Introduction</button>
        </a>
        <a href="#about-me-div" onClick={onHideModal}>
          <button className="nav-btn">About Me</button>
        </a>
        <a href="#my-projects-div" onClick={onHideModal}>
          <button className="nav-btn">Projects</button>
        </a>
        <a href="#contact-div" onClick={onHideModal}>
          <button className="nav-btn">contact</button>
        </a>
      </div>
    </nav>
  );
}
