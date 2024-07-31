import React, { useEffect } from 'react';
import { useThreads } from "@liveblocks/react";
import { Composer, Thread } from "@liveblocks/react-ui";

export default function Discuss() {
  useEffect(() => {
    console.log("Discuss component rendered");
  }, []);

  // const { threads } = useThreads();

  return (
    <div>
      {/*threads?.map((thread) => (
        <Thread className='m-5' key={thread.id} thread={thread} />
      ))*/}
      {/*<Composer className='m-5' />*/}
    </div>
  );
}