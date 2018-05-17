// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { updateAcceptanceSelectionInFirebase } from '../actions/Acceptances_Actions';
// ========================================================================================
import ShowAcceptance from '../components/ShowAcceptance';
// ========================================================================================

const mapDispatchToProps = (dispatch) => {
  return { 
    
    updateAcceptanceSelectionInFirebase: (eventId, acceptanceId) => dispatch(updateAcceptanceSelectionInFirebase(eventId, acceptanceId))
  }
}

export default connect(null, mapDispatchToProps)(ShowAcceptance);