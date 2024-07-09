import { createContext, useContext, useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
export const ContestContext = createContext({
    Contest: {
        name: "",
        setters: [],
        date: "",
        time: "",
        duration: "",
        problems: []
    },
    isLoading : true,
    error : false,
});

export const ContestProvider = ContestContext.Provider;
// Creating a Wrapper Component
const ContestContextProvider = ({children})=>{
    const { id } = useParams();
    const [Contest,setContest] = useState({name: null,setters:[],date:null,time:null,duration:null,problems:[]});
    const [isLoading,setisLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=> {
      setError(null);  
      setisLoading(true);
      fetch(`http://localhost:7700/api/contest/${id}`)
      .then(async (res)=>{
        // console.log(res);
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
    },[id])
    return (
        <ContestContext.Provider value={{ Contest,isLoading,error }}>
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