// ========================================================================================
import { select, take, call, put } from 'redux-saga/effects'
import { createEvent, deleteEvent } from '../actions/Events_Actions';
import { createEventInFirebase, deleteEventInFirebase } from '../firebase/helpers/eventsFirebase';
import { deleteUserEventListFromFirebase, addToUserEventListInFirebase } from '../firebase/helpers/profileFirebase';
import { history } from '../router/AppRouter.js';
import { firebase } from '../firebase/firebaseIndex';
// ========================================================================================

function* eventsCreateSaga() {
  const { event: eventInfo }      = yield take('START_EVENTS');
  const { uid:   userId }         = yield select(state => state.auth);
  const { key:   eventId, event } = yield call(createEventInFirebase, eventInfo);
  yield put(createEvent(eventId, event));
  yield call(addToUserEventListInFirebase, userId, eventId);
  yield history.push(`/show-event/${eventId}`);
  yield put({ type: 'EVENTS_SUCCESS' });
}

function* eventsDeleteSaga() {
  const { userId, eventId } = yield take('START_DELETE_EVENT');
  yield call(deleteEventInFirebase, eventId);
  yield put(deleteEvent(eventId));
  yield call(deleteUserEventListFromFirebase, userId, eventId);
  yield history.push(`/profile/${userId}`);
  yield put({ type: 'DELETE_EVENTS_SUCCESS' });
}

export { eventsCreateSaga, eventsDeleteSaga };