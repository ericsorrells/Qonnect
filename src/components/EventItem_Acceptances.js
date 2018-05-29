// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
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

EventItemAcceptances.propTypes = {
  acceptances: PropTypes.object
}

export default EventItemAcceptances;