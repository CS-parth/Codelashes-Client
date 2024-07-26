import React from 'react'
import { useSetterProblemQuery } from '../../hooks/useSetterProblemQuery'
import useSession from '../../context/SessionContext';
import { useParams,NavLink } from 'react-router-dom';
const ManageContestEditorial = () => {
  const {User} = useSession();
  const {id} = useParams();
  const {data,isLoading,error} = useSetterProblemQuery(User.username,id,{refetchOnWindowFocus:false});
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Request Failed</div>
  return (
    <div>
      <table className='table-auto m-auto w-9/12'>
        <thead>
          <tr>
            <th>Index</th>
            <th>Problem Name</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((problem,index)=>(
              <tr key={index}>
                <td className='text-center'>{index}</td>
                <td className='text-center'>{problem.title}</td>
                <td className='text-center'>
                  <NavLink to={problem._id}>
                    <button className='bg-blue-600 rounded-md p-1 m-1'>Add</button>
                  </NavLink>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ManageContestEditorial