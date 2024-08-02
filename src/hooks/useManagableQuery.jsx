import { useQuery } from "react-query";
export const useManagableQuery = (options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server.onrender.com'
    : 'http://localhost:7700'; 
    const getManagableContest = async ()=>{
        const res = await fetch(`${API_URL}/api/contest/managable`,{
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
        ['Managable'], // query keys act as dependencies
        () => getManagableContest(),
        queryOptions
    );
};