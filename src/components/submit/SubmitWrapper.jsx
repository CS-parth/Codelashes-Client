import { useQueue, useScript } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { socket } from '../../socket/socket'
import Submit from "./Submit";
import useSocket from "../../context/SocketContext";
export const SubmitWrapper = () => {
    
    const { add, remove, first, verdictQueue } = useQueue([]);
    const [verdictTrigger,setVerdictTrigger] = useState(0);
    const [jobId,setJobId] = useState(null);
    const { roomId } = useSocket();
    useEffect(() => {
      console.log("Socket listners registered")
      function onVerdict(value) {
        add(value);
        setVerdictTrigger(t => t + 1);
      }
      console.log(roomId);
        socket.on("verdict", onVerdict);
      return () => {
        socket.off('verdict', onVerdict);
      };
    },[]); // Maybe job-id is indeed not requied (will ccheck it later) 
    
    return (
        <Submit 
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

export default SubmitWrapper;