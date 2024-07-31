import React from 'react'
import { useRankingQuery } from '../../../hooks/useRankingQuery';
import { useParams } from 'react-router-dom';
import { useContest } from '../../../context/ContestContext';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';
const Standing = () => {
  const {id} = useParams();
  const { data:RankingData, error:RankingError, isLoading:RankingisLoading } = useRankingQuery(id,{refetchOnWindowFocus: false});
  const {Contest,error:ContestError,isLoading:ContestisLoading} = useContest();
  if(RankingisLoading || ContestisLoading) return <div>Loading...</div>
  if(RankingError || ContestError) return <div>Request Failed</div>
  // console.log(data);
  const size = Contest.problems.length;
  return (
    <table className='w-9/12'>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Username</th>
        {Contest.problems.map((problem,index)=>(
          <th className='m-auto'>{String.fromCharCode("A".charCodeAt(0) + index)}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {RankingData.map((participant, index) => (
        <tr key={index}>
          <td className='text-center'>{participant.ranking}</td>
          <td className='text-center'>{participant.username}</td>
          {Contest.problems.map((problem,index)=>{
            if(participant[String.fromCharCode("A".charCodeAt(0) + index)]){
              return (<CheckBadgeIcon className='m-auto size-4 fill-[#22BB33]' />)
            }
          })}
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Standing