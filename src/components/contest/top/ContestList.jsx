import React from 'react'
import Contest from './Contest'
import { useEffect,useState } from 'react';
import moment from 'moment';
const ContestList = ({passed}) => {
    // useEffect hook for the fetching part
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server.onrender.com'
    : 'http://localhost:7700';
    const [ContestList,setContestList] = useState(null);
    const [isLoading,setisLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
      fetch(`${API_URL}/api/contest/all`)
      .then(async (res)=>{
        const response = await res.json();
        if(!res.ok){
          throw new Error(response.message);
        }else{
          return response;
        }
      })
      .then((data)=>{
        // console.log(data);
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
             <thead className='border-b-8 border-gray-400'>
                <tr>
                    <th>Name</th>
                    <th>Setters</th>
                    <th>Date & Time</th>
                    <th>Duration</th>
                    <th>Standing</th>
                </tr>
             </thead>
             <tbody>
             {isLoading ? (
              <tr><th>Loading</th></tr>
             ) : error ? (
              <tr><th>Error</th></tr>
             ) : (
              ContestList
              .filter(contest => {
                if (passed) {
                  return moment().isAfter(contest.endDate,"ddd MMM DD YYYY HH:mm:ss GMT+HHMM");
                } else {
                  return moment().isBefore(contest.endDate,"ddd MMM DD YYYY HH:mm:ss GMT+HHMM");
                }
              })
              .map(contest => (
                <Contest 
                  key={contest._id}
                  id={contest._id}
                  name={contest.name}
                  setters={contest.setters}
                  startDate={contest.startDate}
                  startTime={`${contest.startTime}   UTC+5.5`}
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