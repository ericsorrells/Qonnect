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
  const eventsArray = objToArray(state.events);
  return {
    totalEvents:    eventsArray.length,
    openEvents:     calcOpenEvents(eventsArray).length,
    eventsAttended: Object.keys(state.profile.eventsAttended).length,
    followers:      Object.keys(state.profile.followers).length,
    following:      Object.keys(state.profile.following).length
  }
}

export default connect(mapStateToProps)(UserStats)