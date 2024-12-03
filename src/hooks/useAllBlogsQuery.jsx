import { useQuery } from "react-query";
export const useAllBlogsQuery = (options) => { 
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-lcxc.onrender.com'
    : 'http://localhost:7700';
    const getAllBlog = async () => {
        const res = await fetch(`${API_URL}/api/blog/all`,{
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
        ['AllBlog'], // query keys act as dependencies
        () => getAllBlog(),
        queryOptions
    );
};