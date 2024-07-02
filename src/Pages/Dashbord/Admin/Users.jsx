import React from 'react';
import axios from 'axios';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Users = () => {
  const [axiosSecure]=UseAxiosSecure()
  const {data: user=[],refetch}=useQuery({
      queryKey:['user'],
      queryFn: async()=>{
          const res=  await axiosSecure.get('/user')
          return res.data;
      }
  })

  console.log(user);
  

    const handelUser=(u)=>{
      axios.patch(`https://tawsif-shop-server.vercel.app/user/admin/${u}`)
      .then(res => {
        console.log(res.data)
        refetch()
      })
    }
    const handelDelet=(u)=>{
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
            'Your file has been deleted.',
            'success'
          )
          axios.delete(`https://tawsif-shop-server.vercel.app/user/${u._id}`)
          .then(res =>{
            console.log(res.data)
            refetch()
          })
        }
      })
    }
    return (
        <div>
            <h2 className=' text-center text-4xl'>All Users</h2>
            <div>
                <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                     
                      <th>User Name</th>
                      <th>User Email</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    user.map(u =>   <tr key={u._id}>
                     
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">{u. name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold">{u. email}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                   { u.role=== 'admin'? "admin":
                      <button onClick={()=>handelUser(u._id)} className='btn'>User</button>
                   }
                      
                      </td>
                      <th>
                      <button onClick={()=>handelDelet(u)}  className="btn btn-circle btn-outline">
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

export default Users;