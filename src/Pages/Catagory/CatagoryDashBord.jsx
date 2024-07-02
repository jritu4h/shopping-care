import React from 'react';
import { Link, Outlet } from "react-router-dom";



const CatagoryDashBord = () => {
    return (
        <div className="">
            <div className="drawer lg:drawer-open sticky">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pt-16">
                    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">-</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side py-16">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li> <Link to='/category'>Fashion</Link></li>
                        <li>  <Link to='/category/electronics'>Electronics</Link></li>
                        <li><Link to='/category/it products'>It Products</Link></li>
                        <li> <Link to='/category/Cooking'>Cooking</Link></li>
                        <li>  <Link to='/'>Dray Foods</Link></li>
                        <li>  <Link to='/'>Own Products</Link></li>
                        <li> <Link to='/'>Gift Packet</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CatagoryDashBord;
