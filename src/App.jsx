import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx'
import Contests from './components/contests/Contests.jsx'
import Blogs from './components/blogs/Blogs.jsx';
import Problems from './components/problems/Problems.jsx';
import SolveProblem from './components/problems/SolveProblem';
import { UserContextProvider } from './context/UserContext.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path='problems' element={<Problems />} />
        <Route path='contests' element={<Contests />}/>
        <Route path='blogs' element={<Blogs />}/>
      </Route>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />}/>
      <Route path="problems/:id" element={<SolveProblem/>}></Route>
    </>
  )
);

const App = () => {
  return (
    <UserContextProvider>
          <RouterProvider router={router}/>
    </UserContextProvider>
  )
}

export default App 