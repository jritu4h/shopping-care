import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProbider";
import UseAxiosSecure from "./UseAxiosSecure";


const SetAdmin = () => {
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure]=UseAxiosSecure()
     const {data: isAdmin=[],isLoading: isAdminLoading}=useQuery({
        queryKey:["isAdmin",user?.email],
        enabled: !loading,
        queryFn:async()=>{
            const res = await axiosSecure(`/user/admin/${user?.email}`)
            return res.data.admin;
        }
     })
    return [isAdmin,isAdminLoading]
};

export default SetAdmin;