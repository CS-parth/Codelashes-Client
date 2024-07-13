import { useQuery } from "react-query";
export const useMetaContestQuery = (id, options) => { 
    const getMetaContest = async (contestId)=>{
        const res = await fetch(`http://localhost:7700/api/contest/meta/${contestId}`);
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
        ['metaContest', id], // query keys act as dependencies
        () => getMetaContest(id),
        queryOptions
    );
};