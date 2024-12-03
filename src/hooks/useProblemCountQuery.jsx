import { useQuery } from "react-query";
export const useProblemCountQuery = (username,options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-lcxc.onrender.com'
    : 'http://localhost:7700'; 
    const getProblemCount = async (username)=>{
        const res = await fetch(`${API_URL}/api/problem/count?username=${username}`,{
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
        ['problemCount',username], // query keys act as dependencies
        () => getProblemCount(username),
        queryOptions
    );
};