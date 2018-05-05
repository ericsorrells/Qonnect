// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { selectComment } from '../actions/Comments_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import ShowComment from '../components/ShowComment';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return { selectComment: (eventId, commentId) => dispatch(selectComment(eventId, commentId)) }
}

export default connect(null, mapDispatchToProps)(ShowComment);