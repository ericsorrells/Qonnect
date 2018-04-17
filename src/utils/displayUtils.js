import React from 'react';
import EventItem from '../components/EventItem/EventItem'

export const showEvents = (props, history = null) => {
  return props.map((event, index) => {
    return (
      <EventItem {...event} key={index} history={history} />
    )
  })
}

export default EventItem;