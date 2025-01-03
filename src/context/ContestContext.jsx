import { createContext, useContext, useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import moment from "moment";

export const ContestContext = createContext({
    Contest: {
        _id:"",
        title: "",
        setters: [],
        startDate: "",
        startTime: "",
        endDate:"",
        duration: "",
        problems: []
    },
    isLoading : true,
    error : false,
});
import {socket} from '../socket/socket'

export const ContestProvider = ContestContext.Provider;
// Creating a Wrapper Component
const ContestContextProvider = ({children})=>{
    const { id } = useParams();
    const [Contest,setContest] = useState({title: null,setters:[],startDate:null,startTime:null,endDate:null,duration:null,problems:[]});
    const [isLoading,setisLoading] = useState(true);
    const [error,setError] = useState(null);
    const [isMeta,setIsMeta] = useState(false);
    const [isStarted,setIsStarted] = useState(false);
    const [isEnded,setIsEnded] = useState(false);


    // First : Fetch the meta data of the Contest and setIT
    // SEcond : SetUp event listerns for the startAndEnd events 
    // Third : try to set isStarted and isEnded accordingly (if I have the meta data) 
    // Fourth : Fetch the Contest (if isStarted)
    useEffect(()=>{
      const API_URL = process.env.NODE_ENV === 'production' 
      ? 'https://codelashes-server-lcxc.onrender.com'
      : 'http://localhost:7700';
      if(id){
        fetch(`${API_URL}/api/contest/meta/${id}`)
        .then(async res=>{
          const response = await res.json();
          if(res.ok){
            return response;
          }
          throw new Error(response.message);
        })
        .then((data)=>{
          const {name,setters,startDate,startTime,endDate,duration} = data;
          setContest((prevState)=>({
              ...prevState,
              _id:id,
              name,
              setters,
              startDate,
              startTime,
              endDate,
              duration
          }));
          setisLoading(false);
          setIsMeta(true);
        })
        .catch(err=>{
          setError(err.message);
        })
      }
    },[id])

    useEffect(()=>{
      function onContestStart(obj){
        if(obj.contestId == id){
          console.log("isStarted Setted");
          setIsStarted(true);
        }
      }
      function onContestEnd(obj){
        if(obj.contestId == id){
          setIsEnded(true);
        }
      }
      socket.on("contestStarted",onContestStart);
      socket.on("contestEnded",onContestEnd);
  
      return ()=>{
        console.log("Remove of contest Listerners");
        socket.off("contestStarted",onContestStart);
        socket.off("contestEnded",onContestEnd);
      }
  
      },[]);
      // If the user opens the contest page exactly at the time of contest Start then it might possivle that id will come later after the event listerner listnes for the startContest event it that case id will be null so in this case below useEffect can help us
      useEffect(()=>{ // if the user open the contest page during or after the contestStart (time>=contestStart)
        if(isMeta){
            // check contest time and
            const [hours, minutes] = Contest.startTime.split(':').map(Number);
            const contestStartTime = moment(Contest.startDate,"ddd MMM DD YYYY HH:mm:ss Z");
            const contestEndTime = moment(Contest.endDate,"ddd MMM DD YYYY HH:mm:ss Z");
            if(moment().isAfter(contestEndTime)){
              setIsEnded(true);
              setIsStarted(true);
            }else if(moment().isAfter(contestStartTime)) {
              setIsStarted(true);
            }
        }
      },[isMeta]);


    useEffect(()=> {
      const API_URL = process.env.NODE_ENV === 'production' 
      ? 'https://codelashes-server-lcxc.onrender.com'
      : 'http://localhost:7700';
      if(isStarted){
        setError(null);  
        setisLoading(true);
        fetch(`${API_URL}/api/contest/${id}`)
        .then(async (res)=>{
          console.log(res);
          if(!res.ok){
            const response = await res.json();
            throw new Error(`${response.message}`);
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setContest(data);
          setisLoading(false);
        })
        .catch(err=>{
          // console.log(err);
          setError(err.message);
          setisLoading(false);
        })
      }
    },[isStarted])

    return (
        <ContestContext.Provider value={{ Contest,isLoading,error,isStarted,isEnded }}>
            {children}
        </ContestContext.Provider>
    )
}

export const useContest = function(){
  const context = useContext(ContestContext);
  if (context === undefined) {
      throw new Error('useContest must be used within a ContestContextProvider');
  }
  return context;
};

export default ContestContextProvider;