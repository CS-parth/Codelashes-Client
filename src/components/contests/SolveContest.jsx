import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useContest} from '../../context/ContestContext';

const SolveContest = () => {
  const { Contest,isLoading,error } = useContest();
  return (
    <>
            <div className="bg-white shadow-md rounded-b-lg overflow-hidden mb-8">
                <div className="bg-gray-200 px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800">Contest Information</h1>
                </div>
                <div className="p-6">
                <p className="mb-2"><span className="font-semibold">Duration:</span> {Contest.duration}</p>
                <p><span className="font-semibold">Start Time:</span> {Contest.date} {Contest.time}</p>
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
                    {Contest.problems.map((problem, index) => (
                        <tr key={index} className="border-b">
                        <td className="px-4 py-2">{String.fromCharCode(65 + index)} - Problem {index + 1}</td>
                        <td className="px-4 py-2">{problem.difficulty}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-gray-200 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">Contest Rules</h2>
                </div>
                <div className="p-6">
                <p className="text-gray-700 whitespace-pre-wrap">{Contest.rules}</p>
                </div>
            </div>
    </>
    )
}

export default SolveContest