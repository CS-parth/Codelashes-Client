import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
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

  const updateUser = (username, email) => {
    setUser({ username, email });
  };
  
  const login = (username,email,password) => {
        fetch(`http://localhost:7700/api/auth/signin`, { 
                method:"POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body:JSON.stringify({username,email,password})})
                .then((res) => {
                    if(res.ok){
                        updateUser(username,email);
                        window.location.href = "/";
                    }
                })
                .catch(err=>console.error(err));
  };

  const logout = () => {
    fetch("http://localhost:7700/api/auth/logout",{
      method:"POST",
      credentials:"include"
    })
    .then((response) => {
      if (response.ok){
        updateUser(null, null);
        window.location.reload();
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
    const token = cookies.get("jwt");
    if(token){
      axios("http://localhost:7700/api/auth/user",{
        headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
       }}).then((res)=>{
            if(res.data.success){
              setUser(()=>({
                username: res.data.user.username,
                email: res.data.user.email
              }))
            }
          })
          .catch(err=>console.log(err));

    }
  },[])

  return (
    <SessionContext.Provider value={{ User, updateUser, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export default function useSession(){ // Custom hook using useContext
    return useContext(SessionContext)
}

