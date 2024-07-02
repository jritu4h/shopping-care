import { useQuery } from "@tanstack/react-query";

const SetDistric = () => {
    const {data:distric=[]}=useQuery({
        queryKey:["distric"],
        queryFn: async ()=>{
            const res = await fetch('https://tawsif-shop-server.vercel.app/district')
            return res.json()
        }
    })
   return [distric]
};

export default SetDistric;