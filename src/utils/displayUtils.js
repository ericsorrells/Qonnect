import React from 'react';
import EventItem from '../components/EventItem/EventItem'

export const showEvents = (props) => {
  return props.map((event, index) => {
    return (
      <EventItem {...event} key={index} />
    )
  })
}

export default EventItem;