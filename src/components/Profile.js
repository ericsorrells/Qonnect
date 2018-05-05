// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
// ========================================================================================
import EventItem from './EventItem';
import UserInfo from './UserInfo';
import UserStats from '../containers/UserStats_Container';
import EventItems from './EventItems';
// ========================================================================================
import { objToArray } from '../utils/utils'
// ========================================================================================

const Profile = ({ events, history, profile, deleteEvent }) => {
  return(
    <div className="profile">
      <div className="container">
        <div className="profile__user-stats">
          <section>
            <UserStats />
          </section>
        </div>
      </div>
      <div className="profile__outer-container">
        <div className="container profile__inner-container">
          <aside className="aside-container">
            <UserInfo {...profile} />
          </aside>
          <section>
            <EventsHeader />
            {events &&
              <EventItems
                // events={objToArray(events)}
                events={events}
                history={history}
                deleteEvent={deleteEvent}
              />
            }
          </section>
        </div>
      </div>
    </div>
  )
}
 
const EventsHeader = () => {
  return(
    <div className="events-header">
      <h1>My Events</h1>
    </div>
  )
}


export default Profile;