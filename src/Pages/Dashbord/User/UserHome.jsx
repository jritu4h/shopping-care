import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProbider';
import SetReview from './SetReview';

const UserHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="mt-10 min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white p-4 rounded shadow-lg">
        <div className="flex items-center justify-center">
          <img
            src={user.photoURL} // Replace with the user's actual image URL
            alt={user.displayName}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center mt-4">{user.displayName}</h1>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 block mx-auto"
        >
          Logout
        </button>
      </div>
    <SetReview></SetReview>
    </div>
        </div>
    );
};

export default UserHome;