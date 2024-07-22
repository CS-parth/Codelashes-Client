import { useQuery } from "react-query";
export const useRankingQuery = (id, options) => { 
    const getRanking = async (contestId)=>{
        const res = await fetch(`http://localhost:7700/api/result/${contestId}`,{
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
        () => getRanking(id),
        queryOptions
    );
};