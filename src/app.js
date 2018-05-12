// ========================================================================================
import React                     from 'react';
import ReactDOM                  from 'react-dom';
import { Provider }              from 'react-redux';
import { withRouter }            from 'react-router-dom';
import AppRouter, { history }    from './router/AppRouter';
import configureStore            from './store/configureStore';
import { auth, firebase }        from './firebase/firebaseIndex';
import { doSignOut }             from './firebase/auth';
import { signIn, signOut }       from './actions/Auth';
import { getEventsFromFirebase } from './actions/Events_Actions'
import { 
  getProfileFromFirebase, 
  setProfile }                   from './actions/Profile_Actions'
import 'normalize.css/normalize.css';
// ========================================================================================
import Home from '../src/components/Home';
// ========================================================================================
import './styles/styles.scss';
// ========================================================================================

const store = configureStore();

class QonnectApp extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        window.localStorage.setItem(firebase.storageKey, user.uid);
        store.dispatch(signIn(user.uid))
        store.dispatch(getProfileFromFirebase(user.uid))
        store.dispatch(setProfile({ displayName: user.displayName, photoURL: user.photoURL }))
        store.dispatch(getProfileFromFirebase())
        store.dispatch(getEventsFromFirebase())
      } else {
        window.localStorage.removeItem(firebase.storageKey);
        history.push('/');
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

ReactDOM.render(<QonnectApp />, document.getElementById('app'));