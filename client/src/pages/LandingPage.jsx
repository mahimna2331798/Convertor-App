import React from 'react'
import Desc from '../features/components/Desc'
import TopRight from '../features/components/TopRight'
import TopLeft from '../features/components/TopLeft'

const LandingPage = () => {
  return (
    <>
    <div class="flex-container">
    <TopRight/>
    <TopLeft/>
    </div>
    <Desc/>
    </>
  )
}

export default LandingPage