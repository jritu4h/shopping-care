import React from 'react';
import AdminCharts from './AdminCharts';
import {  FaUsers,FaShoppingCart,FaProductHunt} from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
const AdminHome = () => {
    const [axiosSecure]=UseAxiosSecure()
    const {data: status={}}=useQuery({
        queryKey:["status"],
        queryFn:async()=>{
            const res= await axiosSecure.get('/status')
            return res.data;
        }
    })
    return (
        <div>
            <div className=' flex items-center gap-4 justify-center mb-3'>
                <div className=' bg-pink-600 p-3 rounded-lg'>
                   <h2 className=' text-2xl text-white'>Orders</h2>
                    <p className=' text-center font-semibold text-white text-xl flex items-center gap-3 '><FaShoppingCart/> {status.orders}</p>
                </div>
                <div className=' bg-green-600 p-3 rounded-lg'>
                   <h2 className=' text-2xl text-white'>Users</h2>
                    <p className=' text-center font-semibold text-white text-xl flex items-center gap-3'><FaUsers/>{status.users}</p>
                </div>
                <div className=' bg-primary p-3 rounded-lg'>
                   <h2 className=' text-2xl text-white'>Products</h2>
                    <p className=' text-center font-semibold text-white text-xl flex items-center gap-3'><FaProductHunt/>{status.Products}</p>
                </div>
            </div>
       <div className='mt-2'>
       <AdminCharts></AdminCharts>
       </div>
        </div>
    );
};

export default AdminHome;