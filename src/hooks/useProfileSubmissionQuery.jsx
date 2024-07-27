import { useQuery } from "react-query";
export const useProfileSubmissionQuery = (options) => { 
    const getProfileSubmission = async ()=>{
        const res = await fetch(`http://localhost:7700/api/submission/my`,{
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
	    // enabled: !!id,
        ...options,
    };

    return useQuery(
        ['profileSubmission'], // query keys act as dependencies
        () => getProfileSubmission(),
        queryOptions
    );
};