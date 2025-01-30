import React from "react";
import "./Portfolio.css";
import FakeStore from "../../img/FakeStore.png";
import CRM from "../../img/CRMDjango.png";
import "swiper/css";
import "swiper/css/pagination";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

const Muckups = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
      <section className="carrusel-section">
        <Carousel interval={null}>
          <Carousel.Item>
            <div
              className="project-card"
              style={{
                backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                color: darkMode ? "white" : "",
              }}
            >
              <img
                src={FakeStore}
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
                  Fake Store Api
                </span>
                <span>A simulation of a real store.</span>
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
                    Angular
                  </h3>
                  <h3
                    className="tech-name"
                    style={{
                      backgroundColor: darkMode ? "#1b1b1b" : "white",
                      color: darkMode ? "white" : "",
                    }}
                  >
                    Flowbite
                  </h3>
                  <h3
                    className="tech-name"
                    style={{
                      backgroundColor: darkMode ? "#1b1b1b" : "white",
                      color: darkMode ? "white" : "",
                    }}
                  >
                    Tailwind
                  </h3>
                </div>
                <div className="p-buttons">
                  <a
                    href="https://angular-store-muckup.netlify.app/store"
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
              <img src={CRM} className="img-boostrap-carrusel" alt="img" />
              <div className="project-description">
                <span
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                    color: darkMode ? "white" : "",
                  }}
                >
                  Basic CRM Django
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
                    Django
                  </h3>
                  <h3
                    className="tech-name"
                    style={{
                      backgroundColor: darkMode ? "#1b1b1b" : "white",
                      color: darkMode ? "white" : "",
                    }}
                  >
                    Python
                  </h3>
                  <h3
                    className="tech-name"
                    style={{
                      backgroundColor: darkMode ? "#1b1b1b" : "white",
                      color: darkMode ? "white" : "",
                    }}
                  >
                    Boostrap
                  </h3>
                  <h3
                    className="tech-name"
                    style={{
                      backgroundColor: darkMode ? "#1b1b1b" : "white",
                      color: darkMode ? "white" : "",
                    }}
                  >
                    MySQL
                  </h3>
                </div>
                <div className="p-buttons">
                  <a
                    href="https://github.com/nimplay/jdangoProject"
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

  export default Muckups;
