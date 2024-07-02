import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProbider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const handelLogin=()=>{
        login()
        .then((result)=>{
            const user = result.user;
            console.log(user)
            const saveUser = { name: user.displayName, email: user.email }
           fetch('https://tawsif-shop-server.vercel.app/user',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
           })
           .then(res=>res.json())
           .then(data =>{
            console.log(data)
            navigate('/')

           })
        })
        .catch((error)=>{
            console.lo0g(error.message)
        })
    }
    return (
        <div className=' flex  justify-center item-center mt-52'>
           <button onClick={handelLogin} className=' uppercase btn'>
            <img style={{width:"30px"}} src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="" />
            Login with google
            </button> 
        </div>
    );
};

export default Login;