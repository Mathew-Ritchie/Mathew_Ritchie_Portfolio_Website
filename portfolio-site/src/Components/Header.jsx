import React from "react";
import "./header.css";
import codingLogoDark from "../assets/coding-logo-dark.png";

export default function Header({ onToggleModal }) {
  return (
    <header className="header-container" id="header-container">
      <div className="header-div">
        <img
          className="header-img"
          src={codingLogoDark}
          alt="logo showing computer outline with coding tags on the screen."
        />
        <button className="header-nav-btn" id="header-nav-btn" onClick={onToggleModal}>
          ☰
        </button>
      </div>
    </header>
  );
}
