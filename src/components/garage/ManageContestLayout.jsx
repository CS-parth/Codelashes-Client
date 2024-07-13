import React from 'react'
import { Outlet } from 'react-router-dom'
import ManageContestHeader from '../header/ManageContestHeader';
import ManageContestFooter from '../footer/ManageContestFooter';
const ManageContestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <ManageContestHeader />
        <div className="flex-grow">
          <Outlet />
        </div>
        <ManageContestFooter />
      </div>
  )
}

export default ManageContestLayout