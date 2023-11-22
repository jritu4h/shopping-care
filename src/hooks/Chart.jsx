import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosSecure from "./UseAxiosSecure";

const Chart = () => {
  const [axiosSecure]=UseAxiosSecure()
  const {data:charts=[2],refetch}=useQuery({
    queryHash:["charts"],
    queryFn:async()=>{
        const res = await axiosSecure.get('/chart')
        return res.data
    }
  })
  return[charts]
};

export default Chart;