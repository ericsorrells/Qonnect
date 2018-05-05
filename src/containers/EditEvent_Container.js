// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { editEvent } from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import EditEvent from '../components/EditEvent';
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

const mapDispatchToProps = (dispatch, ownProps) => {
  return { editEvent: (id, event) => dispatch(editEvent(id, event)) }
}

const mapStateToProps = (state, ownProps) => {
  const paramId = ownProps.match.params.id;
  const newEvent = state.events[paramId] 
  newEvent.id = paramId
  return { event: newEvent }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);