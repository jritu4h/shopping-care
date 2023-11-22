import { useQuery } from '@tanstack/react-query';
import React from 'react';

const SetProduct = () => {
      const {data:Product=[],refetch,isLoading:loading}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res= await fetch('https://lazy-cyan-donkey-veil.cyclic.app/products')
            return res.json();
        }
      })
      return [Product,refetch,loading,]
};

export default SetProduct;