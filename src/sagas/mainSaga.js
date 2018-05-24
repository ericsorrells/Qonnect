// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put, fork } from 'redux-saga/effects';
import { history }   from '../router/AppRouter';
// ========================================================================================
import { startLoading, endLoading }             from '../actions/Loading_Actions';
import { setProfile, getProfileFromFirebase }   from '../actions/Profile_Actions';
import { getUserEventsFromFirebase, addEvents } from '../actions/Events_Actions';
import { doSignOut, getCurrentUser }            from '../firebase/auth';
import { signIn, signOut }                      from '../actions/Auth';
import initializeSaga                           from './initializeSaga';
import signInSaga                               from './signInSaga';
import signOutSaga                              from './signoutSaga';
import { getEventsSaga, eventsCreateSaga, eventsDeleteSaga }   from './eventsSaga';
import { getProfileSaga }                           from './profileSaga';
// ========================================================================================

export function* mainSaga() {
    console.log('MAIN SAGA: starting ============')

    // call loading saga
    // loading saga listens for loading events
    // yield fork(loadingSaga)
    // state initializeSaga
    // yield fork(initializeSaga)

    // listen for:
    // login
    yield fork(signInSaga);
    // set profile
    yield call(getProfileSaga);
    yield fork(getEventsSaga);

    // logout
    // add events
    yield fork(eventsCreateSaga);
    yield fork(eventsDeleteSaga);
    // find events (both users and others)
    // filterings
    // acceptances
    //logout
    yield fork(signOutSaga)
}

export default mainSaga;