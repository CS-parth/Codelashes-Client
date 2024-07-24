import React from 'react'
import { useManagableQuery } from '../../hooks/useManagableQuery'
import useSession from '../../context/SessionContext';
import { NavLink } from 'react-router-dom';

export const ManageContest = () => {
  const {User} = useSession();
  const {data,isLoading,error} = useManagableQuery(User.username);

  if(isLoading) return <div>Loading ....</div>
  if(error) return <div>Request Failed</div>
  return (
    <div>
        <table className='w-9/12 m-auto table-auto'>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Contest Name</th>
                    <th>Setters</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((contest,index)=>(
                        <tr key={index}>
                            <td className='text-center'>{contest.index}</td>
                            <td className='text-center'>
                                <NavLink to={contest._id}>
                                    {contest.title}
                                </NavLink>
                            </td>
                            <td className='text-center'>
                                {
                                    contest.setters.map((setter,index)=>(
                                        <div key={index}>{setter}</div>
                                    ))
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
