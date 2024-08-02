import { useQuery } from "react-query";
export const useContestQuery = (id, options) => { 
    const getContest = async (contestId)=>{
        const res = await fetch(`https://codelashes-server.onrender.com/api/contest/${contestId}`,{
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