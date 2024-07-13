import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useContest } from '../../context/ContestContext';

const ContestTimer = ()=>{
  const {Contest} = useContest();
  
  const calculateTimeLeft = ()=>{
    if(!Contest){
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,  
      }
    }
    const now = moment();
    const end = moment("2024-7-12");
    const duration = moment.duration(end.diff(now));
    
    return {
      hours: Math.floor(duration.asHours()),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Time Left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
    </div>
  );
}

export default ContestTimer;