import {React,useState,useEffect, useContext} from 'react'
import { Outlet, useParams, NavLink } from 'react-router-dom';
import ContestHeader from '../header/ContestHeader';
import ContestFooter from '../footer/ContestFooter';
import {useContest,ContestContext} from '../../context/ContestContext';

const ContestLayout = () => {
  
  const {Contest,isLoading,error} = useContext(ContestContext);
  
  if(isLoading) return (<div>Loading</div>)

  if(error) return (<div>Error : ${error}</div>)

  return (
    <>
        <div className="flex flex-col min-h-screen">
            <ContestHeader />
            <div className="flex-grow">
                <main className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-md rounded-t-lg overflow-hidden mb-1">
                    <div className="flex items-center justify-between px-4 py-2 text-sm">
                        <div className="flex space-x-4">
                            <NavLink to="" className="text-gray-700 hover:text-gray-900 font-medium">Top</NavLink>
                            <NavLink to="task" className="text-gray-700 hover:text-gray-900">Tasks</NavLink>
                            <NavLink to="submit" className="text-gray-700 hover:text-gray-900">Submit</NavLink>
                            <NavLink to="results" className="text-gray-700 hover:text-gray-900">Results</NavLink>
                            <NavLink to="standings" className="text-gray-700 hover:text-gray-900">Standings</NavLink>
                            <NavLink to="editorial" className="text-gray-700 hover:text-gray-900">Editorial</NavLink>
                            <NavLink to="discuss" className="text-gray-700 hover:text-gray-900">Discuss</NavLink>
                        </div>
                        <div>
                        <span className="text-gray-600">Time Remaining: {Contest.duration}</span>
                        </div>
                    </div>
                </div>
                <Outlet />
                </main>
            </div>
            <ContestFooter />
        </div>
    </>
    )
}

export default ContestLayout