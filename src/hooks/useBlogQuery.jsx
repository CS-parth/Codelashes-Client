import { useQuery } from "react-query";
export const useBlogQuery = (username, options) => { 
    const getBlog = async (username)=>{
        const res = await fetch(`https://codelashes-server.onrender.com/api/blog/managable?username=${username}`,{
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
	    enabled: !!username,
        ...options,
    };

    return useQuery(
        ['Blog', username], // query keys act as dependencies
        () => getBlog(username),
        queryOptions
    );
};