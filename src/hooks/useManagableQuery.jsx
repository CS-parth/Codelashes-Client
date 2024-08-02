import { useQuery } from "react-query";
export const useManagableQuery = (options) => { 
    const getManagableContest = async ()=>{
        const res = await fetch(`http://localhost:7700/api/contest/managable`,{
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