// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
// ========================================================================================
import Profile from '../components/Profile/Profile'
// ========================================================================================

const mapStateToProps = (state) => {
  return { events: state.events }
}

export default connect(mapStateToProps)(Profile)