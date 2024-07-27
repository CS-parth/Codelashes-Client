import { useQuery } from "react-query";
export const useProfileContestQuery = (options) => { 
    const getProfileContest = async ()=>{
        const res = await fetch(`http://localhost:7700/api/contest/my`,{
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
	    // enabled: !!id,
        ...options,
    };

    return useQuery(
        ['profileContest'], // query keys act as dependencies
        () => getProfileContest(),
        queryOptions
    );
};