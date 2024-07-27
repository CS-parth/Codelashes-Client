import { useQuery } from "react-query";
export const useSetterProblemQuery = (username,contestId, options) => { 
    const getSetterProblem = async (username,contestId)=>{
        const res = await fetch(`http://localhost:7700/api/problem/managable?username=${username}&contestId=${contestId}`,{
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
        ...options,
    };

    return useQuery(
        ['SetterProblem', username,contestId], // query keys act as dependencies
        () => getSetterProblem(username,contestId),
        queryOptions
    );
};