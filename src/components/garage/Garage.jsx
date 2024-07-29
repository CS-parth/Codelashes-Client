import React from 'react'
import { NavLink } from 'react-router-dom';
const Garage = () => {
  return (
    <div>
            <div className='grid grid-cols-2 gap-8 w-9/12 m-auto mt-10 font-bold text-lg'>
                <div className='flex justify-center items-center h-40 bg-bar_base_light rounded-md'>
                    <NavLink to="contest/create">Create Contest</NavLink>
                </div>
                <div className='flex justify-center items-center h-40 bg-bar_base_light rounded-md'>
                    <NavLink to="contest/manage">Manage Contest</NavLink>
                </div>
                <div className='flex justify-center items-center h-40 bg-bar_base_light rounded-md'>
                    <NavLink to="blog/create">Create Blog</NavLink>
                </div>
                <div className='flex justify-center items-center h-40 bg-bar_base_light rounded-md'>
                    <NavLink to="blog/manage">Manage Blog</NavLink>
                </div>
            </div>
    </div>
  )
}

export default Garage