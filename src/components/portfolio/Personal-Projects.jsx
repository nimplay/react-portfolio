import React from "react";
import "./Portfolio.css";
import SchoolMusic from "../../img/SchoolMusic.png";
import Tetris from "../../img/Tetris.png";
import "swiper/css";
import "swiper/css/pagination";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

const PersonalProjects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="carrusel-section">
      <Carousel>
        <Carousel.Item>
          <div
            className="project-card"
            style={{
              backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
              color: darkMode ? "white" : "",
            }}
          >
            <img
              src={SchoolMusic}
              className="img-boostrap-carrusel"
              alt="img"
            />
            <div className="project-description">
              <span
                style={{
                  backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                  color: darkMode ? "white" : "",
                }}
              >
                School Music
              </span>
              <span>App for Music Learning.</span>
              <span>
                The different practical-theoretical exercises will allow you to
                train progressively and in a fun and entertaining way, while you
                play.
              </span>
              <div className="tech">
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  GML
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  Amazon App Store
                </h3>
              </div>
              <div className="p-buttons">
                <a
                  href="https://www.amazon.com/dp/B07SG6TNSB/ref=apps_sf_sta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button p-btn">Link</button>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="project-card"
            style={{
              backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
              color: darkMode ? "white" : "",
            }}
          >
            <img src={Tetris} className="img-boostrap-carrusel" alt="img" />
            <div className="project-description">
              <span
                style={{
                  backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                  color: darkMode ? "white" : "",
                }}
              >
                Web-Tetris
              </span>
              <span>This project is Tetris game project.</span>
              <span>This is a Tetris game using Javascript Html and Css.</span>
              <div className="tech">
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  CSS
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  HTML
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  JavaScript
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  Github
                </h3>
              </div>
              <div className="p-buttons">
                <a
                  href="https://www.senoragarabato.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button p-btn">Link</button>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default PersonalProjects;
