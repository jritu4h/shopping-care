import React from 'react';
import SetProduct from '../../../hooks/SetProduct';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ManageItem = () => {
    const [Product,refetch]=SetProduct()

    const handelDelet=(id)=>{
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
          axios.delete(`https://tawsif-shop-server.vercel.app/products/${id}`)
            .then(data => {
              console.log(data.data)
              refetch()
            })
        }
      })
    }
    
    return (
        <div>
              <h2 className='text-center text-3xl font-bold'>Manage Item</h2>
      <div>
      
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>

               
                <th>Product Name</th>
                <th>Update</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Product.map(item => <tr key={item._id}>

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.product_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
               <Link to={`/dashbord/update/${item._id}`}><button className='btn'>Update</button></Link>
                  </td>
                  <td>
                    {
                      item.stock==="stock in"? <p className=' text-green-600'>{ item.stock}</p>:<p className=' text-red-500'>{item.stock}</p>
                    }
                  </td>
                  <th>
                       <button onClick={() => handelDelet(item._id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                  </th>
                </tr>)
              }

            </tbody>
          </table>
        </div>

      </div>
        </div>
    );
};

export default ManageItem;