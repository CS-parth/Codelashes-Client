import { useQuery } from "react-query";
export const useAuthQuery = (options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-0f9o.onrender.com'
    : 'http://localhost:7700';
    const getAuth = async (contestId)=>{
        const res = await fetch(`${API_URL}/api/user/auth`,{
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