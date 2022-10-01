import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import David from '../../img/david.jpeg'
import Mirwil from '../../img/mirwil.jpeg'
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const client = [
    {
      img : David,
      review : "My company has been working with Nimrod Acosta since 2019.  Thanks to that my webpage has evolved in a very positive way through the years. I recently worked with him to update my website. I have been mainly working with Nimrod . We are beyond pleased with Nimrod's impeccable service. He is extremely helpful in guiding us through the whole process. He is very knowledgeable. He pays close attention to details. He is also very patient in training us on how to use the new administration system. Overall, we are very pleased with Nimrod Acosta Web design.",
    },
    {
      img: Mirwil,
      review : "The reliable services of Mr. Nimrod Acosta are vital in my business as an illustrator.  Delegating all the technical (and sometimes tedious for me!) aspects of maintaining my website and online store is a relief, as it allows me to stay focused on my creative work, knowing that everything is in order.",
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
