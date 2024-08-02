import { useQuery } from "react-query";
export const useProfileSubmissionQuery = (username,options) => { 
    const getProfileSubmission = async (username)=>{
        const res = await fetch(`https://codelashes-server.onrender.com/api/submission/all?username=${username}`,{
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
        () => getProfileSubmission(username),
        queryOptions
    );
};