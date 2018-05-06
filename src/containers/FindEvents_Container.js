// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(FindEvents);