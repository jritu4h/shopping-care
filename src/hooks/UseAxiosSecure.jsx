import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProbider';
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL: 'https://lazy-cyan-donkey-veil.cyclic.app', 
  });
  
const UseAxiosSecure = () => {
    const { logOut } = useContext(AuthContext); 
    const navigate = useNavigate(); 
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
          const token = localStorage.getItem('access-token');
          if (token) {
            config.headers.authorize = `Bearer ${token}`;
          }
          return config;
        });
    
        axiosSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              await logOut();
              navigate('/login');
            }
            return Promise.reject(error);
          }
        );
      }, [logOut, navigate]);
    
      return [axiosSecure];
};

export default UseAxiosSecure;