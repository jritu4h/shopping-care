import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Await } from "react-router-dom";

const SetControlReview = () => {
   const {data:AllReview=[],refetch}=useQuery({
    queryKey:['allreview'],
    queryFn:async()=>{
       const res= await axios.get('http://localhost:3000/admincontrollreview')
       return res.data; 
    }
   })
 return [AllReview,refetch]
};

export default SetControlReview;