import { useQuery } from "react-query";
export const useProfileContestQuery = (username,options) => { 
    const getProfileContest = async ()=>{
        const res = await fetch(`https://codelashes-server.onrender.com/api/contest/my?username=${username}`,{
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
        ['profileContest',username], // query keys act as dependencies
        () => getProfileContest(username),
        queryOptions
    );
};