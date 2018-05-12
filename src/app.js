// ========================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppRouter, { history } from './router/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import { auth, firebase } from './firebase/firebaseIndex';
import { doSignOut } from './firebase/auth';
import { signIn, signOut } from './actions/Auth';
import { getEventsFromFirebase } from './actions/Events_Actions'
// ========================================================================================
import Home from '../src/components/Home';
// ========================================================================================
import './styles/styles.scss';
// ========================================================================================

const store = configureStore();

const masterRouter = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(masterRouter, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(masterRouter, document.getElementById('app'));

firebase.auth.onAuthStateChanged((user) => {
  // TODO: how to better handle onAuthStateChanged 
  if(!user) {
    // history.push('/')
  } else {
    // store.dispatch(signIn(user.uid));
    // store.dispatch(getEventsFromFirebase(user.uid))
      // renderApp();
      // if(history.location.pathname === '/') {
      //   history.push('/profile');
      // }
  // })
}})
