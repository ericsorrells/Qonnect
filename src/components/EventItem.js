// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// ========================================================================================
import Acceptances  from './EventItem_Acceptances';
// ========================================================================================

const EventItem = (event) => {
  const { id, url, name, location, description, inviter, date, history, interestedUsers, deleteEvent } = event;
  const loggedIn = false;

  const deleteElement = () => {
    deleteEvent(id);                            // passed from showEvents props
  }

  const editElement = () => {
    history.push(`/edit-event/${id}`);          // passed from showEvents props
  }

  const showElement = () => {
    history.push(`/show-event/${id}`);
  }

  return (
    <li className='event-item'>
      <div className='event-item__left'>
        { url ?
            <img src={url} className='event-item__image' /> :
            <img src='/images/default.png' className='event-item__image' />
        }
      </div>
      <div className='event-item__right'>
        <Info value={name} type={'title'} />
        <Info value={inviter} type={'inviter'} />
        <div className='event-item__date_location'>
          <SubInfo value={location} type={'location'} icon={'map-marker'} />
          <SubInfo value={date} type={'date'} icon={'calendar'} />
        </div>
        <Info value={description} type={'description'} />
      </div>
      { interestedUsers && <Acceptances acceptances={Object.keys(interestedUsers).length}/> }
      {/* <HoverButtons showElement={showElement()} editElement={editElement} deleteElement={deleteEvent} /> */}
      {loggedIn &&
        <div className='hover-container'>
        <div className='hover-buttons'>
        <button className='edit-button' onClick={showElement} >View</button>
        <button className='edit-button' onClick={editElement} >Edit</button>
        <button className='delete-button' onClick={deleteElement} >Delete</button>
        </div>
        </div>
      }
    </li>
  )
}

const Info = ({value, type}) => {
  return (
    <div className={`event-item__${type}`}>
      {value}
    </div>
  )
}

const SubInfo = ({value, type, icon}) => {
  if(type === 'date') {
    value = moment(value).format("dddd, MMMM Do YYYY, h:mm A");
  }

  return (
    <div className={`event-item__${type}`}>
      <div style={{ fontSize: '1em', color: '#6334e3' }}>
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div>{value}</div>
    </div>
  )
}

EventItem.propTypes = {
  id:          PropTypes.number,
  url:         PropTypes.string,
  name:        PropTypes.string,
  location:    PropTypes.string,
  description: PropTypes.string,
  inviter:     PropTypes.string,
  date:        PropTypes.string,
  history:     PropTypes.func,
  deleteEvent: PropTypes.func
};

// const HoverButtons = (showElement, editElement, deleteElement) => {
//   return(
//     <div className="hover-container">
//       <div className="hover-buttons">
//         <button className="edit-button" onClick={showElement}   >View</button>
//         <button className="edit-button" onClick={editElement}   >Edit</button>
//         <button className="delete-button" onClick={deleteElement} >Delete</button>
//       </div>
//     </div>
//   )
// }

export default EventItem;