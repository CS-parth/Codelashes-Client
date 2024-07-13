import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useMetaContestQuery } from '../../hooks/useMetaContestQuery';
const ManageContestTop = () => {
  
  const { id } = useParams();
  const { data, error, isLoading } = useMetaContestQuery(id,{});

  if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      
    </div>
  )
}

export default ManageContestTop