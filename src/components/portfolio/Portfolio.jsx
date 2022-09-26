import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import Calculator from '../../img/Calculator.png';
import Leaderboard from '../../img/Leaderboard.png';
import SchoolMusic from '../../img/SchoolMusic.png';
import Tetris from '../../img/Tetris.png';
import TodoList from '../../img/TodoList.png';
import Webapp from '../../img/webapp.png';
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
        spaceBetween={20}
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
      }} >Hola</span>
            <span>papi</span>
            <span>description</span>
            <div className="p-buttons" >
              <button className="button">repo</button>
              <button className="button">live</button>
            </div>
            </div>
            
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={SchoolMusic} alt="img" />
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Tetris} alt="img" />
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={TodoList} alt="img" />
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Calculator} alt="img" />
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Leaderboard} alt="img" />
          </div>
        </SwiperSlide>        
      </Swiper>
    </div>
   );
}
 
export default Portfolio;