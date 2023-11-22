import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProbider';
import { Link, Navigate } from 'react-router-dom';
import loginIcon from '../assets/Image/icon/icons8-login.gif';
const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if (loading) {
        return (<div className=' min-h-screen flex justify-center items-center gap-1'>
            <div className='flex justify-center items-center'>
                <p className='text-4xl'>Please Login</p>
            <img src={loginIcon} alt="" />
            </div>
           <div>
            <span className='btn uppercase'><Link to='/login'>Login</Link></span>
           </div>
        </div>)
    }
    if (user) {
      return  children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default Private;