import React from 'react';
import contact from '../assets/Image/icon/contact.png';
import contact2 from '../assets/Image/icon/whats app.png';
import contact3 from '../assets/Image/icon/customer-support.png';
import imo from '../assets/Image/icon/imo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
const ContactButton = () => {
    return (
        <div>
 <div className="fixed bottom-4 right-20">
 <div className="dropdown dropdown-top">
  <label tabIndex={0} className="rounded-full">
  <img className=' rounded-full' style={{width:"50px"}} src={contact3}alt="" />
  </label>
  <ul tabIndex={0} className="dropdown-content z-[1] w-[100px]">
    <li>
    <button className="  py-2 px-4 rounded-full">
        <img style={{width:"60px"}} src={contact}alt="" />
      </button>
    </li>
    <li>
    <button className="  py-2 px-4 rounded-full">
        <img className=' rounded-full' style={{width:"70px"}} src={contact2}alt="" />
      </button>
    </li>
    <li>
    <button className="  py-2 px-4 rounded-full">
        <img className=' rounded-full' style={{width:"70px"}} src={imo}alt="" />
      </button>
    </li>
  </ul>
</div>
    </div>

        </div>
    );
};

export default ContactButton;