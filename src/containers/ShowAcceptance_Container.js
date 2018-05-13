// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { chooseAcceptance } from '../actions/Acceptances_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import ShowAcceptance from '../components/ShowAcceptance';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return { chooseAcceptance: (eventId, acceptanceId) => dispatch(chooseAcceptance(eventId, acceptanceId)) }
}

export default connect(null, mapDispatchToProps)(ShowAcceptance);