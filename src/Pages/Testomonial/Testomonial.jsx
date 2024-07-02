import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Modal from './Modal';
import SetControlReview from '../../hooks/SetControlReview';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testomonial = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [AllReview] = SetControlReview()
  console.log(AllReview)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const close=()=>setIsModalOpen(false)

 
  return (
    <div className=' mt-10'>
      <h2 className=' text-4xl text-center font-semibold py-3 uppercase'>Testomonial</h2>
      <>
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
          {AllReview.map(data => <SwiperSlide key={data._id}>
            <div className=" max-h-screen   bg-white border border-gray-200 rounded-lg  ">
              <div className="flex justify-end px-4 pt-4">


              </div>
              <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={data.photo} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
                {
  data.review.length > 10 ? (
    <span className="text-xl text-black text-center">
      {data.review.slice(0, 20)}  <button onClick={()=>setIsModalOpen(true)} className='text-blue-500'>
            See More
          </button>
    </span>
  ) : (
    <span className="text-xl text-black text-center">{data.review}</span>
  )
}

              </div>
            </div>

          </SwiperSlide>)}
          <div className="autoplay-progress" slot="container-end">
          <span viewBox="0 0 48 48" ref={progressCircle}>
           
           </span>
        <span ref={progressContent}></span>
      </div>
        </Swiper>
      </>
      {
  isModalOpen&&<Modal close={close}/>
}

    </div>
  );
};

export default Testomonial;