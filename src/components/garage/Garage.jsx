import React from 'react'
import { NavLink } from 'react-router-dom';
const Garage = () => {
  return (
    <div>
        <div className='flex flex-row w-9/12 m-auto mt-10 font-bold text-lg'>
            <div className='flex justify-center items-center m-auto h-40 bg-bar_base_light w-56 rounded-md'>
                <NavLink to="contest/create">Create Contest</NavLink>
            </div>
            <div className='flex justify-center items-center m-auto h-40 bg-bar_base_light w-56 rounded-md'>
                <NavLink to="contest/manage">Manage Contest</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Garage