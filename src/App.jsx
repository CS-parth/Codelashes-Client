import React,{useState,useEffect, version} from 'react'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from './components/layouts/MainLayout.jsx';
import Home from './components/home/Home.jsx'
import Contests from './components/top/Contests.jsx'
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
import SolveContest from './components/top/SolveContest.jsx';
import ContestLayout from './components/layouts/ContestLayout.jsx';
import ContestContextProvider from './context/ContestContext.jsx';
import SolveProblemWrapper from './components/problems/SolveProblemWrapper.jsx'
import { socket } from './socket/socket.js';
import { v4 as uuid } from 'uuid'
import { SocketContextProvider } from './context/SocketContext.jsx';
import ResultLayout from './components/layouts/ResultLayout.jsx';
import MySubmissions from './components/results/MySubmissions.jsx';
import AllSubmissions from './components/results/AllSubmissions.jsx';
import CreateContest from './components/garage/CreateContest.jsx';
import ManageContestLayout from './components/layouts/ManageContestLayout.jsx';
import ManageContestCreateProblem from './components/garage/ManageContestCreateProblem.jsx';
import ManageContestSettings from './components/garage/ManageContestSettings.jsx';
import ManageContestTop from './components/garage/ManageContestTop.jsx';
import SubmitWrapper from './components/submit/SubmitWrapper.jsx';
import { ManageContest } from './components/garage/ManageContest.jsx';
import GarageLayout from './components/layouts/GarageLayout.jsx'
import Garage from './components/garage/Garage.jsx'
import UpdateContestLayout from './components/layouts/UpdateContestLayout.jsx';
import UpdateProblem from './components/garage/UpdateProblem.jsx';
import UpdateContest from './components/garage/UpdateContest.jsx';
import EditProblem from './components/garage/EditProblem.jsx';
import Sessions from './components/sessions/Sessions.jsx'
import ManageContestEditorial from './components/garage/ManageContestEditorial.jsx';
import ManageContestAddEditorial from './components/garage/ManageContestAddEditorial.jsx';
import ProblemEditorial from './components/editorial/ProblemEditorial.jsx';
import CreateBlog from './components/garage/CreateBlog.jsx';
import Contest from './components/Profile/ProfileContests.jsx'
import {
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react";
import DiscussWrapper from './components/discuss/DiscussWrapper.jsx';
import Profile from './components/Profile/Profile.jsx';
import ProfileLayout from './components/layouts/ProfileLayout.jsx';
import ProfileContests from './components/Profile/ProfileContests.jsx';
import ProfileSubmissions from './components/Profile/ProfileSubmissions';
import AuthWrapper from './utils/AuthWrapper.jsx'
import {ManageBlog} from './components/garage/ManageBlog.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="problems" element={<Problems />} />
        <Route path="contests" element={<Contests />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="sessions" element={<Sessions />} />
        <Route path="garage" element={
          <AuthWrapper >
            <Garage/>
          </AuthWrapper>
        } />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='/profile/:username' element={<ProfileLayout/>}>
        <Route index element={<Profile/>}/>
        <Route path='contests' element={<ProfileContests/>}/>
        <Route path='submissions' element={<ProfileSubmissions/>}/>
      </Route>
      <Route path="contests/:id" element={<ContestLayoutWrapper />}>
        <Route index element={<SolveContest />} />
        <Route path="task" element={<Task />} />
        <Route path="task/:pid" element={<SolveProblemWrapper />} />
        <Route path="submit" element={<SubmitWrapper />} />
        <Route path="results" element={<ResultLayout />}>
          <Route index element={<MySubmissions/>}/>
          <Route path="all" element={<AllSubmissions/>}/>
        </Route>
        <Route path="standings" element={<Standing />} />
        <Route path="editorial" element={<Editorial />} />
        <Route path="discuss" element={<DiscussWrapper />} />
        <Route path="editorial/:pid" element={<ProblemEditorial />} />
      </Route>
      <Route path='/garage' element={
        <AuthWrapper >
          <GarageLayout/>
        </AuthWrapper>
      }>
        <Route path='contest/create' element={<CreateContest/>}/>
        <Route path='contest/manage' element={<ManageContest/>}/>
        <Route path='blog/create' element={<CreateBlog/>}/>
        <Route path='blog/manage' element={<ManageBlog/>}/>
      </Route>
      <Route path="garage/contest/manage/:id" element={
        <AuthWrapper>
          <ManageContestLayout/>
        </AuthWrapper>
        }>
        <Route index element={<ManageContestTop/>}/>
        <Route path="create" element={<ManageContestCreateProblem/>}/>
        <Route path="update" element={<ManageContestSettings/>}/>
        <Route path="editorial" element={<ManageContestEditorial/>}/>
        <Route path="editorial/:pid" element={<ManageContestAddEditorial/>}/>
      </Route>
      <Route path='garage/contest/manage/:id/update' element={
        <AuthWrapper>
        <UpdateContestLayout/>
        </AuthWrapper>
        }>
          <Route path='problem' element={<UpdateProblem/>}/>
          <Route path='contest' element={<UpdateContest/>}/>
          <Route path='problem/:pid' element={<EditProblem/>}/>
      </Route>
      <Route path='*' element={<Home/>} />
    </>
  )
);

const App = () => {
  return (
      <SessionContextProvider>
        <SocketContextProvider>
          {/*<LiveblocksProvider publicApiKey="pk_prod_Aco82ZiLMLrlNuXfkTsU70irb5LKoZpqJ1myTIGtrgxGR1agSNwmc0FlkHzJuGJK">*/}
              <RouterProvider router={router}/>
          {/*</LiveblocksProvider>*/}
        </SocketContextProvider>
      </SessionContextProvider>
    )
}

export default App 