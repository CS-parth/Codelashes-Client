import { createContext,useContext, useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';
import { socket } from '../socket/socket'

export const SocketContext = createContext({
    roomId: null,
    isConnected: false
});

export const SocketProvider = SocketContext.Provider;

export const SocketContextProvider = ({children})=>{

    const [roomId,setRoomId] = useState(null)
    const [isConnected,setIsConnected] = useState(false);
    
    useEffect(()=>{
        if(!roomId) setRoomId(uuid());
    },[]);

    useEffect(() => {
        // no-op if the socket is already connected
        socket.connect();
        setIsConnected(true);
        // send join req
        socket.emit("join",roomId);
        return () => {
          socket.disconnect();
        };
    }, [roomId]);
    
    return (
        <SocketContext.Provider value={{roomId,isConnected}}>
            {children}
        </SocketContext.Provider>
    );
}

export default function useSocket(){
    return useContext(SocketContext);
}