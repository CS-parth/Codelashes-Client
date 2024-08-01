import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Submission from './Submission';

const MySubmissions = () => {
    const { id } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    const [mySubmissions,setMySubmissions] = useState();
    useEffect(()=>{
        fetch(`http://localhost:7700/api/submission/my/${id}`)
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
    },[id])
    return (
            <div>
            <table className="mt-5 w-9/12 text-black">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Language</th>
                        <th>Verdict</th>
                        <th>Time</th>
                        <th>Failed Testcase</th>
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
                                failedTestcase={submission.failedTestcase}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MySubmissions