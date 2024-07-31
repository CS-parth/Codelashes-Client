import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ResultHeader from './header/ResultHeader'

const ResultLayout = () => {
    return (
    <>
        <ResultHeader/>
        <Outlet/>
    </>
  )
}

export default ResultLayout