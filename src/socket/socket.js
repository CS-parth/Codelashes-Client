import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' 
  ? 'https://codelashes-server-lcxc.onrender.com'
  : 'http://localhost:4000';
  
export const  socket = io(URL,{autoConnect:false});