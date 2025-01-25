import moment from 'moment';
import React from 'react'
import { NavLink, Navigate } from 'react-router-dom';

const Contest = (props) => {
  return (
    <tr className='hover:bg-amber-200'>
        <td>
            <NavLink to={`${props.id}`} className="hover:underline">
                {props.name}
            </NavLink>
        </td>
        <td>{
            <ul>{
                props.setters.map(element => {
                    return (<li>{element.username}</li>)
                })
            }
            </ul>
        }</td>
        <td>{
            <ul>
                <li>{moment(props.startDate,"ddd MMM DD YYYY HH:mm:ss Z").date()+"/"+Number(moment(props.startDate,"ddd MMM DD YYYY HH:mm:ss Z").month()+1)+"/"+moment(props.startDate,"ddd MMM DD YYYY HH:mm:ss Z").year()}</li>
                <li>{props.startTime}</li>
            </ul>

        }</td>
        <td>{props.duration}</td>
        <td><NavLink className="to-blue-800 hover:border-b-2" to={`${props.id}/standings`}>Standing</NavLink></td>
    </tr>
  )
}

export default Contest