// // ========================================================================================
// import React                  from 'react';
// import { connect }            from 'react-redux';
// import * as eventsActions     from '../actions/Events_Actions';
// import { bindActionCreators } from 'redux';
// // ========================================================================================
// import EventItem from '../components/EventItem/EventItem';
// // ========================================================================================

// const mapStateToProps = (state) => {
//   return { 
//     events: state.events,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(eventsActions, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EventItem)