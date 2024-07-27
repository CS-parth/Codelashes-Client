import { useQuery } from "react-query";
export const useProblemCountQuery = (options) => { 
    const getProblemCount = async ()=>{
        const res = await fetch(`http://localhost:7700/api/problem/count`,{
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
        ['problemCount'], // query keys act as dependencies
        () => getProblemCount(),
        queryOptions
    );
};