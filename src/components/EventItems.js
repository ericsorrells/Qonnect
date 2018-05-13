// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import EventItem from '../components/EventItem';
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

export const EventItems = ({events, history = null, deleteEvent = null}) => {
  
  return events.map((event, index) => {
    return (
      <div>
        <ul>
          <EventItem
            {...event}
            key={event.id}
            history={history}
            deleteEvent={deleteEvent}
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