// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import EventItem from '../components/EventItem'
// ========================================================================================

export const EventItems = ({...props}, history = null, deleteEvent = null, showEvent = null) => {
  return props.events.map((event, index) => {
    return (
      <div>
        <ul>
          <EventItem 
            {...event}
            key={index}
            history={props.history}
            deleteEvent={props.deleteEvent}
            // showEvent={showEvent}
          />
        </ul>
      </div>
    )
  })
}

EventItem.propTypes = {
  event:       PropTypes.object, 
  history:     PropTypes.func,
  showEvent:   PropTypes.func,
  deleteEvent: PropTypes.func 
};

export default EventItems;