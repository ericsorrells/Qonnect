// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { updateProfileInFirebase, updateProfile } from '../actions/Profile_Actions';
import { auth } from '../firebase/firebaseIndex';
import { withRouter } from 'react-router-dom';
import { objToPairedArray, partitionData } from '../utils/utils';
import {
  firebasePasswordUpdate,
  firebaseProfileUpdate,
  firebaseAppProfileUpdate } from '../utils/firebaseHelpers';
// ========================================================================================
import ProfileForm from './ProfileForm';
// ========================================================================================

class ProfileUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const partitionedData = partitionData(data);
    var user              = auth.getCurrentUser();

    // TODO: is this calling sagas?
    firebasePasswordUpdate(partitionedData);
    firebaseProfileUpdate(user, this.props, partitionedData);
    firebaseAppProfileUpdate(this.props, partitionedData);

    this.props.history.push(`/profile/${user.uid}`)
  }

  render() {
    return (
      <div className='update-profile__form-container'>
        <ProfileForm
          handleSubmit={this.handleSubmit}
          user={auth.getCurrentUser()}
          profile={this.props.profile}
        />
        { this.state.error && <p>{this.state.error}</p> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profile }
}

const mapDispatchToProps = (dispatch) => {
  // TODO: these aren't used?
  return {
    updateProfileInFirebase: (data) => dispatch(updateProfileInFirebase(data)),
    updateProfile:           (data) => dispatch(updateProfile(data))
  }
}

export { ProfileUpdate };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileUpdate));