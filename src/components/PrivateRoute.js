// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebaseIndex';
// ========================================================================================

const PrivateRoute = ({component: Component, ...rest}) => {
  // console.log('IS AUTH: ', firebase.isAuthenticated);
  return(
    <Route
      {...rest}
      component={(props) => (
        firebase.isAuthenticated() ? (
          <div>
            <Component {...props} />
          </div>
        ) :
          (
            <Redirect to="/" />
          )
      )}
    />
  )
}

const mapStateToProps = (state) => {
  // return {isAuthenticated: Boolean(state.auth.uid)}
  // TODO: what is this?
  return {coolio: Boolean(state.auth.uid)}
};

export default connect(mapStateToProps)(PrivateRoute);