import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Submission from './Submission';
import useSession from '../../../context/SessionContext';

const AllSubmissions = () => {
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server-0f9o.onrender.com'
    : 'http://localhost:7700'; 
    const { User } = useSession();
    const { id } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    const [mySubmissions,setMySubmissions] = useState();
    useEffect(()=>{
        fetch(`${API_URL}/api/submission/all/${id}`)
        .then(async (res)=>{
            // console.log(res);
            const response = await res.json();
            if(res.ok){
                return response
            }else{
                throw new Error(response.message);
            }
        })
        .then(data=>{
            // console.log(data);
            setMySubmissions(data);
            setIsLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setIsLoading(false);
        })
    },[id,User])
  return (
        <div>
        <table className="mt-5 w-9/12 text-black">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Language</th>
                    <th>Verdict</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? (
                    <tr>
                        <td colSpan="4">Loading...</td>
                    </tr>
                ) : error ? (
                    <tr>
                        <td colSpan="4">{error}</td>
                    </tr>
                ) : (
                    mySubmissions.map((submission) => (
                        <Submission
                            key={submission._id}
                            username={submission.username}
                            verdict={submission.verdict}
                            language={submission.language}
                            time={submission.createdAt}
                        />
                    ))
                )}
            </tbody>
        </table>
    </div>
  )
}

export default AllSubmissions