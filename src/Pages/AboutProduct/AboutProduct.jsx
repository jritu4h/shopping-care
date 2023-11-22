import React from 'react';
import SetProduct from '../../hooks/SetProduct';
import AboutSet from './AboutSet';
import { Link } from 'react-router-dom';
import Loding from '../Sheard/Loding/Loding';
const AboutProduct = () => {
    const [Product,,loading]=SetProduct()
    const menu=Product.filter(item => item.category ==='fashion')
   
    if (loading) {
      return <Loding></Loding>
    }
    return (
       <div className='mx-auto w-11/12'>
        <h2 className=' text-4xl text-center font-semibold py-3 uppercase'>fashion</h2>
         <div className=' grid lg:grid-cols-3 gap-5 mt-2'>
           {
            menu.map(item => console.log(item))
           } 
           {
            menu.map(item => <AboutSet item={item} key={item._id}></AboutSet>)
           } 
        </div>
<p className='text-center mt-3'><Link to='/allproducts'><button className='btn btn-success text-white'>Our All Product</button></Link></p>
       
       </div>
    );
};

export default AboutProduct;