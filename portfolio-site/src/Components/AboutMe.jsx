import React from "react";
import boat from "../assets/boat.jpg";
import "./about-me.css";

export default function AboutMe() {
  return (
    <section className="about-me-div" id="about-me-div">
      <div className="about-spacer" id="about-spacer"></div>
      <h1 className="about-me-heading">About me</h1>
      <div className="about-me-grid">
        <img
          className="about-me-img"
          src={boat}
          alt="Picture of Mathew Ritchie on a boat and table mountian in the background"
        />
        <p className="about-me-p">
          I live in Hout Bay, Cape Town. I am relatively new to the web developemnt world but
          already love it.
          <br />
          <br />I really enjoy being creative, and solving problems, but most of all I love to
          build, which makes web development perfect for me. I am currently studying at CodeSpace,
          where I am building a foundation in HTML, CSS and JavaScript. This has included working
          with CSS frameworks like Tailwind and JavaScript frame works like REACT.
          <br />
          <br />I am hoping to start a new and Exciting career in the Web Developemt world. I am
          looking for opportunities to learn, grow, and hopefully contribute to something exciting.
        </p>
      </div>
    </section>
  );
}
