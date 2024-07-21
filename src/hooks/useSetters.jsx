import { useQuery } from "react-query";
export const useSettersQuery = (options) => { 

    const getSetters = async ()=>{
        const res = await fetch(`http://localhost:7700/api/user/setters`);
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
        [],
        () => getSetters(),
        queryOptions
    );
};