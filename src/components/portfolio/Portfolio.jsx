import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import SchoolMusic from '../../img/SchoolMusic.png';
import Tetris from '../../img/Tetris.png';
import Webapp from '../../img/webapp.png';
import Poke from '../../img/poke.png';
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
            <img src={Webapp} alt="img" />
            <div className="project-description">
            <span style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }} >Webapp</span>
            <span>
              Streaming platform TV shows, and more.
            </span>
            <span>This project is the Microverse's project.
              Its a web application based on an external API
              tvmaze that shows list of movies which can be liked and
              commented. We selected this API that provides data about
              Movies.</span>
              <div className="tech">
                <h3 className="tech-name">HTML</h3>
                <h3 className="tech-name">CSS</h3>
                <h3 className="tech-name">JavaScript</h3>
                <h3 className="tech-name">Webpack</h3>
                <h3 className="tech-name">API'S</h3>
                <h3 className="tech-name">GitHub</h3>
              </div>
            <div className="p-buttons" >
              <a href="https://github.com/nimplay/api-webapp">
                <button className="button p-btn">Repo</button>
              </a>
              <a href="https://nimplay.github.io/api-webapp/dist/">
                <button className="button p-btn">Live</button>
              </a>

            </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-card">
            <img src={Poke} alt="pokeapi" />
            <div className="project-description">
            <span style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }} >PokeApi</span>
            <span>
            Apis consumption using React & Redux
            </span>
            <span>This project is the Microverse's Numeric Webapp
              project. Its a web application for use react and
              redux that is a simple app that use an API .</span>
              <div className="tech">
                <h3 className="tech-name">API'S</h3>
                <h3 className="tech-name">React</h3>
                <h3 className="tech-name">Redux</h3>
                <h3 className="tech-name">GitHub</h3>
              </div>
            <div className="p-buttons" >
              <a href="https://github.com/nimplay/metrics-webapp">
                <button className="button p-btn">Repo</button>
              </a>
              <a href="https://tourmaline-crisp-2b65af.netlify.app/">
                <button className="button p-btn">Live</button>
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
              <a href="https://github.com/nimplay/tetris">
                <button className="button p-btn">Repo</button>
              </a>
              <a href="https://nimplay.github.io/tetris/">
                <button className="button p-btn">Live</button>
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
                <h3 className="tech-name">Google Play Store</h3>
              </div>
            <div className="p-buttons" >
              <a href="https://play.google.com/store/apps/details?id=com.nimplay.School_music&hl=en&gl=US">
                <button className="button p-btn">Repo</button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nimplay.School_music&hl=en&gl=US">
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
