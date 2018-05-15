// ========================================================================================
import React     from 'react';
import PropTypes from 'prop-types';
import moment    from 'moment';
import { Link }  from 'react-router-dom';
// ========================================================================================
import Acceptances from './EventItem_Acceptances';
// ========================================================================================
import { formatTime, formatDate } from '../utils/utils';
// ========================================================================================

const EventItem = (event) => {
  const { id, userName, imageUrl, eventName, location, description, time, date, history, interestedUsers, deleteEvent } = event;

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
        <Link to={`/show-event/${id}`}>
          {imageUrl ?
            <img src={imageUrl} className='event-item__image' /> :
            <img src='/images/default.png' className='event-item__image' />
          }
        </Link>
      </div>
      <div className='event-item__right'>
        <Link to={`/show-event/${id}`}>
          <Info value={eventName} type={'title'} />
        </Link>
        <Info value={userName} type={'inviter'} />
        <div className='event-item__date_location'>
          {location && <SubInfo value={location} type={'location'} icon={'map-marker'} />}
          {date && <SubInfo value={formatDate(date)} type={'date'} icon={'calendar'} />  }
          {time && <SubInfo value={formatTime(time)} type={'time'} icon={'calendar'} />  }
        </div>
        <Info value={description} type={'description'} />
      </div>
      {interestedUsers && <Acceptances acceptances={Object.keys(interestedUsers).length} />}
    </li>
  )
}

const Info = ({ value, type }) => {
  return (
    <div className={`event-item__${type}`}>
      {value}
    </div>
  )
}

const SubInfo = ({ value, type, icon }) => {
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

export default EventItem;