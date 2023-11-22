import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProbider';
import { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';

const SetCart = () => {
    const [axiosSecure]=UseAxiosSecure()
    const {user,loading}=useContext(AuthContext)
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['carts',user?.email],
        enabled: !loading,
          queryFn: async()=>{
             const res = await axiosSecure.get(`/order?email=${user?.email}`)
             return res.data;
            }
    })
    return [cart,refetch]
};

export default SetCart;