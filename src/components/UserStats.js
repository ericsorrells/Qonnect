import React from 'react';
import UserStat from './UserStat';

const UserStats = ({stat, title}) => {
  return(
    <div className="user-stats__container">
      <UserStat stat={31} title="Events Created"  />
      <UserStat stat={18} title="Open Events"     />
      <UserStat stat={8} title="Events Attended"  />
      <UserStat stat={38} title="Followers"       />
      <UserStat stat={14} title="Following"       />
    </div>
  )
}

export default UserStats;