import React, { useContext, useEffect,useState } from 'react'
import Problem from './Problem'
import useSession from '../../context/SessionContext';
const ProblemList = ({status,difficulty,acceptance}) => {
  const [problemList,setproblemList] = useState(null);
  const [isLoading,setisLoading] = useState(true);
  const [error,setError] = useState(null);
  // const {User} = useSession();
  useEffect(() => {
    const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://codelashes-server.onrender.com'
    : 'http://localhost:7700';
    // if(User){
      const queryParams = new URLSearchParams({
        ...(status && { status }),
        ...(difficulty && { difficulty }),
        ...(acceptance && { acceptance })
      });
      fetch(`${API_URL}/api/problem/all?${queryParams}`,{
        method:"GET",
        credentials:"include"
      })
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
    // }
  }, [status,difficulty,acceptance]);
  if(isLoading) return <div>Loading ....</div>
  if(error) return <div>Error</div>
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
            editorial={problem.editorial}
          />
        ))
      )}
      </tbody>
  </table>
  )
}

export default ProblemList