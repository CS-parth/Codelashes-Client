import React, { useEffect, useState } from 'react'

const WaitingTimer = ({targetTime}) => {
  const [currentTime,setCurrentTime] = useState(Date.now());
  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='flex justify-center items-center h-[50vh]'>
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg w-[250px] h-[80px] bg-gray-500 opacity-90 flex flex-col items-center justify-center'>
            <p className=''>Contest Starts In </p>
            <p>{hours}h {minutes}m {seconds}s</p>
        </div>
    </div>
  )
}

export default WaitingTimer