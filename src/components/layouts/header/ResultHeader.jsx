import React from 'react';
import { NavLink } from 'react-router-dom';

const ResultHeader = () => {
  return (
    <div className='flex flex-row justify-between w-2/5 mt-10'>
        <div>
            <NavLink 
                to="all"
                className={({ isActive }) => 
                  `rounded-md p-1 m-2 ${isActive ? 'bg-gray-500' : 'bg-white'} ${isActive ? '' : 'hover:bg-gray-200'} `
                }
            >
                All Submissions
            </NavLink>
        </div>
        <div>
            <NavLink 
                to="" 
                end
                className={({ isActive }) => 
                  `rounded-md p-1 m-2 ${isActive ? 'bg-gray-500' : 'bg-white'} ${isActive ? '' : 'hover:bg-gray-200'} `
                }
            >
                My Submissions
            </NavLink>
        </div>
    </div>
  );
}

export default ResultHeader;
