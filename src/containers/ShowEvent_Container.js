// ========================================================================================
import React       from 'react';
import { connect } from 'react-redux';
import {
  createInterestedUserInFirebase,
  startDeleteEvent
} from '../actions/Events_Actions';
import {
  startGettingEventAcceptances,
  startUserAcceptEvent
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
    startDeleteEvent:                  (userId, eventId) => dispatch(startDeleteEvent(userId, eventId)),
    createUserAcceptedEventInFirebase: (userId, eventId) => dispatch(createUserAcceptedEventInFirebase(userId, eventId)),
    startGettingEventAcceptances:      (eventId)         => dispatch(startGettingEventAcceptances(eventId)),
    startUserAcceptEvent:              (userId, user, eventId, acceptanceInfo) => dispatch(startUserAcceptEvent(userId, user, eventId, acceptanceInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);