import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const SessionContext  = createContext({
    Session: {
        "usernname": null,
        "email": null
    },
    updateUser: () => {},
    login : () => {},
    logout : () => {}
})

export const SessionProvider = SessionContext.Provider; // Just working as a variable for ContextProvider (for Just Parent Components)

export const SessionContextProvider = ({ children }) => {
  const [User, setUser] = useState({ username: null, email: null });
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  const updateUser = (username, email) => {
    setUser({ username, email });
  };
  
  const login = (username,email,password) => {
        fetch(`https://codelashes-server.onrender.com/api/auth/signin`, { 
                method:"POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body:JSON.stringify({username,email,password})})
                .then(async (res) => {
                    const response = await res.json();
                    if(res.ok){
                        updateUser(username,email);
                        setIsLoading(false);
                        window.location.href = "/";
                    }else{
                      throw new Error(response.message);
                    }
                })
                .catch(err=>{
                  setError(err);
                  isLoading(false);
                });
  };

  const logout = () => {
    fetch("https://codelashes-server.onrender.com/api/auth/logout",{
      method:"POST",
      credentials:"include"
    })
    .then((response) => {
      if (response.ok){
        updateUser(null, null);
        window.location.href = "/login";
      } else {
        console.error('Logout was not successful');
      }
    })
    .catch(error => {
      console.error('Logout failed:', error);
    });
  };

  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(User));
  },[User]);

  useEffect(() => {
    // Run updateUser() and get the user details and set it to User
    fetch("https://codelashes-server.onrender.com/api/auth/user",{
      headers: {
      'Content-Type': 'application/json'
      },
      credentials:'include'
    })
    .then((res)=>{
      if(res.data.success){
        setUser(()=>({
          username: res.data.user.username,
          email: res.data.user.email
        }))
        setIsLoading(false);
      }
    })
    .catch(err=>console.log(err));
  },[])

  return (
    <SessionContext.Provider value={{ User, updateUser, login, logout, isLoading, error }}>
      {children}
    </SessionContext.Provider>
  );
};

export default function useSession(){ // Custom hook using useContext
    return useContext(SessionContext)
}

