// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import UserStat from './UserStat';
// ========================================================================================

const UserStats = (props) => {
  const { totalEvents, openEvents, eventsAttended, followers, following } = props;
  return(
    <div className="user-stats__container">
      <UserStat stat={totalEvents}    title="Events Created"  />
      <UserStat stat={openEvents}     title="Open Events"     />
      <UserStat stat={eventsAttended} title="Events Attended"  />
      <UserStat stat={followers}      title="Followers"       />
      <UserStat stat={following}      title="Following"       />
    </div>
  )
}

UserStats.propTypes = {
  props: PropTypes.shape({
  totalEvents:    PropTypes.number,
  openEvents:     PropTypes.number,
  eventsAttended: PropTypes.number,
  followers:      PropTypes.number,
  following:      PropTypes.number
  })
};

export default UserStats;