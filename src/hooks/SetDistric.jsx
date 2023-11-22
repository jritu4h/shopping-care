import { useQuery } from "@tanstack/react-query";

const SetDistric = () => {
    const {data:distric=[]}=useQuery({
        queryKey:["distric"],
        queryFn: async ()=>{
            const res = await fetch('https://lazy-cyan-donkey-veil.cyclic.app/district')
            return res.json()
        }
    })
   return [distric]
};

export default SetDistric;