import React from 'react';
import SetCart from '../../../hooks/SetCart';
import axios from 'axios';
import Swal from 'sweetalert2';

const OrderCart = () => {
  const [cart, refetch] = SetCart()
  const handelDelet = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your Order has been deleted.',
          'success'
        )
        axios.delete(`https://tawsif-shop-server.vercel.app/order/${id}`)
          .then(data => {
            console.log(data.data)
            refetch()
          })
      }
    })
  }
  if (cart.length === 0) {
    return (
      <div className="flex h-screen ">
        <div className="m-auto text-center">
          <h1 className="text-6xl font-semibold text-red-500">Order Not Yet Placed</h1>
          <p className="text-2xl mt-4">Your order has not been placed yet.</p>
          <p className="text-gray-600 mt-2">Please go back to the homepage and place your order.</p>
        </div>
      </div>
    )
  }
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
    <h2 className='text-center text-3xl font-bold'>My Order</h2>
    <h2 className=' text-xl'>Total Price {total}</h2>
    <div>
      {cart.map(item => console.log(item))}
      <div className="overflow-x-auto">
        <table className=" lg:table table-auto lg:w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center space-x-3">
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
                  <span className="badge badge-ghost badge-sm">{item.price}</span>
                </td>
                <td className={`${item.Ispending === 'Accepted' && 'text-green-500 font-semibold'}`}>{item.Ispending}</td>
                <th>
                  {item.Ispending === 'Accepted' ? (
                    <button disabled className="btn btn-circle btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  ) : (
                    <button onClick={() => handelDelet(item._id)} className="btn btn-circle btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
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

export default OrderCart;