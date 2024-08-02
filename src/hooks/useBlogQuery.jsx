import { useQuery } from "react-query";
export const useBlogQuery = (username, options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server.onrender.com'
    : 'http://localhost:7700';
    const getBlog = async (username)=>{
        const res = await fetch(`${API_URL}/api/blog/managable?username=${username}`,{
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