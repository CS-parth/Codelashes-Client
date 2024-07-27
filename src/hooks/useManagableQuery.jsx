import { useQuery } from "react-query";
export const useManagableQuery = (username, options) => { 
    const getManagableContest = async (username)=>{
        const res = await fetch(`http://localhost:7700/api/contest/managable?username=${username}`,{
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
	    enabled: !!username,
        ...options,
    };

    return useQuery(
        ['Managable', username], // query keys act as dependencies
        () => getManagableContest(username),
        queryOptions
    );
};