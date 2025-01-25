import React from 'react'
import Contest from './Contest'
import ContestList from './ContestList'
import Dunk from '../../../assets/images/Dunk.png'

const Contests = () => {
  return (
    <div className="w-9/12 m-auto mt-20 mb-20 bg-amber-50 p-6 bg-[url('/src/assets/images/Newspaper_Yellow.jpg')]">
      <div className='flex justify-between items-center border-b-2 border-amber-800 pb-4'>
        <div className='font-serif text-sm'>
          Page 3 • Competitions Section <br />
          Sunday, February 2025
        </div>
        <div className='text-7xl font-serif font-bold text-amber-900'>
          Coding Contests
        </div>
        <div className='text-right font-serif text-sm'>
          The Codelashes Times <br />
          Vol. 127 • No. 365
        </div>
      </div>
      <div className='grid grid-cols-10 mt-10'>
          <div className='col-span-8'>
            <div className='bg-amber-100/60 p-4 border-l-4 border-amber-800 mb-6'>
            <h2 className='font-serif text-2xl font-bold text-amber-900 mb-3'>
              Upcoming Contests
            </h2>
            <p className='text-sm italic mb-4'>
              Participate in the contest to improve rating !
            </p>
            <div className='border-2 border-amber-800 rounded-lg'>
              <ContestList passed={false} />
            </div>
          </div>
          <div className='bg-amber-100/60 p-4 border-l-4 border-amber-800 mb-6'>
            <h2 className='font-serif text-2xl font-bold text-amber-900 mb-3'>
              Past Contests
            </h2>
            <p className='text-sm italic mb-4'>
              Upsolve the post contests to learn new techniques !
            </p>
            <div className='border-2 border-amber-800 rounded-lg'>
              <ContestList passed={true} />
            </div>
          </div>
        </div>
          <div className='col-span-2'>
              <div className='mt-36 text-9xl font-extrabold text-amber-900 transform rotate-90 tracking-widest flex'>
                {['C','O','N','Q','U','E','R'].map((letter, index) => (
                  <div key={index} className='mb-2'>{letter}</div>
                ))}
          </div>
        </div>
       </div>

      <div className='mt-4 text-center text-xs font-serif border-t-2 border-amber-800 pt-2'>
        © 2025 The Codelashes Times • All Rights Reserved
      </div>
    </div>
  )
}

export default Contests