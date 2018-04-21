import React from 'react';

const UserInfo = ({ name, location, age, joinDate, description }) => {
  return (
    <div className="user-info">
      <h1>{name}</h1>
      <div className="user-info__personal-stats">
        <div className="user-info__item">
          <i class="fas fa-globe"></i>
          {location}
        </div>
        <div className="user-info__item">
          <i class="fas fa-birthday-cake"></i>
          {age} Years Old
        </div>
        <div className="user-info__item">
          <i class="fas fa-sign-in-alt"></i>
          {joinDate}
        </div>
      </div>
      <div className="user-info__description">
        {description}
      </div>
    </div>
  )
}

export default UserInfo;