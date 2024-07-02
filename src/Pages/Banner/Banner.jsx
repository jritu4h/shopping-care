import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import bannerimg1 from '../../assets/Image/banner/1.jpg'
import bannerimg2 from '../../assets/Image/banner/2.jpg'
import bannerimg3 from '../../assets/Image/banner/3.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

    return (
       
         <div className=' py-[78px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-[500px]' src={bannerimg1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px]' src={bannerimg2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px]' src={bannerimg3} alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <span viewBox="0 0 48 48" ref={progressCircle}>
           
          </span>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
        
    );
};

export default Banner;