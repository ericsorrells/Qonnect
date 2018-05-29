// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase/firebaseIndex';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSignOut } from '../actions/Auth';
// ========================================================================================

const SignOutButton = (props) => {
  const signUserOut = () => {
    props.startSignOut();
    window.sessionStorage.removeItem('qProfile');
    window.sessionStorage.removeItem('qEvent');
  }

  return (
    <a onClick={() => signUserOut()} >
      Sign Out
    </a>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { startSignOut: () => dispatch(startSignOut()) }
}

SignOutButton.propTypes = {
  startSignOut: PropTypes.func
}

export default connect(null, mapDispatchToProps)(withRouter(SignOutButton));