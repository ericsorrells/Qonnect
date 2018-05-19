// ========================================================================================
import React     from 'react';
import PropTypes from 'prop-types';
import moment    from 'moment';
import { Link }  from 'react-router-dom';
// ========================================================================================
import Acceptances from './EventItem_Acceptances';
// ========================================================================================
import { formatTime, formatDate, formatText } from '../utils/utils';
// ========================================================================================

const EventItem = (event) => {
  const { id, uid, userName, imageUrl, eventName, location, description, time, date, history, interestedUsers, deleteEvent } = event;

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
      <div className='event-item__left-container'>
        <div className='event-item__left'>
          <Image Link={Link} id={id} imageUrl={imageUrl} />
        </div>
        <div className='event-item__center'>
          <Link to={`/show-event/${id}`}>
            <Info value={eventName} type={'title'} />
          </Link>
          <Link to={`/profile/${uid}`}>
            <Info value={userName} type={'inviter'} />
          </Link>
          <div className='event-item__date_location'>
            {location && <SubInfo value={formatText(location, 20)} value2={null} type={'location'} icon={'map-marker'} />}
            {date && time && <SubInfo value={formatDate(date)} value2={`| ${formatTime(time)}`} type={'date'} icon={'calendar'} />  }
          </div>
          <Info value={formatText(description, 250)} type={'description'} />
        </div>
      </div>
      <div className='event-item__acceptances'>
        {interestedUsers && <Acceptances acceptances={Object.keys(interestedUsers).length} />}
      </div>
    </li>
  )
}

const Image = ({Link, id, imageUrl}) => {
 return(
    <Link to={`/show-event/${id}`}>
      {
        imageUrl ?
          <img src={imageUrl} className='event-item__image' /> :
          <img src='/images/default.png' className='event-item__image' />
      }
    </Link>
 )
}

const Info = ({ value, type }) => {
  return (
    <div className={`event-item__${type}`}>
      {value}
    </div>
  )
}

const SubInfo = ({ value, value2, type, icon }) => {
  return (
    <div className={`event-item__${type}`}>
      <div style={{ fontSize: '1em', color: '#6334e3' }}>
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div>{value}   {value2}</div>
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