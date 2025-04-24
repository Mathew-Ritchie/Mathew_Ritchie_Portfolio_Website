import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header.jsx";
import Intro from "../Components/Intro.jsx";
import Footer from "../Components/Footer.jsx";
import AboutMe from "../Components/AboutMe.jsx";
import Projects from "../Components/Projects.jsx";
import NavModal from "../Components/NavModal.jsx";

export default function MainPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Header onToggleModal={toggleModal} />
      <NavModal isModalVisible={isModalVisible} onHideModal={hideModal} />
      <Intro id="intro-div" />
      <AboutMe id="about-me-div" />
      <Projects id="my-projects-div" />
      <Footer id="contact-div" />
    </div>
  );
}
