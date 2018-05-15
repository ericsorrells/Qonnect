// ========================================================================================
import React         from 'react';
import { connect }   from 'react-redux';
import { editEvent } from '../actions/Events_Actions';
import moment        from 'moment';
// ========================================================================================
import EditEvent from '../components/EditEvent';
// ========================================================================================

const mapDispatchToProps = (dispatch, ownProps) => {
  return { editEvent: (id, event) => dispatch(editEvent(id, event)) }
}

const mapStateToProps = (state, ownProps) => {
  const paramId = ownProps.match.params.id;
  const newEvent = state.events[paramId]; 
  newEvent.id = paramId;
  // TODO: DatePicker not formatting to the entered data on Edit Pages
  newEvent.date = moment(event.date);
  console.log('NEW EVENT', newEvent);
  return { 
    event:   newEvent,
    profile: state.profile,
    auth:    state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);