import React, { useState } from 'react'
import { Button,Description, Field, Input, Label } from '@headlessui/react'
import axios from 'axios';
import useUser from '../../context/SessionContext';
import  { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

const Login = () => {
  const {updateUser} = useUser();
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const loginSubmitHandler = () =>{
        axios.post(`http://localhost:770/api/auth/signup`, { username,email,password })
             .then((res) => {
                if(res.data.success){
                    updateUser(username,email);
                    cookies.set('jwt',res.data.token,{path:'/'})
                    navigate("/");
                }
             })
             .catch(err=>console.error(err));
  }
  return (
    <div className='flex flex-col items-center justify-between'>
            <Field>
            <Label className="block">Name</Label>
            <Input className="border data-[hover]:shadow data-[focus]:bg-red-100" name="username" type='text' onChange={(e)=>setUsername(e.target.value)} value={username}></Input>
            </Field>
            
            <Field>
            <Label className="block">Email</Label>
            <Input className="border data-[hover]:shadow data-[focus]:bg-red-100" name="email" type='email' onChange={(e)=>setEmail(e.target.value)}
            value={email}></Input>
            </Field>
            
            <Field>
            <Label className="block">Password</Label>
            <Input className="border data-[hover]:shadow data-[focus]:bg-red-100" name="password" type='password' onChange={(e)=>setPassword(e.target.value)} value={password} ></Input>
            </Field>
            
            <Button className="mt-5 rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700" onClick={loginSubmitHandler}>
            Save changes
          </Button>
        </div>
  )
}

export default Login