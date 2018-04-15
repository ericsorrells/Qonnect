// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
// ========================================================================================
import { showEvents } from '../../utils/displayUtils';
// ========================================================================================

const Profile = (props) => {
  return(
    <div className="profile-container">
      <div>
        Name: {props.profile.name} <br />
        Location: {props.profile.location} <br />
        Description: {props.profile.description} <br />
        <Link to="edit-profile">Edit Profile</Link>
      </div>
      <div>
        { props.events && (<ul> { showEvents(props.events) } </ul>) }
      </div>
    </div>
  )
}

export default Profile;