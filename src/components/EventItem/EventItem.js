import React from 'react';

const EventItem = ({url, name, location, description, inviter, date}) => {
  return (
    <li className="event-item">
      <div className="event-item__left">
        <img src={url} className="event-item__image" />
      </div>
      <div className="event-item__right">
        <div className="event-item__title">
          {name}
        </div>
        <div className="event-item__inviter">
          {inviter}
        </div>
        <div className="event-item__date_location">
          <div>{location}</div>
          <div>{date}</div>
        </div>
        <div className="event-item__description">
          {description}
        </div>
      </div>
    </li>
  )
}

export default EventItem;