// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../firebase/firebase';
// ========================================================================================

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = isAuthenticated()
  console.log('AUTHENTICATED?', authenticated)
  const showComponent = (props) => authenticated ? <div><Component {...props} /></div> : <Redirect to="/" />

  return (
    <Route {...rest} component={(props) => showComponent(props)} />
  )
}

PrivateRoute.propTypes = {
  Component: PropTypes.element
}

export default PrivateRoute;