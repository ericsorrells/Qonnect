// ========================================================================================
import React                   from 'react';
import { connect }             from 'react-redux';
import { startEditEvent }      from '../actions/Events_Actions';
import moment                  from 'moment';
// ========================================================================================
import EditEvent from '../components/EditEvent';
// ========================================================================================
import { hasEventOrUseSessionStorage } from '../utils/utils';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return {
    startEditEvent: (eventId, eventUpdates) => dispatch(startEditEvent(eventId, eventUpdates))
  }
}

const mapStateToProps = (state, ownProps) => {
  const urlParam = ownProps.match.params.id;
  const newEvent = hasEventOrUseSessionStorage(urlParam, state.events)
    // TODO: DatePicker not formatting to the entered data on Edit Pages
  return {
    event:   newEvent,
    profile: state.profile,
    auth:    state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);