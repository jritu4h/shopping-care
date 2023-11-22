import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import bannerimg1 from '../../assets/Image/banner/banner1.jpg'
import bannerimg2 from '../../assets/Image/banner/banner2.jpg'
const Banner = () => {
  

    return (
        <div className=' py-16'>
         <Carousel>
                <div>
                <img src={bannerimg1} />
                </div>
                <div>
                <img src={bannerimg2} />
                </div>
                <div>
                <img src={bannerimg1} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;