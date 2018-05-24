// ========================================================================================
import React       from 'react';
import { connect } from 'react-redux';
import {
  createUserAcceptedEventInFirebase
} from '../actions/Profile_Actions';
import {
  createInterestedUserInFirebase,
  startDeleteEvent
} from '../actions/Events_Actions';
import {
  createAcceptanceInFirebase,
  getEventAcceptancesFromFirebase
} from '../actions/Acceptances_Actions';
// ========================================================================================
import ShowEvent from '../components/ShowEvent';
// ========================================================================================
import { objToArray, hasEventOrUseSessionStorage } from '../utils/utils';
// ========================================================================================

const mapStateToProps = (state, ownProps) => {
  const paramId = ownProps.match.params.id;
  const newEvent = hasEventOrUseSessionStorage(paramId, state.events)
  return {
    event:         newEvent,
    eventId:       paramId,
    acceptances:   objToArray(state.acceptances) || null,
    user:          state.profile,
    userId:        state.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startDeleteEvent: (userId, eventId) => dispatch(startDeleteEvent(userId, eventId)),
    createInterestedUserInFirebase:    (eventId, userId) => dispatch(createInterestedUserInFirebase(eventId, userId)),
    createAcceptanceInFirebase:        (acceptanceInfo)  => dispatch(createAcceptanceInFirebase(acceptanceInfo)),
    createUserAcceptedEventInFirebase: (userId, eventId) => dispatch(createUserAcceptedEventInFirebase(userId, eventId)),
    updateUserAcceptedEventInFirebase: (eventId, userId) => dispatch(updateUserAcceptedEventInFirebase(eventId, userId)),
    getEventAcceptancesFromFirebase:   (eventId)         => dispatch(getEventAcceptancesFromFirebase(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);