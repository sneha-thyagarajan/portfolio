import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import digital1 from "../digital/digital1.jpg";
import digital2 from "../digital/digital2.jpg";
import digital3 from "../digital/digital3.jpg";
import digital4 from "../digital/digital4.jpg";
import digital5 from "../digital/digital5.jpg";
import digital6 from "../digital/digital6.jpg";
import digital7 from "../digital/digital7.jpg";
import digital8 from "../digital/digital8.jpg";
import digital10 from "../digital/digital10.jpeg";

import sketch1 from "../sketches/sketch1.jpg";
import sketch2 from "../sketches/sketch2.jpg";
import sketch3 from "../sketches/sketch3.jpg";
import sketch4 from "../sketches/sketch4.jpg";
import sketch5 from "../sketches/sketch5.jpg";
import sketch6 from "../sketches/sketch6.jpg";
import sketch7 from "../sketches/sketch7.jpg";
import sketch8 from "../sketches/sketch8.jpg";


export default function Art() {
  const digital=[ digital2, digital1,digital10,digital7, digital8,  digital3, digital4, digital5, digital6];
  const sketch=[ sketch2, sketch1, sketch6, sketch3, sketch4, sketch5,  sketch7, sketch8];
  return (
    <div className="arts" id ="arts">
    <h1>Art</h1>
    <div className="artsContainer">
    <h4>Digital Art</h4>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {digital.map((item) => {
        return(
          <SwiperSlide>
          <img src={item} style={{height:"300px", objectFit:"cover", borderRadius:"1rem"}}/>
        </SwiperSlide>
          
        )
      })}
    </Swiper>
    <h4>Sketches</h4>

    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {sketch.map((item) => {
        return(
          <SwiperSlide>
          <img src={item} style={{height:"300px",objectFit:"cover", borderRadius:"1rem"}}/>
        </SwiperSlide>
          
        )
      })}
    </Swiper>
      
    </div>

    </div>
  );
}
