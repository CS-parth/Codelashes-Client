import { useQuery } from "react-query";
export const useEditorialQuery = (id,options) => {
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server.onrender.com'
    : 'http://localhost:7700';  
    const getEditorial = async (problemId)=>{
        const res = await fetch(`${API_URL}/api/problem/editorial/${problemId}`,{
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
        staleTime: 1000 * 60 * 60 * 24,
	    enabled: !!id,
        ...options,
    };

    return useQuery(
        ['Editorial', id], // query keys act as dependencies
        () => getEditorial(id),
        queryOptions
    );
};