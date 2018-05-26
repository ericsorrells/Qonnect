// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
// ========================================================================================
import UserStats from '../components/UserStats';
// ========================================================================================
import { objToArray, calcOpenEvents } from '../utils/utils';
// ========================================================================================

const mapStateToProps = (state) => {
  let eventsArray    = objToArray(state.events);
  if(!eventsArray) {
    eventsArray = [];
  }
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