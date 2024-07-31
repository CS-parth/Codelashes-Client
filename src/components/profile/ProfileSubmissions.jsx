import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment';
import { useProfileSubmissionQuery } from '../../hooks/useProfileSubmissionQuery';
const ProfileSubmissions = () => {
  const {username} = useParams();
  const {data,isLoading,error} = useProfileSubmissionQuery(username,{refetchOnWindowFocus:false});
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Request Failed</div>
  return (
    <div className='w-9/12 m-auto py-3 flex flex-col'>
      <div className='rounded-b-md'>
        <h1 className='bg-gray-600 px-2 py-2'>Submissions</h1>
        <div className='bg-black rounded-b-md opacity-40 flex-grow'>
          <div className='px-2 py-10'>
            <table className='border w-4/5 text-white text-opacity-100 m-auto'>
              <thead>
                <tr className='border'>
                  <th>Index</th>
                  <th>Problem</th>
                  <th>Verdict</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((submission,index)=>(
                  <tr className='border'>
                    <td className='text-center'>{data.length-(index)}</td>
                    <td className='text-center hover:underline cursor-pointer'>
                       <NavLink to={`../../../contests/${submission.cid}/task/${submission.pid}`}>
                         {submission.problemTitle}
                        </NavLink>
                    </td>
                    <td className='text-center'>{submission.verdict}</td>
                    <td className='text-center'>
                      <div>{moment(submission.createdAt,"YYYY-MM-DDTHH:mm:ss:mmmZ").format("MMM'DD YYYY HH:mm:ss")}</div>
                    </td>
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

export default ProfileSubmissions