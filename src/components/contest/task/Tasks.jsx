import React from 'react';
import { Link } from 'react-router-dom';
import { useContest } from '../../context/ContestContext';

const Tasks = () => {
  const { Contest, isLoading, error } = useContest();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
      </div>
      <div className="p-6">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Task Name</th>
              <th className="px-4 py-2 text-left">Time Limit</th>
              <th className="px-4 py-2 text-left">Memory Limit</th>
              <th className="px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Contest.problems.map((problem, index) => (
              <tr key={problem._id} className="border-b">
                <td className="px-4 py-2">
                  <Link to={`${problem._id}`} className="text-blue-600 hover:underline">
                    {String.fromCharCode(65 + index)} - {problem.title}
                  </Link>
                </td>
                <td className="px-4 py-2">{problem.time}</td>
                <td className="px-4 py-2">{problem.memory}</td>
                <td className="px-4 py-2">
                  <Link to="../submit" state={{initialSelectedTask: `${problem._id}`}} className="text-blue-600 hover:underline">
                    Submit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;