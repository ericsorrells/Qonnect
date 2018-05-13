// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { getOtherUserEventsFromFirebase } from '../actions/Events_Actions';
// ========================================================================================
import FindEvents from '../components/FindEvents';
// ========================================================================================
import { filterEvents } from '../utils/filters';
import { objToArray }   from '../utils/utils';
// ========================================================================================

const mapStateToProps = (state) => {
  const eventsArray = objToArray(state.events);
  return { events: filterEvents(eventsArray, state.filters) }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    getOtherUserEventsFromFirebase: () => dispatch(getOtherUserEventsFromFirebase()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindEvents);