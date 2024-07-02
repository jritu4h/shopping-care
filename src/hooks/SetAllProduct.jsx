import { useEffect, useState } from "react";


const SetAllProduct = () => {
   const [products,setProduct]=useState([])
   const [loading,setLoding]=useState(true)
   useEffect(()=>{
    fetch('https://tawsif-shop-server.vercel.app/products')
    .then(res=>res.json())
    .then(data =>{
        setProduct(data)
        setLoding(false)
    })
   },[])
   return[products,loading,setProduct]
};

export default SetAllProduct;