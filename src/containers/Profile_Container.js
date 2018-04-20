// ========================================================================================
import React                  from 'react';
import { connect }            from 'react-redux';
import * as editActions       from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import Profile from '../components/Profile'
// ========================================================================================

const mapStateToProps = (state) => {
  return { 
    events: state.events,
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(editActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)