import React,{useState,useEffect, version} from 'react'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layouts/MainLayout.jsx';
import Home from './components/home/Home.jsx'
import Contests from './components/contests/Contests.jsx'
import Blogs from './components/blogs/Blogs.jsx';
import Problems from './components/problems/Problems.jsx';
import SolveProblem from './components/problems/SolveProblem';
import { SessionContextProvider } from './context/SessionContext.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import ContestLayoutWrapper from './components/layouts/ContestLayoutWrapper.jsx'
import Task from './components/task/Tasks.jsx';
import Discuss from './components/discuss/Discuss.jsx';
import Editorial from './components/editorial/Editorial.jsx';
import Submit from './components/submit/Submit.jsx';
import Results from './components/results/Results.jsx';
import Standing from './components/standing/Standing.jsx';
import SolveContest from './components/contests/SolveContest.jsx';
import ContestLayout from './components/layouts/ContestLayout.jsx';
import ContestContextProvider from './context/ContestContext.jsx';
import SolveProblemWrapper from './components/problems/SolveProblemWrapper.jsx'
import { socket } from './socket/socket.js';
import { v4 as uuid } from 'uuid'
import { SocketContextProvider } from './context/SocketContext.jsx';
import ResultLayout from './components/layouts/ResultLayout.jsx';
import MySubmissions from './components/results/MySubmissions.jsx';
import AllSubmissions from './components/results/AllSubmissions.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="problems" element={<Problems />} />
        <Route path="contests" element={<Contests />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      // <Route path="problems/:id" element={<SolveProblemWrapper />} />
      <Route path="contests/:id" element={<ContestLayoutWrapper />}>
        <Route index element={<SolveContest />} />
        <Route path="task" element={<Task />} />
        <Route path="task/:pid" element={<SolveProblemWrapper />} />
        <Route path="submit" element={<Submit />} />
        <Route path="results" element={<ResultLayout />}>
          <Route index element={<MySubmissions/>}/>
          <Route path="all" element={<AllSubmissions/>}/>
        </Route>
        <Route path="standings" element={<Standing />} />
        <Route path="editorial" element={<Editorial />} />
        <Route path="discuss" element={<Discuss />} />
      </Route>

      </>
  )
);

const App = () => {

  return (
      <SessionContextProvider>
        <SocketContextProvider>
          <RouterProvider router={router}/>
        </SocketContextProvider>
      </SessionContextProvider>
    )
}

export default App 