import { useQuery } from "react-query";
export const useSetterProblemQuery = (username,contestId, options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-lcxc.onrender.com'
    : 'http://localhost:7700';  
    const getSetterProblem = async (username,contestId)=>{
        const res = await fetch(`${API_URL}/api/problem/managable?username=${username}&contestId=${contestId}`,{
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