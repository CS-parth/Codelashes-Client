import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useContest } from '../../context/ContestContext';

const ContestTimer = ({targetTime})=>{

  const [currentTime, setCurrentTime] = useState(Date.now());
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
    <div>
      <p>Time Left: {hours}h {minutes}m {seconds}s</p>
    </div>
  );
}

export default ContestTimer;