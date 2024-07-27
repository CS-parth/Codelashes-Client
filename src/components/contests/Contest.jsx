import moment from 'moment';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Contest = (props) => {
  // console.log("first");
  return (
    <tr>
        <td>
            <NavLink to={`${props.id}`}>
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
                <li>{moment(props.startDate,"ddd MMM DD YYYY HH:mm:ss Z+HHmm").date()+"/"+Number(moment(props.startDate,"ddd MMM DD YYYY HH:mm:ss Z+HHmm").month()+1)+"/"+moment(props.startDate,"ddd MMM DD YYYY HH:mm:ss Z+HHmm").year()}</li>
                <li>{props.startTime}</li>
            </ul>

        }</td>
        <td>{props.duration}</td>
        <td></td>
    </tr>
  )
}

export default Contest