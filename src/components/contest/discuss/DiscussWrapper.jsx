import React, { Suspense, useEffect } from 'react';

import Discuss from './Discuss';
import { useContest } from '../../../context/ContestContext';
import "@liveblocks/react-ui/styles.css";

import {
    LiveblocksProvider,
    RoomProvider,
} from "@liveblocks/react";

export default function DiscussWrapper() {
  const {Contest,isLoading,error} = useContest();
  if(isLoading) return <div>Loading ...</div>
  if(error) return <div>Request Failed</div>
//   console.log(Contest);
  return (
    // <RoomProvider id={Contest._id}>
        // <Suspense fallback={<div>Loading…</div>}>
            <Discuss />
        // </Suspense>
    // </RoomProvider>
  );
}