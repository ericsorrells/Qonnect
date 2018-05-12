// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebaseIndex';
// ========================================================================================

// const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
const PrivateRoute = ({component: Component, ...rest}) => {
  console.log('COMPONENT: ', Component);
  console.log('IS AUTH: ', firebase.isAuthenticated);
  return(
    <Route
      {...rest}
      component={(props) => (
        firebase.isAuthenticated ? (
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
  return {coolio: Boolean(state.auth.uid)}
};

export default connect(mapStateToProps)(PrivateRoute);