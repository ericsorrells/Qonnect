// ========================================================================================
import React from 'react';
// ========================================================================================

const EventItemAcceptances = (props) => {
  return (
    <div className='acceptance'>
      <div className='acceptance__count'>
        { props.acceptances }
      </div>
      <span className='acceptance__subheader'>Acceptances</span>
    </div>
  )
}

export default EventItemAcceptances;