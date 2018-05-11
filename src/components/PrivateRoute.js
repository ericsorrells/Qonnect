// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// ========================================================================================

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
  console.log('COMPONENT: ', Component);
  console.log('IS AUTH: ', isAuthenticated);
  return(
    <Route
      {...rest}
      component={(props) => (
        isAuthenticated ? (
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
  return {isAuthenticated: Boolean(state.auth.uid)}
};

export default connect(mapStateToProps)(PrivateRoute);