import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header';
import Footer from './footer/Footer';
const ManageContestLayout = () => {
  const list = [
    {title:"Top",nav:""},
    {title:"Add Problem",nav:"create"},
    {title:"Add Editorial",nav:"editorial"},
    {title:"Setting",nav:"update"}
  ]
  return (
    <div className="flex flex-col min-h-screen">
        <Header color={"black"} list={list}/>
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer color={"black"}/>
      </div>
  )
}

export default ManageContestLayout