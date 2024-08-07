import {React,useState,useEffect, useContext} from 'react'
import { Outlet, useParams, NavLink } from 'react-router-dom';
import ContestHeader from './header/ContestHeader';
import {useContest} from '../../context/ContestContext';
import ContestTimer from '../contest/timer/ContestTimer';
import moment from 'moment';
import WaitingTimer from '../contest/timer/WaitingTimer';
import Footer from './footer/Footer';

const ContestLayout = () => {
  
  const {Contest,isLoading,error,isStarted,isEnded} = useContest();
  const ContestEndTime = moment(Contest.endDate,"ddd MMM DD YYYY HH:mm:ss Z").toDate().getTime();
  const ContestStartTime = moment(Contest.startDate,"ddd MMM DD YYYY HH:mm:ss Z").toDate().getTime();
  if(isLoading) return (<div>Loading</div>)

  if(error) return (<div>Error : ${error}</div>)

  return (
    <>
        <div className="flex flex-col min-h-screen">
            <ContestHeader />
            <div className="flex-grow">
                <main className="container mx-auto px-4 py-8 flex flex-col h-full">
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
                        {
                            isEnded ? (
                                <span className="text-gray-600"> Contest Ended </span>
                            ) : (
                                <span className="text-gray-600"> {isStarted && <ContestTimer targetTime={ContestEndTime} Contest={Contest}/>}</span>
                            )
                        }
                        </div>
                    </div>
                </div>
                {
                    isStarted ? (
                        <Outlet/>
                    ) : (
                        <WaitingTimer targetTime={ContestStartTime}/>
                    )
                }
                </main>
            </div>
            <Footer color={"white"}/>
        </div>
    </>
    )
}

export default ContestLayout