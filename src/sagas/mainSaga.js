// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put } from 'redux-saga/effects';
// ========================================================================================
import { startLoading, endLoading }             from '../actions/Loading_Actions';
import { setProfile, getProfileFromFirebase }   from '../actions/Profile_Actions';
import { getUserEventsFromFirebase, addEvents } from '../actions/Events_Actions';
import { doSignOut, getCurrentUser }            from '../firebase/auth';
import { signIn, signOut }                      from '../actions/Auth';
// ========================================================================================

export function* mainSaga() {
  try {
    // start loading
      yield put(startLoading());

    // log auth/sign
      const user = yield call(getCurrentUser);

    // get profile
      const newUser = yield call(getProfileFromFirebase, user.uid)
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