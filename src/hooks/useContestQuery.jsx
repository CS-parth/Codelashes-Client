import { useQuery } from "react-query";
export const useContestQuery = (id, options) => {
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-lcxc.onrender.com'
    : 'http://localhost:7700'; 
    const getContest = async (contestId)=>{
        const res = await fetch(`${API_URL}/api/contest/${contestId}`,{
            method:"GET",
            credentials:"include"
       });
        const response = await res.json();
        if(!res.ok){
            throw new Error(response.message);
        }
        return response;
    }

    const queryOptions = {
        staleTime: 300,
	    enabled: !!id,
        ...options,
    };

    return useQuery(
        ['Contest', id], // query keys act as dependencies
        () => getContest(id),
        queryOptions
    );
};