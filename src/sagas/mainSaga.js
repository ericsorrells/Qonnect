// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put, fork, takeEvery, takeLatest } from 'redux-saga/effects';
// ========================================================================================
import signInSaga 									from './signInSaga';
import signOutSaga 									from './signoutSaga';
import { getProfileSaga } 							from './profileSaga';
import {
	getEventAcceptancesSaga,
	userAcceptEvent,
	ownerSelectsGuestSaga
}	from './acceptancesSaga';
import {
	getEventsSaga,
	eventsCreateSaga,
	eventsDeleteSaga,
	eventsEditSaga,
	eventsOtherEventsSaga
} from './eventsSaga';
// ========================================================================================

function* listeners() {
	console.
	log('LISTENERS: starting');
	yield [
		takeEvery('START_SIGN_IN',       		  		signInSaga              ),
		takeLatest('START_GET_PROFILE',   		 	 	getProfileSaga          ),
		takeLatest('START_GET_EVENTS',   		  		getEventsSaga           ),
		takeLatest('START_CREATE_EVENT', 		  		eventsCreateSaga        ),
		takeLatest('START_EDIT_EVENT', 	 		  		eventsEditSaga          ),
		takeLatest('START_DELETE_EVENT', 		  		eventsDeleteSaga       	),
		takeLatest('START_GET_OTHER_EVENTS',      eventsOtherEventsSaga   ),
		takeLatest('START_GET_EVENT_ACCEPTANCES', getEventAcceptancesSaga ),
		takeLatest('START_USER_ACCEPT_EVENTS', 	  userAcceptEvent         ),
		takeLatest('OWNER_SELECTS_GUEST',         ownerSelectsGuestSaga   ),
		takeLatest('START_SIGN_OUT',     		  		signOutSaga             )
	];
}

export function* mainSaga() {
	yield fork(listeners);
	yield fork(signInSaga);
	yield fork(signOutSaga)
}

export default mainSaga;