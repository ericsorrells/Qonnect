// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { editEvent } from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import EditEvent from '../components/EditEvent';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return { editEvent: (id, event) => dispatch(editEvent(id, event)) }
}

const mapStateToProps = (state, ownProps) => {
  const paramId = parseInt(ownProps.match.params.id);
  return { event: state.events.find((event) => event.id === paramId) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);