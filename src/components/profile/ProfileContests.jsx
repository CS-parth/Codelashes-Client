import React from 'react'
import {useProfileContestQuery} from '../../hooks/useProfileContestsQuery'
import moment from 'moment';
import { NavLink, useParams } from 'react-router-dom';
const ProfileContests = () => {
  const {username} = useParams();
  const {data,isLoading,error} = useProfileContestQuery(username,{refetchOnWindowFocus:false});
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Request Failed</div>
  return (
    <div className='w-9/12 m-auto py-3 flex flex-col'>
      <div className='rounded-b-md'>
        <h1 className='bg-gray-600 px-2 py-2'>Contests</h1>
        <div className='bg-black rounded-b-md opacity-40 flex-grow'>
          <div className='px-2 py-10'>
            <table className='border w-4/5 text-white text-opacity-100 m-auto'>
              <thead>
                <tr className='border'>
                  <th>Index</th>
                  <th>Contest Name</th>
                  <th>Date & Time</th>
                  <th>Delta</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((contest,index)=>(
                  <tr className='border'>
                    <td className='text-center'>{data.length-(index)}</td>
                    <td className='text-center hover:underline cursor-pointer'>
                       <NavLink to={`../../../contests/${contest._id}`}>
                         {contest.name}
                        </NavLink>
                    </td>
                    <td className='text-center'>
                      <div>{moment(contest.startDate,"ddd MMM DD YYYY HH:mm:ss GMT+HHMM").format("MMM'DD YYYY")}</div>
                      <div>{contest.startTime}</div>
                    </td>
                    <td className='text-center'>{contest.rating}</td>
                  </tr> 
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
     </div>
    </div>
  )
}

export default ProfileContests