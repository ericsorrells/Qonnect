// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute.propTypes = {
  Component: PropTypes.element
}

export default PrivateRoute;