// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================

const UserStat = ({ stat, title }) => {
  return (
    <div className="user-stat">
      <div className="user-stat__stat" >{stat}</div>
      <div className="user-stat__title">{title}</div>
    </div>
  )
}

UserStat.propTypes = {
  stat:  PropTypes.number,
  title: PropTypes.string
}

export default UserStat;