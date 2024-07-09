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
                    return (<li>{element}</li>)
                })
            }
            </ul>
        }</td>
        <td>{props.date}</td>
        <td>{props.duration}</td>
        <td></td>
    </tr>
  )
}

export default Contest