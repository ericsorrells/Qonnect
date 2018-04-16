// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
// ========================================================================================
import EventItem from '../../components/EventItem/EventItem';
import { showEvents } from '../../utils/displayUtils';
// ========================================================================================

const Profile = (props) => {
  return(
    <div className="profile-container">
      <aside>
        Name: {props.profile.name} <br />
        Location: {props.profile.location} <br />
        Description: {props.profile.description} <br />
        <Link to="edit-profile">Edit Profile</Link>
      </aside>
      <section>
        { props.events && (<ul> { showEvents(props.events) } </ul>) }
      </section>
    </div>
  )
}

export default Profile;