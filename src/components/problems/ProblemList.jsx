import React, { useEffect,useState } from 'react'
import Problem from './Problem'
const ProblemList = () => {
  const [problemList,setproblemList] = useState(null);
  const [isLoading,setisLoading] = useState(true);
  const [error,setError] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:7700/api/problem/all")
    .then(async (res)=>{
      if(!res.ok){
        const response = await res.json();
        throw new Error(`${response.message}`);
      }
      return res.json();
    })
    .then((data)=>{
      // console.log(typeof(data));
      // console.log(data);
      setproblemList(data);
      setisLoading(false);
    })  
    .catch((err)=>{
      // console.log(err);
      setError(err.message);
      setisLoading(false);
    })
  },[]);
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
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        problemList.map(problem => (
          <Problem 
            cid={problem.contest}
            id={problem._id} 
            status={"solved"} 
            title={problem.title} 
            acceptance={problem.acceptance} 
            difficulty={problem.difficulty} 
          />
        ))
      )}
      </tbody>
  </table>
  )
}

export default ProblemList