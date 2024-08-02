import { useQuery } from "react-query";
export const useProblemCountQuery = (username,options) => { 
    const getProblemCount = async (username)=>{
        const res = await fetch(`https://codelashes-server.onrender.com/api/problem/count?username=${username}`,{
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