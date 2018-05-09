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

ReactDOM.render(masterRouter, document.getElementById('app'));

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    // fetch events & redirect
    store.dispatch(signIn(user.uid));
    // store.dispatch(startSetExpenses()).then(() => {
    //   renderApp();
    //   if(history.location.pathname === '/') {
    //     history.push('/dashboard');
    //   }
    // });
  // } else {
  //   console.log('SIGNING OUT OF APP.JS');
  //   auth.doSignOut()
  //     .then(
  //       store.dispatch(signOut())
  //     )
    // renderApp();
    // history.push('/');
  }
});