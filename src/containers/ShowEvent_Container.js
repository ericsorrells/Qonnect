// ========================================================================================
import React       from 'react';
import { connect } from 'react-redux';
import { 
  deleteUserEventListFromFirebase, 
  createUserAcceptedEventInFirebase 
} from '../actions/Profile_Actions';
import { 
  createInterestedUserInFirebase, 
  deleteEventInFirebase 
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
    userFirstName: state.profile.firstName,
    userLastName:  state.profile.lastName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createInterestedUserInFirebase:    (eventId, userId) => dispatch(createInterestedUserInFirebase(eventId, userId)),
    createAcceptanceInFirebase:        (acceptanceInfo)  => dispatch(createAcceptanceInFirebase(acceptanceInfo)),
    createUserAcceptedEventInFirebase: (userId, eventId) => dispatch(createUserAcceptedEventInFirebase(userId, eventId)),
    updateUserAcceptedEventInFirebase: (eventId, userId) => dispatch(updateUserAcceptedEventInFirebase(eventId, userId)),
    getEventAcceptancesFromFirebase:   (eventId)         => dispatch(getEventAcceptancesFromFirebase(eventId)),
    deleteEventInFirebase:             (eventId)         => dispatch(deleteEventInFirebase(eventId)),
    deleteUserEventListFromFirebase:   (userId, eventId) => dispatch(deleteUserEventListFromFirebase(userId, eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);