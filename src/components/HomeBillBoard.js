// ========================================================================================
import React from 'react';
import { Link }  from 'react-router-dom';
// ========================================================================================

const HomeBillBoard = () => {
  return (
    <div className='home__container'>
      <div className='home__inner-container'>
        <div className='home__text-container'>
          <div className='home__text'>New Friends.</div>
          <div className='home__text'>New Experiences.</div>
          <div className='home__text'>Have Fun.</div>
        </div>
        <Link to='signup' className='home__button'>Have Fun Now!</Link>
      </div>
    </div>
  )
}

export default HomeBillBoard;