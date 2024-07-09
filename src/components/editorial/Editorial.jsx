import React from 'react';
import { Link } from 'react-router-dom';
import { useContest } from '../../context/ContestContext';

const Editorial = () => {
  const { Contest, isLoading, error } = useContest();

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Editorial</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Task</th>
            <th className="border border-gray-300 px-4 py-2">Score</th>
            <th className="border border-gray-300 px-4 py-2">Editorial</th>
          </tr>
        </thead>
        <tbody>
          {Contest.problems.map((problem, index) => (
            <tr key={problem.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/contests/${Contest.id}/tasks/${problem.id}`} className="text-blue-600 hover:underline">
                  {problem.name}
                </Link>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">{problem.difficulty}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <Link to={`/contests/${Contest.id}/tasks/${problem.id}/editorial`} className="text-blue-600 hover:underline">
                  Editorial
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Editorial;