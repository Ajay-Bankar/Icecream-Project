import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className=' mb-2 sm:mb-8'>
    <>
      <Swiper 
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="public/slider/slide1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/slider/slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/slider/slide3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/slider/slide4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
}
