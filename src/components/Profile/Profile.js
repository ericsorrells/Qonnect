// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
// ========================================================================================
import EventItem from '../../components/EventItem/EventItem';
import { showEvents } from '../../utils/displayUtils';
// ========================================================================================

const Profile = ({ events, history, profile, deleteEvent, showEvent }) => {
  return(
    <div className="profile-container">
      <aside>
        Name: {profile.name} <br />
        Location: {profile.location} <br />
        Description: {profile.description} <br />
        <Link to="edit-profile">Edit Profile</Link>
      </aside>
      <section>
        { events && (<ul> { showEvents(events, history, deleteEvent, showEvent) } </ul>) }
      </section>
    </div>
  )
}

export default Profile;