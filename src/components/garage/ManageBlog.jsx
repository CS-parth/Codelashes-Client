import React from 'react'
import { useManagableQuery } from '../../hooks/useManagableQuery'
import useSession from '../../context/SessionContext';
import { NavLink } from 'react-router-dom';
import { useBlogQuery } from '../../hooks/useBlogQuery';
export const ManageBlog = () => {
  const {User} = useSession();
  const {data,isLoading,error} = useBlogQuery(User.username);

  if(isLoading) return <div>Loading ....</div>
  if(error) return <div>Request Failed</div>

  return (
    <div>
        <table className='w-9/12 m-auto table-auto mt-10'>
            <thead>
                <tr className='outline bg-gray-600 rounded-t-md'>
                    <th>Index</th>
                    <th>Blog Title</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((blog,index)=>(
                        <tr key={index} className='outline'>
                            <td className='text-center'>{index+1}</td>
                            <td className='text-center'>
                                <NavLink to={blog._id}>
                                    {blog.title}
                                </NavLink>
                            </td>
                            <td className='text-center'><button className='bg-gray-600 text-white rounded-md p-1 m-1'>Edit</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
