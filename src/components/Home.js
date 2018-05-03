// ========================================================================================
import React from 'react';
// ========================================================================================
import HowItWorks from './HowItWorks';
import HomeBillboard from './HomeBillBoard';
// ========================================================================================

const Home = () => {
  return(
    <div className="home-container">
      <HomeBillboard/>
      <HowItWorks />
    </div>
  )
}

export default Home;