import { useQuery } from "react-query";
export const useRankingQuery = (id, options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-lcxc.onrender.com'
    : 'http://localhost:7700';  
    const getRanking = async (contestId)=>{
        const res = await fetch(`${API_URL}/api/result/${contestId}`,{
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
        ['Ranking', id], // query keys act as dependencies
        () => getRanking(id),
        queryOptions
    );
};