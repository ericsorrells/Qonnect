// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../firebase/firebase';
// ========================================================================================

const PrivateRoute = ({component: Component, ...rest}) => {
  // console.log('IS AUTH: ', isAuthenticated);

  return(
    <Route
      {...rest}
      component={(props) => (
        isAuthenticated() ? (
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