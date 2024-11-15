import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import SchoolMusic from '../../img/SchoolMusic.png';
import Tetris from '../../img/Tetris.png';
import ImmilandScreem from '../../img/ImmilandScreem.png';
import Senoragarabato from '../../img/senoragarabato.png';
import 'swiper/css';
import "swiper/css/pagination";
import { themeContext } from '../../Context';
import { useContext } from 'react';

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
      >Recents Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="project-card">
            <img src={ImmilandScreem} alt="img" />
            <div className="project-description">
            <span style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }} >Immiland</span>
            <span>
            Immigration process management platform.
            </span>
            <span>Project carried out for a Canadian immigration company.
              Automated management of visa processes, translations, internal messaging, immigration queries,
              integration with multiple management platforms.</span>
              <div className="tech">
                <h3 className="tech-name">React</h3>
                <h3 className="tech-name">Tailwind</h3>
                <h3 className="tech-name">NestJs</h3>
                <h3 className="tech-name">API'S</h3>
              </div>
            <div className="p-buttons" >
              <a href="https://immiland.app" target='_blank' rel='noreferrer'>
                <button className="button p-btn">Link</button>
              </a>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
            <img src={Senoragarabato} alt="img" />
            <div className="project-description">
            <span style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }} >Señora Garabato</span>
            <span>
            Illustration | Character Design | Animation
            </span>
            <span>Personal portfolio and portraits store for a talented Venezuelan illustrator.</span>
              <div className="tech">
                <h3 className="tech-name">Ruby on Rails</h3>
                <h3 className="tech-name">AWS</h3>
              </div>
            <div className="p-buttons" >
              <a href="https://www.senoragarabato.com" target='_blank' rel='noreferrer'>
                <button className="button p-btn">Link</button>
              </a>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
            <img src={SchoolMusic} alt="img" />
            <div className="project-description">
            <span style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }} >School Music</span>
            <span>
              App for Music Learning.
            </span>
            <span>
               Join us in the adventure of learning to read music.
               The different practical-theoretical exercises will
               allow you to train progressively and in a fun and
               entertaining way, while you play.
            </span>
              <div className="tech">
                <h3 className="tech-name">GML</h3>
                <h3 className="tech-name">Amazon App Store</h3>
              </div>
            <div className="p-buttons" >
              <a href="https://www.amazon.com/dp/B07SG6TNSB/ref=apps_sf_sta" target='_blank' rel='noreferrer'>
                <button className="button p-btn">Link</button>
              </a>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card">
            <img src={Tetris} alt="img" />
            <div className="project-description">
            <span style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }} >Web-Tetris</span>
            <span>
            This project is Tetris game project.
            </span>
            <span>This is a Tetris game using Javascript Html and Css.<br/>
            Its a web application for improve my portfolio.
            </span>
              <div className="tech">
                <h3 className="tech-name">HTML</h3>
                <h3 className="tech-name">CSS</h3>
                <h3 className="tech-name">JavaScript</h3>
                <h3 className="tech-name">GitHub</h3>
              </div>
            <div className="p-buttons" >
              <a href="https://github.com/nimplay/tetris" target='_blank' rel='noreferrer'>
                <button className="button p-btn">Repo</button>
              </a>
              <a href="https://nimplay.github.io/tetris/" target='_blank' rel='noreferrer'>
                <button className="button p-btn">Live</button>
              </a>
            </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
   );
}

export default Portfolio;
