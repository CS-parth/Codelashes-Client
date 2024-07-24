import { React, useEffect, useState }from 'react'
import { useParams } from 'react-router-dom';
import { useContestQuery } from '../../hooks/useContestQuery';
import moment from 'moment';
const ManageContestTop = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useContestQuery(id,{refetchOnWindowFocus: false});
  if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
  // console.log(data);
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className="bg-white shadow-md rounded-b-lg overflow-hidden mb-8">
          <div className="bg-gray-200 px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800">Contest Information</h1>
          </div>
          <div className="p-6">
            <p className="mb-2"><span className="font-semibold">Duration:</span> {data.duration}</p>
            <p><span className="font-semibold">Start Date:</span> {moment(data.startDate,"ddd MMM DD YYYY HH:mm:ss Z+HHmm").date() + "/" + Number(moment(data.startDate,"ddd MMM DD YYYY HH:mm:ss Z+HHmm").month() + 1) + "/" + moment(data.startDate,"ddd MMM DD YYYY HH:mm:ss Z+HHmm").year()} <b>at</b> {data.startTime}</p>
          </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Problem Setters</h2>
          </div>
          <div className="p-6">
            <ul className=''>
              {
                data?.setters.map((setter)=> <li key={setter._id}>{setter.username}</li> )
              }
            </ul>
          </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Task List</h2>
          </div>
          <div className="p-6">
            <table className="w-full">
                <thead>
                <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Task</th>
                    <th className="px-4 py-2 text-left">Score</th>
                </tr>
                </thead>
                <tbody>
                {data?.problems.map((problem, index) => (
                    <tr key={index} className="border-b">
                    <td className="px-4 py-2">{String.fromCharCode(65 + index)} - {problem.title} </td>
                    <td className="px-4 py-2">{problem.difficulty}</td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
      </div>
      
      <div className="bg-white shadow-md rounded-b-lg overflow-hidden mb-8">
          <div className="bg-gray-200 px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800">Contest Description</h1>
          </div>
          <div className="p-6">
          <p className="text-gray-700 whitespace-pre-wrap">{data.description}</p>
          </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Contest Rules</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 whitespace-pre-wrap">{data.rules}</p>
          </div>
      </div>
    </div>
  )
}

export default ManageContestTop