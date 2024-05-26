import React from 'react'

const Contest = (props) => {
  return (
    <tr>
        <td>{props.name}</td>
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