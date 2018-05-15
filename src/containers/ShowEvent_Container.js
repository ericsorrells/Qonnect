// ========================================================================================
import React       from 'react';
import { connect } from 'react-redux';
import { 
  createInterestedUserInFirebase, 
  deleteEventInFirebase 
} from '../actions/Events_Actions';
import { 
  createAcceptanceInFirebase, 
  getEventAcceptrancesFromFirebase 
} from '../actions/Acceptances_Actions';
// ========================================================================================
import ShowEvent from '../components/ShowEvent';
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

const mapStateToProps = (state, ownProps) => {
  const paramId = ownProps.match.params.id;
  return {
    event:         state.events[paramId],
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
    createUserAcceptedEventInFirebase: (eventId, userId) => dispatch(createUserAcceptedEventInFirebase(eventId, userId)),
    getEventAcceptrancesFromFirebase:  (eventId)         => dispatch(getEventAcceptrancesFromFirebase(eventId)),
    deleteEventInFirebase:             (eventId)         => dispatch(deleteEventInFirebase(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);