// ========================================================================================
import React                     from 'react';
import { connect }               from 'react-redux';
import { auth }                  from '../firebase/firebaseIndex';
import { deleteEvent }           from '../actions/Events_Actions';
import { getUserEventsFromFirebase } from '../actions/Events_Actions';
import { setProfile, getProfileFromFirebase } from '../actions/Profile_Actions';
// ========================================================================================
import Profile from '../components/Profile'
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

const mapStateToProps = (state) => {
  return { 
    events:  objToArray(state.events),
    profile: state.profile,
    userId:  state.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent:               (id)             => dispatch(deleteEvent(id)),
    setProfile:                (profileUpdates) => dispatch(setProfile(profileUpdates)),
    getProfileFromFirebase:    ()               => dispatch(getProfileFromFirebase()),
    getUserEventsFromFirebase: ()               => dispatch(getUserEventsFromFirebase()),
    setFilters:                (searchParams)   => dispatch(setFilters(searchParams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)