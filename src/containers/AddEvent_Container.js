// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import * as eventsActions from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
import { auth } from '../firebase/firebaseIndex';
// ========================================================================================
import AddEvent from '../components/AddEvent';
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(eventsActions, dispatch)
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