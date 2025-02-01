import React from 'react'
import {useAllBlogsQuery} from '../../hooks/useAllBlogsQuery'
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';

const Blogs = () => {
  const {data, isLoading, error} = useAllBlogsQuery({refetchOnWindowFocus: false});
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Request Failed</div>
  return (
    <div className="w-9/12 m-auto mt-20 mb-20 bg-[url('/src/assets/images/Newspaper_Yellow.jpg')] p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b-2 border-amber-800 pb-4">
        <div className="font-serif text-sm">
          Page 4 • Blog Section <br />
          Sunday, February 2025
        </div>
        <div className="text-7xl font-serif font-bold text-amber-900">
          Blogs
        </div>
        <div className="text-right font-serif text-sm">
          The Codelashes Times <br />
          Vol. 127 • No. 365
        </div>
      </div>

      {/* Advertisement Section with enhanced styling */}
      <div className="mt-6 relative">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-800"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-800"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-800"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-800"></div>
        
        <div className="grid grid-cols-3 gap-4 p-2">
          <div className="col-span-2 border-2 border-dotted border-amber-800 p-4 h-40 relative">
            {/* Decorative border for large ad */}
            <div className="absolute inset-0 m-2 border border-amber-800/30"></div>
            <div className="text-center font-serif relative">
              <p className="text-3xl font-bold text-amber-900">Featured Advertisement</p>
              <div className="my-2 border-t border-amber-800/40 mx-8"></div>
              <p className="text-xl italic">Xor_Begin | This is a pilot course in competitive programming to check what format will be the most convenient and useful. The course will contain a set of lessons on various topics related to competitive programming.</p>
            </div>
          </div>
          
          <div className="border-2 border-dotted border-amber-800 p-4 h-40 relative">
            {/* Decorative border for small ad */}
            <div className="absolute inset-0 m-2 border border-amber-800/30"></div>
            <div className="text-center font-serif relative">
              <p className="text-2xl font-bold text-amber-900">Ad Space</p>
              <div className="my-2 border-t border-amber-800/40 mx-4"></div>
              <p className="text-xl italic">Community Course | This course contains a series of lessons that are prepared by community enthusiasts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative separator */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-amber-800"></div>
        <div className="mx-4 text-amber-800">✦</div>
        <div className="flex-grow border-t border-amber-800"></div>
      </div>

      {/* Main Blog Section */}
      <div className="grid grid-cols-4 gap-4">
        {/* Left Small Blogs */}
        <div className="space-y-4">
          <div className="border-2 border-amber-800 p-4 relative">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-800"></div>
            <p className="text-xl font-serif font-bold text-amber-900">{data[1].title}</p>
            <p className="text-sm italic text-amber-800 mt-1">By {data[1].author.username}</p>
            <p className="text-lg mt-2">Latest implementation of two-pointers suggests...</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-amber-800">5 min read</p>
              <button className="border border-amber-800 px-3 py-1 text-xs font-serif hover:bg-amber-100"><NavLink to="/">Read More</NavLink></button>
            </div>
          </div>
          <div className="border-2 border-amber-800 p-4 relative">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-800"></div>
            <p className="text-xl font-serif font-bold text-amber-900">{data[2].title}</p>
            <p className="text-sm italic text-amber-800 mt-1">By {data[2].author.username}</p>
            <p className="text-lg mt-2">Guide to professional suffix summing...</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-amber-800">3 min read</p>
              <button className="border border-amber-800 px-3 py-1 text-xs font-serif hover:bg-amber-100"><NavLink to="/">Read More</NavLink></button>
            </div>
          </div>
        </div>

        {/* Hero Blog */}
        <div className="col-span-2 border-2 border-amber-800 p-4 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-800"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-800"></div>
          <div className="text-center">
            <p className="text-8xl font-serif font-bold text-amber-900">{data[0].title}</p>
            <div className="my-4 border-t border-amber-800/40 mx-16"></div>
            <p className="text-lg italic text-amber-800 mt-2">By {data[0].author.username}</p>
            <p className="text-lg mt-4">Exploring the revolutionary tips in solving the problems involving segment tree sum...</p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <p className="text-sm text-amber-800">10 min read</p>
              <button className="border-2 border-amber-800 px-4 py-2 text-sm font-serif hover:bg-amber-100"><NavLink to="/">Read Full Article</NavLink></button>
            </div>
          </div>
        </div>

        {/* Right Small Blogs */}
        <div className="space-y-4">
          <div className="border-2 border-amber-800 p-4 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-800"></div>
            <p className="text-xl font-serif font-bold text-amber-900">{data[3].title}</p>
            <p className="text-sm italic text-amber-800 mt-1">By {data[3].author.username}</p>
            <p className="text-lg mt-2">Latest frameworks and tools for implementing DSU...</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-amber-800">4 min read</p>
              <button className="border border-amber-800 px-3 py-1 text-xs font-serif hover:bg-amber-100"><NavLink to="/">Read More</NavLink></button>
            </div>
          </div>
          <div className="border-2 border-amber-800 p-4 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-800"></div>
            <p className="text-xl font-serif font-bold text-amber-900">{data[4].title}</p>
            <p className="text-sm italic text-amber-800 mt-1">By {data[4].author.username}</p>
            <p className="text-lg mt-2">Best practices for writing Binary Search...</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-amber-800">6 min read</p>
              <button className="border border-amber-800 px-3 py-1 text-xs font-serif hover:bg-amber-100"><NavLink to="/">Read More</NavLink></button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative separator */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-amber-800"></div>
        <div className="mx-4 text-amber-800">✦</div>
        <div className="flex-grow border-t border-amber-800"></div>
      </div>

      {/* Bottom Blog Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-amber-800 p-4 relative">
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-800"></div>
          <p className="font-serif font-bold text-amber-900 text-xl">{data[5].title}</p>
          <p className="text-sm italic text-amber-800 mt-1">By {data[5].author.username}</p>
          <p className="text-lg mt-2">Exploring the right way to approach a construction problem...</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-amber-800">8 min read</p>
            <button className="border-2 border-amber-800 px-4 py-2 text-sm font-serif hover:bg-amber-100"><NavLink to="/">Read Full Article</NavLink></button>
          </div>
        </div>
        <div className="border-2 border-amber-800 p-4 relative">
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-800"></div>
          <p className="font-serif font-bold text-amber-900 text-xl">{data[6].title}</p>
          <p className="text-sm italic text-amber-800 mt-1">By {data[6].author.username}</p>
          <p className="text-lg mt-2">Recent breakthroughs in binary lifting and their practical applications...</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-amber-800">7 min read</p>
            <button className="border-2 border-amber-800 px-4 py-2 text-sm font-serif hover:bg-amber-100"><NavLink to="/">Read Full Article</NavLink></button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-xs font-serif border-t-2 border-amber-800 pt-2">
        © 2025 The Codelashes Times • All Rights Reserved
      </div>
    </div>
  )
}

export default Blogs