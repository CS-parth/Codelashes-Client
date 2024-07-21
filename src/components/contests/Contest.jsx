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
                <li>{moment(props.startDate).day()+"/"+moment(props.startDate).month()+"/"+moment(props.startDate).year()}</li>
                <li>{props.startTime}</li>
            </ul>

        }</td>
        <td>{props.duration}</td>
        <td></td>
    </tr>
  )
}

export default Contest