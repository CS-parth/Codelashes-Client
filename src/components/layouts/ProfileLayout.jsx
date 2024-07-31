import React from 'react'
import Footer from '../footer/Footer';
import { Outlet, NavLink } from 'react-router-dom';
import ProfileHeader from '../header/ProfileHeader';
import useSession from '../../context/SessionContext';

const ProfileLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <ProfileHeader/>
        <div className='flex flex-row flex-start text-white gap-6 w-9/12 m-auto px-2 py-1 bg-black mt-8 rounded-t-md'>
          <NavLink to={""}><div>Profile</div></NavLink>
          <NavLink to={"contests"}><div>Contests</div></NavLink>
          <NavLink to={"submissions"}><div>Submissions</div></NavLink>
        </div>
            <div className='flex-grow'>
                <Outlet/>
            </div>
        <Footer color={"black"}/>
    </div>
  )
}

export default ProfileLayout