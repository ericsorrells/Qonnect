// ========================================================================================
import React from 'react';
// ========================================================================================
import EventItem from '../components/EventItem'
// ========================================================================================

export const showEvents = (props, history = null, deleteEvent = null, showEvent = null) => {
  return props.map((event, index) => {
    return (
      <EventItem {...event} 
        key={index} 
        history={history} 
        deleteEvent={deleteEvent}
        showEvent={showEvent}
      />
    )
  })
}

export default EventItem;