import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Provider/AuthProbider';
import Swal from 'sweetalert2';
const AddReview = () => {
  const {user}=useContext(AuthContext)
  const handleSubmit = (event) =>{
    event.preventDefault() 
    const form= event.target
    const name= form.name.value;
    const review= form.review.value;
    const FullReview={
      name,
      review,
      photo:user.photoURL,
      email:user.email
    }
    axios.post('https://lazy-cyan-donkey-veil.cyclic.app/review',FullReview)
    .then(res=>{
      console.log(res.data)
      if (res.data.insertedId) {
        Swal.fire('Comment Successful')
      }
    })
    
  };
    return (
      <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user.displayName}
            readOnly
            required
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-gray-700">Review:</label>
          <textarea
            id="review"
            name="review"
            required
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Review
        </button>
      </form>
    </div>
    );
};

export default AddReview;