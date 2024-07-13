import { createContext, useContext, useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import moment from "moment";

export const ContestContext = createContext({
    Contest: {
        name: "",
        setters: [],
        date: "",
        startTime: "",
        time: "",
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
    const [Contest,setContest] = useState({name: null,setters:[],date:null,startTime:null,time:null,duration:null,problems:[]});
    const [isLoading,setisLoading] = useState(true);
    const [error,setError] = useState(null);
    const [isMeta,setIsMeta] = useState(false);
    const [isStarted,setIsStarted] = useState();
    const [isEnded,setIsEnded] = useState();


    // First : Fetch the meta data of the Contest and setIT
    // SEcond : SetUp event listerns for the startAndEnd events 
    // Third : try to set isStarted and isEnded accordingly (if I have the meta data) 
    // Fourth : Fetch the Contest (if isStarted)
    useEffect(()=>{
      if(id){
        console.log("Contest Id fetched");
        fetch(`http://localhost:7700/api/contest/meta/${id}`)
        .then(async res=>{
          const response = await res.json();
          if(res.ok){
            return response;
          }
          throw new Error(response.message);
        })
        .then((data)=>{
          const {name,setters,date,time,startTime,duration} = data;
          setContest((prevState)=>({
              ...prevState,
              name,
              setters,
              date,
              startTime,
              time,
              duration
          }));
          console.log("Successfully fetched meta data");
          setisLoading(false);
          setIsMeta(true);
        })
        .catch(err=>{
          setError(err.message);
        })
      }
    },[id])

    useEffect(()=>{
      function onContestStart(contestId){
        if(contestId == id){
          setIsStarted(true);
        }
      }
      function onContestEnd(contestId){
        if(contestId == id){
          setIsEnded(true);
        }
      }
      socket.on("contestStarted",onContestStart);
      socket.on("contestEnded",onContestEnd);
  
      return ()=>{
        socket.off("contestStarted",onContestStart);
        socket.off("contestEnded",onContestEnd);
      }
  
      },[]);
      // If the user opens the contest page exactly at the time of contest Start then it might possivle that id will come later after the event listerner listnes for the startContest event it that case id will be null so in this case below useEffect can help us
      useEffect(()=>{ // if the user open the contest page during or after the contestStart (time>=contestStart)
        if(isMeta){
            // check contest time and
            const currentTime = moment();
            const contestStartTime = moment(Contest.startTime);
            console.log(contestStartTime);
            console.log(currentTime);
            if (currentTime.isAfter(contestStartTime)) {
              console.log("isStarted setted")
              setIsStarted(true);
            }else{
              console.log("Contest Not Started yet")
            }
        }
      },[isMeta]);


    useEffect(()=> {
      if(isStarted){
        setError(null);  
        setisLoading(true);
        fetch(`http://localhost:7700/api/contest/${id}`)
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