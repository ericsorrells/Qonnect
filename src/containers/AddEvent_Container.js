import React from 'react';
import { connect } from 'react-redux';
import * as eventsActions from '../actions/Events_Actions';
import addEvent from '../actions/Events_Actions'
import { bindActionCreators } from 'redux';
import AddEvent from '../components/AddEvent/AddEvent';

const mapDispachToProps = (dispatch) => {
  console.log('ACTION_CREATORS: ', eventsActions);
  return bindActionCreators(eventsActions, dispatch)
}

const mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps, mapDispachToProps)(AddEvent);