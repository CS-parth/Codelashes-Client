import React, { useEffect, useState, useRef } from 'react'
import {useParams, NavLink } from 'react-router-dom'
import useSession from '../../context/SessionContext';
import { toast } from 'react-toastify';
import parse from 'html-react-parser';
const SolveProblem = ({verdictQueue,remove,first,add,verdictTrigger,setJobId,roomId}) => {
  // useParams to solve use parameters
  const { id,pid } = useParams();
  const [Problem,setProblem] = useState(null);
  const [isLoading,setisLoading] = useState(true);
  const [error,setError] = useState(null);
  let refSubmit = useRef();
  const { User } = useSession();

  useEffect(()=> {
    fetch(`https://codelashes-server.onrender.com/api/problem/${pid}`,{
      method:"GET",
      credentials:"include"
    })
    .then(async (res)=>{
      // console.log(res);
      if(!res.ok){
        const response = await res.json();
        throw new Error(`${response.message}`);
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      setProblem(data);
      setisLoading(false);
    })
    .catch(err=>{
      // console.log(err);
      setError(err.message);
      setisLoading(false);
    })
  },[pid])

  const [formData,setFormData] = useState({
    language: "",
    code: "",
  });
  const changeHandler = (e)=>{
    setFormData((prevData)=>{
      return {
        ...prevData,
        [e.target.name]:e.target.value 
      };
    })
  }
  

  const submitHandler = (e)=>{
    e.preventDefault();
    // make request to the backend
    const onError = (msg) => toast.error(msg);
    fetch("https://codelashes-server.onrender.com/api/judge/submit",{
      method: "POST",
      body: JSON.stringify({ username: User.username, contest: id, roomId: roomId, problem: pid, code: formData.code}),
      headers: {
        "Content-Type": "application/json",
      },
      "credentials":"include"
    })
    .then(async (res)=>{
      const response = await res.json();
      if(res.ok){
        return response;
      }else{
        throw new Error(response.message);
      }
    })
    .then((data)=>{
      setJobId(data.jobId);
      if(refSubmit.current){
        refSubmit.current.setAttribute("disabled",true);
        document.getElementById('submitBtn').innerHTML = "Verdict Checking...";
      } 
    })
    .catch((err)=>{
      onError(err);
    })
  }

  useEffect(()=>{
    const verdict = first;
    remove();
    if(verdict){
      switch (verdict.finalVerdict){
        case "Accepted":
          toast.success("Accepted");
          break;
        case "Wrong Answer":
          toast.error("Wrong Answer");
          break;
        case "Runtime Error":
          toast.warning("Runtime Error");
          break;
        case "Time Limit Excceded":
          toast.warning("Time Limit Excceded");
          break;
        case "Compilation Error":
          toast.warning("Compilation Error");
          break;
        default:
          toast.warning("Unknown Error");
      }
    }
    if(refSubmit.current){
      setTimeout(()=>{
        document.getElementById('submitBtn').innerHTML = "Submit";
        refSubmit.current.removeAttribute("disabled");
      },2000);
    } 
  },[verdictTrigger])

  return (
    <div>
      { isLoading ? (
          <p>Loading</p>
      ) : error ?  (
          <div>{error}</div>
      ) : (
          <>
          <div className="bg-gray-100 min-h-screen">      
          <main className="container mx-auto px-4 py-8">
        
            <div className="bg-white shadow-md rounded-b-lg overflow-hidden mb-8">
              
              <div className="bg-gray-200 px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800">{Problem.title}</h1>
              </div>
        
              
              <div className="p-6">
                <div className="mb-4 text-sm text-gray-600">
                  Time Limit: {Problem.time} | Memory Limit: {Problem.memory}
                </div>
        
                <div className="space-y-6">
                  
                  <section>
                    <h2 className="text-lg font-semibold mb-2">Problem Statement</h2>
                    <p className="text-gray-700">{parse(Problem.problemStatement)}</p>
                  </section>
        
                  
                  <section>
                    <h2 className="text-lg font-semibold mb-2">Constraints</h2>
                    <p className="text-gray-700">{parse(Problem.constraints)}</p>
                  </section>
        
                  
                  <section>
                    <h2 className="text-lg font-semibold mb-2">Input</h2>
                    <p className="text-gray-700">{parse(Problem.input)}</p>
                  </section>
        
                  
                  <section>
                    <h2 className="text-lg font-semibold mb-2">Output</h2>
                    <p className="text-gray-700">{parse(Problem.output)}</p>
                  </section>
        
                  
                  <section>
                    <h2 className="text-lg font-semibold mb-2">Sample Testcase</h2>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                      <code>{parse(Problem.sampleTestcase)}</code>
                    </pre>
                  </section>
                </div>
              </div>
            </div>
        
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">Submit Your Code</h2>
              </div>
              <div className="p-6">
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select id="language" name="language" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      <option>C++ (GCC 9.2.1)</option>
                      <option>Python (3.8.2)</option>
                      <option>Java (OpenJDK 11.0.6)</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">Source Code</label>
                    <textarea id="code" name="code" rows="10" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Paste your code here..." value={formData.code} onChange={changeHandler} ></textarea>
                  </div>
                  <div>
                    <button id='submitBtn' ref={refSubmit} type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
          </>
      )   }
    </div>
  )
}

export default SolveProblem;