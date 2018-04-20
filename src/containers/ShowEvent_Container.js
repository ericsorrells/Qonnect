// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import * as eventsActions from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import ShowEvent from '../components/ShowEvent/ShowEvent';
// ========================================================================================

const mapStateToProps = (state, ownProps) => {
  const paramId = parseInt(ownProps.match.params.id);
  return {
    event: state.events.find((event) => event.id === paramId)
  }
}

export default connect(mapStateToProps)(ShowEvent);