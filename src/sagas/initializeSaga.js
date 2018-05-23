
// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put, take } from 'redux-saga/effects';
import { history }   from '../router/AppRouter';
// ========================================================================================
import { startLoading, endLoading }             from '../actions/Loading_Actions';
import { setProfile, getProfileFromFirebase }   from '../actions/Profile_Actions';
import { getUserEventsFromFirebase, addEvents } from '../actions/Events_Actions';
import { doSignOut, getCurrentUser }            from '../firebase/auth';
import { signIn, signOut }                      from '../actions/Auth';
import signInSaga                               from '../sagas/signInSaga';
// ========================================================================================

export function* initializeSaga() {
  try {
    console.log('INITIALIZE SAGA: Starting Loading');
      yield put(startLoading());

    console.log('INITIALIZE SAGA: Getting Current User');
      let user = yield call(getCurrentUser);
        if(!user) {
          console.log('INITIALIZE SAGA: Checking Session Storage');
          user = JSON.parse(sessionStorage.getItem('qProfile'));
        }
      //if no user or no user in sessionStorage, redirect to login
        if(!user) {
          // console.log('INITIALIZE SAGA: has history:', history);
          // yield history.push('/');
          //pause generator
          console.log('INITIALIZE SAGA: calling signInSaga');
          yield call(signInSaga);
          console.log('INITIALIZE SAGA: done with signIn saga');
          yield take('END_SIGN_IN')
          console.log('INITIALIZE SAGA: after signInSaga Complete');
          // call signIn saga
          // wait to get user info, then continue
        }

    // get profile
          console.log('INITIALIZE SAGA: getting Firebase Info');
      const newUser = yield call(getProfileFromFirebase, user.uid)
      // fork these?
      yield put(setProfile(newUser));
      yield put(setProfile({displayName: user.displayName, photoURL: user.photoURL, email: user.email }))
      const events = yield call(getUserEventsFromFirebase, user.uid);

    // get user events
      yield put(addEvents(events))

    // end loading
      yield put(endLoading())
  } catch(error) {
    console.error('MAIN_SAGA Failure: ' + error)
  }
}

export default initializeSaga;