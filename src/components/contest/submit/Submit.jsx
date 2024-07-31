import React, { useEffect, useRef, useState } from 'react';
import { useContest } from '../../../context/ContestContext';
import { useLocation } from 'react-router-dom';
import useSession from '../../../context/SessionContext'
import { toast } from 'react-toastify';

const Submit = ({verdictQueue,remove,first,add,verdictTrigger,setJobId,roomId}) => {
  const refSubmit = useRef();
  let { state } = useLocation();
  const initialSelectedTask = state?.initialSelectedTask || '';
  const { Contest, isLoading, error } = useContest();
  const { User } = useSession();
  const [selectedTask, setSelectedTask] = useState(initialSelectedTask || '');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [sourceCode, setSourceCode] = useState('');
  const [formError,setError] = useState({
    task:"",
    language:"",
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError((prevData)=>({
      task:"",
      language:""
    }))
    // Run Validation 
    if(selectedTask==""){
      setError((prevData)=>({
      ...prevData,
      task:"Select a task"
      }));
      return;
    }
    if(selectedLanguage == ""){
      setError((prevData)=>({
        ...prevData,
        language:"Select a language"
        }));
      return;
    }
    // console.log(formData);
    // make request to the backend
    fetch("http://localhost:7700/api/judge/submit",{
      method: "POST",
      body: JSON.stringify({ username: User.username, contest: Contest._id, roomId: roomId, problem: selectedTask, code: sourceCode}),
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
      } 
    })
    .catch((err)=>{
      console.error(err);
    })
  }

  useEffect(()=>{
    const verdict = first;
    remove();
    console.log("verdict: ",verdict);
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
        refSubmit.current.removeAttribute("disabled");
      },2000);
    } 
  },[verdictTrigger])
  
  useEffect(() => {
    if (initialSelectedTask) {
      setSelectedTask(initialSelectedTask);
    }
  }, [initialSelectedTask]);

  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Submit</h2>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-2">
              Task
            </label>
            <select
              id="task"
              value={selectedTask}
              onChange={(e) => setSelectedTask(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a task</option>
              {Contest.problems.map((problem, index) => (
                <option key={problem._id} value={problem._id}>
                  {String.fromCharCode(65 + index)} - {problem.title}
                </option>
              ))}
            </select>
            {formError.task && 
              <span className='text-red-600'>{formError.task}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a language</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="c">C</option>
            </select>
            {formError.language && 
              <span className='text-red-600'>{formError.language}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="sourceCode" className="block text-sm font-medium text-gray-700 mb-2">
              Source Code
            </label>
            <textarea
              id="sourceCode"
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
              rows="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Paste your code here..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onSubmit={handleSubmit}
              ref={refSubmit}
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;