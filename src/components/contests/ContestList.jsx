import React from 'react'
import Contest from './Contest'
import { useEffect,useState } from 'react';
const ContestList = () => {
    // useEffect hook for the fetching part
    const [ContestList,setContestList] = useState(null);
    const [isLoading,setisLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
      fetch("http://localhost:7700/api/contest/all")
      .then(async (res)=>{
        const response = await res.json();
        if(!res.ok){
          throw new Error(response.message);
        }else{
          return response;
        }
      })
      .then((data)=>{
        console.log(data);
        setContestList(data);
        setisLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setisLoading(false);
      })
    },[]);
  return (
    <div>
        <table className='w-9/12 m-auto'>
             <thead>
                <tr>
                    <th>Name</th>
                    <th>Setters</th>
                    <th>Date & Time</th>
                    <th>Duration</th>
                    <th>-</th>
                </tr>
             </thead>
             <tbody>
             {isLoading ? (
              <tr><th>Loading</th></tr>
             ) : error ? (
              <tr><th>Error</th></tr>
             ) : (
                ContestList.map(contest=>(
                  <Contest 
                  id={contest._id}
                  name={contest.name}
                  setters={contest.setters}
                  date={contest.date}
                  time={contest.time + "UTC+5.5"}
                  duration={contest.duration}
                  />
                ))
            )}
            </tbody>
        </table>
    </div>
  )
}

export default ContestList