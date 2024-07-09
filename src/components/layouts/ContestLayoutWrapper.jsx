import React from 'react'
import ContestLayout from './ContestLayout';
import ContestContextProvider from '../../context/ContestContext'

const ContestLayoutWrapper = () => {
  return (
    <ContestContextProvider>
        <ContestLayout/>
    </ContestContextProvider>
  )
}

export default ContestLayoutWrapper