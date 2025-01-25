import { CheckBadgeIcon, DocumentTextIcon, ExclamationTriangleIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { NavLink } from 'react-router-dom';

const Problem = (props) => {
    const statusComponents = {
        Solved: <CheckBadgeIcon className='m-auto size-4 fill-bar_base' />,
        Attempted: <ExclamationTriangleIcon className='m-auto size-4 fill-bar_base' />, 
        default: null, 
      };
      
      return (
        <tr className="hover:bg-amber-200">
          <td className='text-center'>{statusComponents[props.status] || statusComponents.default}</td>
          <td className='text-center'>
              <NavLink to={`/contests/${props.cid}/task/${props.id}`} className="hover:underline">
                  {props.title}
              </NavLink>
          </td>
          <td className='text-center'>{props.editorial && (
            <NavLink to={`/contests/${props.cid}/editorial/${props.id}`}><DocumentTextIcon className='m-auto size-6 fill-bar_base_light'/></NavLink>
          )}</td>
          <td className='text-center'>{props.acceptance}</td>
          <td className='text-center'>{props.difficulty}</td>
        </tr>
      );
}

export default Problem