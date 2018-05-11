// ========================================================================================
import React                  from 'react';
import { connect }            from 'react-redux';
import { updateProfileInFirebase, updateProfile } from '../actions/Profile_Actions';
// ========================================================================================
import ProfileUpdate from '../components/ProfileUpdate';
// ========================================================================================

const mapStateToProps = (state) => {
  return { profile: state.profile }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfileInFirebase: (data) => dispatch(updateProfileInFirebase(data)),
    updateProfile:           (data) => dispatch(updateProfile(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);