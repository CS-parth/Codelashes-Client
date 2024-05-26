import React from 'react'
import Contest from './Contest'
const ContestList = () => {
    // useEffect hook for the fetching part
  return (
    <div>
        <table className='w-9/12 m-auto'>
             <thead>
                <tr>
                    <th>Name</th>
                    <th>Setters</th>
                    <th>Date & Time</th>
                    <th>Duration</th>
                    <th>-</th>
                </tr>
             </thead>
             <tbody>
                <Contest name={"Codeforces Round 946 (Div. 3)"}
                         setters={["parth","himanshu","sushant","gaurav"]}
                         date={"May/06/2024"}
                         time={"20:30" + "UTC+5.5".sup()}
                         duration={"2 hrs"}
                />
            </tbody>
        </table>
    </div>
  )
}

export default ContestList