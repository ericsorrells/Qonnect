// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import moment from 'moment';
// ========================================================================================

const UserInfo = ({
  displayName,
  firstName,
  email,
  photoURL,
  lastName,
  city,
  state,
  birthDate,
  createdAt,
  description,
  urlParam,
  userId
 }) => {
  photoURL = photoURL ? photoURL : "/images/user-silhouette.png"
  return (
    <div className="user-info">
      <div className='user-info__photoURL'>
        <img className="user-info__silhouete" src={photoURL} />
      </div>
      <h1>{firstName} {lastName}</h1>
      <div className="user-info__personal-stats">
        <div className="user-info__item">
          <i className="fas fa-globe"></i>
          {city}, {state}
        </div>
        <div className="user-info__item">
          <i className="fas fa-birthday-cake"></i>
          { moment().diff(birthDate, 'years') } Years Old
        </div>
        <div className="user-info__item">
          <i className="fas fa-sign-in-alt"></i>
          {moment(createdAt).format("MMMM Do YYYY")}
        </div>
      </div>
      <div className="user-info__description">
        {description}
      </div>
      {
        urlParam === userId &&
          <button className='button__purple'>
            <Link to='/update-profile'>Update</Link>
          </button>
      }
    </div>
  )
}

UserInfo.propTypes = {
  user: PropTypes.object
}

export default UserInfo;