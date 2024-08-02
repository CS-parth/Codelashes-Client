import React from 'react'
import SolvePicture from '../../assets/images/Solve.png'
import Banner from '../../assets/images/Yellow_banner.png'
import Failed from '../../assets/images/failed.png'
import Editorial from '../../assets/images/Editorial.png'
import Contest from '../../assets/images/Contest.png'
import Discuss from '../../assets/images/Discuss.png'
import Blog from '../../assets/images/Blog.png'
const Home = () => {
  return (
    <>
    <div
      className="bg-bar_base_dark opacity-60 my-10 border-y-white border-y-2">
        <div className='py-10 text-7xl m-5 p-5 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-black font-bold'>Elevate Your Coding Skills with Codelashes.</div>
      </div>
      <div className='m-auto w-9/12 my-5'>
        <div className='bg-bar_base h-4 rounded-t-md'></div>
        <div className='bg-white h-2'></div>
        <div className='flex flex-row bg-bar_base_dark opacity-60'>
          <p className='my-auto text-2xl px-4 font-extrabold'>Tackle Challenges by Difficulty Level in the Problems Section</p>
          <img src={SolvePicture} className='h-40'/>
        </div>
      </div>
      <div className='m-auto w-9/12 my-5'>
        <div className='bg-bar_base h-4 rounded-t-md'></div>
        <div className='bg-white h-2'></div>
        <div className='flex flex-row bg-bar_base_dark opacity-60'>
          <img src={Failed} className='h-40'/>
          <p className='my-auto text-2xl font-extrabold'>On Wrong Submission, Review the Failed Test Case and Brainstorm to Debug Your Code</p>
        </div>
      </div>
      <div className='m-auto w-9/12 my-5'>
        <div className='bg-bar_base h-4 rounded-t-md'></div>
        <div className='bg-white h-2'></div>
        <div className='flex flex-row bg-bar_base_dark opacity-60'>
        <p className='my-auto text-2xl font-extrabold'>Upon Failure, Review the Editorials to Understand Key Concepts</p>
        <img src={Editorial} className='h-40'/>
        </div>
      </div>
      <div className='m-auto w-9/12 my-5'>
        <div className='bg-bar_base h-4 rounded-t-md'></div>
        <div className='bg-white h-2'></div>
        <div className='flex flex-row bg-bar_base_dark opacity-60'>
        <img src={Contest} className='h-40'/>
        <p className='my-auto text-2xl font-extrabold'>Regularly Participate in Contests to Enhance Your Skills and Climb the Leaderboard!</p>
        </div>
      </div>
      <div className='m-auto w-9/12 my-5'>
        <div className='bg-bar_base h-4 rounded-t-md'></div>
        <div className='bg-white h-2'></div>
        <div className='flex flex-row bg-bar_base_dark opacity-60'>
        <p className='my-auto text-2xl font-extrabold'>Join the Post-Contest Discussion and Sharpen Your Strategies!</p>
          <img src={Discuss} className='h-40'/>
        </div>
      </div>
      <div className='m-auto w-9/12 my-5'>
        <div className='bg-bar_base h-4 rounded-t-md'></div>
        <div className='bg-white h-2'></div>
        <div className='flex flex-row bg-bar_base_dark opacity-60'>
        <img src={Blog} className='h-40'/>
        <p className='my-auto text-2xl font-extrabold'>Explore Insightful Blogs by Our Problem Setters</p>
        </div>
      </div>
    </>
  )
}

export default Home;