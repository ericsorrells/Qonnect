import React from 'react';

const UserStat = ({ stat, title }) => {
  return (
    <div className="user-stat">
      <div className="user-stat__stat" >{stat}</div>
      <div className="user-stat__title">{title}</div>
    </div>
  )
}

export default UserStat;