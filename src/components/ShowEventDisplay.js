// ========================================================================================
import React from 'react';
// ========================================================================================
import { formatTime, formatDate } from '../utils/utils';
// ========================================================================================

const ShowEventDisplay = (props) => {
  const { event } = props;
  return (
    <div>
      {event && event.eventName   && <EventInfo name='Name'        info={event.eventName}            />}
      {event && event.date        && <EventInfo name='Date'        info={formatDate(event.date)}     />}
      {event && event.time        && <EventInfo name='Time'        info={formatTime(event.time)}     />}
      {event && event.category    && <EventInfo name='Category'    info={event.category}             />}
      {event && event.userName    && <EventInfo name='Inviter'     info={event.userName}             />}
      {event && event.location    && <EventInfo name='Location'    info={event.location}             />}
      {event && event.description && <EventInfo name='Description' info={event.description}          />}
    </div>
  )
}

const EventInfo = ({name, info}) => {
  return(
    <div>{name}: {info}</div>
  )
}

export default ShowEventDisplay;
