import React, { useContext, useEffect,useState } from 'react'
import Problem from './Problem'
import useSession from '../../context/SessionContext';
const ProblemList = () => {
  const [problemList,setproblemList] = useState(null);
  const [isLoading,setisLoading] = useState(true);
  const [error,setError] = useState(null);
  const {User} = useSession();
  useEffect(() => {
    if(User){
      fetch(`http://localhost:7700/api/problem/all?username=${User.username}`)
      .then(async (res)=>{
        const result = await res.json();
        if(res.ok){
          return result;
        }
        throw new Error(result.message);
      })
      .then((data)=>{
        setproblemList(data);
        setisLoading(false);
      })
      .catch((err)=>{
        setError(err.message);
        setisLoading(false);
      })
    }
  }, [User]);
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
        <h1>{error}</h1>
      ) : (
        problemList.map((problem,index) => (
          <Problem 
            key={index}
            cid={problem.contest._id}
            id={problem._id} 
            status={problem.status} 
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