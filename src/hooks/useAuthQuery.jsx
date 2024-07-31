import { useQuery } from "react-query";
export const useAuthQuery = (options) => { 
    const getAuth = async (contestId)=>{
        const res = await fetch(`http://localhost:7700/api/user/auth`,{
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
        ['Auth'], // query keys act as dependencies
        () => getAuth(),
        queryOptions
    );
};