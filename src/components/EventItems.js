// ========================================================================================
import React from 'react';
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

export default EventItems;