import React, { useState } from 'react';
import Testomonial from './Testomonial';

const Modal = ({close}) => {
 return(
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero reiciendis pariatur, eum perspiciatis assumenda iste quo numquam quod deleniti consequuntur quasi? Quo exercitationem eos aspernatur deserunt blanditiis, nulla hic?</p>
    <button className='btn' onClick={close}>Close</button>
   </div>
 );
   
};

export default Modal;