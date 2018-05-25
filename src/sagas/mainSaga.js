// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put, fork, takeEvery, takeLatest } from 'redux-saga/effects';
// import { history } from '../router/AppRouter';
// ========================================================================================
// import { startLoading, endLoading } 					 	from '../actions/Loading_Actions';
// import { setProfile, getProfileFromFirebase } 	from '../actions/Profile_Actions';
// import { getUserEventsFromFirebase, addEvents } from '../actions/Events_Actions';
// import { doSignOut, getCurrentUser } 						from '../firebase/auth';
// import { signIn, signOut } 											from '../actions/Auth';
// import initializeSaga 													from './initializeSaga';
import signInSaga 															from './signInSaga';
import signOutSaga 															from './signoutSaga';
import { getProfileSaga } 											from './profileSaga';
import { getEventsSaga, eventsCreateSaga, eventsDeleteSaga, eventsEditSaga, eventsOtherEventsSaga } from './eventsSaga';
// ========================================================================================

function* listeners() {
	console.log('LISTENERS: starting');
	yield [
		takeEvery('START_SIGN_IN',       		 signInSaga),
		takeEvery('START_GET_PROFILE',   		 getProfileSaga),
		takeLatest('START_GET_EVENTS',   		 getEventsSaga),
		takeLatest('START_CREATE_EVENT', 		 eventsCreateSaga),
		takeLatest('START_EDIT_EVENT', 	 		 eventsEditSaga),
		takeLatest('START_DELETE_EVENT', 		 eventsDeleteSaga),
		takeLatest('START_GET_OTHER_EVENTS', eventsOtherEventsSaga),
		takeLatest('START_SIGN_OUT',     		 signOutSaga)
	];
}

export function* mainSaga() {
	console.log('MAIN SAGA: starting ============')

	// call loading saga
	// loading saga listens for loading events
	// yield fork(loadingSaga)
	// state initializeSaga
	// yield fork(initializeSaga)

	// listen for:
	yield fork(listeners);
	// login
	yield fork(signInSaga);
	// set profile

	// yield fork(getProfileSaga);

	// yield fork(getEventsSaga);

	// logout
	// add events
	// yield fork(eventsCreateSaga);
	// yield fork(eventsDeleteSaga);
	// find events (both users and others)
	// filterings
	// acceptances
	//logout
	yield fork(signOutSaga)
}

export default mainSaga;