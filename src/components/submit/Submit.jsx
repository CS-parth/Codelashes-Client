import React, { useEffect, useState } from 'react';
import { useContest } from '../../context/ContestContext';
import { useLocation } from 'react-router-dom';

const Submit = () => {
  let { state } = useLocation();
  const initialSelectedTask = state?.initialSelectedTask || '';
  const { Contest, isLoading, error } = useContest();
  const [selectedTask, setSelectedTask] = useState(initialSelectedTask || '');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [sourceCode, setSourceCode] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedTask, selectedLanguage, sourceCode });
  };
  
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
            </select>
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