import React from 'react';

export const showEvents = (props) => {
  return props.map((event) => {
    return (
      <li>
        <div>{event.name}</div>
        <div>{event.location}</div>
        <div>{event.description}</div>
      </li>
    )
  })
}