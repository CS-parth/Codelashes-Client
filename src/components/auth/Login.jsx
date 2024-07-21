import React, { useState } from 'react'
import { Button,Description, Field, Input, Label } from '@headlessui/react'
import axios from 'axios';
import useUser from '../../context/SessionContext';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();
const Login = () => {
  const navigate = useNavigate();
  const {updateUser,login} = useUser();
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const loginSubmitHandler = () => {
        login(username,email,password);
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