// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put, fork, takeEvery, takeLatest } from 'redux-saga/effects';
// ========================================================================================
import signInSaga 									from './signInSaga';
import signOutSaga 									from './signoutSaga';
import { getProfileSaga } 							from './profileSaga';
import { getEventAcceptancesSaga, userAcceptEvent }	from './acceptancesSaga';
import { startLoadingSaga, endLoadingSaga }         from './loadingSaga';   
import { 
	getEventsSaga, 
	eventsCreateSaga, 
	eventsDeleteSaga, 
	eventsEditSaga, 
	eventsOtherEventsSaga 
} from './eventsSaga';
// ========================================================================================

// TODO: fix loading
function* listeners() {
	console.log('LISTENERS: starting');
	yield [
		takeEvery('START_SIGN_IN',       		  signInSaga              ),
		// takeEvery('START_LOADING',                startLoadingSaga        ),
		// takeEvery('END_LOADING',                  endLoadingSaga          ),
		takeLatest('START_GET_PROFILE',   		  getProfileSaga          ),
		takeLatest('START_GET_EVENTS',   		  getEventsSaga           ),
		takeLatest('START_CREATE_EVENT', 		  eventsCreateSaga        ),
		takeLatest('START_EDIT_EVENT', 	 		  eventsEditSaga          ),
		takeLatest('START_DELETE_EVENT', 		  eventsDeleteSaga        ),
		takeLatest('START_GET_OTHER_EVENTS',      eventsOtherEventsSaga   ),
		takeLatest('START_GET_EVENT_ACCEPTANCES', getEventAcceptancesSaga ),
		takeLatest('START_USER_ACCEPT_EVENTS', 	  userAcceptEvent         ),
		takeLatest('START_SIGN_OUT',     		  signOutSaga             )
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