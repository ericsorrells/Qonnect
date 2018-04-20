// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import * as eventsActions from '../actions/Events_Actions';
import { bindActionCreators } from 'redux';
// ========================================================================================
import ShowEvent from '../components/ShowEvent/ShowEvent';
// ========================================================================================

const mapStateToProps = (state) => {
  return { event: state.events }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(eventsActions, dispatch);
// }

export default connect(mapStateToProps)(ShowEvent);
// export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);