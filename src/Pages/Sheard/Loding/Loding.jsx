import React from 'react';
import './Loding.css'
import logo from '../../../assets/Image/icon/logo.png';
const Loding = () => {
    return (
        <div>
    <div className=" min-h-screen flex items-center justify-center">
     <div className=' flex flex-col items-center'>
     <img style={{width:'100px'}} src={logo} alt="" />
      <h2 className=' text-xl font-semibold'>Foronce.com.bd</h2>
     </div>
    </div>
        </div>
    );
};

export default Loding;