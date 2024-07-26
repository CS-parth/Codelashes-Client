import { useQuery } from "react-query";
export const useEditorialQuery = (id, options) => { 
    const getEditorial = async (problemId)=>{
        const res = await fetch(`http://localhost:7700/api/problem/editorial/${problemId}`,{
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