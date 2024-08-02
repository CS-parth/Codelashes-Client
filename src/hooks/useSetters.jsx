import { useQuery } from "react-query";
export const useSettersQuery = (options) => { 

    const getSetters = async ()=>{
        const res = await fetch(`https://codelashes-server.onrender.com/api/user/setters`);
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