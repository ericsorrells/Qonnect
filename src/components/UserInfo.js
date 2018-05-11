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
  return (
    <div className="user-info">
      {/*
      <img className="user-info__silhouete" src="/images/user-silhouette.svg"/>
    */}
      <h1>{firstName} {lastName}</h1>
      <div className="user-info__personal-stats">
        <div className="user-info__item">
          <i class="fas fa-globe"></i>
          {city}, {state}
        </div>
        <div className="user-info__item">
          <i class="fas fa-birthday-cake"></i>
          {birthDate} Years Old
        </div>
        <div className="user-info__item">
          <i class="fas fa-sign-in-alt"></i>
          {moment(createdAt).format("MMMM Do YYYY")}
        </div>
      </div>
      <div className="user-info__description">
        {description}
      </div>
      <button><Link to='/update-profile'>Update</Link></button>
    </div>
  )
}

export default UserInfo;