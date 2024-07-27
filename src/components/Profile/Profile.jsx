import React, { useEffect, useState } from 'react'
import { UserIcon } from '@heroicons/react/16/solid';
import { useParams } from 'react-router-dom';
import { useProblemCountQuery } from '../../hooks/useProblemCountQuery';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend} from 'chart.js'
import { useRatingQuery } from '../../hooks/useRatingQuery';


ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend);

const Profile = () => {
  const {username} = useParams();
  const {data:problemCount,isLoading,error} = useProblemCountQuery({refetchOnWindowFocus:false});
  const {data:ratingData,isLoading:ratingDataIsLoading,error:ratingDataError} = useRatingQuery({refetchOnWindowFocus:false});
  if(isLoading || ratingDataIsLoading) return <div>Loading ...</div>
  if(error || ratingDataError) return <div>Request Failed</div>
  // console.log(ratingData);
  return (
    <div className='w-9/12 m-auto py-3 flex flex-col'>
      <div className='rounded-b-md'>
        <h1 className='bg-gray-600 px-2 py-2'>Information</h1>
        <div className='bg-black rounded-b-md opacity-40 flex-grow'>
          <div className='flex flex-row justify-around items-center h-full py-12'>
            <div className='flex flex-col text-white text-opacity-100'> 
              <div><UserIcon/></div> {/*Avatar*/}
              <div className='text-xl'>{username}</div> {/*Name*/}
            </div>
            <div className='text-white'>
              <h1 className='text-xl'>Problems Solved</h1>
              <div className='text-center font-extrabold text-8xl'>{problemCount}</div>
            </div>
          </div>
      </div>
    </div>
      {/**--------------- */}
      <div className='rounded-b-md py-3'>
        <h1 className='bg-gray-600 px-2 py-2'>Rating</h1>
        <div className='bg-black rounded-b-md opacity-40 flex-grow h-96'>
          <div className='h-full p-4'>
          <Line
            data={{
            labels: ratingData.rating?.map((rating, index) => String(index)),
            datasets: [
              {
                label: "Rating",
                data: ratingData.rating,
                fill: true,
                backgroundColor: "rgba(255, 255, 255, 0.2)", 
                borderColor: "rgba(255, 255, 255, 1)", 
                borderWidth: 2,
                pointBackgroundColor: "rgba(255, 255, 255, 1)",
                pointBorderColor: "rgba(0, 0, 0, 0.8)",
                pointRadius: 4,
                pointHoverRadius: 6, 
              }
            ]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: "rgba(255, 255, 255, 1)"
                }
              },
              tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)", 
                titleColor: "#fff",
                bodyColor: "#fff", 
              }
            },
            scales: {
              x: {
                grid: {
                  color: "rgba(255, 255, 255, 0.1)"
                },
                ticks: {
                  color: "rgba(255, 255, 255, 1)"
                }
              },
              y: {
                grid: {
                  color: "rgba(255, 255, 255, 0.1)"
                },
                ticks: {
                  color: "rgba(255, 255, 255, 1)"
                }
              }
            }
          }}
        />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile