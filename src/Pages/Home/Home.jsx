import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import AboutProduct from '../AboutProduct/AboutProduct';
import ContactButton from '../../Component/ContactButton';
import Testomonial from '../Testomonial/Testomonial';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
        <AboutProduct></AboutProduct>
        {/* <About></About> */}
        <ContactButton></ContactButton>
        </div>
    );
};

export default Home;