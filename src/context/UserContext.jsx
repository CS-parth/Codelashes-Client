import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
export const UserContext  = createContext({
    User: {
        "username": null,
        "email": null
    },
    updateUser: () => {},
    login : () => {},
    logout : () => {}
})

export const UserProvider = UserContext.Provider; // Just working as a variable for ContextProvider (for Just Parent Components)

export const UserContextProvider = ({ children }) => {
  const [User, setUser] = useState({ username: null, email: null });

  const updateUser = (username, email) => {
    setUser({ username, email });
  };
  
  const login = (username,email,password) => {
    axios.post(`http://localhost:7700/api/auth/signin`, { username,email,password })
             .then((res) => {
                if(res.data.success){
                    updateUser(username,email);
                    cookies.set('jwt',res.data.token,{path:'/'})
                    navigate("/");
                }
             })
             .catch(err=>console.error(err));
  };

  const logout = () => {
    updateUser(null,null);
    cookies.remove('jwt');
  }

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
              setUser({...res.data.user})
            }
          })
          .catch(err=>console.log(err));

    }
  },[])

  return (
    <UserContext.Provider value={{ User, updateUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useUser(){ // Custom hook using useContext
    return useContext(UserContext)
}

