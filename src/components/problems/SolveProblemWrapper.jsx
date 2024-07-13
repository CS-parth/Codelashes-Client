import { useQueue, useScript } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { socket } from '../../socket/socket'
import SolveProblem from "./SolveProblem";
import {v4 as uuid} from 'uuid'
import useSocket from "../../context/SocketContext";
export const SolveProblemWrapper = () => {
    
    const { add, remove, first, verdictQueue } = useQueue([]);
    const [verdictTrigger,setVerdictTrigger] = useState(0);
    const [jobId,setJobId] = useState(null);
    const { roomId } = useSocket();
    useEffect(() => {
      let intervalId;
    
      function onVerdict(value) {
        add(value);
        setVerdictTrigger(t => t + 1);
        // clearInterval(intervalId);
      }
      
      // intervalId = setInterval(() => {
        // console.log(roomId);
        // if(!roomId || !jobId) clearInterval(intervalId);
        socket.on("verdict", onVerdict);
      // }, 1000);
      return () => {
        // clearInterval(intervalId);
        socket.off('verdict', onVerdict);
      };
    },[jobId]); // Maybe job-id is indeed not requied (will ccheck it later) 
    
    return (
        <SolveProblem 
          verdictQueue={verdictQueue} 
          remove={remove} 
          first={first} 
          add={add}
          verdictTrigger={verdictTrigger}
          setJobId={setJobId}
          roomId={roomId}
        />
    );
};

export default SolveProblemWrapper;