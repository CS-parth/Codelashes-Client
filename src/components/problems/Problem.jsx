import { CheckBadgeIcon, DocumentTextIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { NavLink } from 'react-router-dom';

const Problem = (props) => {
    const statusComponents = {
        solved: <CheckBadgeIcon className='size-4 fill-bar_base' />,
        Attempted: null, // or render something for 'Attempted' status
        default: null, // or render something for default case
      };
      
      return (
        <tr className="">
          <td className='text-center'>{statusComponents[props.status] || statusComponents.default}</td>
          <NavLink to={`${props.id}`}>
            <td className="text-center">{props.number}. {props.title}</td>
          </NavLink>
          <td className='text-center'>{props.editorial && (
            <a href=""><DocumentTextIcon className='size-4 fill-bar_base_light'/></a>
          )}</td>
          <td className='text-center'>{props.acceptance}</td>
          <td className='text-center'>{props.difficulty}</td>
        </tr>
      );
}

export default Problem