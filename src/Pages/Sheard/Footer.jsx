import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' mt-4'>
          <footer className="footer p-10 -400 bg-[#FFD208]" >
  <nav>
    <header className="footer-title font-medium">Services</header> 
    <a className="link link-hover font-medium">Branding</a>
    <a className="link link-hover font-medium">Design</a>
    <a className="link link-hover font-medium">Marketing</a>
    <a className="link link-hover font-medium">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title font-medium">Company</header> 
    <a className="link link-hover font-medium">About us</a>
    <a className="link link-hover font-medium">Contact</a>
    <a className="link link-hover font-medium">Jobs</a>
    <a className="link link-hover font-medium">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title font-medium">Legal</header> 
    <a className="link link-hover font-medium">Terms of use</a>
    <a className="link link-hover font-medium">Privacy policy</a>
    <a className="link link-hover font-medium">Cookie policy</a>
    <a className="link link-hover font-medium">Gallery</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;