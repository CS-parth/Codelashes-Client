import React, { useState } from 'react'
import { Button,Description, Field, Input, Label } from '@headlessui/react'
import axios from 'axios';
import useUser from '../../context/SessionContext';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const {login} = useUser();
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const loginSubmitHandler = () => {
      login(username,email,password);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <div className='flex flex-col space-y-6'>
      <Field>
        <Label className="block text-sm font-medium text-gray-700">Name</Label>
        <Input 
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
          name="username" 
          type='text' 
          onChange={(e)=>setUsername(e.target.value)} 
          value={username}
          placeholder="Enter your username"
        />
      </Field>
      
      <Field>
        <Label className="block text-sm font-medium text-gray-700">Email</Label>
        <Input 
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
          name="email" 
          type='email' 
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          placeholder="you@example.com"
        />
      </Field>
      
      <Field>
        <Label className="block text-sm font-medium text-gray-700">Password</Label>
        <Input 
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
          name="password" 
          type='password' 
          onChange={(e)=>setPassword(e.target.value)} 
          value={password} 
          placeholder="Enter your password"
        />
      </Field>
      
      <Button 
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={loginSubmitHandler}
      >
        Sign In
      </Button>
    </div>
    <div className="text-sm text-center mt-4">
      Don't have an account?{' '}
      <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
        Sign up
      </a>
    </div>
  </div>
</div>
  )
}

export default Login