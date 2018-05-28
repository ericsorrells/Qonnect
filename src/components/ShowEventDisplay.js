// ========================================================================================
import React from 'react';
// ========================================================================================
import { formatTime, formatDateLong } from '../utils/utils';
// ========================================================================================

const ShowEventDisplay = (props) => {
  const { event } = props;
  return (
    <div className='modal__container'>
      <h1 className='event-display__title'>
        { event && event.eventName }
      </h1>
      <div className='event-display__name-location'>
        { event && event.date     && <EventInfo name='Date:'         info={formatDateLong(event.date)} />}
        { event && event.time     && <EventInfo name='Time:'         info={formatTime(event.time)}     />}
        { event && event.userName && <EventInfo name='Host/Hostess:' info={event.userName}             />}
        { event && event.location && <EventInfo name='Location:'     info={event.location}             />}
      </div>
      <div>
        {
          event && event.category &&
          <div className='event-display__description'>
            <div className='event-display__subtitle'>Description: </div>
            <div className='event-display__info'> {event.description} </div>
          </div>
        }
      </div>
    </div>
  )
}

const EventInfo = ({name, info}) => {
  return(
    <div>
      <div className='event-display__name-info'>
        <span className='event-display__name'>{name}</span>
        <span className='event-display__info'>{info}</span>
      </div>
    </div>
  )
}

export default ShowEventDisplay;
