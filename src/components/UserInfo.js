// ========================================================================================
import React from 'react';
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
  description }) => {
  photoURL = photoURL ? photoURL : "/images/user-silhouette.png" 
  return (
    <div className="user-info">
      <div className='user-info__photoURL'>
        <img className="user-info__silhouete" src={photoURL} />
      </div>
      <h1>{firstName} {lastName}</h1>
      <div className="user-info__personal-stats">
        <div className="user-info__item">
          <i class="fas fa-globe"></i>
          {city}, {state}
        </div>
        <div className="user-info__item">
          <i class="fas fa-birthday-cake"></i>
          { moment().diff(birthDate, 'years') } Years Old
        </div>
        <div className="user-info__item">
          <i class="fas fa-sign-in-alt"></i>
          {moment(createdAt).format("MMMM Do YYYY")}
        </div>
      </div>
      <div className="user-info__description">
        {description}
      </div>
      <button className='button__purple'>
        <Link to='/update-profile'>Update</Link>
      </button>
    </div>
  )
}

export default UserInfo;