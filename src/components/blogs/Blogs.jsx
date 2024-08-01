import React from 'react'
import {useAllBlogsQuery} from '../../hooks/useAllBlogsQuery'
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';

const Blogs = () => {
  const {data,isLoading,error} = useAllBlogsQuery({refetchOnWindowFocus: false});
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Request Failed</div>
  return (
    <div className='w-9/12 m-auto'>
      {data.map((blog,index)=>{
        return(
          <div className='flex flex-col my-5'>
            <div className='text-white text-2xl font-extrabold w-full px-2 py-2 bg-bar_base opacity-100 rounded-t-md'>{blog.title}</div>
            <div className='bg-bar_base_light opacity-100 py-4'>
              <div className='px-4 py-4'>{parse(blog.info || blog.content)}</div>
              <div className='flex flex-row justify-between'>
                <div className='px-4'>Author : <span className="border-b-2"><NavLink to={`/profile/${blog.author.username}`}>{blog.author.username}</NavLink></span></div>
                <div className='px-4'><NavLink to={blog._id}>Read More ...</NavLink></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Blogs