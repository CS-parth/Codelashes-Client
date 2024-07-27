import { useQuery } from "react-query";
export const useRatingQuery = (options) => { 
    const getRating = async ()=>{
        const res = await fetch(`http://localhost:7700/api/user/rating`,{
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
        ['Rating'], // query keys act as dependencies
        () => getRating(),
        queryOptions
    );
};