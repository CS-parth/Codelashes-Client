import React from 'react'
import { useParams } from 'react-router-dom'
import { useEditorialQuery } from '../../../hooks/useEditorialQuery';
import parse from 'html-react-parser';
import { CopyBlock, dracula } from 'react-code-blocks';
const ProblemEditorial = () => {
  const {pid} = useParams();
  const {data,isLoading,error} = useEditorialQuery(pid,{refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,});
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>{error.message}</div>
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-6">Editorial</h1>
    <div>   
        <ul class="max-w-2xl mx-auto mt-20 divide-y  shadow shadow-gray-900 rounded-xl">
            <li>
                <details class="group">
                    <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                        <span>Solution</span>
                    </summary>
        
                    <article class="px-4 pb-4">
                        <p>
                            <div className='bg-[#282A36] rounded-md p-5 text-white'>{parse(data.solution)}</div>
                        </p>
                    </article>
                </details>
            </li>
            <li>
                <details class="group">
                    <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                        <span>Code</span>
                    </summary>
        
                    <article class="px-4 pb-4">
                        <CopyBlock
                            text={data.code}
                            language={data.language}
                            theme={dracula}
                            codeBlock
                        />
                    </article>
                </details>
            </li>
        </ul>
    </div>
  </div>
  )
}

export default ProblemEditorial