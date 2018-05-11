// ========================================================================================
import React from 'react';
import { auth } from '../firebase/firebaseIndex';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/Auth';
// ========================================================================================

const SignOutButton = (props) => {
  const signUserOut = () => {
    props.signOut();
    props.history.push('/');
  }
  
  return (
    <button type="button" onClick={() => signUserOut()} >
      Sign Out
    </button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { signOut: () => dispatch(signOut()) }
}

export default connect(null, mapDispatchToProps)(withRouter(SignOutButton));