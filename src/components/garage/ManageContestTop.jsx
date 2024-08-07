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
    <div className='w-9/12 mx-auto px-4 py-8'>
      <div className="shadow-md rounded-b-lg overflow-hidden mb-8">
          <div className="bg-gray-600 px-6 py-4">
            <h1 className="text-xl font-semibold text-black">Contest Information</h1>
          </div>
          <div className="p-6 bg-black opacity-60 text-white">
            <p className="mb-2"><span className="font-semibold">Duration:</span> {data.duration}</p>
            <p><span className="font-semibold">Start Date:</span> {moment(data.startDate,"ddd MMM DD YYYY HH:mm:ss Z").date() + "/" + Number(moment(data.startDate,"ddd MMM DD YYYY HH:mm:ss Z").month() + 1) + "/" + moment(data.startDate,"ddd MMM DD YYYY HH:mm:ss Z").year()} <b>at</b> {data.startTime}</p>
          </div>
      </div>

      <div className="shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-gray-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-black">Problem Setters</h2>
          </div>
          <div className="p-6 text-white bg-black opacity-60">
            <ul className=''>
              {
                data?.setters.map((setter)=> <li key={setter._id}>{setter.username}</li> )
              }
            </ul>
          </div>
      </div>

      <div className="shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-gray-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-black">Task List</h2>
          </div>
          <div className="p-6 bg-black opacity-60 text-white">
            <table className="w-full">
                <thead>
                <tr className="bg-gray-600">
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
      
      <div className="shadow-md rounded-b-lg overflow-hidden mb-8">
          <div className="bg-gray-600 px-6 py-4">
            <h1 className="text-xl font-semibold text-black">Contest Description</h1>
          </div>
          <div className="p-6 bg-black opacity-60 text-white">
          <p className="text-gray-400 whitespace-pre-wrap">{data.description}</p>
          </div>
      </div>
      
      <div className="shadow-md rounded-lg overflow-hidden">
          <div className="bg-gray-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-black">Contest Rules</h2>
          </div>
          <div className="p-6 bg-black opacity-60">
            <p className="text-gray-400 whitespace-pre-wrap">{data.rules}</p>
          </div>
      </div>
    </div>
  )
}

export default ManageContestTop