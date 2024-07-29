import { useQuery } from "react-query";
export const useRatingQuery = (username,options) => { 
    const getRating = async (username)=>{
        const res = await fetch(`http://localhost:7700/api/user/rating?username=${username}`,{
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