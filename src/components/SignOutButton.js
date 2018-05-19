// ========================================================================================
import React from 'react';
import { auth } from '../firebase/firebaseIndex';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutOfFirebase } from '../actions/Auth';
// ========================================================================================

const SignOutButton = (props) => {
  const signUserOut = () => {
    props.signOutOfFirebase();
    props.history.push('/');
  }

  return (
    <a onClick={() => signUserOut()} >
      Sign Out
    </a>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { signOutOfFirebase: () => dispatch(signOutOfFirebase()) }
}

export default connect(null, mapDispatchToProps)(withRouter(SignOutButton));