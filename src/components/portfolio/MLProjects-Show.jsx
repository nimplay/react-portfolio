import React from "react";
import "./Portfolio.css";
import FakeStore from "../../img/FakeStore.png";
import CRM from "../../img/CRMDjango.png";
import CRMRefine from "../../img/RefineCRM.png";
import MobileRoR from "../../img/RubyonRailsMobile.png";
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
            <img src={CRMRefine} className="img-boostrap-carrusel" alt="img" />
            <div className="project-description">
              <span
                style={{
                  backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                  color: darkMode ? "white" : "",
                }}
              >
                CRM With Kamban
              </span>
              <span>A CRM built with Refine.</span>
              <span>
                A mockup of a process management system with a kamban included
                and graphic management designed with the most modern quality
                standards..
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
                  GraphQL
                </h3>
                <h3
                  className="tech-name"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "white",
                    color: darkMode ? "white" : "",
                  }}
                >
                  AntDesing
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
              </div>
              <div className="p-buttons">
                <a
                  href="https://github.com/nimplay/Refine-CRM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button p-btn">Repo</button>
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
            <img src={FakeStore} className="img-boostrap-carrusel" alt="img" />
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
                An Angular-based mockup of an e-commerce store showcasing a
                modern design and dynamic functionality, including product
                listing, cart management, and responsive layout.
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
            <img src={MobileRoR} className="img-boostrap-carrusel" alt="img" />
            <div className="project-description">
              <span
                style={{
                  backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                  color: darkMode ? "white" : "",
                }}
              >
                Mobile social
              </span>
              <span>Ruby on rails mobile mockup.</span>
              <span>
                A basic Mobile mockup for deploy a Ruby on Rails app into
                Android studio for demostrate skill in mobile aplications.
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
                  Android Studio
                </h3>
              </div>
              <div className="p-buttons">
                <a
                  href="https://github.com/nimplay/mobile-ruby-social"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button p-btn">Repo</button>
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
                Basic CRM
              </span>
              <span>This is a Django CRM.</span>
              <span>
                A Django-based CRM mockup that showcases a modern design and
                dynamic functionality, to demonstrate skills in the framework.
              </span>
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
                  <button className="button p-btn">Repo</button>
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
