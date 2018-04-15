import React from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../actions/Profile_Actions';
import { bindActionCreators } from 'redux';
import EditProfile from '../components/EditProfile/EditProfile';

const mapDispatchToProps = (dispatch) => {
  console.log('ACTs', profileActions);
  return bindActionCreators(profileActions, dispatch)
}

const mapStateToProps = (state) => {
  return { profile: state.profile }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);