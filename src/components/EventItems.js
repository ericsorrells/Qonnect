// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import EventItem from '../components/EventItem';
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

export const EventItems = ({...props}, history = null, deleteEvent = null, showEvent = null) => {
  const { events } = props;
  const eventsArray = objToArray(events); 
  return eventsArray.map((event, index) => {
    return (
      <div>
        <ul>
          <EventItem 
            {...event}
            key={event.id}
            history={props.history}
            deleteEvent={props.deleteEvent}
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