import { useQuery } from "react-query";
export const useSettersQuery = (options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server.onrender.com'
    : 'http://localhost:7700'; 
    const getSetters = async ()=>{
        const res = await fetch(`${API_URL}/api/user/setters`);
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
        ['Setters'],
        () => getSetters(),
        queryOptions
    );
};