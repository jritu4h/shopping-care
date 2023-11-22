import React from 'react';
import './About.css';
import moment from 'moment';
import ClockMind from '../../Component/ClockMind';
const About = () => {
    return (
     <section className='mx-auto w-11/12 '>
       <div className='paralex pt-12 my-16'>
           <div className='flex justify-center items-center bg-gray-600 bg-opacity-60 lg:pb-20 lg:pt-12 lg:px-36 gap-7 lg:flex-row flex-col'>
          <div>
          <ClockMind></ClockMind>
          </div>
            <div className='text-white p-3'>

            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">About Us</button>
            </div>
           </div>
      </div>
     </section>
    );
};

export default About;