// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ========================================================================================
import UserStats from '../components/UserStats';
// ========================================================================================
import { objToArray, calcOpenEvents } from '../utils/utils';
// ========================================================================================

const mapStateToProps = (state) => {
  const eventsArray    = objToArray(state.events);

  return {
    totalEvents:    eventsArray.length,
    openEvents:     calcOpenEvents(eventsArray).length,
    eventsAttended: setCount(state.profile.acceptedEvents),
    followers:      setCount(state.profile.followers),
    following:      setCount(state.profile.following)
  }
}

const setCount = (stat) => {
  if(stat) { return Object.keys(stat).length }
  return 0;
}

export default connect(mapStateToProps)(UserStats)