import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProbider";
import UseAxiosSecure from "./UseAxiosSecure";


const SetUserReview = () => {
    const [axiosSecure]=UseAxiosSecure()
    const {user,loading}=useContext(AuthContext)
    const {data: review=[],refetch}=useQuery({
          queryKey:['reviews',user?.email],
          enabled: !loading,
          queryFn: async()=>{
            const res = await axiosSecure.get(`/review?email=${user?.email}`)
            return res.data;
          }
    }) 
    return [review,refetch]
};

export default SetUserReview;