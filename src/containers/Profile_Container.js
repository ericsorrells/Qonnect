// ========================================================================================
import React                     from 'react';
import { connect }               from 'react-redux';
import { auth }                  from '../firebase/firebaseIndex';
import { deleteEvent }           from '../actions/Events_Actions';
import { getEventsFromFirebase } from '../actions/Events_Actions';
import { setProfile, getProfileFromFirebase } from '../actions/Profile_Actions';
// ========================================================================================
import Profile from '../components/Profile'
// ========================================================================================

const mapStateToProps = (state) => {
  return { 
    events:  state.events,
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent:            (id)             => dispatch(deleteEvent(id)),
    setProfile:             (profileUpdates) => dispatch(setProfile(profileUpdates)),
    getProfileFromFirebase: ()               => dispatch(getProfileFromFirebase()),
    getEventsFromFirebase:  ()               => dispatch(getEventsFromFirebase()),
    setFilters:             (searchParams)   => dispatch(setFilters(searchParams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)