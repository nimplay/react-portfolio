import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import Client from '../../img/User.svg'
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const client = [
    {
      img : Client,
      review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: Client,
      review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: Client,
      review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    }
  ];

  return ( 
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Execeptional Work </span>
        <span>From Me.</span>  
      </div>
      <Swiper
       slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      >
        {client.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="img" />
                <span
                style={{
                  color: darkMode ? "white" : "",
                }}
                >{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </div>
   );
}
 
export default Testimonials;