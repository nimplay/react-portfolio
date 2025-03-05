import React from "react";
import "./Portfolio.css";
import ImmilandScreem from "../../img/ImmilandScreem.png";
import Senoragarabato from "../../img/senoragarabato.png";
import Junior from "../../img/Junior.png";
import Canaway from "../../img/CanawayCard.png";
import Microverse from "../../img/MicroverseCard.png";
import "swiper/css";
import "swiper/css/pagination";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

const LaboralExperience = () => {
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
              src={ImmilandScreem}
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
                Immiland
              </span>
              <span>Immigration process management platform.</span>
              <span>
                Project carried out for a Canadian immigration company.
                Automated management of visa processes.
              </span>
              <div className="tech">
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  React
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  NestJs
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
                  PostgresQL
                </h3>
              </div>
              <div className="p-buttons">
                <a href="https://immiland.app" target="_blank" rel="noreferrer">
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
            <img src={Canaway} className="img-boostrap-carrusel" alt="img" />
            <div className="project-description">
              <span
                style={{
                  backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                  color: darkMode ? "white" : "",
                }}
              >
                Canaway Academy
              </span>
              <span>Gamification of educational content .</span>
              <span>
                Improve the virtual class environment and improve user
                experiences for improving learning English skill.
              </span>
              <div className="tech">
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  Ruby on Rails
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
              </div>
              <div className="p-buttons">
                <a
                  href="https://canaway.com/"
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
            <img src={Microverse} className="img-boostrap-carrusel" alt="img" />
            <div className="project-description">
              <span
                style={{
                  backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                  color: darkMode ? "white" : "",
                }}
              >
                Microverse
              </span>
              <span>
                Fullstack Develop.
              </span>
              <span>
                Proposed improvements to code organization to improve code
                quality and overall performance in more than 20 projects, using
                code clean best practices.
              </span>
              <div className="tech">
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  RoR
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  React
                </h3>

                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  PostgresQL
                </h3>
              </div>
              <div className="p-buttons">
                <a
                  href="https://www.microverse.org/"
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
            <img
              src={Senoragarabato}
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
                Señora Garabato
              </span>
              <span>Illustration | Character Design | Animation</span>
              <span>
                Personal portfolio and portraits store for a talented Venezuelan
                illustrator.
              </span>
              <div className="tech">
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  RoR
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  Astro
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  AWS
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
        <Carousel.Item>
          <div
            className="project-card"
            style={{
              backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
              color: darkMode ? "white" : "",
            }}
          >
            <img src={Junior} className="img-boostrap-carrusel" alt="img" />
            <div className="project-description">
              <span
                style={{
                  backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                  color: darkMode ? "white" : "",
                }}
              >
                Junior Serrano Portfolio
              </span>
              <span>Musician | Saxophonist | Production</span>
              <span>
                Personal portfolio and portraits store for a talented Venezuelan
                illustrator.
              </span>
              <div className="tech">
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
              </div>
              <div className="p-buttons">
                <a
                  href="https://nimplay.github.io/my-portfolio/"
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

export default LaboralExperience;
