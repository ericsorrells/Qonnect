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
    event: state.events[paramId],
    eventId: paramId,
    comments: objToArray(state.comments[paramId])
  }
}

export default connect(mapStateToProps)(ShowEvent);