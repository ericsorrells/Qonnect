// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { selectAcceptance } from '../actions/Acceptances_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import ShowAcceptance from '../components/ShowAcceptance';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return { selectAcceptance: (eventId, acceptanceId) => dispatch(selectAcceptance(eventId, acceptanceId)) }
}

export default connect(null, mapDispatchToProps)(ShowAcceptance);