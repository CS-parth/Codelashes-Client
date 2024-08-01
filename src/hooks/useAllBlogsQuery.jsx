import { useQuery } from "react-query";
export const useAllBlogsQuery = (options) => { 
    const getAllBlog = async () => {
        const res = await fetch(`http://localhost:7700/api/blog/all`,{
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