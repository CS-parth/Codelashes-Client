import React from 'react'
import Contest from './Contest'
import ContestList from './ContestList'
const Contests = () => {
  return (
    <div className='flex flex-col justify-between text-center mt-10'>
        <div className='mt-10'>
          <h1 className='bg-black text-white w-9/12 m-auto text-2xl font-extrabold opacity-60 text-opacity-100 rounded-t-lg'> UpComing Contests </h1>          
          <ContestList passed={false}/>
        </div>
        <div className='mt-10'>
          <h1 className='bg-black text-white w-9/12 m-auto text-2xl font-extrabold opacity-60 text-opacity-100 rounded-t-lg'> Passed Contests </h1>
          <ContestList passed={true}/>
        </div>
    </div>
  )
}

export default Contests