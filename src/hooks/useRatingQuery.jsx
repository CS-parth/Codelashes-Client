import { useQuery } from "react-query";
export const useRatingQuery = (username,options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server.onrender.com'
    : 'http://localhost:7700';  
    const getRating = async (username)=>{
        const res = await fetch(`${API_URL}/api/user/rating?username=${username}`,{
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
        ['Rating',username], // query keys act as dependencies
        () => getRating(username),
        queryOptions
    );
};