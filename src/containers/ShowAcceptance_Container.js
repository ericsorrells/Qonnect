// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { selectAcceptance } from '../actions/Comments_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import ShowAcceptance from '../components/ShowAcceptance';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return { selectAcceptance: (eventId, commentId) => dispatch(selectAcceptance(eventId, commentId)) }
}

export default connect(null, mapDispatchToProps)(ShowAcceptance);