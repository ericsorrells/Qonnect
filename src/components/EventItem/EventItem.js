import React from 'react';

const EventItem = ({id, url, name, location, description, inviter, date, history}) => {
  const deleteElement = () => {
    console.log('DELETE ELEMENT CALLED!!!!', id);
  }

  const editElement = () => {
    history.push(`/edit-event/${id}`);          // passed from showEvents props
  }

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
          <div className="event-item__location">
            <div style={{ fontSize: '1em', color: '#6334e3' }}>
              <i className="fas fa-map-marker"></i>
            </div>
            <div>{location}</div>
            </div>
          <div className="event-item__date">
            <div style={{ fontSize: '1em', color: '#6334e3' }}>
              <i class="fas fa-calendar"></i>
            </div>
            <div>{date}</div>
          </div>
        </div>
        <div className="event-item__description">
          {description}
        </div>
      </div>
      <div className="hover-container">
        <div className="hover-buttons">
          <button className="edit-button" onClick={editElement}>Edit</button>
          <button className="delete-button" onClick={deleteElement}>Delete</button>
        </div>
      </div>
    </li>
  )
}

// const HoverButtons = () => {
//   return(
    
//   )
// };

export default EventItem;