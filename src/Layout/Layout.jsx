import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Pages/Sheard/Header';
import Footer from '../Pages/Sheard/Footer';
import Loading from '../Pages/Sheard/Loding/Loding';
const Layout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
           setLoading(false) 
        }, 2000);
    },[])
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login'); 
    return (
        <div>
            {
                loading?<Loading></Loading>:<div>
                {noHeaderFooter|| <Header></Header>}
                 <div className='min-h-screen'>
                 <Outlet></Outlet>
                 </div>
                 {noHeaderFooter||<Footer></Footer>}
             </div>
            }
        </div>
    );
};

export default Layout;