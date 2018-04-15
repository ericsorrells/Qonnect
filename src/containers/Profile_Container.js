// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import * as eventsActions from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import addEvent from '../actions/Events_Actions'
import Profile from '../components/Profile/Profile'
// ========================================================================================

const mapStateToProps = (dispatch) => {
  return bindActionCreators(eventsActions, dispatch)
}

export default connect(mapStateToProps)(Profile)