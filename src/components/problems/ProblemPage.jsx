import React from 'react'
import ProblemList from './ProblemList';
import Problems from './Problems';

const ProblemPage = () => {
  return (
    <div className="w-9/12 m-auto mt-20 mb-20 bg-[url('./src/assets/images/Newspaper_Yellow.jpg')] p-6">
        <div className='flex justify-between items-center border-b-2 border-amber-800 pb-4'>    
        <div className='font-serif text-sm'>
                Page 2 • Technology Section <br />
                Sunday, February 2025
            </div>
            <div className='text-7xl font-serif font-bold text-amber-900'>
                Problems
            </div>
            <div className='text-right font-serif text-sm'>
                The Codelashes Times <br />
                Vol. 127 • No. 365
            </div>
        </div>



        <div className="grid grid-cols-10 mt-6">
            <div className='col-span-7 border-2 border-amber-800 p-4'>
                <div>
                    <p className='text-xl font-serif text-amber-900'>When You Solve You</p>
                    <p className='text-4xl font-serif font-bold text-amber-900'>Ace The Rounds</p>
                    
                    <div className='my-4 italic text-sm border-l-4 border-amber-800 pl-3'>
                        Below are the good set of curated problems!
                    </div>
                    
                    <div className='grid grid-cols-10 gap-4'>
                        <div className='col-span-10 border-4 border-amber-800'>
                            <Problems />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col-span-3 bg-amber-100/60 p-4 ml-4'>
                <div>
                    <h3 className='font-serif font-bold text-amber-900 border-b-2 border-amber-800 pb-2'>
                        Quick Bytes
                    </h3>
                    <ul className='text-sm space-y-2 mt-2'>
                        <li>• Solve 5 problems, daily</li>
                        <li>• Weekly challenge starts soon</li>
                        <li>• Top solvers get special recognition</li>
                        <li>• Your strategic approach to solving these challenges will determine your technical prowess.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='mt-4 text-center text-xs font-serif border-t-2 border-amber-800 pt-2'>
            © 2025 The Codelashes Times • All Rights Reserved
        </div>
    </div>
  )
}

export default ProblemPage