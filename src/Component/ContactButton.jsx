import React from 'react';
import contact from '../assets/Image/icon/contact.png';
import contact2 from '../assets/Image/icon/whats app.png';
import contact3 from '../assets/Image/icon/customer-support.png';
import imo from '../assets/Image/icon/imo.png';
const ContactButton = () => {
    return (
<div className=' fixed bottom-4 lg:right-8 right-8 z-10'>
<div class="relative w-full h-80">
  <div class="absolute bottom-0 right-0">
    <div class="group">
      <button
        class="relative h-12 max-h-[48px] w-12 max-w-[48px] select-none overflow-hidden rounded-full bg-gray-500 text-center align-middle font-sans text-sm font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50  disabled:shadow-none"
        type="button">
          <img src={contact3} alt="" />
      </button>
      <div
        class="absolute top-[-173px] left-[-4px] hidden w-max  flex-col items-center gap-1 p-0.5 group-hover:flex ">
        <div data-projection-id="1">
          <button
            class="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border border-blue-gray-50 bg-white p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100">
             <img style={{ width: "40px" }} src={contact} alt="" />
          </button>
        </div>
        <div data-projection-id="2">
          <button
            class="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border border-blue-gray-50 bg-white p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100">
            <img className='rounded-full' style={{ width: "40px" }} src={contact2} alt="" />
          </button>
        </div>
        <div data-projection-id="3">
          <button
            class="m-0.5 flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1 rounded-full border border-blue-gray-50 bg-white p-1 font-normal transition-transform duration-300 ease-in-out hover:scale-110 focus:scale-110 active:scale-100">
             <img className='rounded-full' style={{ width: "40px" }} src={imo} alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default ContactButton;