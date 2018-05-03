// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import * as eventsActions from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import EventForm from '../components/EventForm';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(eventsActions, dispatch)
}

const mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

