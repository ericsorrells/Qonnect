// ========================================================================================
import React                           from 'react';
import { connect }                     from 'react-redux';
import { startCreateEvent }            from '../actions/Events_Actions';
import { createEventInFirebase }       from '../firebase/helpers/eventsFirebase';
import { auth }                        from '../firebase/firebaseIndex';
// ========================================================================================
import AddEvent from '../components/AddEvent';
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return {
    startCreateEvent: (event) => dispatch(startCreateEvent(event))
    // createEventInFirebase:       (event) => { dispatch(createEventInFirebase(event)) }
  }
}

const mapStateToProps = (state) => {
  return { 
    events:   objToArray(state.events),
    userId:   state.auth.uid,
    profile:  state.profile,
    auth:     state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);