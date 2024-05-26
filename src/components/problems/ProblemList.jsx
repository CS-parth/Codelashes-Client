import React from 'react'
import Problem from './Problem'
const ProblemList = () => {
  return (
    <table className="w-9/12 m-auto text-black" style={{emptyCells: "show"}}>
      <thead>
        <tr>
          <th>Status</th>
          <th>Title</th>
          <th>Editorial</th>
          <th>Acceptance</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        <Problem id={"123"} status={"solved"} number={1} title={"Two Sum"} acceptance={"98%"} difficulty={1900}/>
        <Problem id={"123"} status={"solved"} number={1} title={"Two Sum"} acceptance={"98%"} difficulty={1900}/>
        <Problem id={"123"} status={"solved"} number={1} title={"Two Sum"} acceptance={"98%"} difficulty={1900}/>
        <Problem id={"123"} status={"solved"} number={1} title={"Two Sum"} acceptance={"98%"} difficulty={1900}/>
        <Problem id={"123"}status={"solved"} number={1} title={"Two Sum"} acceptance={"98%"} difficulty={1900}/>
        <Problem id={"123"} status={"solved"} number={1} title={"Two Sum"} acceptance={"98%"} difficulty={1900}/>
      </tbody>
  </table>
  )
}

export default ProblemList