import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import axios from 'axios';
import './Css/ConfromOrder.css'
const ConfromOrder = () => {
 
  const [axiosSecure] = UseAxiosSecure()
  const { data: carts = [], refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await axiosSecure.get('/confromorder')
      return res.data
    }
  })
  const total = carts.reduce((sum, item) => item.price + sum, 0);
  const handelUpdate = (user) => {
    axios.put(`https://lazy-cyan-donkey-veil.cyclic.app//confromorder/${user._id}`)
      .then(res => {
        console.log(res.data)
        refetch()
        const confrom={
        image:user.image,
        productName:user.productName,
        date:user.date,
        price:user.price,
        userName:user.userName,
        email:user.email,
        phoneNumber:user.phoneNumber,
        city:user.city,
        district:user.district,
        address:user.address,
        category:user.category,

        }
        axios.post('https://lazy-cyan-donkey-veil.cyclic.app/storeOrder',confrom)
        .then(data =>{
          console.log(data.data)
        })
      })
  }


  const handelDelet = (id) => {
    axios.delete(`https://lazy-cyan-donkey-veil.cyclic.app//confromorder/${id}`)
      .then(res => {
        console.log(res.data)
        refetch()
       
      })
  }
  console.log(carts)
  return (
    <div className=''>
    <h2 className='text-center text-4xl'>All Order</h2>
    <h2 className='text-xl'>Total Price {total}</h2>
    <div>
  
      <div className="overflow-x-auto">
        <table className="lg:table table-auto lg:w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Coustomer-Info</th>

              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map(item => (
              <tr key={item._id}>
                <td>
                  <div className="flex lg:flex-row flex-col">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.productName}</div>
                      <div className="text-sm opacity-50">
                        Order Date: <span>{item.date.day}</span>/<span>{item.date.month}</span>/<span>{item.date.year}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Price
                  <br />
                  <span className="badge badge-ghost">{item.price} TK</span>
                </td>
                <td>
                  {item.Ispending === 'pending' ? (
                    <button onClick={() => handelUpdate(item)} className='btn btn-success text-white'>Make Accept</button>
                  ) : (
                    <p className='text-green-600'>Accepted</p>
                  )}
                </td>
                <td>{item.userName} <div>{item.email}</div> <div>{item.phoneNumber}</div></td>
                <td>{item.city} {item.district} {item.address}</td>
                <th>
                  <button onClick={() => handelDelet(item._id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default ConfromOrder;