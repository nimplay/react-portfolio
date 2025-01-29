import React from "react";
import "./Portfolio.css";
import "swiper/css";
import "swiper/css/pagination";
import { themeContext } from "../../Context";
import { useContext } from "react";
import LaboralExperience from "./Laboral-Experience";
import PersonalProjects from "./Personal-Projects";
import Mockups from "./Mockups-Show";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "",
        }}
      >
        Recents Projects
      </span>
      <span className="portfolio-subtitle">Laboral Experience</span>
      <LaboralExperience />
      <span className="portfolio-subtitle">Personal Project</span>
      <PersonalProjects />

      <span className="portfolio-subtitle">Mockups</span>
      <Mockups />
    </div>
  );
};

export default Portfolio;
