import React from 'react'
import { NavLink } from 'react-router-dom';

const ManageContestSettings = () => {
  return (
    <div>
        <div className='flex flex-row w-9/12 m-auto mt-10 font-bold text-lg'>
            <div className='flex justify-center items-center m-auto h-40 bg-gray-600 w-56 rounded-md'>
                <NavLink to="problem">Update Problem</NavLink>
            </div>
            <div className='flex justify-center items-center m-auto h-40 bg-gray-600 w-56 rounded-md'>
                <NavLink to="contest">Update Contest</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ManageContestSettings