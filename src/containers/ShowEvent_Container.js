// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// ========================================================================================
import ShowEvent from '../components/ShowEvent';
// ========================================================================================
import { objToArray } from '../utils/utils';
// ========================================================================================

const mapStateToProps = (state, ownProps) => {
  const paramId = ownProps.match.params.id;
  return {
    event:       state.events[paramId],
    eventId:     paramId,
    acceptances: objToArray(state.acceptances[paramId]) || null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps)(ShowEvent);