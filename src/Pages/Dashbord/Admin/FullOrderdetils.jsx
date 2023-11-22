import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';
const FullOrderdetils = () => {
    const item = useLoaderData();
    console.log(item)
    const componentRef = useRef();
    return (
        <div className="overflow-x-auto" >
          <div className=' flex flex-col items-center my-3'>
<ReactToPrint
          trigger={() => {
            
            return <button className='btn btn-primary'>Print <FaPrint/></button>
          }}
          content={() => componentRef.current}
        />
</div>
  <table className="mx-auto" style={{width:'97%'}} ref={componentRef}>
    <thead>
      <tr>
        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Product Name
        </th>
        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Product Price
        </th>
        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Order Date
        </th>
        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Customer Email
        </th>
        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Customer Phone Number
        </th>
        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
          Customer Location
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
          {item.productName}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
         {item.price} TK
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
       <span>{item.date.day}-{item.date.month}-{item.date.year}</span>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
         {item.email}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {item.phoneNumber}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {item.city} {item.district} {item.address}
        </td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>

      
    );
};

export default FullOrderdetils;