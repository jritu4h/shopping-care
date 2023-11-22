import React from 'react';
import SetControlReview from '../../../hooks/SetControlReview';
import { Link } from 'react-router-dom';

const ManageReview = () => {
    const [AllReview,refetch]=SetControlReview()
    console.log(AllReview)
    return (
        <div>
          <h2 className='  text-center text-4xl font-bold mt-4'>All Review</h2>

          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Name</th>
        <th>email</th>
        <th>Detils</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {AllReview.map(data => <tr key={data._id}>
        <th>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.name}</div>
            </div>
          </div>
        </td>
        <td>
         {data.email}
        </td>
        <th>
         <Link to={`/dashbord/detilsReview/${data._id}`}> <button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
        <td><button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
      </tr>)}
     
    </tbody>

    
  </table>
</div>
          </div>
        </div>
    );
};

export default ManageReview;