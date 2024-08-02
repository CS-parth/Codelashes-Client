import React from 'react'
import { useSetterProblemQuery } from '../../hooks/useSetterProblemQuery';
import useSession from '../../context/SessionContext';
import { useParams, NavLink } from 'react-router-dom';

const UpdateProblem = () => {
  const {User} = useSession();
  const {id,cid} = useParams();
  const {data,isLoading,error} = useSetterProblemQuery(User.username,id,{refetchOnWindowFocus:false});
  const handleDeleteClick = (e)=>{
    fetch(`http://localhost:7700/api/problem/delete/${e.target.id}`,{
      method:"POST",
      "credentials": "include"
    })
    .then(async res=>{
      const response = await res.json();
      if(res.ok){
        return response;
      }
      throw new Error(response.message);
    })
    .then(data=>{
        window.location.reload();
        console.log(data);
    })
    .catch(err=>{
      console.error(err);
    })
  }
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Request Failed</div>
  return (
    <div>
      <table className='table-auto m-auto w-9/12 mt-10'>
        <thead>
          <tr className='outline bg-gray-600'>
            <th>Index</th>
            <th>Problem Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((problem,index)=>(
              <tr key={index} className='outline'>
                <td className='text-center'>{index+1}</td>
                <td className='text-center'>{problem.title}</td>
                <td className='text-center'>
                  <NavLink to={problem._id}>
                    <button className='bg-gray-600 text-white rounded-md p-1 m-1'>Edit</button>
                  </NavLink>
                </td>
                <td className='text-center'><button className='bg-gray-600 text-white rounded-md p-1 m-1' id={problem._id} onClick={handleDeleteClick}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UpdateProblem