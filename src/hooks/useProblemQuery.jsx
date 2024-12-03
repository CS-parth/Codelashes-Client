import { useQuery } from "react-query";
export const useProblemQuery = (id, options) => {
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-lcxc.onrender.com'
    : 'http://localhost:7700';  
    const getProblem = async (problemId)=>{
        const res = await fetch(`${API_URL}/api/problem/${problemId}`,{
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
        ['Problem', id], // query keys act as dependencies
        () => getProblem(id),
        queryOptions
    );
};