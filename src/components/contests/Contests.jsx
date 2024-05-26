import React from 'react'
import Contest from './Contest'
import ContestList from './ContestList'
const Contests = () => {
  return (
    <div className='flex flex-col justify-between text-center mt-10'>
        <div className='mt-10'>
          <h1> UpComing Contests </h1>          
          <ContestList/>
        </div>
        <div className='mt-10'>
          <h1> Passed Contests </h1>
          <ContestList/>
        </div>
    </div>
  )
}

export default Contests